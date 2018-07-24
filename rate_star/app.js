// 'use strict';

const oRatings = {
    sony: 4.7,
    samsung: 4.5,
    vizio: 2.5,
    phillips: 2,
    tcl: 3
}

const totalRating = 5;
const selProduct = document.getElementById('selProduct');
const ratingControl = document.getElementById('rating-control');
let product;

selProduct.addEventListener('change',(event)=>{
    product = event.target.value;
    ratingControl.disabled = false;
    ratingControl.value = oRatings[product];
});

ratingControl.addEventListener('blur',(event)=>{
    let ratingValue = event.target.value;

    if(ratingValue>5) {
        alert('Rating should be between 1 - 5');
        return;
    }
    oRatings[product] = ratingValue;
    fnGetRatings();
})




document.addEventListener('DOMContentLoaded', fnGetRatings);

function fnGetRatings() {
    for(let rating in oRatings) {
        let starPrecentage = (oRatings[rating]/totalRating) * 100;
        let starPrecentageRounded = `${Math.round(starPrecentage/10)*10}%`;
        document.querySelector(`.${rating} .stars-inner`).style.width = starPrecentageRounded;
        document.querySelector(`.${rating} .number-rating`).innerHTML = oRatings[rating];
    }
}