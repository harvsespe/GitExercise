sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1espe.controller.MainView", {
            onInit: function () {

            },

            onSend: function(oEvent){
                var oResourceModel = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var oView = this.getView();
                var sName = oView.byId("NameInput").getValue();
                var sSurname = oView.byId("SurnameInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var oTech = oView.byId("TechInput").getSelectedKey();

                console.log(oView);
                console.log(sName);
                console.log(sSurname);
                console.log(sAge);
                console.log(oTech);
                MessageToast.show(oResourceModel.getText("labelYourNameIs", [sName]) + oResourceModel.getText("labelYourSurnameIs", [sSurname]) + oResourceModel.getText("labelYourAgeIs", [sAge]) + oResourceModel.getText("labelYourTechIs", [oTech]));
            }
        });
    });
