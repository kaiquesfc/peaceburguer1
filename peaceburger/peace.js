const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
let idx = 0;
var quadroprev = 0;
var quadronext = 0;

function updateCarousel() {
  imgs.style.transform = 'translateX(${-idx * 100}%)';
}

function nextSlide() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }
  updateCarousel();
}


function prevSlide() {
  idx--;
  if (idx < 0) {
    idx = img.length - 1;
  }
  updateCarousel();
}

function carroussel() {
  nextSlide();
}

setInterval(carroussel, 3000);

document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          button.classList.add('show');
      } else {
          button.classList.remove('show');
      }
  });

  button.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
  });
});

function nextSlide() {
  const container = document.querySelector('.container');
  container.style.transition = 'transform 0.5s ease-in-out';
 if (quadronext == 0){
    quadronext = quadronext + 1445;
    container.style.transform = 'translateX(-1445px)';
 }
 else if (quadronext == 1445)
   {
     quadronext = quadronext + 1445;
     container.style.transform = 'translateX(-2890px)';
   }
 else if (quadronext == 2890)
  {
     quadronext = quadronext + 1445;
     container.style.transform = 'translateX(-4335px)';
  }
  else 
   {
      quadronext = 0;
      container.style.transform = 'translateX(0px)';
   }

}

function prevSlide() {
  const container = document.querySelector('.container');
  container.style.transition = 'transform 0.5s ease-in-out';
  quadronext -= 1445;
  if (quadronext < 0) {
    quadronext = 4335;
  }
  container.style.transform = `translateX(-${quadronext}px)`;
}

/*function Troca_cor()
			{
				document.bgColor=document.getElementById("cor").value;
				
			}*/               