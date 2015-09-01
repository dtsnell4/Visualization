"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/form/Form", "src/form/Slider"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.form_Form, root.form_Slider);
    }
}(this, function (DataFactory, Form, Slider) {
    return {
        form: {
            simple: function () {
                return new Form()
                    .inputs(DataFactory.Form.simple.inputs)
                ;
            }
        },
        slider: {
            simple: function () {
                return new Slider()
                    .columns(DataFactory.Slider.simple.columns)
                    .data(DataFactory.Slider.simple.data)
                ;
            }
        }
    };
}));
