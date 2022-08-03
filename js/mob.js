const hiddensa = document.querySelectorAll('.hidden_mob')
const btna = document.querySelector('.about__btn')
const btnclose = document.querySelector('.about__btn-close')


for (const hidden of hiddensa) {
  btna.addEventListener('click', () => {
    hiddenOffMob()
    btna.classList.add('hidden_mob')
    btnclose.classList.remove('close')
  });

  btnclose.addEventListener('click', () => {
    hiddencloseMob()
    btna.classList.remove('hidden_mob');
    btnclose.classList.add('close');
  });

}

function hiddenOffMob () {
  hiddensa.forEach((hidden) => {
    hidden.classList.remove('hidden_mob')
  })
}

function hiddencloseMob () {
  hiddensa.forEach((hidden) => {
    hidden.classList.add('hidden_mob')
  })
}
