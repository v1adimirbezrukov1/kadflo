<?php

// Настройки сайта, global $siteSettings;
use Bitrix\Main\PhoneNumber\Format;
use Bitrix\Main\PhoneNumber\Parser;

CModule::IncludeModule("iblock");
CModule::IncludeModule("nastart.ion");

CModule::AddAutoloadClasses(
    "",
    array(
        '\Bas\Pict' => '/local/php_interface/user_class/classPict.php',
    )
);

$settings = new Nastart\Settings('s1');

$siteSettings = $settings->getFields();

foreach ($siteSettings as &$setting) {
    if ($setting['USER_TYPE_ID'] == 'file')
        $setting['FORMATED_VALUE'] = CFile::GetFileArray($setting['VALUE']);
}

$parsedPhone = Parser::getInstance()->parse($siteSettings['UF_PHONE']['VALUE']);
$siteSettings['UF_PHONE']['FORMATED_VALUE'] = $parsedPhone->format(Format::E164);

 
// Доступ к сайту по авторизации /auth/

AddEventHandler("main", "OnBeforeProlog", "RedirectIfNotAuthorized");

function RedirectIfNotAuthorized()
{
    global $USER, $APPLICATION;

    // Разрешаем доступ к страницам авторизации, регистрации и AJAX-запросам
    $allowedPages = [
        '/auth/',
        '/auth/index.php',
        '/auth/login.php',
        '/bitrix/tools/',
        '/bitrix/services/', // например, для REST или CRM
    ];

    $requestUri = $_SERVER['REQUEST_URI'];
    
    // Разрешаем доступ к административке
    if (defined('ADMIN_SECTION') && ADMIN_SECTION === true) {
        return;
    }

    // Разрешаем доступ к разрешённым страницам
    foreach ($allowedPages as $page) {
        if (strpos($requestUri, $page) === 0) {
            return;
        }
    }

    // Если пользователь не авторизован — редирект на /auth/
    if (!$USER->IsAuthorized()) {
        LocalRedirect('/auth/');
        exit();
    }
}


