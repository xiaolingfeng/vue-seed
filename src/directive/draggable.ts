import Vue from 'vue'

Vue.directive('draggable', {
  inserted: function (el) {
    el.classList.add('gl-draggable')
    el.setAttribute('draggable', 'true')
    el.addEventListener('dragstart', event => event.dataTransfer?.setData('text/plain', 'This text may be dragged'))
    el.addEventListener('dragover', event => console.log('dragover', event))
    el.addEventListener('dragend', event => {
      console.log(event)
    })
  }
})
