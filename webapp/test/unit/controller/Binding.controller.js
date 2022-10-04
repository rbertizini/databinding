/*global QUnit*/

sap.ui.define([
	"databinding/controller/Binding.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Binding Controller");

	QUnit.test("I should test the Binding controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
