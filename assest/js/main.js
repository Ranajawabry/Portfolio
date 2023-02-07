let body = document.body;
console.log(body);

let loading=document.querySelector('.loading');


loading.style.opacity=1;
body.style.overflow='hidden';

window.addEventListener('load',()=>{

  setInterval(() => {
    loading.style.opacity=0;
    body.style.overflow='auto';
  }, 2000);
})

window.addEventListener('scroll', ()=>{
    if(scrollY>333){
    document.getElementsByTagName('nav')[0].classList.add('new_nav');

    }
    else{
        document.getElementsByTagName('nav')[0].classList.remove('new_nav');
    }
})