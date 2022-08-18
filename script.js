const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  breakpointsBase: 'container',
  simulateTouch: true,
  grabCursor: true,
  slideToClickedSlide: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
})
let BrandList = document.querySelector('.brands')
let brandButtonShow = document.querySelector('.read__more')

brandButtonShow.addEventListener('click', function (evt) {
  evt.preventDefault()
  BrandList.classList.toggle('brands__show')
  brandButtonShow.classList.toggle('read__low')
  brandButtonShow.textContent =
    brandButtonShow.textContent === 'Показать все'
      ? (brandButtonShow.textContent = 'Скрыть всё')
      : (brandButtonShow.textContent = 'Показать все')
})
