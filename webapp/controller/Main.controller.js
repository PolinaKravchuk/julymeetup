sap.ui.define([
	"sap/ui/ibso/controller/BaseController"

], function (BaseController) {
	"use strict";

	return BaseController.extend("julymeetup.sapui5.architecture.library.controller.Main", {
		onInit: function () {
			BaseController.prototype.onInit.call(this);
		},

		onRouteMatch: function () {
			debugger;
		},

		getViewModelName: function () {
			return "viewModel";
		}
	});
});