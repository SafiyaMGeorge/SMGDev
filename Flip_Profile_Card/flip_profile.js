const learn_btn = document.querySelector('.btn');
const card = document.querySelector('#card');
let profile_flip =false;
learn_btn.addEventListener('click', () => {
    if(!profile_flip){
        card.classList.add('open');
        profile_flip=true;
    }
    else{
        card.classList.remove('open');
        profile_flip = false;
    }
})