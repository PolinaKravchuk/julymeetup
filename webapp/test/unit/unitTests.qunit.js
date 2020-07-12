/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"julymeetup/sapui5/architecture/library/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});