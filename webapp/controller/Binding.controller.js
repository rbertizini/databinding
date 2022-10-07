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

                var oLivro = new JSONModel("");
                this.getView().setModel(oLivro, "DataLiv");

            },

            cboxCategFill: function(joao) {
                //alert(joao.getParameter("selectedItem").getKey());

                this.getView().byId("cboxCateg").clearSelection();

                var oLivro = new JSONModel("");
                this.getView().setModel(oLivro, "DataLiv");

                var oCategoria = new JSONModel("json/categoria.json");
                this.getView().setModel(oCategoria, "DataCat");
                this.getView().byId("cboxCateg").getBinding("items").filter([
                    new sap.ui.model.Filter(
                        "idmodelo",
                        "EQ",
                        joao.getParameter("selectedItem").getKey())
                ]);
            },

            lstLivroFill: function(info) {

                var oLivro = new JSONModel("json/livro.json");
                this.getView().setModel(oLivro, "DataLiv");
                this.getView().byId("LstLivros").getBinding("items").filter([
                    new sap.ui.model.Filter(
                        "idcategoria",
                        "EQ",
                        info.getParameter("selectedItem").getKey())
                ]);
            }
        });
    });