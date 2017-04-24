<?php

$pageData["title"] = "Bitzawolf - LD 38";
$pageData["description"] = "Ludum Dare 38 compo entry.";
$pageData["bodyOnLoad"][] = "new startGame()";
$pageData["styles"][] = "LDJ38.css";

$pageData["scripts"][] = "ldj38/canvas/canvas-controller.js";
$pageData["scripts"][] = "ldj38/ui/title-ui.js";
$pageData["scripts"][] = "ldj38/ui/battle-ui.js";
$pageData["scripts"][] = "ldj38/attributes/attribute.js";
$pageData["scripts"][] = "ldj38/action/action.js";
$pageData["scripts"][] = "ldj38/enemies/enemy.js";
$pageData["scripts"][] = "ldj38/player/player.js";
$pageData["scripts"][] = "ldj38/one-day.js";

 require "php/views/LDJ38.php";
