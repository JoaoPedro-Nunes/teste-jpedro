function mostrarcard() {
  var mostrarcard = document.getElementById('mostrarcard')
  if (mostrarcard.style.display === 'none') {
    mostrarcard.style.display = 'block'
    setTimeout(() => {
      mostrarcard.classList.add('transicao')
    }, 10)
  } else {
    mostrarcard.classList.remove('transicao')
    setTimeout(() => {
      mostrarcard.style.display = 'none'
    }, 500)
  }
}

const expandButton = document.querySelector('.seta')
const menu = document.querySelector('.menu')
const collapsedList = document.querySelector('.collapsed-list')
const expandedList = document.querySelector('.expanded-list')
expandButton.addEventListener('click', () => {
  menu.classList.toggle('expanded')
  collapsedList.style.display = menu.classList.contains('expanded')
    ? 'none'
    : 'block'
  expandedList.style.display = menu.classList.contains('expanded')
    ? 'block'
    : 'none'
})
