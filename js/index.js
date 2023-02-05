const stars = document.querySelector('.stars');
const btn1 = document.querySelector('.item__link-stars');

btn1.addEventListener('click', () => {
    stars.classList.add('block');
    brightStars.classList.remove('block');
    starsStatistic.classList.remove('block');
    starsStatistic2.classList.remove('block');
});



//---------------------------------------------------------------

const brightStars = document.querySelector('.bright-stars');
const btn2 = document.querySelector('.item__link-bright-stars');
console.log(brightStars);
console.log(btn2);

btn2.addEventListener('click', () => {

    brightStars.classList.add('block');
    starsStatistic.classList.remove('block');
    stars.classList.remove('block');
    starsStatistic2.classList.remove('block');
});




//----------------------------------------------------------------

const starsStatistic = document.querySelector('.stars-statistic');
const btn3 = document.querySelector('.item__link-stars-statistic');

btn3.addEventListener('click', () => {
    starsStatistic.classList.add('block');
    stars.classList.remove('block');
    brightStars.classList.remove('block');
    starsStatistic2.classList.remove('block');
});

//------------------------------------------------------------
const starsStatistic2 = document.querySelector('.stars-statistic-two');
const btn4 = document.querySelector('.item__link-stars-statistic-two');

btn4.addEventListener('click', () => {
    starsStatistic2.classList.add('block');
    starsStatistic.classList.remove('block');
    stars.classList.remove('block');
    brightStars.classList.remove('block');
});
