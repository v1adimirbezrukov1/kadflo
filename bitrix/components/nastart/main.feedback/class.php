<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
use Bitrix\Main\Loader;
use \Bitrix\Main\Mail\EventMessageThemeCompiler;

class NastartForm extends CBitrixComponent
{
/**
 * Bitrix vars
 *
 * @var array $this->$arParams
 * @var array $this->$arResult
 * @var array $componentPath=$this->getPath()
 * @var array $componentName=$this->getName()
 * @var array $componentTemplate=$this->getTemplate()
 * @var CBitrixComponent $this
 */

	private $nastartWeb; 
	private $uniqueId; 
	private $messageFiles=[];

	private function initModule(): void{
		Loader::includeModule('iblock');
		require_once(dirname(__FILE__) . '/lib/NastartWebForm.php');
		$this->nastartWeb= new NastartWebForm();

		$this->uniqueId = md5($this->randString());
		$this->uniqueId = $this->GetEditAreaId($this->uniqueId);
		$this->arResult['AREA_ID'] = $uniqueId;

		$this->arResult["PARAMS_HASH"] = md5(serialize($arParams).$this->GetTemplateName());

		$this->arParams["EVENT_NAME"] = trim($this->arParams["EVENT_NAME"]);
		if($this->arParams["EVENT_NAME"] == '')
			$this->arParams["EVENT_NAME"] = "FEEDBACK_FORM";
		$this->arParams["EMAIL_TO"] = trim($this->arParams["EMAIL_TO"]);
		if($this->arParams["EMAIL_TO"] == '')
			$this->arParams["EMAIL_TO"] = COption::GetOptionString("main", "email_from");
		$this->arParams["OK_TEXT"] = trim($this->arParams["OK_TEXT"]);
		if($this->arParams["OK_TEXT"] == '')
			$this->arParams["OK_TEXT"] = GetMessage("MF_OK_MESSAGE");
		if($this->arParams['FORM_ID'] == '')
			$this->arParams['FORM_ID']='base_form';

		if($_SERVER["REQUEST_METHOD"] == "POST" && ($_POST['AJAX_CALL']=='Y' || $_POST["submited"] <> '') && (!isset($_POST["PARAMS_HASH"]) || $this->arResult["PARAMS_HASH"] === $_POST["PARAMS_HASH"]))
		{
			$this->treatmentForm();
		}
		elseif($_REQUEST["success"] == $this->arResult["PARAMS_HASH"]){
			$this->arResult["OK_MESSAGE"] = $this->arParams["OK_TEXT"];
		}
		if(empty($this->arResult["ERROR_MESSAGE"]))
		{
			$this->showAuthorizateData();
		}

		
	}

	private function checkRequiredFields(): void
	{
		if(empty($this->arParams["REQUIRED_FIELDS"]) || !in_array("NONE", $this->arParams["REQUIRED_FIELDS"]))
		{
			foreach ($this->arParams['FIELDS'] as $field) {
				if($filed['TYPE']!='FILE' && $field['REQUIRED']=='Y' && mb_strlen($_POST['form_'.mb_strtolower($field['CODE'])]) < 1)
					$this->arResult["ERROR_MESSAGE"][] = GetMessage("MF_REQ_FIELD").$field['NAME'];		
				elseif($filed['TYPE']=='FILE' && $field['REQUIRED']=='Y' && empty($_FILES['form_'.mb_strtolower($field['CODE'])])){
						$this->arResult["ERROR_MESSAGE"][] = GetMessage("MF_REQ_FILE").$field['NAME'];
				}
			}

		}
	}

	private function checkRecapthca(): void
	{
		if($this->arParams["USE_CAPTCHA"] == "Y" && $this->arParams["PRIVATE_KEY"] && $this->arParams["PUBLIC_KEY"])
		{
		    $secretKey = $this->arParams["PRIVATE_KEY"];
		    $response = $_POST['g-recaptcha-response'];     
		    $remoteIp = $_SERVER['REMOTE_ADDR'];
		 
		 
		    $reCaptchaValidationUrl = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response&remoteip=$remoteIp");
		    $result = json_decode($reCaptchaValidationUrl, TRUE);
		 
		 
		    if($result['success'] == 1) {
		        //Проверка пройдена - здесь выполняем нужный нам код
		        $userMessage = '<div>Успешно: проверка пройдена :)</div>';
		    } else {
		        //Проверка не пройдена - Здесь мы сообщаем клиенту что он спамер
		        $this->arResult["ERROR_MESSAGE"][] = GetMessage("MF_CAPTHCA_EMPTY");
		    }

		}
	}

	private function getMessageFileds(): array
	{
		global $USER;

		$messFields=[];
		$messFields['USER_ID']=$USER->GetID();
		$messFields['EMAIL_TO']=$this->arParams["EMAIL_TO"];
		$messFields['FORM_ID']=$this->arParams['FORM_ID'];
		foreach ($this->arParams['FIELDS'] as $key => $field) {
			$tempVal='';
			switch ($field['TYPE']) {
				case 'LOCATION':
					$arLocs = CSaleLocation::GetByID($_POST['form_'.mb_strtolower($field['CODE'])], LANGUAGE_ID);
					if($arLocs['CITY_NAME'] || $arLocs['REGION_NAME'] || $arLocs['COUNTRY_NAME'])
						$authorLocationString=$arLocs['CITY_NAME'].', '.$arLocs['REGION_NAME'].', '.$arLocs['COUNTRY_NAME'];
					else $authorLocationString=$_POST['form_'.mb_strtolower($field['CODE']).'_string'];
					$messFields[$field['CODE']]=$authorLocationString;
					break;

				case 'FILE':
					if (!empty('form_'.mb_strtolower($field['CODE']))) {
				      	foreach ($this->nastartWeb->reArrayFiles($_FILES['form_'.mb_strtolower($field['CODE'])]) as $key => $file) {
				          $this->messageFiles[]=CFile::SaveFile($file,'form');
				      	}
			        }
				
				default:
					$messFields[$field['CODE']]=$_POST['form_'.mb_strtolower($field['CODE'])];
					break;
			}
		}
		return $messFields;
	}

	private function treatmentForm(): void
	{
		global $USER;
		global $APPLICATION;
		$arResult=&$this->arResult;
		$arParams=&$this->arParams;
		$arResult["ERROR_MESSAGE"] = array();
		if(check_bitrix_sessid())
		{
			$this->checkRequiredFields();

			if($arParams['USER_CONSENT'] == "Y" && $_POST["USER_CONSENT"]!='Y')$arResult["ERROR_MESSAGE"][] = GetMessage("MF_USER_CONSENT");


			if($arParams['USE_IBLOCK'] == "Y" && $arParams['IBLOCK_ID']){
				$ibID=$arParams['IBLOCK_ID'];
			}

			if(strlen($_POST["user_email"]) > 1 && !check_email($_POST["user_email"]))
				$arResult["ERROR_MESSAGE"][] = GetMessage("MF_EMAIL_NOT_VALID");

			$this->checkRecapthca();

			if ($arParams["CART_CLEAR"]=="Y" && !CModule::IncludeModule("sale"))
				$arResult["ERROR_MESSAGE"][] = GetMessage("MF_ERR_SALE");

			$arFields = $this->getMessageFileds();
			if(empty($arResult["ERROR_MESSAGE"]))
			{

				if(!empty($arParams["EVENT_MESSAGE_ID"]))
				{
					foreach($arParams["EVENT_MESSAGE_ID"] as $v)
						if(IntVal($v) > 0){
							$dBmessData=CEventMessage::GetByID($v);
							$messData = $dBmessData->Fetch();
							CEvent::SendImmediate($messData["EVENT_NAME"], SITE_ID, $arFields, "N", IntVal($v), $this->messageFiles);
						}
				}
				else
					CEvent::SendImmediate($arParams["EVENT_NAME"], SITE_ID, $arFields, 'N', '', $this->messageFiles);

				if($ibID && $messData){
					$themeCompiler = EventMessageThemeCompiler::createInstance($messData['SITE_TEMPLATE_ID'], $messData['MESSAGE_PHP']);
					$themeCompiler->setParams($arFields);
					$themeCompiler->execute();
					$message = $themeCompiler->getResult();

					$arFields['ADDED_ELEMENT_ID']=$this->nastartWeb->addNewRecord($ibID,$arFields,$message);
				}
				if($arParams['CART_CLEAR']=='Y')
					CSaleBasket::DeleteAll(CSaleBasket::GetBasketUserID());

				if($arParams['CALLBACK_FUNCTION'] && function_exists($arParams['CALLBACK_FUNCTION']))
					call_user_func($arParams['CALLBACK_FUNCTION'], $arFields);

				LocalRedirect($APPLICATION->GetCurPageParam("success=".$arResult["PARAMS_HASH"], Array("success")));
			}
			$arResult['SENDED_FIELDS'] = $arFields;
		}
		else
			$arResult["ERROR_MESSAGE"][] = GetMessage("MF_SESS_EXP");
	}

	private function showAuthorizateData():void
	{
		global $USER;
		if($USER->IsAuthorized())
		{
			$this->arResult['SENDED_FIELDS']['NAME'] = $USER->GetFormattedName(false);
			$this->arResult['SENDED_FIELDS']['EMAIL'] = htmlspecialcharsbx($USER->GetEmail());
		}
		else
		{
			if(strlen($_SESSION["MF_NAME"]) > 0)
				$this->arResult['SENDED_FIELDS']['NAME'] = htmlspecialcharsbx($_SESSION["MF_NAME"]);
			if(strlen($_SESSION["MF_EMAIL"]) > 0)
				$this->arResult['SENDED_FIELDS']['EMAIL'] = htmlspecialcharsbx($_SESSION["MF_EMAIL"]);
		}
	}

	public function onPrepareComponentParams($arParams): array
    {
    	$arParams['USER_FIELDS_LIST_ORDER']=explode(',', $arParams['USER_FIELDS_LIST_ORDER']);

    	foreach ($arParams['USER_FIELDS_LIST_ORDER'] as $filedKey) {
    		$fields[$arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_CODE']]=[
    			'CODE' => $arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_CODE'],
    			'NAME' => $arParams['USER_FIELDS_LIST'][$filedKey],
    			'TYPE' =>  $arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_TYPE'],
    			'PLACEHOLDER' =>  $arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_PLACEHOLDER'],
    			'REQUIRED' =>(array_search($filedKey, $arParams['REQUIRED_FIELDS'])!==false ? 'Y' : 'N')
    		];

    		if($arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_VALUE'])
    			$fields[$arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_CODE']]['VALUE']=$arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_VALUE'];

    		unset($arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_CODE']);
    		unset($arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_TYPE']);
    		unset($arParams['USER_FIELDS_PARAMETR_'.$filedKey.'_PLACEHOLDER']);
    	}

		$arParams['FIELDS']=$fields;

        return $arParams;
    }

	public function executeComponent(): void
	{
		$this->initModule();
		$this->includeComponentTemplate();
	}
}