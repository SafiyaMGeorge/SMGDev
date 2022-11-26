//The functionality of this script is to change the active class on the pannel to which ever one the user clicks on.
const panels = document.querySelectorAll('.panel');

//Using a forEach loop to loop through the node list that the querySelecor put the panel classes in
panels.forEach(panel => {
    //this will add an event listener for a click acction on each panel
    panel.addEventListener('click', () =>{
        removeActive()
        //ClassList property give us a list of the classes.
        //There are also methods on the Classlist property.
        //the add method allows us to add classes to the object
        //So we are adding the class of active on the clicked card so that the css logic to expand it will occur.
        panel.classList.add('active')
    })
})
//This function removes the active class from every other panel class that is not clicked.
function removeActive(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}