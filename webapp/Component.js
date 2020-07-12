sap.ui.define([
	"sap/ui/ibso/bootstrap/BaseComponent",
	"sap/ui/Device",
	"julymeetup/sapui5/architecture/library/model/models",
	"julymeetup/sapui5/architecture/library/service/ServiceManager",
	"julymeetup/sapui5/architecture/library/service/NorthwindService"

], function (BaseComponent, Device, models, ServiceManager, NorthwindService) {
	"use strict";

	return BaseComponent.extend("julymeetup.sapui5.architecture.library.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			this._initServiceManager();
			
			// call the base component's init function
			BaseComponent.prototype.init.apply(this, arguments);
			
			// // enable routing
			// this.getRouter().initialize();

			// // set the device model
			// this.setModel(models.createDeviceModel(), "device");
		},

		_initServiceManager: function () {
            // register services
            var oODataModel = this.getModel("northwind");
            var oNorthwindService = new NorthwindService(oODataModel);
            ServiceManager.setNorthwindService(oNorthwindService);
        }
	});
});