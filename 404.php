<?
require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
$APPLICATION->SetPageProperty("SHOW_TITLE", "N");
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php"); ?>

<div class="error">
	<div class="container">
		<div class="error__inner">
			<img src="<?= SITE_TEMPLATE_PATH ?>/assets/images/error.png" alt="" />
			<div class="error__text">
				К сожалению такой страницы нет на нашем сайте
			</div>

			<a href="/" class="error__btn btn btn-red">На главную</a>
		</div>
	</div>
</div>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>