import * as model from './../model.js'
import * as view from './table.view.js'

function init (){
    const requests = model.getRequest()
    view.renderRequest(requests)
    addEventListeners()
    const newRequestCount = model.countNewRequest()
    view.renderBadgeNew(newRequestCount)
    const filter = model.getFilter()
    view.updateFilter(filter)
}

function addEventListeners(){
    view.elements.select.addEventListener('change', filterProducts)
    view.elements.topStatusBar.addEventListener('click', filterByStatus)
    view.elements.leftStatusLinks.forEach((link) => {
        link.addEventListener('click', filterByStatus)
    })
}

function filterProducts (){
    const filter = model.changeFilter('products', this.value)
    const filteredRequests = model.filterRequest(filter)
    view.renderRequest(filteredRequests)
}

function filterByStatus(e) {
     const filter = model.changeFilter('status', e.target.dataset.value)
     const filteredRequest = model.filterRequest(filter)
     view.renderRequest(filteredRequest)
     view.updateStatusLinks(e.target.dataset.value)
}

init ()