import * as model from "./../model.js"
import * as view from "./edit.view.js"


function init () {
    const id = getRequestID()
    const request = model.getRequestByiD(id)
    view.renderRequest(request)
    setupEventListener()
}

function setupEventListener () {
    view.elements.form.addEventListener('submit', formSubmitHendler)
}

function formSubmitHendler(e) {
    e.preventDefault()
    const formData = view.getFormInput()
    model.updateRequest(formData)
    window.location = "./table.html"
}

function getRequestID () {
    const params = new URLSearchParams(window.location.search);
    return params.get("id")
}

init()