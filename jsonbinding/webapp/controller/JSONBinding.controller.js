sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "../model/formatter"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

            formatter: formatter,

            onInit: function () {
                var oAddressModel = new JSONModel();
                var oAddress = {
                    "EID": "harvey.espe",
                    "Enabled": true,
                    "Address": {
                        "Street": "Street",
                        "City": "City",
                        "Zip": "4023",
                        "Country": "Philipines"
                    },
                    "SalesAmount": "100",
                    "CurrencyCode": "USD"
                };

                oAddressModel.setData(oAddress);
                var oView = this.getView();
                oView.setModel(oAddressModel, "oAddressModel");


            },
            onSelectProduct: function (oEvent) {

                //get control list            
                var oList = oEvent.getSource();

                //get selected item                
                var oSelItem = oList.getSelectedItem();
                var oBindingContext = oSelItem.getBindingContext("ProductsModel");

                //get the context binding path               
                var sSelItemPath = oBindingContext.getPath();
                var oPanel = this.byId("Panel4");
                oPanel.bindElement({
                    path: sSelItemPath,
                    model: "ProductsModel"
                })
            }
        });
    });