// *inner html para change.

let btn =document.querySelector(`.btn`)
let para =document.querySelector(`p`)

function myFunction(){
    // console.log(`hlw`)
    para.innerHTML=`hlw`
}

btn.addEventListener(`click`,myFunction)
// para change end.
//* password starts=>
let showBtn=document.querySelector(`.show`)
let inputField=document.querySelector(`.password`)
function togglepassword(){console.log(inputField.type)
if(inputField.type==`password`)
{inputField.type=`text`;
showBtn.innerHTML=`<i class="bi bi-eye"></i>`
} else{inputField.type=`password`;
showBtn.innerHTML=`<i class="bi bi-eye-slash"></i>`}
}

showBtn.addEventListener(`click`,togglepassword)
// password end.
// *image hover starts=>
let image= document.querySelector(`img`)
function toggleImage(){image.src='./image/img-2.jpg'  }
image.addEventListener(`mouseenter`,toggleImage)
function prevImage() {image.src='./image/img-1.jpg' }
image.addEventListener(`mouseout`,prevImage)
// image hover end.
//* progress bar starts=>
let priceSlider=document.querySelector(`.price`)
let displayPrice=document.querySelector(`.display-price`)
function updatePrice(){
   
    displayPrice.innerHTML=priceSlider.value;
}
priceSlider.addEventListener(`change`,updatePrice)

// progressbar end.