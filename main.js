
// scroll effect of nav bar
window.addEventListener('scroll', () => { document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 70); } )

// contact buttons(circular text)
const textbuttons = document.querySelectorAll('.contact_btn')
textbuttons.forEach(textbutton => {
    let text = document.getElementById('cbtn');
    text.innerHTML = text.innerText.split('').map((char, i)=>`<span style="transform: rotate(${i*13}deg)">${char}</span>`).join('');
});
//swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 35
        }
    }
  });
  const nav = document.querySelector('.nav_links');
  const openNavBtn = document.getElementById('nav_toggle-open');
  const closeNavBtn = document.getElementById('nav_toggle-close');
  const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
  }
  openNavBtn.addEventListener('click', openNav);
  const closeNav = () => {
    nav.style.transition = '0.5s';
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
  }
  closeNavBtn.addEventListener('click', closeNav);

  