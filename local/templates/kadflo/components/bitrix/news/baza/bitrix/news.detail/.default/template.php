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




<div class="baza__content">
	<div class="baza__aside">
		<ul></ul>
	</div>

	<div class="baza__info">
		<?php $APPLICATION->IncludeComponent(
			"sprint.editor:blocks",
			"",
			array(
				"JSON" => $arResult['PROPERTIES']['UF_BLOCKS']['~VALUE'],
			),
			$component,
			array(
				"HIDE_ICONS" => "Y"
			)
		); ?>
	</div>
</div>


<script>
	$(document).ready(function() {
		const $aside = $('.baza__aside');
		const $asideList = $aside.find('ul');
		const $content = $('.baza__info');
		const $headings = $content.find('h1, h2, h3, h4, h5, h6');
		let idCounter = 1;

		// Если заголовков нет — удаляем aside
		if ($headings.length === 0) {
			$aside.remove();
			return;
		}

		$asideList.empty(); // очищаем список

		// Заполняем список заголовками
		$headings.each(function() {
			const $heading = $(this);
			if (!$heading.attr('id')) {
				$heading.attr('id', 'heading-' + idCounter++);
			}

			const text = $heading.text();
			const href = '#' + $heading.attr('id');
			const $link = $('<a></a>').attr('href', href).text(text);
			const $item = $('<li></li>').append($link);

			$asideList.append($item); // без вложенности
		});

		// Плавная прокрутка
		$aside.on('click', 'a', function(e) {
			e.preventDefault();

			const targetId = $(this).attr('href');
			const $target = $(targetId);

			if ($target.length) {
				$('html, body').animate({
					scrollTop: $target.offset().top - 100
				}, 500);
			}
		});

		// Подсветка активного заголовка
		$(window).on('scroll', function() {
			let scrollPos = $(window).scrollTop();
			let currentId = null;

			$headings.each(function() {
				if (scrollPos >= $(this).offset().top - 120) {
					currentId = $(this).attr('id');
				}
			});

			if (currentId) {
				$aside.find('a').removeClass('active');
				$aside.find('a[href="#' + currentId + '"]').addClass('active');
			}
		});
	});
</script>