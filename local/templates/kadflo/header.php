<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
    die();

use \Bitrix\Main\Application;
use \Bitrix\Main\Page\Asset;

if (!defined("BITCORP_MODULE_NAME")) {
    define("BITCORP_MODULE_NAME", "boxsol.bitcorp");
}

IncludeTemplateLangFile(__FILE__);

$arCurrentSite = CSite::GetByID(SITE_ID)->Fetch();
$request = Application::getInstance()->getContext()->getRequest();
\Bitrix\Main\Loader::includeModule(BITCORP_MODULE_NAME);
?>

<!DOCTYPE html>
<html lang="<?= $arCurrentSite["LANGUAGE_ID"] ?>">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link rel="apple-touch-icon" sizes="180x180" href="favicon/favicon.png" />
    <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon.png" />
    <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon.png" />
    <link rel="shortcut icon" type="image/x-icon" href="favicon/favicon.ico" />

    <?
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/assets/libraries/fancybox/jquery.fancybox.min.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/assets/libraries/swiper/swiper-bundle.min.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/assets/libraries/select2/select2.min.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/assets/libraries/inputTel/inputTel.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/assets/css/fonts.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/assets/css/style.css");
    Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . "/assets/css/all-style.css");

    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/assets/libraries/jquery-3.7.1.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/assets/libraries/swiper/swiper-bundle.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/assets/libraries/fancybox/jquery.fancybox.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/assets/libraries/select2/select2.min.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/assets/libraries/inputTel/inputTel.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/assets/libraries/imask.js");
    Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . "/assets/js/all-scripts.js");
    ?>
    <? $APPLICATION->ShowHead(); ?>
    <script
        src="https://api-maps.yandex.ru/2.1/?apikey=aa738ede-ae14-4127-ad41-0327820e270b&amp;lang=ru_RU&amp;load=package.full&amp;onload=init"
        type="text/javascript"></script>

    <title><? $APPLICATION->ShowTitle() ?></title>
</head>

<body>
    <div id="panel">
        <? $APPLICATION->ShowPanel(); ?>
    </div>

    <div class="wrapper">
        <div class="header">
            <div class="container">
                <div class="header__inner">
                    <div class="header__top">
                        <div class="header-search">
                            <a href="#" class="header-search__back">
                                <svg
                                    width="6"
                                    height="10"
                                    viewBox="0 0 6 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 9L1 5L5 1"
                                        stroke="white"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span>Назад</span>
                            </a>

                            <form action="/search/">
                                <div class="header-search__field">
                                    <input type="text" name="q" placeholder="Введите запрос" />

                                    <button class="header-search__btn btn btn-red">Поиск</button>
                                </div>
                            </form>
                        </div>
                        <a href="/" class="header__logo">
                            <img src="<?= $siteSettings['UF_LOGO_BLACK']['FORMATED_VALUE']['SRC']; ?>" alt="" />
                        </a>

                        <a href="#" class="header__burger">
                            <svg
                                width="24"
                                height="15"
                                viewBox="0 0 24 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.75 13.9584H23.25M0.75 7.50002H23.25M0.75 1.04169H23.25"
                                    stroke="#555555"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </a>

                        <div class="header__content">
                            <a href="#" class="header__btn btn btn-red">Новый запрос в поддержку
                            </a>

                            <div class="header__search">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.3536 12.6464C13.1583 12.4512 12.8417 12.4512 12.6464 12.6464C12.4512 12.8417 12.4512 13.1583 12.6464 13.3536L13.3536 12.6464ZM18.6464 19.3536C18.8417 19.5488 19.1583 19.5488 19.3536 19.3536C19.5488 19.1583 19.5488 18.8417 19.3536 18.6464L18.6464 19.3536ZM8 14.5C4.41015 14.5 1.5 11.5899 1.5 8H0.5C0.5 12.1421 3.85786 15.5 8 15.5V14.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5V0.5C3.85786 0.5 0.5 3.85786 0.5 8H1.5ZM8 1.5C11.5899 1.5 14.5 4.41015 14.5 8H15.5C15.5 3.85786 12.1421 0.5 8 0.5V1.5ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5V15.5C12.1421 15.5 15.5 12.1421 15.5 8H14.5ZM12.6464 13.3536L18.6464 19.3536L19.3536 18.6464L13.3536 12.6464L12.6464 13.3536Z"
                                        fill="#555555" />
                                </svg>



                            </div>
                            <a href="/personal/" class="header__auth">
                                <svg
                                    width="18"
                                    height="20"
                                    viewBox="0 0 18 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 19C17 16.2386 13.4183 14 9 14C4.58172 14 1 16.2386 1 19M9 11C6.23858 11 4 8.76142 4 6C4 3.23858 6.23858 1 9 1C11.7614 1 14 3.23858 14 6C14 8.76142 11.7614 11 9 11Z"
                                        stroke="#555555"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header__bot">
                <div class="container">
                    <div class="header__bot--top">
                        <a href="#" class="header__btn btn btn-red">Новый запрос в поддержку
                        </a>

                        <div class="header__close">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13 13L1 1M13 1L1 13"
                                    stroke="#555555"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="header-mobile">
                        <div class="header__search">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.3536 12.6464C13.1583 12.4512 12.8417 12.4512 12.6464 12.6464C12.4512 12.8417 12.4512 13.1583 12.6464 13.3536L13.3536 12.6464ZM18.6464 19.3536C18.8417 19.5488 19.1583 19.5488 19.3536 19.3536C19.5488 19.1583 19.5488 18.8417 19.3536 18.6464L18.6464 19.3536ZM8 14.5C4.41015 14.5 1.5 11.5899 1.5 8H0.5C0.5 12.1421 3.85786 15.5 8 15.5V14.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5V0.5C3.85786 0.5 0.5 3.85786 0.5 8H1.5ZM8 1.5C11.5899 1.5 14.5 4.41015 14.5 8H15.5C15.5 3.85786 12.1421 0.5 8 0.5V1.5ZM14.5 8C14.5 11.5899 11.5899 14.5 8 14.5V15.5C12.1421 15.5 15.5 12.1421 15.5 8H14.5ZM12.6464 13.3536L18.6464 19.3536L19.3536 18.6464L13.3536 12.6464L12.6464 13.3536Z"
                                    fill="#555555" />
                            </svg>

                            <span>Поиск</span>
                        </div>
                        <div class="header__auth">
                            <svg
                                width="18"
                                height="20"
                                viewBox="0 0 18 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17 19C17 16.2386 13.4183 14 9 14C4.58172 14 1 16.2386 1 19M9 11C6.23858 11 4 8.76142 4 6C4 3.23858 6.23858 1 9 1C11.7614 1 14 3.23858 14 6C14 8.76142 11.7614 11 9 11Z"
                                    stroke="#555555"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <span>Личный кабинет</span>
                        </div>
                        <? $APPLICATION->IncludeComponent(
                            "bitrix:menu",
                            "header_menu",
                            array(
                                "ALLOW_MULTI_SELECT" => "N",
                                "CHILD_MENU_TYPE" => "left",
                                "DELAY" => "N",
                                "MAX_LEVEL" => "1",
                                "MENU_CACHE_GET_VARS" => array(""),
                                "MENU_CACHE_TIME" => "3600",
                                "MENU_CACHE_TYPE" => "A",
                                "MENU_CACHE_USE_GROUPS" => "Y",
                                "ROOT_MENU_TYPE" => "top",
                                "USE_EXT" => "N"
                            )
                        ); ?>
                    </div>
                </div>
            </div>

            <!-- header-search -->


        </div>

        <main class="main">


            <? if ($APPLICATION->GetCurPage(false) !== '/' && $APPLICATION->GetCurPage(false) !== '/auth/'):
                if ($APPLICATION->GetPageProperty("SHOW_TITLE") !== 'N') {
            ?>

                    <div class="elem-title">
                        <div class="container">
                            <h1 class="title"><? $APPLICATION->ShowTitle() ?></h1>
                        </div>
                    </div>
            <?
                }
            endif; ?>