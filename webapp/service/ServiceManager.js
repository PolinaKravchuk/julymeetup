sap.ui.define([
    "sap/ui/ibso/util/Assert"
], function (Assert) {
    "use strict";

    /**
     * Singleton class that acts as a registry for services used in the application.
     * 
     * @discussion This class makes it easier to retrieve a service when the application component
     * may not necessarily be available. It is initialized by the component at launch time.
     * This class assumes that all services use the same OData model to connect to the server.
     */
    var ServiceManager = jQuery.extend({}, {
        /**
         * The Northwind service.
         */
        _oNorthwindService: null,

        /**
         * Sets the Northwind service.
         * 
         * @param oNorthwindService The service.
         */
        setNorthwindService: function (oNorthwindService) {
            // set the service
            this._oNorthwindService = oNorthwindService;
        },

        /**
         * Returns the Northwind service.
         * 
         * @return The Northwind service.
         */
        getNorthwindService: function () {
            // get the service
            var oResult = this._oNorthwindService;
            Assert.assert(oResult, "Attempted to use the Northwind service before it was loaded.");
            return oResult;
        }
    });
    return ServiceManager;
});
