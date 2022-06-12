const panels = document.querySelectorAll('.panel');
panels.forEach(panel =>{
    panel.addEventListener('click', () =>{
        //this function removes any active class on all cards before they are clicked on
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}