// nav start 
let crossBtn = document.querySelector(`.cross-btn`);
let searchBtn = document.querySelector(`.search-btn`);
let searchBox = document.querySelector(`.search-box`);
let inputFrom= document.querySelector(`.input-form`);
let input = document.querySelector(`input`);

searchBox.addEventListener('click',function(e){
    e.preventDefault();
  if(e.target.classList.contains('active-search')){
    
      searchBox.classList.remove('active-search');
  }
});
searchBtn.addEventListener('click',function(){
    searchBox.classList.add('active-search');
});
crossBtn.addEventListener('click',function(){
    searchBox.classList.remove('active-search');
});
searchBtn.addEventListener(`click`,function(){
    input.classList.add('active-width');
})
crossBtn.addEventListener(`click`,function(){
    input.classList.remove('active-width');
})
// nav End
// banner start

$(document).ready(function(){
    $('.bannerSlider').slick({
      arrows: false,
      autoplay:true,
      autoplaySpeed:2000,
      dots: true,
      dotsClass: 'bannerDots container' 
    });
    $('.smallSlider').slick({
      arrows: false,
      autoplay:true,
      autoplaySpeed:1500,
     
    });
  });
// banner End


// prodect-card start
// prodect-card end


