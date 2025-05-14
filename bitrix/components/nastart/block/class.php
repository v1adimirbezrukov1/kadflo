<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
use Bitrix\Main\Loader;
use \Bitrix\Main\Mail\EventMessageThemeCompiler;

class NastartUniBlock extends CBitrixComponent
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

    private function initModule(): void{
        global $USER,$APPLICATION;
        $this->arResult=$this->arParams;
        $this->arResult['ID']=(int)$this->arParams['ELEMENT_ID'];

        if($this->arResult['ID'] && Loader::includeModule("iblock")){

            $arFilter = Array("IBLOCK_ID"=>IntVal($this->arParams['IBLOCK_ID']), "ID" => $this->arResult['ID']);
            $res = CIBlockElement::GetList(Array(), $arFilter, false, false);
            if($ob = $res->GetNextElement())
            {
                $arFields = $ob->GetFields();
                $arFields['PROPERTIES']=$ob->GetProperties();
                $this->arResult['ELEMENT']=$arFields;
            }

            if($USER->IsAuthorized() && $APPLICATION->GetShowIncludeAreas())
            {
                $arReturnUrl = array(
                    "add_element" => CIBlock::GetArrayByID($this->arResult["IBLOCK_ID"], "DETAIL_PAGE_URL"),
                    "delete_element" => (
                        empty($this->arResult["SECTION_URL"])?
                        $this->arResult["LIST_PAGE_URL"]:
                        $this->arResult["SECTION_URL"]
                    ),
                );

                $arButtons = CIBlock::GetPanelButtons(
                    $this->arResult["IBLOCK_ID"],
                    $this->arResult["ID"],
                    $this->arResult["IBLOCK_SECTION_ID"],
                    Array(
                        "RETURN_URL" => $arReturnUrl,
                        "SECTION_BUTTONS" => false,
                    )
                );

                if($APPLICATION->GetShowIncludeAreas()){
                    $this->addIncludeAreaIcons(CIBlock::GetComponentMenu($APPLICATION->GetPublicShowMode(), $arButtons));
                }
            }

        }

    }
    
    public function onPrepareComponentParams($arParams): array
    {
        foreach($arParams as $paramKey => &$param){
            if(is_array($param)){
                foreach($param as $key => &$value){
                    if(!$value)unset($param[$key]);
                }
            }

        }
        return $arParams;
    }

    public function executeComponent(): void
    {
        global $USER;
        global $componentTemplate;
        $this->initModule();
        $this->includeComponentTemplate();
    }
}