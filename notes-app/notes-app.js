// const p = document.querySelector('p')
// console.log(p)

const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
   // p.remove()
   console.log(p.textContent)
})