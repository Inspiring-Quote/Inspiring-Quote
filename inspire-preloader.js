let mask=document.querySelector('.preloader');
window.addEventListener('load', ()=> {
    mask.classList.add('.done');
    setTimeout(()=>{
        mask.remove();
    },600)
} )
