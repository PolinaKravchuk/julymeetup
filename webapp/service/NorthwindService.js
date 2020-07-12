sap.ui.define([
    "sap/ui/ibso/service/BaseService",
    "sap/ui/ibso/util/Assert"
], function (BaseService, Assert) {
    "use strict";

    /**
     * Northwind backend service class.
     */
    var NorthwindService = BaseService.extend("julymeetup.sapui5.architecture.library.service.NorthwindService", {
        constructor: function (oODataModel) {
            // call super and pass the model
            BaseService.prototype.constructor.apply(this, arguments);
            return this;
        },

        /**
         * Reads the employee list with the specified filters and sorters.
         * 
         * @param aFilters The filters.
         * @param aSorters The sorters.
         * @return A promise object.
         */
        getEmployees: function (aFilters, aSorters) {
            // call the service asynchronously
            return this.read("/Employees", {
                filters: aFilters,
                sorters: aSorters
            });
        },

        /**
         * Reads employee details.
         * 
         * @param iEmployeeId The employee ID.
         * @param sExpandTo The employee attributes to be expanded.
         * @return A promise object.
         */
        getEmployeeDetails: function (iEmployeeId, sExpandTo) {
            // validate the parameter
            Assert.assert(iEmployeeId > 0,
                "Attempted to get employee details with an invalid employee ID.");

            // read employee details
            var oParams = {};
            if (sExpandTo) {
                oParams = this.expandTo(oParams, sExpandTo);
            }
            return this.read("/Employees(" + iEmployeeId + ")", oParams);
        },

        /**
         * Reads the order list with the specified filters.
         * 
         * @param aFilters The filters.
         * @param sExpandTo The order attributes to be expanded.
         * @return A promise object.
         */
        getOrders: function (aFilters, sExpandTo) {
            // call the service asynchronously
            var oParams = {
                filters: aFilters
            };
            if (sExpandTo) {
                oParams = this.expandTo(oParams, sExpandTo);
            }
            return this.read("/Orders", oParams);
        },

        /**
         * Reads the shipper list.
         * 
         * @return A promise object.
         */
        getShippers: function () {
            // call the service asynchronously
            return this.read("/Shippers");
        }
    });
    return NorthwindService;
});
