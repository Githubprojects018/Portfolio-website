/* Link active  */
const headerlinks = document.querySelectorAll('.nav-link')

function linkactive() {
  headerlinks.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}
headerlinks.forEach(l => l.addEventListener('click', linkactive))

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 50) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')


    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)