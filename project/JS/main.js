const btnMenu = document.getElementById('header__button')
const menu = document.querySelector('.navigation')
const promoBlock = document.querySelector('.promo')
const closePick = menu.querySelector('svg')

function showMenu(el, callback) {
  el.addEventListener('click', callback)
}

function active() {
  menu.classList.toggle('active__menu')
  if (promoBlock) {
    promoBlock.classList.toggle('promo__disactive')
  } else return
}

showMenu(closePick, active)

btnMenu.addEventListener('click', e => {
  e.stopPropagation()
  active()
})

//для скрытия меню при клике вне области меню
document.addEventListener('click', e => {
  const its_menu = e.target == menu || menu.contains(e.target);
  const its_btnMenu = e.target == btnMenu;
  const menu_is_active = menu.classList.contains('active__menu');
  if (!its_menu && !its_btnMenu && menu_is_active) {
    active();
  }
})
