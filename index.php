<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle("Главная");
?><?$APPLICATION->IncludeComponent("bitrix:support.ticket", "support", Array(
	"MESSAGES_PER_PAGE" => "20",	// Количество сообщений на одной странице
		"MESSAGE_MAX_LENGTH" => "70",	// Максимальная длина неразрывной строки
		"MESSAGE_SORT_ORDER" => "asc",	// Направление для сортировки сообщений в обращении
		"SEF_MODE" => "N",	// Включить поддержку ЧПУ
		"SET_PAGE_TITLE" => "Y",	// Устанавливать заголовок страницы
		"SET_SHOW_USER_FIELD" => array("UF_VERSION_PO"),	// Показывать пользовательские поля
		"SHOW_COUPON_FIELD" => "N",	// Показывать поле ввода купона
		"TICKETS_PER_PAGE" => "50",	// Количество обращений на одной странице
		"VARIABLE_ALIASES" => array(
			"ID" => "ID",
		)
	),
	false
);?><?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
?>