sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Controller, JSONModel) {
        "use strict";

        return Controller.extend("databinding.controller.Binding", {
            onInit: function() {

                var oModelo = new JSONModel("json/modelo.json");
                this.getView().setModel(oModelo, "DataMod");

                var oCategoria = new JSONModel("");
                this.getView().setModel(oCategoria, "DataCat");

            },

            cboxCategFill: function(joao) {
                //alert(joao.getParameter("selectedItem").getKey());

                var oCategoria = new JSONModel("json/categoria.json");
                this.getView().setModel(oCategoria, "DataCat");
                this.getView().byId("cboxCateg").getBinding("items").filter([
                    new sap.ui.model.Filter(
                        "idmodelo",
                        "EQ",
                        joao.getParameter("selectedItem").getKey())
                ]);


            },
        });
    });