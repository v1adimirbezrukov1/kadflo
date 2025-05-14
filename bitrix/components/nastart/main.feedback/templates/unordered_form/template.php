<?php
if(!defined("B_PROLOG_INCLUDED")||B_PROLOG_INCLUDED!==true)die();
/**
 * Bitrix vars
 *
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponentTemplate $this
 * @global CMain $APPLICATION
 * @global CUser $USER
 */
CJSCore::Init(['phone_number']);
?>
<div class="default-form">
	<?php
	$obName = 'ob'.preg_replace('/[^a-zA-Z0-9_]/', 'x', $arResult['AREA_ID']);
	?>
<?php if(!empty($arResult["ERROR_MESSAGE"]))
{
	foreach($arResult["ERROR_MESSAGE"] as $v)
		ShowError($v);
}
if($arResult["OK_MESSAGE"] <> ''):?>
	<div class="default-form__title">Благодарим за обращение</div>
	<div class="default-form__after-title">
	    <?=$arResult["OK_MESSAGE"]?>
	</div>
	<?php
else:?>
<div class="default-form__title">Обратный звонок</div>
<div class="default-form__after-title">Оставьте контактные данные, и мы свяжемся с Вами в ближайшее время для уточнения информации.</div>
<form class="default-form__form" <?=($arParams['FORM_ID'] ? 'id="'.$arParams['FORM_ID'].'"' : '');?> action="<?=POST_FORM_ACTION_URI?>" method="POST">
<?=bitrix_sessid_post()?>
	<?php $field=$arParams['FIELDS']['NAME'];?>
	<div class="default-form__form__item" data-entity="validate-field-wrap">
		<span class="default-form__form__label default-label"><?=$field['NAME'];?><?=($field['REQUIRED']=='Y' ? '<span>*</span>' : '');?></span>
		<input type="text" name="form_<?=mb_strtolower($field['CODE']);?>" placeholder="<?=$field['PLACEHOLDER'];?>" class="default-form__form__input default-input <?=($field['REQUIRED']=='Y' ? 'required' : '');?>" data-entity="validate-field" value="<?=($arResult['SENDED_FIELDS'][$field['CODE']] ?: $field['VALUE'])?>">
	</div>
	<?php $field=$arParams['FIELDS']['EMAIL'];?>
	<div class="default-form__form__item" data-entity="validate-field-wrap">
		<span class="default-form__form__label default-label"><?=$field['NAME'];?><?=($field['REQUIRED']=='Y' ? '<span>*</span>' : '');?></span>
		<input type="text" name="form_<?=mb_strtolower($field['CODE']);?>" placeholder="<?=$field['PLACEHOLDER'];?>" class="default-form__form__input default-input <?=($field['REQUIRED']=='Y' ? 'required' : '');?>" data-entity="validate-field" value="<?=($arResult['SENDED_FIELDS'][$field['CODE']] ?: $field['VALUE'])?>">
	</div>
	<?php $field=$arParams['FIELDS']['PHONE'];?>
	<div class="default-form__form__item" data-entity="validate-field-wrap">
		<span class="default-form__form__label default-label"><?=$field['NAME'];?><?=($field['REQUIRED']=='Y' ? '<span>*</span>' : '');?></span>
		<input type="tel" data-entity="validate-field" name="form_<?=mb_strtolower($field['CODE']);?>" placeholder="<?=$field['PLACEHOLDER'];?>" class="default-form__form__input default-input <?=($field['REQUIRED']=='Y' ? 'required' : '');?> phone-mask" value="<?=($arResult['SENDED_FIELDS'][$field['CODE']] ?: $field['VALUE'])?>">
	</div>
	<?php $field=$arParams['FIELDS']['MESSAGE'];?>
	<div class="default-form__form__item" data-entity="validate-field-wrap">
		<span class="default-form__form__label default-label"><?=$field['NAME'];?><?=($field['REQUIRED']=='Y' ? '<span>*</span>' : '');?></span>
		<textarea data-entity="validate-field" name="form_<?=mb_strtolower($field['CODE']);?>"  placeholder="<?=$field['PLACEHOLDER'];?>" class="default-form__form__input default-input <?=($field['REQUIRED']=='Y' ? 'required' : '');?>"><?=($arResult['SENDED_FIELDS'][$field['CODE']] ?: $field['VALUE'])?></textarea>
	</div>
	<?php $field=$arParams['FIELDS']['COMPANY'];?>
	<div class="default-form__form__item" data-entity="validate-field-wrap">
		<span class="default-form__form__label default-label"><?=$field['NAME'];?><?=($field['REQUIRED']=='Y' ? '<span>*</span>' : '');?></span>
		<input type="text" name="form_<?=mb_strtolower($field['CODE']);?>" placeholder="<?=$field['PLACEHOLDER'];?>" class="default-form__form__input default-input <?=($field['REQUIRED']=='Y' ? 'required' : '');?>" data-entity="validate-field" value="<?=($arResult['SENDED_FIELDS'][$field['CODE']] ?: $field['VALUE'])?>">
	</div>
	<?php $field=$arParams['FIELDS']['FILE'];?>
    <label class="input__file-button" data-entity="validate-field-wrap">
	    <input name="form_file[]" type="file" id="input__file" data-entity="validate-field" class="input input__file" multiple>
        <span class="input__file-button-text">Прикрепите файл</span>
        <span class="input__file-icon-choose"><img class="input__file-icon" src="<?=$templateFolder;?>/img/addFile.svg" alt="Выбрать файл" width="25"></span>
    </label>
    <?php $field=$arParams['FIELDS']['LOCATION'];?>
    <?php $APPLICATION->IncludeComponent(
    	"bitrix:sale.location.selector.search",
    	".default",
    	Array(
    		"CACHE_TIME" => "36000000",
    		"CACHE_TYPE" => "A",
    		"CODE" => "",
    		"FILTER_BY_SITE" => "N",
    		"ID" => $arResult['SENDED_FIELDS'][$field['CODE']],
    		"INITIALIZE_BY_GLOBAL_EVENT" => "",
    		"INPUT_NAME" => "form_".mb_strtolower($field['CODE']),
    		"JS_CALLBACK" => "",
    		"JS_CONTROL_GLOBAL_ID" => "",
    		"PROVIDE_LINK_BY" => "id",
    		"SHOW_DEFAULT_LOCATIONS" => "N",
    		"SUPPRESS_ERRORS" => "N"
    	)
    );?>
    <?php $field=$arParams['FIELDS']['INDEX'];?>
	<div class="default-form__form__item" data-entity="validate-field-wrap">
		<span class="default-form__form__label default-label"><?=$field['NAME'];?><?=($field['REQUIRED']=='Y' ? '<span>*</span>' : '');?></span>
		<input type="text" name="form_<?=mb_strtolower($field['CODE']);?>" placeholder="<?=$field['PLACEHOLDER'];?>" class="default-form__form__input default-input <?=($field['REQUIRED']=='Y' ? 'required' : '');?>" data-entity="validate-field" value="<?=($arResult['SENDED_FIELDS'][$field['CODE']] ?: $field['VALUE'])?>">
	</div>
	<?php $field=$arParams['FIELDS']['INN'];?>
	<div class="default-form__form__item" data-entity="validate-field-wrap">
		<span class="default-form__form__label default-label"><?=$field['NAME'];?><?=($field['REQUIRED']=='Y' ? '<span>*</span>' : '');?></span>
		<input type="text" name="form_<?=mb_strtolower($field['CODE']);?>" placeholder="<?=$field['PLACEHOLDER'];?>" class="default-form__form__input default-input <?=($field['REQUIRED']=='Y' ? 'required' : '');?>" data-entity="validate-field" value="<?=($arResult['SENDED_FIELDS'][$field['CODE']] ?: $field['VALUE'])?>">
	</div>
	<div class="default-form__form__item--submit">
		<?php if ($arParams['USER_CONSENT'] == 'Y'):?>
		    <div class="default-form__form__agreement">
		    <?php $APPLICATION->IncludeComponent(
				"bitrix:main.userconsent.request",
				".default",
				Array(
					"AUTO_SAVE" => "Y",
					"ID" => $arParams['USER_CONSENT_ID'],
					"IS_CHECKED" => $arParams['USER_CONSENT_IS_CHECKED'],
					"IS_LOADED" => $arParams['USER_CONSENT_IS_LOADED'],
					"INPUT_NAME" => "USER_CONSENT",
					"REPLACE" => array(
			           'button_caption' => GetMessage("MFT_SUBMIT"),
			           'fields' => array(GetMessage("MFT_NAME"), GetMessage("MFT_PHONE"), GetMessage("MFT_EMAIL"))
			          ),
				)
			);?>
		    </div>
		<?php endif;?>
		<input type="hidden" name="PARAMS_HASH" value="<?=$arResult["PARAMS_HASH"]?>">
	    <?php if($arParams["USE_CAPTCHA"] == "Y" && $arParams['FORM_ID']):?>
	    	<?php $this->addExternalJs("https://www.google.com/recaptcha/api.js")?>
	    	<div id="<?=$arParams['FORM_ID'];?>RecaptchaId"></div>
	    <?php endif;?>
	    	<input type="hidden" name="submited" value="<?=GetMessage("MFT_SUBMIT")?>">
		    <input type="button" value="<?=GetMessage("MFT_SUBMIT")?>" name="" id="<?=$arParams['FORM_ID'];?>_submit" class="btn default-form__form__submit">
	</div>
</form>
<?php
$jsParams=[
	'FORM_ID'=>$arParams['FORM_ID'],
	'AJAX_MODE'=>$arParams['AJAX_MODE'],
	'AJAX_ID'=>$arParams['AJAX_ID'],
	'USE_CAPTCHA'=>$arParams["USE_CAPTCHA"],
	'PUBLIC_KEY'=>$arParams['PUBLIC_KEY'],
	'OBJ_NAME'=>$obName,
];
?>
<script>
	function <?=$obName;?>OnSubmit(token) {
		<?=$obName;?>.OnSubmit(token);
   	}
  	var <?=$obName?> = new JCFeedbackForm(<?=CUtil::PhpToJSObject($jsParams, false, true)?>);
</script>
<?php endif;?>
</div>