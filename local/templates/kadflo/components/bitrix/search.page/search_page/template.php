<?php if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}
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
?>

<div class="search">
	<div class="container">
		<div class="search__inner">
			<div class="baza__search">
				<form action="" method="get">
					<input type="hidden" name="how" value="<?php echo $arResult['REQUEST']['HOW'] == 'd' ? 'd' : 'r' ?>" />
					<div class="header-search__field">
						<?php if ($arParams['USE_SUGGEST'] === 'Y'):
							if (mb_strlen($arResult['REQUEST']['~QUERY']) && is_object($arResult['NAV_RESULT'])) {
								$arResult['FILTER_MD5'] = $arResult['NAV_RESULT']->GetFilterMD5();
								$obSearchSuggest = new CSearchSuggest($arResult['FILTER_MD5'], $arResult['REQUEST']['~QUERY']);
								$obSearchSuggest->SetResultCount($arResult['NAV_RESULT']->NavRecordCount);
							}
						?>
							<?php $APPLICATION->IncludeComponent(
								'bitrix:search.suggest.input',
								'',
								[
									'NAME' => 'q',
									'VALUE' => $arResult['REQUEST']['~QUERY'],
									'INPUT_SIZE' => 40,
									'DROPDOWN_SIZE' => 10,
									'FILTER_MD5' => $arResult['FILTER_MD5'],
								],
								$component,
								['HIDE_ICONS' => 'Y']
							); ?>
						<?php else: ?>
							<input type="text" name="q" value="<?= $arResult['REQUEST']['QUERY'] ?>" size="40" />
						<?php endif; ?>
						<?php if ($arParams['SHOW_WHERE']): ?>
							<select name="where">
								<option value=""><?= GetMessage('SEARCH_ALL') ?></option>
								<?php foreach ($arResult['DROPDOWN'] as $key => $value): ?>
									<option value="<?= $key ?>" <?php echo ($arResult['REQUEST']['WHERE'] == $key) ? ' selected' : ''; ?>><?= $value ?></option>
								<?php endforeach ?>
							</select>
						<?php endif; ?>
						<input type="submit" class="header-search__btn btn btn-red" value="<?= GetMessage('SEARCH_GO') ?>" />
						<?php if ($arParams['SHOW_WHEN']): ?>
							<script>
								var switch_search_params = function() {
									var sp = document.getElementById('search_params');
									var flag;
									var i;

									if (sp.style.display == 'none') {
										flag = false;
										sp.style.display = 'block'
									} else {
										flag = true;
										sp.style.display = 'none';
									}

									var from = document.getElementsByName('from');
									for (i = 0; i < from.length; i++)
										if (from[i].type.toLowerCase() == 'text')
											from[i].disabled = flag;

									var to = document.getElementsByName('to');
									for (i = 0; i < to.length; i++)
										if (to[i].type.toLowerCase() == 'text')
											to[i].disabled = flag;

									return false;
								}
							</script>
							<br /><a class="search-page-params" href="#" onclick="return switch_search_params()"><?php echo GetMessage('CT_BSP_ADDITIONAL_PARAMS') ?></a>
							<div id="search_params" class="search-page-params" style="display:<?php echo $arResult['REQUEST']['FROM'] || $arResult['REQUEST']['TO'] ? 'block' : 'none' ?>">
								<?php $APPLICATION->IncludeComponent(
									'bitrix:main.calendar',
									'',
									[
										'SHOW_INPUT' => 'Y',
										'INPUT_NAME' => 'from',
										'INPUT_VALUE' => $arResult['REQUEST']['~FROM'],
										'INPUT_NAME_FINISH' => 'to',
										'INPUT_VALUE_FINISH' => $arResult['REQUEST']['~TO'],
										'INPUT_ADDITIONAL_ATTR' => 'size="10"',
									],
									null,
									['HIDE_ICONS' => 'Y']
								); ?>
							</div>
						<?php endif ?>
					</div>
				</form>
			</div>

			<div class="baza__btns">
				<? $APPLICATION->IncludeComponent(
					"bitrix:news.list",
					"baza_items",
					array(
						"ACTIVE_DATE_FORMAT" => "d.m.Y",
						"ADD_SECTIONS_CHAIN" => "N",
						"AJAX_MODE" => "N",
						"AJAX_OPTION_ADDITIONAL" => "",
						"AJAX_OPTION_HISTORY" => "N",
						"AJAX_OPTION_JUMP" => "N",
						"AJAX_OPTION_STYLE" => "Y",
						"CACHE_FILTER" => "N",
						"CACHE_GROUPS" => "Y",
						"CACHE_TIME" => "36000000",
						"CACHE_TYPE" => "A",
						"CHECK_DATES" => "Y",
						"DETAIL_URL" => "",
						"DISPLAY_BOTTOM_PAGER" => "N",
						"DISPLAY_DATE" => "N",
						"DISPLAY_NAME" => "Y",
						"DISPLAY_PICTURE" => "N",
						"DISPLAY_PREVIEW_TEXT" => "N",
						"DISPLAY_TOP_PAGER" => "N",
						"FIELD_CODE" => array("NAME", ""),
						"FILTER_NAME" => "",
						"HIDE_LINK_WHEN_NO_DETAIL" => "N",
						"IBLOCK_ID" => "2",
						"IBLOCK_TYPE" => "content",
						"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
						"INCLUDE_SUBSECTIONS" => "Y",
						"MESSAGE_404" => "",
						"NEWS_COUNT" => "5",
						"PAGER_BASE_LINK_ENABLE" => "N",
						"PAGER_DESC_NUMBERING" => "N",
						"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
						"PAGER_SHOW_ALL" => "N",
						"PAGER_SHOW_ALWAYS" => "N",
						"PAGER_TEMPLATE" => ".default",
						"PAGER_TITLE" => "Новости",
						"PARENT_SECTION" => "",
						"PARENT_SECTION_CODE" => "",
						"PREVIEW_TRUNCATE_LEN" => "",
						"PROPERTY_CODE" => array("", ""),
						"SET_BROWSER_TITLE" => "N",
						"SET_LAST_MODIFIED" => "N",
						"SET_META_DESCRIPTION" => "N",
						"SET_META_KEYWORDS" => "N",
						"SET_STATUS_404" => "N",
						"SET_TITLE" => "N",
						"SHOW_404" => "N",
						"SORT_BY1" => "SORT",
						"SORT_BY2" => "SORT",
						"SORT_ORDER1" => "ASC",
						"SORT_ORDER2" => "ASC",
						"STRICT_SECTION_CHECK" => "N",
						"CURRENT_CODE" => $arResult['VARIABLES']['ELEMENT_CODE'],
					)
				); ?>
			</div>
		</div>

		<?php if (isset($arResult['REQUEST']['ORIGINAL_QUERY'])):
		?>
			<div class="search-language-guess">
				<?php echo GetMessage('CT_BSP_KEYBOARD_WARNING', ['#query#' => '<a href="' . $arResult['ORIGINAL_QUERY_URL'] . '">' . $arResult['REQUEST']['ORIGINAL_QUERY'] . '</a>']) ?>
			</div><br /><?php
					endif; ?>

		<?php if ($arResult['REQUEST']['QUERY'] === false && $arResult['REQUEST']['TAGS'] === false): ?>
		<?php elseif ($arResult['ERROR_CODE'] != 0): ?>
			<p><?= GetMessage('SEARCH_ERROR') ?></p>
			<?php ShowError($arResult['ERROR_TEXT']); ?>
			<p><?= GetMessage('SEARCH_CORRECT_AND_CONTINUE') ?></p>
			<br /><br />
			<p><?= GetMessage('SEARCH_SINTAX') ?><br /><b><?= GetMessage('SEARCH_LOGIC') ?></b></p>
			<table border="0" cellpadding="5">
				<tr>
					<td align="center" valign="top"><?= GetMessage('SEARCH_OPERATOR') ?></td>
					<td valign="top"><?= GetMessage('SEARCH_SYNONIM') ?></td>
					<td><?= GetMessage('SEARCH_DESCRIPTION') ?></td>
				</tr>
				<tr>
					<td align="center" valign="top"><?= GetMessage('SEARCH_AND') ?></td>
					<td valign="top">and, &amp;, +</td>
					<td><?= GetMessage('SEARCH_AND_ALT') ?></td>
				</tr>
				<tr>
					<td align="center" valign="top"><?= GetMessage('SEARCH_OR') ?></td>
					<td valign="top">or, |</td>
					<td><?= GetMessage('SEARCH_OR_ALT') ?></td>
				</tr>
				<tr>
					<td align="center" valign="top"><?= GetMessage('SEARCH_NOT') ?></td>
					<td valign="top">not, ~</td>
					<td><?= GetMessage('SEARCH_NOT_ALT') ?></td>
				</tr>
				<tr>
					<td align="center" valign="top">( )</td>
					<td valign="top">&nbsp;</td>
					<td><?= GetMessage('SEARCH_BRACKETS_ALT') ?></td>
				</tr>
			</table>
		<?php elseif (count($arResult['SEARCH']) > 0): ?>
			<?php echo ($arParams['DISPLAY_TOP_PAGER'] != 'N') ? $arResult['NAV_STRING'] : ''; ?>
			<div class="search__items">
				<?php foreach ($arResult['SEARCH'] as $arItem): ?>
					<div class="search__item">
						<span><?php echo $arItem['TITLE_FORMATED'] ?></span>
						<a href="<?php echo $arItem['URL'] ?>">Смотреть</a>
					</div>
				<?php endforeach; ?>
			</div>
			<?php echo ($arParams['DISPLAY_BOTTOM_PAGER'] != 'N') ? $arResult['NAV_STRING'] : ''; ?>
			<!-- <br />
			<p>
				<?php if ($arResult['REQUEST']['HOW'] == 'd'): ?>
					<a href="<?= $arResult['URL'] ?>&amp;how=r<?php echo $arResult['REQUEST']['FROM'] ? '&amp;from=' . $arResult['REQUEST']['FROM'] : '' ?><?php echo $arResult['REQUEST']['TO'] ? '&amp;to=' . $arResult['REQUEST']['TO'] : '' ?>"><?= GetMessage('SEARCH_SORT_BY_RANK') ?></a>&nbsp;|&nbsp;<b><?= GetMessage('SEARCH_SORTED_BY_DATE') ?></b>
				<?php else: ?>
					<b><?= GetMessage('SEARCH_SORTED_BY_RANK') ?></b>&nbsp;|&nbsp;<a href="<?= $arResult['URL'] ?>&amp;how=d<?php echo $arResult['REQUEST']['FROM'] ? '&amp;from=' . $arResult['REQUEST']['FROM'] : '' ?><?php echo $arResult['REQUEST']['TO'] ? '&amp;to=' . $arResult['REQUEST']['TO'] : '' ?>"><?= GetMessage('SEARCH_SORT_BY_DATE') ?></a>
				<?php endif; ?>
			</p> -->
		<?php else: ?>
			<div class="search-empty">
				<p>Поиск по&nbsp;запросу «<?= $arResult['REQUEST']['QUERY'] ?>» не&nbsp;дал&nbsp;результатов</p>
				<?
				$GLOBALS['arrFilter'] = ['PROPERTY_UF_POPULAR' => 'Y'];
				$APPLICATION->IncludeComponent(
					"bitrix:news.list",
					"popular_items",
					array(
						"ACTIVE_DATE_FORMAT" => "d.m.Y",
						"ADD_SECTIONS_CHAIN" => "N",
						"AJAX_MODE" => "N",
						"AJAX_OPTION_ADDITIONAL" => "",
						"AJAX_OPTION_HISTORY" => "N",
						"AJAX_OPTION_JUMP" => "N",
						"AJAX_OPTION_STYLE" => "Y",
						"CACHE_FILTER" => "N",
						"CACHE_GROUPS" => "Y",
						"CACHE_TIME" => "36000000",
						"CACHE_TYPE" => "A",
						"CHECK_DATES" => "Y",
						"DETAIL_URL" => "",
						"DISPLAY_BOTTOM_PAGER" => "N",
						"DISPLAY_DATE" => "N",
						"DISPLAY_NAME" => "Y",
						"DISPLAY_PICTURE" => "N",
						"DISPLAY_PREVIEW_TEXT" => "N",
						"DISPLAY_TOP_PAGER" => "N",
						"FIELD_CODE" => array("NAME", ""),
						"FILTER_NAME" => "arrFilter",
						"HIDE_LINK_WHEN_NO_DETAIL" => "N",
						"IBLOCK_ID" => "2",
						"IBLOCK_TYPE" => "content",
						"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
						"INCLUDE_SUBSECTIONS" => "Y",
						"MESSAGE_404" => "",
						"NEWS_COUNT" => "10",
						"PAGER_BASE_LINK_ENABLE" => "N",
						"PAGER_DESC_NUMBERING" => "N",
						"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
						"PAGER_SHOW_ALL" => "N",
						"PAGER_SHOW_ALWAYS" => "N",
						"PAGER_TEMPLATE" => ".default",
						"PAGER_TITLE" => "Новости",
						"PARENT_SECTION" => "",
						"PARENT_SECTION_CODE" => "",
						"PREVIEW_TRUNCATE_LEN" => "",
						"PROPERTY_CODE" => array("UF_POPULAR", ""),
						"SET_BROWSER_TITLE" => "N",
						"SET_LAST_MODIFIED" => "N",
						"SET_META_DESCRIPTION" => "N",
						"SET_META_KEYWORDS" => "N",
						"SET_STATUS_404" => "N",
						"SET_TITLE" => "N",
						"SHOW_404" => "N",
						"SORT_BY1" => "SORT",
						"SORT_BY2" => "SORT",
						"SORT_ORDER1" => "ASC",
						"SORT_ORDER2" => "ASC",
						"STRICT_SECTION_CHECK" => "N"
					)
				); ?>
			</div>
		<?php endif; ?>
	</div>
</div>
</div>