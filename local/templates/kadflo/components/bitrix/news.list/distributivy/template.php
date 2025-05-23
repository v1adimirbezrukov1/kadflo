<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>

<div class="distr">
	<div class="container">
		<div class="distr__inner">
			<div class="distr__items">
				<? foreach ($arResult["ITEMS"] as $key => $arItem): ?>
					<?
					$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
					$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
					$cFile = CFile::GetPath($arItem['PROPERTIES']['UF_FILE']['VALUE']);
					?>
					<div class="distr__item" id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
						<div class="distr__name">
							<span><?= $arItem['NAME']; ?></span>
							<p><?= $arItem['PROPERTIES']['UF_DATE']['VALUE']; ?> <? if ($key == 0) { ?><b>последний релиз</b><? } ?></p>
						</div>
						<div class="distr__text"><?= $arItem['PROPERTIES']['UF_TEXT_1']['VALUE']; ?></div>
						<div class="distr__text"><?= $arItem['PROPERTIES']['UF_TEXT_2']['VALUE']; ?></div>
						<a href="<?= $cFile; ?>" download="<?= $cFile; ?>" class="distr__btn btn btn-<? if ($key == 0) { ?>red<? } else { ?>white<? } ?>">Загрузить</a>
					</div>
				<? endforeach; ?>

			</div>
			<? if ($arParams["DISPLAY_BOTTOM_PAGER"]): ?>
				<?= $arResult["NAV_STRING"] ?>
			<? endif; ?>
		</div>
	</div>
</div>