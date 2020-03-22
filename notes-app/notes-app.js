const notes = [{
   title: 'My next fishing trip',
   body: 'I would like to hike my float tube to an alpine lake'
}, {
   title: 'Habit to work on',
   body: 'Eat more plant-based diet'
}, {
   title: 'Career',
   body: 'GET ONE!!!'
}]

   document.querySelector('#create-note').addEventListener('click', function (e) {
      e.target.textContent = 'Create Note Clicked'
   })
      
   document.querySelector('#remove-all-notes').addEventListener('click', function (e) {
      console.log('Remove All button clicked.')
      document.querySelectorAll('.note').forEach(function(enote) {
         enote.remove()
      })
   })
