const dropdownButton = document.getElementById('dropdown-button')
const dropdownContent = document.getElementById('dropdown-content')

dropdownButton.addEventListener('click', function () {
  dropdownContent.classList.toggle('show')
})
