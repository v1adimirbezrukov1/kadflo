<?php

if (file_exists($_SERVER["DOCUMENT_ROOT"] . "/local/modules/nastart.ion/admin/ion_settings_edit.php")) {
	require_once($_SERVER["DOCUMENT_ROOT"] . "/local/modules/nastart.ion/admin/ion_settings_edit.php");
} else {
	require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/nastart.ion/admin/ion_settings_edit.php");
}
