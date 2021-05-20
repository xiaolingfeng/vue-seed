import Vue from 'vue'

let dragEl:HTMLElement

Vue.directive('draggable', {
  inserted: function (el) {
    el.classList.add('gl-draggable')
    el.setAttribute('draggable', 'true')
    el.addEventListener('dragstart', event => {
      event.dataTransfer?.setData('text/plain', 'This text may be dragged')
      console.log('dragstart')
      dragEl = el
    })
    // el.addEventListener('dragover', event => {})
    el.addEventListener('dragend', event => console.log('dragend'))
    el.addEventListener('drop', event => console.log('drop'))
  }
})

Vue.directive('box', {
  inserted (el) {
    el.classList.add('gl-box')
    el.addEventListener('dragenter', event => {
      event.preventDefault()
      el.classList.add('gl-box--active')
      el.append(dragEl)
    })
    el.addEventListener('dragleave', event => {
      el.classList.remove('gl-box--active')
    })
  }
})
