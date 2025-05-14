<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

use Bitrix\Main\Loader;
Loader::includeModule('iblock');

// Получение списка типов инфоблоков
$arIBlockType = CIBlockParameters::GetIBlockTypes();

// Получение списка инфоблоков заданного типа
$arIBlock=array();
$rsIBlock = CIBlock::GetList(Array("SORT" => "ASC"), Array("TYPE" => $arCurrentValues["IBLOCK_TYPE"], "ACTIVE"=>"Y"));
while($arr=$rsIBlock->Fetch())
{
    $arIBlock[$arr["ID"]] = "[".$arr["ID"]."] ".$arr["NAME"];
}

// Получение списка элементов заданного типа
$arIBlockElement=[0 => 'Не выбрано'];
$rsIBlock = CIBlockElement::GetList(Array("SORT" => "ASC"), Array("IBLOCK_ID" => $arCurrentValues["IBLOCK_ID"], "ACTIVE"=>"Y"));
while($arr=$rsIBlock->Fetch())
{
    $arIBlockElement[$arr["ID"]] = "[".$arr["ID"]."] ".$arr["NAME"];
}

// Формирование массива параметров
$arComponentParameters = array(
    "GROUPS" => array(
    ),
    "PARAMETERS" => array(
        "IBLOCK_TYPE"   =>  array(
            "PARENT"    =>  "BASE",
            "NAME"      =>  GetMessage("IBLOCK_TYPE"),
            "TYPE"      =>  "LIST",
            "VALUES"    =>  $arIBlockType,
            "REFRESH"   =>  "Y",
            "MULTIPLE"  =>  "N",
        ),
        "IBLOCK_ID" =>  array(
            "PARENT"    =>  "BASE",
            "NAME"      =>  GetMessage("IBLOCK_ID"),
            "TYPE"      =>  "LIST",
            "VALUES"    =>  $arIBlock,
            "REFRESH"   =>  "Y",
            "MULTIPLE"  =>  "N",
        ),
        "ELEMENT_ID" =>  array(
            "PARENT"    =>  "BASE",
            "NAME"      =>  GetMessage("IBLOCK_ELEMENT"),
            "TYPE"      =>  "LIST",
            "VALUES"    =>  $arIBlockElement,
            "REFRESH"   =>  "Y",
            "MULTIPLE"  =>  "N",
        ),
        "FAST_PARAMS" =>  array(
            "PARENT"    =>  "BASE",
            "NAME"      =>  GetMessage("FAST_PARAMS"),
            "TYPE"      =>  "STRING",
            "REFRESH"   =>  "Y",
            "MULTIPLE"  =>  "N",
        ),
        "SECTION_ID" =>  array(
            "PARENT"    =>  "BASE",
            "NAME"      =>  GetMessage("SECTION_ID"),
            "TYPE"      =>  "STRING",
            "MULTIPLE"  =>  "N",
        ),
    ),
);
//Блок генерации и записи в шаблон при возможности быстрых параметров
if($arCurrentValues['COMPONENT_TEMPLATE']!='.default' && $_GET['siteTemplateId'] && $arCurrentValues["FAST_PARAMS"]){
    $component = new CBitrixComponent();
    $component->InitComponent($componentName, $arCurrentValues['COMPONENT_TEMPLATE']);
    $component->initComponentTemplate();
    $templatePath='/local/templates/'.$_GET['siteTemplateId'].'/components'.CComponentEngine::MakeComponentPath($componentName).'/'.$arCurrentValues['COMPONENT_TEMPLATE'];

    if(file_exists($_SERVER['DOCUMENT_ROOT'].$templatePath)){

        //генерация быстрых параметров
        $fastParams=explode(',', $arCurrentValues["FAST_PARAMS"]);
        foreach ($fastParams as &$param) {
            $param=explode(':',trim($param,' []'));
            $paramCode = ($param[0] ?: '');
            $paramValue = ($param[1] ?: '');
            $paramType = ($param[2] ?: 'STRING');
            $paramMulty = ($param[3] ?: 'N');
            if(count($param)>1){
                $arTemplateParameters[$paramCode]=[
                    "PARENT" => "BASE",
                    "NAME" => $paramValue,
                    "TYPE" => $paramType,
                    "MULTIPLE" => $paramMulty,
                    "COLS" => 35,
                ];
                if($paramType=='TEXT'){
                    $arTemplateParameters[$paramCode]["TYPE"]='STRING';
                    $arTemplateParameters[$paramCode]["ROWS"]=2;
                }
            }
        }

        if (!$fp = @fopen($_SERVER["DOCUMENT_ROOT"].$templatePath.'/.parameters.php', "wb"))
        {
            echo 'Ошибка добавления параметров';
        }

        if (!fwrite($fp, "<"."?php\n\r$"."arTemplateParameters = ".var_export($arTemplateParameters, true).";\n"))
        {
            echo 'Ошибка добавления параметров2';
        }
        @fclose($fp);


    }

}
else{
    //генерация быстрых параметров
    $fastParams=explode(',', $arCurrentValues["FAST_PARAMS"]);
    foreach ($fastParams as &$param) {
        $param=explode(':',trim($param,' []'));
        $paramCode = ($param[0] ?: '');
        $paramValue = ($param[1] ?: '');
        $paramType = ($param[2] ?: 'STRING');
        $paramMulty = ($param[3] ?: 'N');
        if(count($param)>1){
            $arComponentParameters["PARAMETERS"][$paramCode]=[
                "PARENT" => "BASE",
                "NAME" => $paramValue,
                "TYPE" => $paramType,
                "MULTIPLE" => $paramMulty,
                "COLS" => 35,
            ];
            if($paramType=='TEXT'){
                $arComponentParameters["PARAMETERS"][$paramCode]["TYPE"]='STRING';
                $arComponentParameters["PARAMETERS"][$paramCode]["ROWS"]=2;
            }
        }
    }
}
