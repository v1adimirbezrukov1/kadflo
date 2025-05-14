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

<div class="tech-info__content">
	<div class="tech-info__top">Популярные запросы, которые могут вас заинтересовать</div>
	<div class="tech-info__items">
		<? foreach ($arResult["ITEMS"] as $arItem): ?>
			<div class="tech-info__item">
				<span><? echo $arItem["NAME"] ?></span>
				<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" class="tech-info__btn btn btn-red">Читать</a>
			</div>
		<? endforeach; ?>
	</div>
</div>