<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
	die();
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

if (!$arResult["NavShowAlways"]) {
	if ($arResult["NavRecordCount"] == 0 || ($arResult["NavPageCount"] == 1 && $arResult["NavShowAll"] == false))
		return;
}

$strNavQueryString = ($arResult["NavQueryString"] != "" ? $arResult["NavQueryString"] . "&amp;" : "");
$strNavQueryStringFull = ($arResult["NavQueryString"] != "" ? "?" . $arResult["NavQueryString"] : "");
?>

<div class="pagination">
	<div class="pagination__wrapper">
		<font class="pagination__list">

			<? if ($arResult["bDescPageNumbering"] === true): ?>

				<?= $arResult["NavFirstRecordShow"] ?>
				<?= GetMessage("nav_to") ?>
				<?= $arResult["NavLastRecordShow"] ?>
				<?= GetMessage("nav_of") ?>
				<?= $arResult["NavRecordCount"] ?><br />
		</font>

		<font class="pagination__list">

			<? if ($arResult["NavPageNomer"] < $arResult["NavPageCount"]): ?>
				<? if ($arResult["bSavePage"]): ?>
					<a
						href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= $arResult["NavPageCount"] ?>"><?= GetMessage("nav_begin") ?></a>

					<a
						href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] + 1) ?>"><?= GetMessage("nav_prev") ?></a>

				<? else: ?>
					<a href="<?= $arResult["sUrlPath"] ?><?= $strNavQueryStringFull ?>"><?= GetMessage("nav_begin") ?></a>

					<? if ($arResult["NavPageCount"] == ($arResult["NavPageNomer"] + 1)): ?>
						<a href="<?= $arResult["sUrlPath"] ?><?= $strNavQueryStringFull ?>"><?= GetMessage("nav_prev") ?></a>

					<? else: ?>
						<a
							href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] + 1) ?>"><?= GetMessage("nav_prev") ?></a>

					<? endif ?>
				<? endif ?>
			<? else: ?>
				<?= GetMessage("nav_begin") ?> <?= GetMessage("nav_prev") ?>
			<? endif ?>

			<? while ($arResult["nStartPage"] >= $arResult["nEndPage"]): ?>
				<? $NavRecordGroupPrint = $arResult["NavPageCount"] - $arResult["nStartPage"] + 1; ?>

				<? if ($arResult["nStartPage"] == $arResult["NavPageNomer"]): ?>
					<b class="pagination__item"><?= $NavRecordGroupPrint ?></b>
				<? elseif ($arResult["nStartPage"] == $arResult["NavPageCount"] && $arResult["bSavePage"] == false): ?>
					<a href="<?= $arResult["sUrlPath"] ?><?= $strNavQueryStringFull ?>"><?= $NavRecordGroupPrint ?></a>
				<? else: ?>
					<a class="pagination__item"
						href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= $arResult["nStartPage"] ?>"><?= $NavRecordGroupPrint ?></a>
				<? endif ?>

				<? $arResult["nStartPage"]-- ?>
			<? endwhile ?>



			<? if ($arResult["NavPageNomer"] > 1): ?>
				<a
					href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] - 1) ?>"><?= GetMessage("nav_next") ?></a>

				<a
					href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=1"><?= GetMessage("nav_end") ?></a>
			<? else: ?>
				<?= GetMessage("nav_next") ?> <?= GetMessage("nav_end") ?>
			<? endif ?>

		<? else: ?>

		</font>

		<font class="pagination__list">

			<? if ($arResult["NavPageNomer"] > 1): ?>

				<? if ($arResult["bSavePage"]): ?>
					<a
						href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=1"><?= GetMessage("nav_begin") ?></a>

					<a
						href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] - 1) ?>"><?= GetMessage("nav_prev") ?></a>

				<? else: ?>
					<? if ($arResult["NavPageNomer"] > 2): ?>
						<a class="pagination__btn prev"
							href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] - 1) ?>">
							<svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.4826 10.8919L2.03325 0.935687C1.8589 0.769478 1.62726 0.676758 1.38637 0.676758C1.14549 0.676758 0.913854 0.769478 0.739501 0.935687L0.72825 0.946937C0.643435 1.02751 0.575897 1.1245 0.529747 1.232C0.483596 1.3395 0.459797 1.45526 0.459797 1.57225C0.459797 1.68924 0.483596 1.805 0.529747 1.9125C0.575897 2.02 0.643435 2.11699 0.72825 2.19756L10.5682 11.5726L0.72825 20.9438C0.643435 21.0244 0.575897 21.1214 0.529747 21.2289C0.483596 21.3364 0.459797 21.4521 0.459797 21.5691C0.459797 21.6861 0.483596 21.8019 0.529747 21.9094C0.575897 22.0169 0.643435 22.1139 0.72825 22.1944L0.739501 22.2057C0.913854 22.3719 1.14549 22.4646 1.38637 22.4646C1.62726 22.4646 1.8589 22.3719 2.03325 22.2057L12.4826 12.2494C12.5745 12.1619 12.6477 12.0566 12.6977 11.9399C12.7477 11.8232 12.7734 11.6976 12.7734 11.5707C12.7734 11.4438 12.7477 11.3181 12.6977 11.2015C12.6477 11.0848 12.5745 10.9795 12.4826 10.8919Z" fill="#555555"></path>
							</svg>
						</a>
					<? else: ?>
						<a class="pagination__btn prev" href="<?= $arResult["sUrlPath"] ?><?= $strNavQueryStringFull ?>">
							<svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.4826 10.8919L2.03325 0.935687C1.8589 0.769478 1.62726 0.676758 1.38637 0.676758C1.14549 0.676758 0.913854 0.769478 0.739501 0.935687L0.72825 0.946937C0.643435 1.02751 0.575897 1.1245 0.529747 1.232C0.483596 1.3395 0.459797 1.45526 0.459797 1.57225C0.459797 1.68924 0.483596 1.805 0.529747 1.9125C0.575897 2.02 0.643435 2.11699 0.72825 2.19756L10.5682 11.5726L0.72825 20.9438C0.643435 21.0244 0.575897 21.1214 0.529747 21.2289C0.483596 21.3364 0.459797 21.4521 0.459797 21.5691C0.459797 21.6861 0.483596 21.8019 0.529747 21.9094C0.575897 22.0169 0.643435 22.1139 0.72825 22.1944L0.739501 22.2057C0.913854 22.3719 1.14549 22.4646 1.38637 22.4646C1.62726 22.4646 1.8589 22.3719 2.03325 22.2057L12.4826 12.2494C12.5745 12.1619 12.6477 12.0566 12.6977 11.9399C12.7477 11.8232 12.7734 11.6976 12.7734 11.5707C12.7734 11.4438 12.7477 11.3181 12.6977 11.2015C12.6477 11.0848 12.5745 10.9795 12.4826 10.8919Z" fill="#555555"></path>
							</svg>
						</a>
					<? endif ?>
				<? endif ?>
			<? endif ?>

			<? while ($arResult["nStartPage"] <= $arResult["nEndPage"]): ?>

				<? if ($arResult["nStartPage"] == $arResult["NavPageNomer"]): ?>
					<b class="pagination__item current"><?= $arResult["nStartPage"] ?></b>
				<? elseif ($arResult["nStartPage"] == 1 && $arResult["bSavePage"] == false): ?>
					<a class="pagination__item"
						href="<?= $arResult["sUrlPath"] ?><?= $strNavQueryStringFull ?>"><?= $arResult["nStartPage"] ?></a>
				<? else: ?>
					<a class="pagination__item"
						href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= $arResult["nStartPage"] ?>"><?= $arResult["nStartPage"] ?></a>
				<? endif ?>
				<? $arResult["nStartPage"]++ ?>
			<? endwhile ?>
			<? if ($arResult["NavPageNomer"] < $arResult["NavPageCount"]): ?>
				<a href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>PAGEN_<?= $arResult["NavNum"] ?>=<?= ($arResult["NavPageNomer"] + 1) ?>"
					class="pagination__btn next">
					<svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.4826 10.8919L2.03325 0.935687C1.8589 0.769478 1.62726 0.676758 1.38637 0.676758C1.14549 0.676758 0.913854 0.769478 0.739501 0.935687L0.72825 0.946937C0.643435 1.02751 0.575897 1.1245 0.529747 1.232C0.483596 1.3395 0.459797 1.45526 0.459797 1.57225C0.459797 1.68924 0.483596 1.805 0.529747 1.9125C0.575897 2.02 0.643435 2.11699 0.72825 2.19756L10.5682 11.5726L0.72825 20.9438C0.643435 21.0244 0.575897 21.1214 0.529747 21.2289C0.483596 21.3364 0.459797 21.4521 0.459797 21.5691C0.459797 21.6861 0.483596 21.8019 0.529747 21.9094C0.575897 22.0169 0.643435 22.1139 0.72825 22.1944L0.739501 22.2057C0.913854 22.3719 1.14549 22.4646 1.38637 22.4646C1.62726 22.4646 1.8589 22.3719 2.03325 22.2057L12.4826 12.2494C12.5745 12.1619 12.6477 12.0566 12.6977 11.9399C12.7477 11.8232 12.7734 11.6976 12.7734 11.5707C12.7734 11.4438 12.7477 11.3181 12.6977 11.2015C12.6477 11.0848 12.5745 10.9795 12.4826 10.8919Z" fill="#555555"></path>
					</svg>
				</a>
			<? endif ?>

		<? endif ?>


		<!-- <? if ($arResult["bShowAll"]): ?>
<noindex>
	<? if ($arResult["NavShowAll"]): ?>
		|&nbsp;<a href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>SHOWALL_<?= $arResult["NavNum"] ?>=0" rel="nofollow"><?= GetMessage("nav_paged") ?></a>
	<? else: ?>
		|&nbsp;<a href="<?= $arResult["sUrlPath"] ?>?<?= $strNavQueryString ?>SHOWALL_<?= $arResult["NavNum"] ?>=1" rel="nofollow"><?= GetMessage("nav_all") ?></a>
	<? endif ?>
</noindex>
<? endif ?> -->

		</font>
	</div>
</div>