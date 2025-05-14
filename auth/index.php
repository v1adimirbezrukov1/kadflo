<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

$APPLICATION->SetTitle("Авторизация");
?>

<?
global $USER;
if ($USER->IsAuthorized()) {
	LocalRedirect("/personal/");
}
?>

<? $APPLICATION->IncludeComponent(
	"bitrix:system.auth.form",
	"auth",
	array(
		"FORGOT_PASSWORD_URL" => "",	// Страница забытого пароля
		"PROFILE_URL" => "/personal/",	// Страница профиля
		"REGISTER_URL" => "",	// Страница регистрации
		"SHOW_ERRORS" => "N",	// Показывать ошибки
	),
	false
); ?>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>