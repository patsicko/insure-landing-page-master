const close=document.getElementById('close');
console.log(close)
const hamburger=document.getElementById('hamburger');
console.log(hamburger)

const mobileNav=document.getElementById('mobileNav');

const imageIntro=document.getElementById('image-intro');
const navBar=document.getElementById('navBar')

console.log(mobileNav)

hamburger.addEventListener('click',e=>{
    navBar.classList.toggle('hide-nav-bar')
    mobileNav.classList.toggle('show-nav');
    console.log(mobileNav)
    imageIntro.classList.toggle('hide-image')
    hamburger.classList.toggle('hide-hamburger');
    
   
})

close.addEventListener('click',e=>{

    

    close.classList.toggle('hide-nav');
    navBar.classList.toggle('show-nav-bar');
    imageIntro.classList.toggle('show-image');
    hamburger.classList.toggle('show-hambuger')
})