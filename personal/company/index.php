<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Компания");
?>

<?
global $USER;
if ($USER->IsAuthorized()) {
    $userId = $USER->GetID();
    $rsUser = CUser::GetByID($userId);
    $arUser = $rsUser->Fetch();
}

?>

<div class="lk">
    <div class="container">
        <div class="lk__inner">
            <div class="lk__top">
                <a href="/personal/" class="lk__top--item">Личные данные</a>
                <a href="/personal/company/" class="lk__top--item active">Моя компания</a>
                <a href="#" class="lk__top--item">Тех. поддержка</a>
                <a href="#" class="lk__top--item">Действующая лицензия</a>
                <a href="#" class="lk__top--item">Обращения</a>
            </div>

            <? if ($arUser['WORK_COMPANY']) { ?>
                <div class="lk-company"><?= $arUser['WORK_COMPANY']; ?></div>
            <? } else { ?>
                <p>Компания не добавлена.</p>
            <? } ?>
        </div>
    </div>
</div>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>