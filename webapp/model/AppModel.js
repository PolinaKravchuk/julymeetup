sap.ui.define([
    "sap/ui/ibso/model/BaseModel",  
	"julymeetup/sapui5/architecture/library/service/ServiceManager"
    
], function (BaseModel, ServiceManager) {
    "use strict";

    /**
     * @class
     * Application model 
     *
     * @public
     * @alias model.AppModel
     */
    let AppModel = BaseModel.extend("julymeetup.sapui5.architecture.library.model.AppModel", {

        /**
         * Constructor
         * @return {sap.ui.mode.json.JSONModel} base JSON model
         */
        constructor: function () {
            BaseModel.prototype.constructor.apply(this, arguments);        
            this.setData({
                LoadingShippers: true,      // loading flag
                Shippers: []                // shipper list
            });
            return this;
        },  

        /**
         * Override of the parent loadInitialData method.
         * Implemented to determine the active reference years to be used
         * by the Fleet Mgmt app.
         * This data is static and specific to Fleet Mgmt, hence the reason it is set in the app model.
         * 
         * @returns {Promise} A resolved promise
         */
        loadInitialData: function() {
            return ServiceManager.getNorthwindService().getShippers()
                .done(function (oNormalizedResponseData, oResponse) {
                    // reset the loading flag
                    this.setProperty("/LoadingShippers", false);

                    // update the shipper list
                    this.setProperty("/Shippers", oNormalizedResponseData);
                }.bind(this));
        }
    });

    return AppModel;
});