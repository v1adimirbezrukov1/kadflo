<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

/** @var array $arCurrentValues */

use Bitrix\Main\Loader;
use Bitrix\Main\Web\Json;
use Bitrix\Iblock\Component\Base;

require_once(dirname(__FILE__) . '/lib/NastartWebForm.php');
Loader::includeModule('iblock');

$arTransParams = array(
   "max_len" => 200,
   "change_case" => 'U', // 'L' - toLower, 'U' - toUpper, false - do not change
   "replace_space" => '-',
   "replace_other" => '-',
   "delete_repeat_replace" => true
);

$site = ($_REQUEST["site"] <> ''? $_REQUEST["site"] : ($_REQUEST["src_site"] <> ''? $_REQUEST["src_site"] : false));
$arFilter = Array("TYPE_ID" => "%FEEDBACK%", "ACTIVE" => "Y");
if($site !== false)
	$arFilter["LID"] = $site;

$arEvent = Array();
$dbType = CEventMessage::GetList($by="ID", $order="DESC", $arFilter);
while($arType = $dbType->GetNext())
	$arEvent[$arType["ID"]] = "[".$arType["ID"]."] ".$arType["SUBJECT"];

$defaultUserFieldsTypes=[
	'STRING' => 'STRING',
	'TEXTAREA' => 'TEXTAREA',
	'PHONE' => 'PHONE',
	'FILE' => 'FILE',
	'INVISIBLE' => 'INVISIBLE',
];
if(CModule::IncludeModule("sale")){
	$defaultUserFieldsTypes['LOCATION']='LOCATION';
}
$defaultUserFields=[
	[
		"NAME" => GetMessage("MFP_USER_FIELD_NAME"),
		"TYPE" => "STRING",
		"CODE" => "NAME",
	],
	[
		"NAME" => GetMessage("MFP_USER_FIELD_EMAIL"),
		"TYPE" => "STRING",
		"CODE" => "EMAIL",
	],
	[
		"NAME" => GetMessage("MFP_USER_FIELD_PHONE"),
		"TYPE" => "PHONE",
		"CODE" => "PHONE",
	],
	[
		"NAME" => GetMessage("MFP_USER_FIELD_MESSAGE"),
		"TYPE" => "TEXTAREA",
		"CODE" => "MESSAGE",
	],
	[
		"NAME" => GetMessage("MFP_USER_FIELD_COMPANY"),
		"TYPE" => "STRING",
		"CODE" => "COMPANY",
	],
	[
		"NAME" => GetMessage("MFP_USER_FIELD_FILE"),
		"TYPE" => "FILE",
		"CODE" => "FILE",
	],
	[
		"NAME" => GetMessage("MFP_USER_FIELD_LOCATION"),
		"TYPE" => "STRING",
		"CODE" => "LOCATION",
	],
	[
		"NAME" => GetMessage("MFP_USER_FIELD_INDEX"),
		"TYPE" => "STRING",
		"CODE" => "INDEX",
	],
	[
		"NAME" => GetMessage("MFP_USER_FIELD_INN"),
		"TYPE" => "STRING",
		"CODE" => "INN",
	],
];
if(!$arCurrentValues['USER_FIELDS_LIST'])$arCurrentValues['USER_FIELDS_LIST']=array_column($defaultUserFields,'NAME');
$arCurrentValues['USER_FIELDS_LIST']=array_filter($arCurrentValues['USER_FIELDS_LIST']);  //удалить пустые значения из массива

$arComponentParameters = array(
	"GROUPS" => array(
		"RECAPTCHA_SETTINGS" => array(
			"NAME" => GetMessage("MF_RECAPTCHA_SETTINGS"),
			"SORT" => 310,
		),
		"USER_FIELDS" => array(
			"NAME" => GetMessage("MF_USER_FIELDS"),
			"SORT" => 210,
		),
	),
	"PARAMETERS" => array(
		"FORM_ID" => Array(
			"NAME" => GetMessage("MFP_FORM_ID"), 
			"TYPE" => "STRING",
			"DEFAULT" => "base_form", 
			"PARENT" => "BASE",
		),
		"USE_IBLOCK" => Array(
			"NAME" => GetMessage("USE_IBLOCK"), 
			"TYPE" => "CHECKBOX",
			"DEFAULT" => "N", 
			"PARENT" => "DATA_SOURCE",
			"REFRESH" => "Y",
		),
		"USE_CAPTCHA" => Array(
			"NAME" => GetMessage("MFP_CAPTCHA"), 
			"TYPE" => "CHECKBOX",
			"DEFAULT" => "N", 
			"PARENT" => "RECAPTCHA_SETTINGS",
		),
		"PUBLIC_KEY" => Array(
			"NAME" => GetMessage("MFP_PUBLIC_KEY"), 
			"TYPE" => "STRING",
			"PARENT" => "RECAPTCHA_SETTINGS",
		),
		"PRIVATE_KEY" => Array(
			"NAME" => GetMessage("MFP_PRIVATE_KEY"), 
			"TYPE" => "STRING",
			"PARENT" => "RECAPTCHA_SETTINGS",
		),
		"OK_TEXT" => Array(
			"NAME" => GetMessage("MFP_OK_MESSAGE"), 
			"TYPE" => "STRING",
			"DEFAULT" => GetMessage("MFP_OK_TEXT"), 
			"PARENT" => "BASE",
		),
		"EMAIL_TO" => Array(
			"NAME" => GetMessage("MFP_EMAIL_TO"), 
			"TYPE" => "STRING",
			"DEFAULT" => htmlspecialcharsbx(COption::GetOptionString("main", "email_from")), 
			"PARENT" => "BASE",
		),
		"CART_CLEAR" => Array(
			"NAME" => GetMessage("MFP_CART_CLEAR"), 
			"TYPE" => "CHECKBOX",
			"DEFAULT" => "N", 
			"PARENT" => "BASE",
		),
		"USER_FIELDS_LIST" => Array(
			"NAME" => GetMessage("MFP_USER_FIELDS_LIST"), 
			"TYPE" => "STRING",
			"MULTIPLE" => "Y",
			"DEFAULT"=>$arCurrentValues['USER_FIELDS_LIST'],
			"PARENT" => "USER_FIELDS",
			"REFRESH" => "Y",
		),
		"REQUIRED_FIELDS" => Array(
			"NAME" => GetMessage("MFP_REQUIRED_FIELDS"), 
			"TYPE"=>"LIST", 
			"MULTIPLE"=>"Y", 
			"VALUES" => ['PREV' => GetMessage("MFP_ALL_REQ")]+$arCurrentValues['USER_FIELDS_LIST'],
			"COLS"=>25, 
			"DEFAULT"=>'PREV',
			"PARENT" => "USER_FIELDS",
		),

		"EVENT_MESSAGE_ID" => Array(
			"NAME" => GetMessage("MFP_EMAIL_TEMPLATES"), 
			"TYPE"=>"LIST", 
			"VALUES" => $arEvent,
			"DEFAULT"=>array_key_first($arEvent), 
			"MULTIPLE"=>"Y", 
			"COLS"=>25, 
			"PARENT" => "BASE",
		),
		"AJAX_MODE" => array(),
		"USER_CONSENT" => array(),

		"CALLBACK_FUNCTION" => array(
			"NAME" => GetMessage("MFP_CALLBACK_FUNCTION"),
			"TYPE" => "STRING",
		),
	)
);
$nastartWeb= new NastartWebForm();
if($arCurrentValues['USE_IBLOCK']=="Y"){
	
	if($arCurrentValues['IBLOCK_ID']=='new'){
		$nastartWeb->checkCreateIbType();
		$ibID=$nastartWeb->checkIb($arCurrentValues['FORM_ID']);
		if(!$ibID)$ibID=$nastartWeb->createIB($arCurrentValues['FORM_ID']);
	}

	$arIBlock = array(
		0 => '',
		'new' => GetMessage("IBLOCK_ZERO")
	);
	$iblockFilter = array('ACTIVE' => 'Y');
	$rsIBlock = CIBlock::GetList(array('SORT' => 'ASC'), $iblockFilter);
	while ($arr = $rsIBlock->Fetch())
	{
		$id = (int)$arr['ID'];
		$arIBlock[$id] = '['.$id.'] '.$arr['NAME'];
	}
	unset($id, $arr, $rsIBlock, $iblockFilter);
	$arComponentParameters["PARAMETERS"]["IBLOCK_ID"] = array(
		"PARENT" => "DATA_SOURCE",
		"NAME" => GetMessage("IBLOCK_IBLOCK"),
		"TYPE" => "LIST",
		"VALUES" => $arIBlock,
		"DEFAULT"=>$ibID,
		"REFRESH" => "Y",
	);
}

if($arCurrentValues['USER_FIELDS_LIST']){
	foreach ($arCurrentValues['USER_FIELDS_LIST'] as $parametrKey => $parametrValue) {
		$defaultElemKey=array_search($parametrValue, array_column($defaultUserFields,'NAME')); //поиск ключа среди дефолтных значений
		$arComponentParameters["GROUPS"]["USER_FIELDS_PARAMETR_".$parametrKey]=[
			"NAME" => GetMessage("MFP_USER_FIELDS_GROUP").$parametrValue,
			"SORT" => 210,
		];
		$arComponentParameters["PARAMETERS"]['USER_FIELDS_PARAMETR_'.$parametrKey.'_TYPE']=array(
			"NAME" => GetMessage("MFP_USER_FIELDS_TYPE"),
			"PARENT" => "USER_FIELDS_PARAMETR_".$parametrKey,
			"TYPE" => "LIST",
			"VALUES" => $defaultUserFieldsTypes,
			"DEFAULT" => $defaultUserFieldsTypes[$defaultUserFields[$defaultElemKey]['TYPE']],
		);
		$arComponentParameters["PARAMETERS"]['USER_FIELDS_PARAMETR_'.$parametrKey.'_CODE']=array(
			"NAME" => GetMessage("MFP_USER_FIELDS_CODE"),
			"PARENT" => "USER_FIELDS_PARAMETR_".$parametrKey,
			"TYPE" => "STRING",
			"DEFAULT" => ($defaultElemKey!==false ? $defaultUserFields[$defaultElemKey]['CODE'] : CUtil::translit($parametrValue, "ru",$arTransParams)),
		);
		$arComponentParameters["PARAMETERS"]['USER_FIELDS_PARAMETR_'.$parametrKey.'_PLACEHOLDER']=array(
			"NAME" => GetMessage("MFP_USER_FIELDS_PLACEHOLDER"),
			"PARENT" => "USER_FIELDS_PARAMETR_".$parametrKey,
			"TYPE" => "STRING",
		);
	}
	$arComponentParameters["PARAMETERS"]['USER_FIELDS_LIST_ORDER'] = array(
		'NAME' => GetMessage('MFP_USER_FIELDS_LIST_ORDER'),
		'PARENT' => 'USER_FIELDS',
		'TYPE' => 'CUSTOM',
		'JS_FILE' => Base::getSettingsScript($componentPath, 'dragdrop_order'),
		'JS_EVENT' => 'initDraggableOrderControl',
		'JS_DATA' => Json::encode($arCurrentValues['USER_FIELDS_LIST']),
		'DEFAULT' => implode(',',array_keys($arCurrentValues['USER_FIELDS_LIST'])),
	);
}

?>