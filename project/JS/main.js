const menuButton = document.getElementById('header__button')
const menu = document.querySelector('.header__navigation')

const promoBlock = document.querySelector('.promo')


const point = document.querySelector('.header__wrapper').getBoundingClientRect().right
document.querySelector('.header').offsetWidth
document.querySelector('.header__wrapper').offsetWidth

// function openMenu(callback){
//   menuButton.addEventListener('click', callback)
// }


menuButton.addEventListener('click', (e) => {
  menu.classList.toggle('active_menu')

  menu.style.left = point + 'px'
  promoBlock.classList.toggle('promo_disactive')
})
