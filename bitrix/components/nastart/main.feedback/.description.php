<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$arComponentDescription = array(
	"NAME" => GetMessage("NASTART_FEEDBACK_COMPONENT_NAME"),
	"DESCRIPTION" => GetMessage("NASTART_FEEDBACK_COMPONENT_DESCR"),
	"ICON" => "/images/feedback.gif",
	"PATH" => array(
		"ID" => "feedback",
		"NAME" => GetMessage("NASTART_COMPONENTS"),
	),
);
?>