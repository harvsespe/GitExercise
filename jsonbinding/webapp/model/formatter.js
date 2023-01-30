sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency"
], 
function(mobileLibrary,Currency){

    return {
        formatMail: function(sEid){
            var oBundle = this.getOwnerComponent().getModel("i18n").getResourceModel();
        }
    }

});