<?php

use Bitrix\Main\Web\Json;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 */
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
	die();

if (isset($arResult["SHOW_SMS_FIELD"]) && $arResult["SHOW_SMS_FIELD"] == true) {
	CJSCore::Init('phone_auth');
}
?>


<div class="bx-auth-profile lk">
	<div class="container">
		<div class="lk__inner">
			<div class="lk__top">
				<a href="/personal/" class="lk__top--item active">Личные данные</a>
				<a href="/personal/company/" class="lk__top--item">Моя компания</a>
				<a href="#" class="lk__top--item">Тех. поддержка</a>
				<a href="#" class="lk__top--item">Действующая лицензия</a>
				<a href="#" class="lk__top--item">Обращения</a>
			</div>


			<? ShowError($arResult["strProfileError"]); ?>
			<?
			if (isset($arResult['DATA_SAVED']) && $arResult['DATA_SAVED'] == 'Y')
				ShowNote(GetMessage('PROFILE_DATA_SAVED'));
			?>

			<? if (isset($arResult["SHOW_SMS_FIELD"]) && $arResult["SHOW_SMS_FIELD"] == true): ?>

				<form method="post" action="<?= $arResult["FORM_TARGET"] ?>">
					<?= $arResult["BX_SESSION_CHECK"] ?>
					<input type="hidden" name="lang" value="<?= LANG ?>" />
					<input type="hidden" name="ID" value=<?= $arResult["ID"] ?> />
					<input type="hidden" name="SIGNED_DATA" value="<?= htmlspecialcharsbx($arResult["SIGNED_DATA"]) ?>" />
					<div>
						<div><? echo GetMessage("main_profile_code") ?><span class="starrequired">*</span></div>
						<div><input size="30" type="text" name="SMS_CODE" value="<?= htmlspecialcharsbx($arResult["SMS_CODE"]) ?>" autocomplete="off" /></div>
					</div>
					<p><input type="submit" name="code_submit_button" value="<? echo GetMessage("main_profile_send") ?>" /></p>

				</form>

				<script>
					new BX.PhoneAuth({
						containerId: 'bx_profile_resend',
						errorContainerId: 'bx_profile_error',
						interval: <?= $arResult["PHONE_CODE_RESEND_INTERVAL"] ?>,
						data: <?= Json::encode([
									'signedData' => $arResult["SIGNED_DATA"],
								]) ?>,
						onError: function(response) {
							var errorDiv = BX('bx_profile_error');
							var errorNode = BX.findChildByClassName(errorDiv, 'errortext');
							errorNode.innerHTML = '';
							for (var i = 0; i < response.errors.length; i++) {
								errorNode.innerHTML = errorNode.innerHTML + BX.util.htmlspecialchars(response.errors[i].message) + '<br>';
							}
							errorDiv.style.display = '';
						}
					});
				</script>

				<div id="bx_profile_error" style="display:none"><? ShowError("error") ?></div>

				<div id="bx_profile_resend"></div>

			<? else: ?>

				<script>
					var opened_sections = [<?
											$arResult["opened"] = $_COOKIE[$arResult["COOKIE_PREFIX"] . "_user_profile_open"] ?? '';
											$arResult["opened"] = preg_replace("/[^a-z0-9_,]/i", "", $arResult["opened"]);
											if ($arResult["opened"] <> '') {
												echo "'" . implode("', '", explode(",", $arResult["opened"])) . "'";
											} else {
												$arResult["opened"] = "reg";
												echo "'reg'";
											}
											?>];
					//
					var
						cookie_prefix =
						'<?= $arResult["COOKIE_PREFIX"] ?>';
				</script>
				<form method="post" name="form1" action="<?= $arResult["FORM_TARGET"] ?>" enctype="multipart/form-data">
					<?= $arResult["BX_SESSION_CHECK"] ?>
					<input type="hidden" name="lang" value="<?= LANG ?>" />
					<input type="hidden" name="ID" value=<?= $arResult["ID"] ?> />

					<div class="profile-block-<?= !str_contains($arResult["opened"], "reg") ? "hidden" : "shown" ?>" id="user_div_reg">

						<?
						if ($arResult["ID"] > 0) {
						?>
							<?
							if ($arResult["arUser"]["TIMESTAMP_X"] <> '') {
							?>
								<div class="hidden-block">
									<div><?= GetMessage('LAST_UPDATE') ?></div>
									<div><?= $arResult["arUser"]["TIMESTAMP_X"] ?></div>
								</div>
							<?
							}
							?>
							<?
							if ($arResult["arUser"]["LAST_LOGIN"] <> '') {
							?>
								<div class="hidden-block">
									<div><?= GetMessage('LAST_LOGIN') ?></div>
									<div><?= $arResult["arUser"]["LAST_LOGIN"] ?></div>
								</div>
							<?
							}
							?>
						<?
						}
						?>

						<div class="lk__fields">
							<label class="field">
								<input type="text" name="NAME" maxlength="50" value="<?= $arResult["arUser"]["NAME"] ?>" placeholder="<?= GetMessage('NAME') ?>" />
							</label>
							<label class="field">
								<input type="text" name="LAST_NAME" maxlength="50" value="<?= $arResult["arUser"]["LAST_NAME"] ?>" placeholder="<?= GetMessage('LAST_NAME"]') ?>" />
							</label>
							<label class="field">
								<input type="text" name="SECOND_NAME" maxlength="50" value="<?= $arResult["arUser"]["SECOND_NAME"] ?>" placeholder="<?= GetMessage('SECOND_NAME') ?>" />
							</label>
							<label class="field">
								<?
								$APPLICATION->IncludeComponent(
									'bitrix:main.calendar',
									'',
									array(
										'SHOW_INPUT' => 'Y',
										'FORM_NAME' => 'form1',
										'INPUT_NAME' => 'PERSONAL_BIRTHDAY',
										'INPUT_VALUE' => $arResult["arUser"]["PERSONAL_BIRTHDAY"],
										'SHOW_TIME' => 'N'
									),
									null,
									array('HIDE_ICONS' => 'Y')
								);

								//=CalendarDate("PERSONAL_BIRTHDAY", $arResult["arUser"]["PERSONAL_BIRTHDAY"], "form1", "15")
								?>
							</label>
						</div>

						<? /* echo '<pre>'; print_r($arResult["arUser"]); echo '</pre>'; */ ?>

						<div class="lk__fields">
							<label class="field">
								<input type="text" name="LOGIN" maxlength="50" value="<? echo $arResult["arUser"]["LOGIN"] ?>" placeholder="<?= GetMessage('LOGIN') ?>" />
							</label>
							<label class="field">
								<input type="text" name="EMAIL" maxlength="50" value="<? echo $arResult["arUser"]["EMAIL"] ?>" placeholder="<?= GetMessage('EMAIL') ?>" />
							</label>
							<label class="field">
								<input type="text" name="PERSONAL_PHONE" maxlength="50" value="<? echo $arResult["arUser"]["PERSONAL_PHONE"] ?>" placeholder="<? echo GetMessage("USER_PHONE") ?>" />
							</label>
							<label class="field">
								<input type="password" name="NEW_PASSWORD" maxlength="50" value="" autocomplete="off" class="bx-auth-input" placeholder="<?= GetMessage('NEW_PASSWORD_REQ') ?>" />
							</label>
							<label class="field">
								<input type="password" name="NEW_PASSWORD_CONFIRM" maxlength="50" value="" autocomplete="off" placeholder="<?= GetMessage('NEW_PASSWORD_CONFIRM') ?>" />
							</label>
						</div>

						<div class="hidden-block">
							<div><? echo GetMessage("main_profile_title") ?>:</div>
							<div><input type="text" name="TITLE" value="<?= $arResult["arUser"]["TITLE"] ?>" placeholder="<? echo GetMessage("main_profile_title") ?>" /></div>
						</div>

						<? if ($arResult["TIME_ZONE_ENABLED"] == true): ?>

					</div>
					<div class="hidden-block">
						<div><? echo GetMessage("main_profile_time_zones_auto") ?></div>
						<div>
							<select name="AUTO_TIME_ZONE" onchange="this.form.TIME_ZONE.disabled=(this.value != 'N')">
								<option value=""><? echo GetMessage("main_profile_time_zones_auto_def") ?></option>
								<option value="Y" <?= ($arResult["arUser"]["AUTO_TIME_ZONE"] == "Y" ? ' SELECTED="SELECTED"' : '') ?>><? echo GetMessage("main_profile_time_zones_auto_yes") ?></option>
								<option value="N" <?= ($arResult["arUser"]["AUTO_TIME_ZONE"] == "N" ? ' SELECTED="SELECTED"' : '') ?>><? echo GetMessage("main_profile_time_zones_auto_no") ?></option>
							</select>
						</div>
					</div>
					<div class="hidden-block">
						<div><? echo GetMessage("main_profile_time_zones_zones") ?></div>
						<div>
							<select name="TIME_ZONE" <? if ($arResult["arUser"]["AUTO_TIME_ZONE"] <> "N") echo ' disabled="disabled"' ?>>
								<? foreach ($arResult["TIME_ZONE_LIST"] as $tz => $tz_name): ?>
									<option value="<?= htmlspecialcharsbx($tz) ?>" <?= ($arResult["arUser"]["TIME_ZONE"] == $tz ? ' SELECTED="SELECTED"' : '') ?>><?= htmlspecialcharsbx($tz_name) ?></option>
								<? endforeach ?>
							</select>
						</div>
					</div>
				<? endif ?>
		</div>
		<div class="hidden-block">
			<div class="profile-link profile-user-div-link"><a title="<?= GetMessage("USER_SHOW_HIDE") ?>" href="javascript:void(0)" onclick="SectionClick('personal')"><?= GetMessage("USER_PERSONAL_INFO") ?></a></div>
			<div id="user_div_personal" class="profile-block-<?= !str_contains($arResult["opened"], "personal") ? "hidden" : "shown" ?>">

			</div>
			<div>
				<div><?= GetMessage('USER_PROFESSION') ?></div>
				<div><input type="text" name="PERSONAL_PROFESSION" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_PROFESSION"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_WWW') ?></div>
				<div><input type="text" name="PERSONAL_WWW" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_WWW"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_ICQ') ?></div>
				<div><input type="text" name="PERSONAL_ICQ" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_ICQ"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_GENDER') ?></div>
				<div><select name="PERSONAL_GENDER">
						<option value=""><?= GetMessage("USER_DONT_KNOW") ?></option>
						<option value="M" <?= $arResult["arUser"]["PERSONAL_GENDER"] == "M" ? " SELECTED=\"SELECTED\"" : "" ?>><?= GetMessage("USER_MALE") ?></option>
						<option value="F" <?= $arResult["arUser"]["PERSONAL_GENDER"] == "F" ? " SELECTED=\"SELECTED\"" : "" ?>><?= GetMessage("USER_FEMALE") ?></option>
					</select></div>
			</div>
			<div>
				<div><?= GetMessage("USER_PHOTO") ?></div>
				<div>
					<?= $arResult["arUser"]["PERSONAL_PHOTO_INPUT"] ?>
					<?
					if ($arResult["arUser"]["PERSONAL_PHOTO"] <> '') {
					?>
						<br />
						<?= $arResult["arUser"]["PERSONAL_PHOTO_HTML"] ?>
					<?
					}
					?>
				</div>
			</div>
			<div>
				<div><?= GetMessage('USER_PHONE') ?></div>
				<div><input type="text" name="PHONE_NUMBER" maxlength="255" value="<?= $arResult["arUser"]["PHONE_NUMBER"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_FAX') ?></div>
				<div><input type="text" name="PERSONAL_FAX" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_FAX"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_MOBILE') ?></div>
				<div><input type="text" name="PERSONAL_MOBILE" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_MOBILE"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_PAGER') ?></div>
				<div><input type="text" name="PERSONAL_PAGER" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_PAGER"] ?>" /></div>
			</div>

			<div>
				<div><?= GetMessage('USER_COUNTRY') ?></div>
				<div><?= $arResult["COUNTRY_SELECT"] ?></div>
			</div>
			<div>
				<div><?= GetMessage('USER_STATE') ?></div>
				<div><input type="text" name="PERSONAL_STATE" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_STATE"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_CITY') ?></div>
				<div><input type="text" name="PERSONAL_CITY" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_CITY"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_ZIP') ?></div>
				<div><input type="text" name="PERSONAL_ZIP" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_ZIP"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage("USER_STREET") ?></div>
				<div><textarea cols="30" rows="5" name="PERSONAL_STREET"><?= $arResult["arUser"]["PERSONAL_STREET"] ?></textarea></div>
			</div>
			<div>
				<div><?= GetMessage('USER_MAILBOX') ?></div>
				<div><input type="text" name="PERSONAL_MAILBOX" maxlength="255" value="<?= $arResult["arUser"]["PERSONAL_MAILBOX"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage("USER_NOTES") ?></div>
				<div><textarea cols="30" rows="5" name="PERSONAL_NOTES"><?= $arResult["arUser"]["PERSONAL_NOTES"] ?></textarea></div>
			</div>
			<div class="profile-link profile-user-div-link"><a title="<?= GetMessage("USER_SHOW_HIDE") ?>" href="javascript:void(0)" onclick="SectionClick('work')"><?= GetMessage("USER_WORK_INFO") ?></a></div>
			<div id="user_div_work" class="profile-block-<?= !str_contains($arResult["opened"], "work") ? "hidden" : "shown" ?>">

			</div>

			<div>
				<div><?= GetMessage('USER_COMPANY') ?></div>
				<div><input type="text" name="WORK_COMPANY" maxlength="255" value="<?= $arResult["arUser"]["WORK_COMPANY"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_WWW') ?></div>
				<div><input type="text" name="WORK_WWW" maxlength="255" value="<?= $arResult["arUser"]["WORK_WWW"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_DEPARTMENT') ?></div>
				<div><input type="text" name="WORK_DEPARTMENT" maxlength="255" value="<?= $arResult["arUser"]["WORK_DEPARTMENT"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_POSITION') ?></div>
				<div><input type="text" name="WORK_POSITION" maxlength="255" value="<?= $arResult["arUser"]["WORK_POSITION"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage("USER_WORK_PROFILE") ?></div>
				<div><textarea cols="30" rows="5" name="WORK_PROFILE"><?= $arResult["arUser"]["WORK_PROFILE"] ?></textarea></div>
			</div>
			<div>
				<div><?= GetMessage("USER_LOGO") ?></div>
				<div>
					<?= $arResult["arUser"]["WORK_LOGO_INPUT"] ?>
					<?
					if ($arResult["arUser"]["WORK_LOGO"] <> '') {
					?>
						<br /><?= $arResult["arUser"]["WORK_LOGO_HTML"] ?>
					<?
					}
					?>
				</div>
			</div>

			<div>
				<div><?= GetMessage('USER_PHONE') ?></div>
				<div><input type="text" name="WORK_PHONE" maxlength="255" value="<?= $arResult["arUser"]["WORK_PHONE"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_FAX') ?></div>
				<div><input type="text" name="WORK_FAX" maxlength="255" value="<?= $arResult["arUser"]["WORK_FAX"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_PAGER') ?></div>
				<div><input type="text" name="WORK_PAGER" maxlength="255" value="<?= $arResult["arUser"]["WORK_PAGER"] ?>" /></div>
			</div>


			<div>
				<div><?= GetMessage('USER_COUNTRY') ?></div>
				<div><?= $arResult["COUNTRY_SELECT_WORK"] ?></div>
			</div>
			<div>
				<div><?= GetMessage('USER_STATE') ?></div>
				<div><input type="text" name="WORK_STATE" maxlength="255" value="<?= $arResult["arUser"]["WORK_STATE"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_CITY') ?></div>
				<div><input type="text" name="WORK_CITY" maxlength="255" value="<?= $arResult["arUser"]["WORK_CITY"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage('USER_ZIP') ?></div>
				<div><input type="text" name="WORK_ZIP" maxlength="255" value="<?= $arResult["arUser"]["WORK_ZIP"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage("USER_STREET") ?></div>
				<div><textarea cols="30" rows="5" name="WORK_STREET"><?= $arResult["arUser"]["WORK_STREET"] ?></textarea></div>
			</div>
			<div>
				<div><?= GetMessage('USER_MAILBOX') ?></div>
				<div><input type="text" name="WORK_MAILBOX" maxlength="255" value="<?= $arResult["arUser"]["WORK_MAILBOX"] ?>" /></div>
			</div>
			<div>
				<div><?= GetMessage("USER_NOTES") ?></div>
				<div><textarea cols="30" rows="5" name="WORK_NOTES"><?= $arResult["arUser"]["WORK_NOTES"] ?></textarea></div>
			</div>


			<?
				if ($arResult["INCLUDE_FORUM"] == "Y") {
			?>

				<div class="profile-link profile-user-div-link"><a title="<?= GetMessage("USER_SHOW_HIDE") ?>" href="javascript:void(0)" onclick="SectionClick('forum')"><?= GetMessage("forum_INFO") ?></a></div>
				<div id="user_div_forum" class="profile-block-<?= !str_contains($arResult["opened"], "forum") ? "hidden" : "shown" ?>">
				</div>
				<div>
					<div><?= GetMessage("forum_SHOW_NAME") ?></div>
					<div><input type="hidden" name="forum_SHOW_NAME" value="N" /><input type="checkbox" name="forum_SHOW_NAME" value="Y" <? if ($arResult["arForumUser"]["SHOW_NAME"] == "Y") echo "checked=\"checked\""; ?> /></div>
				</div>
				<div>
					<div><?= GetMessage('forum_DESCRIPTION') ?></div>
					<div><input type="text" name="forum_DESCRIPTION" maxlength="255" value="<?= $arResult["arForumUser"]["DESCRIPTION"] ?>" /></div>
				</div>
				<div>
					<div><?= GetMessage('forum_INTERESTS') ?></div>
					<div><textarea cols="30" rows="5" name="forum_INTERESTS"><?= $arResult["arForumUser"]["INTERESTS"]; ?></textarea></div>
				</div>
				<div>
					<div><?= GetMessage("forum_SIGNATURE") ?></div>
					<div><textarea cols="30" rows="5" name="forum_SIGNATURE"><?= $arResult["arForumUser"]["SIGNATURE"]; ?></textarea></div>
				</div>
				<div>
					<div><?= GetMessage("forum_AVATAR") ?></div>
					<div><?= $arResult["arForumUser"]["AVATAR_INPUT"] ?>
						<?
						if ($arResult["arForumUser"]["AVATAR"] <> '') {
						?>
							<br /><?= $arResult["arForumUser"]["AVATAR_HTML"] ?>
						<?
						}
						?>
					</div>
				</div>

			<?
				}
			?>
			<?
				if ($arResult["INCLUDE_BLOG"] == "Y") {
			?>
				<div class="profile-link profile-user-div-link"><a title="<?= GetMessage("USER_SHOW_HIDE") ?>" href="javascript:void(0)" onclick="SectionClick('blog')"><?= GetMessage("blog_INFO") ?></a></div>
				<div id="user_div_blog" class="profile-block-<?= !str_contains($arResult["opened"], "blog") ? "hidden" : "shown" ?>">
				</div>
				<div>
					<div><?= GetMessage('blog_ALIAS') ?></div>
					<div><input class="typeinput" type="text" name="blog_ALIAS" maxlength="255" value="<?= $arResult["arBlogUser"]["ALIAS"] ?>" /></div>
				</div>
				<div>
					<div><?= GetMessage('blog_DESCRIPTION') ?></div>
					<div><input class="typeinput" type="text" name="blog_DESCRIPTION" maxlength="255" value="<?= $arResult["arBlogUser"]["DESCRIPTION"] ?>" /></div>
				</div>
				<div>
					<div><?= GetMessage('blog_INTERESTS') ?></div>
					<div><textarea cols="30" rows="5" class="typearea" name="blog_INTERESTS"><? echo $arResult["arBlogUser"]["INTERESTS"]; ?></textarea></div>
				</div>
				<div>
					<div><?= GetMessage("blog_AVATAR") ?></div>
					<div><?= $arResult["arBlogUser"]["AVATAR_INPUT"] ?>
						<?
						if ($arResult["arBlogUser"]["AVATAR"] <> '') {
						?>
							<br /><?= $arResult["arBlogUser"]["AVATAR_HTML"] ?>
						<?
						}
						?>
					</div>
				</div>
			<?
				}
			?>
			<? if ($arResult["INCLUDE_LEARNING"] == "Y"): ?>
				<div class="profile-link profile-user-div-link"><a title="<?= GetMessage("USER_SHOW_HIDE") ?>" href="javascript:void(0)" onclick="SectionClick('learning')"><?= GetMessage("learning_INFO") ?></a></div>
				<div id="user_div_learning" class="profile-block-<?= !str_contains($arResult["opened"], "learning") ? "hidden" : "shown" ?>">

					<div>
						<div><?= GetMessage("learning_PUBLIC_PROFILE"); ?>:</div>
						<div><input type="hidden" name="student_PUBLIC_PROFILE" value="N" /><input type="checkbox" name="student_PUBLIC_PROFILE" value="Y" <? if ($arResult["arStudent"]["PUBLIC_PROFILE"] == "Y") echo "checked=\"checked\""; ?> /></div>
					</div>
					<div>
						<div><?= GetMessage("learning_RESUME"); ?>:</div>
						<div><textarea cols="30" rows="5" name="student_RESUME"><?= $arResult["arStudent"]["RESUME"]; ?></textarea></div>
					</div>

					<div>
						<div><?= GetMessage("learning_TRANSCRIPT"); ?>:</div>
						<div><?= $arResult["arStudent"]["TRANSCRIPT"]; ?>-<?= $arResult["ID"] ?></div>
					</div>
				</div>
			<? endif; ?>
			<? if ($arResult["IS_ADMIN"]): ?>
				<div class="profile-link profile-user-div-link"><a title="<?= GetMessage("USER_SHOW_HIDE") ?>" href="javascript:void(0)" onclick="SectionClick('admin')"><?= GetMessage("USER_ADMIN_NOTES") ?></a></div>
				<div id="user_div_admin" class="profile-block-<?= !str_contains($arResult["opened"], "admin") ? "hidden" : "shown" ?>">

					<div>
						<div><?= GetMessage("USER_ADMIN_NOTES") ?>:</div>
						<div><textarea cols="30" rows="5" name="ADMIN_NOTES"><?= $arResult["arUser"]["ADMIN_NOTES"] ?></textarea></div>
					</div>
				</div>
			<? endif; ?>
			<? // ********************* User properties ***************************************************
			?>
			<? if ($arResult["USER_PROPERTIES"]["SHOW"] == "Y"): ?>
				<div class="profile-link profile-user-div-link"><a title="<?= GetMessage("USER_SHOW_HIDE") ?>" href="javascript:void(0)" onclick="SectionClick('user_properties')"><?= trim($arParams["USER_PROPERTY_NAME"]) <> '' ? $arParams["USER_PROPERTY_NAME"] : GetMessage("USER_TYPE_EDIT_TAB") ?></a></div>
				<div id="user_div_user_properties" class="profile-block-<?= !str_contains($arResult["opened"], "user_properties") ? "hidden" : "shown" ?>">

					<? $first = true; ?>
					<? foreach ($arResult["USER_PROPERTIES"]["DATA"] as $FIELD_NAME => $arUserField): ?>
						<div>
							<div class="field-name">
								<? if ($arUserField["MANDATORY"] == "Y"): ?>
									<span class="starrequired">*</span>
								<? endif; ?>
								<?= $arUserField["EDIT_FORM_LABEL"] ?>:
							</div>
							<div class="field-value">
								<? $APPLICATION->IncludeComponent(
									"bitrix:system.field.edit",
									$arUserField["USER_TYPE"]["USER_TYPE_ID"],
									array("bVarsFromForm" => $arResult["bVarsFromForm"], "arUserField" => $arUserField),
									null,
									array("HIDE_ICONS" => "Y")
								); ?>
							</div>
						</div>
					<? endforeach; ?>
				</div>
			<? endif; ?>
		</div>
		<? // ******************** /User properties ***************************************************
		?>
		<p><? echo $arResult["GROUP_POLICY"]["PASSWORD_REQUIREMENTS"]; ?></p>
		<div class="lk__btns">
			<input class="btn" type="reset" value="<?= GetMessage('MAIN_RESET'); ?>">
			<input class="btn btn-red" type="submit" name="save" value="<?= (($arResult["ID"] > 0) ? GetMessage("MAIN_SAVE") : GetMessage("MAIN_ADD")) ?>">
		</div>
		</form>
		<?
				/* if ($arResult["SOCSERV_ENABLED"]) {
					$APPLICATION->IncludeComponent(
						"bitrix:socserv.auth.split",
						".default",
						array(
							"SHOW_PROFILES" => "Y",
							"ALLOW_DELETE" => "Y"
						),
						false
					);
				} */
		?>

	<? endif ?>

	</div>
</div>