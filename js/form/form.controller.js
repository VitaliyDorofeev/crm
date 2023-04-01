import getRandomData from "./form.test-data.js";
import * as view from "./form.view.js";
import * as model from "./../model.js";

function init () {
    renderTest()
    setupEventListener()
}

function setupEventListener () {
    view.elements.form.addEventListener('submit', formSubmitHendler)
}

function renderTest () {
    view.insertTest(getRandomData());
}

function formSubmitHendler (e) {
    e.preventDefault();
    const formData = view.getFormInput();
    model.addRequest(formData)
    view.clearForm();
    renderTest();
}

init();