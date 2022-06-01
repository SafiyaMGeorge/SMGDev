const menuBtn = document.querySelector('#menu');
let menuOpen = false;
//The line of code below tells the browser to lookout for when the user clicks on the the element.
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});