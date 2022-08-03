const hiddens = document.querySelectorAll('.hidden')
const btn = document.querySelector('.services__btn')

for (const hidden of hiddens) {
  btn.addEventListener('click', () => {
    hiddenOff()
    btn.classList.add('hidden')
  })
}

function hiddenOff () {
  hiddens.forEach((hidden) => {
    hidden.classList.remove('hidden')
  })
}



