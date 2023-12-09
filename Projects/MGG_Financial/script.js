/*the code block below will be the logic for the collapse nav to appear when clicked, and disappeared when clicked again.*/
//nav

const mainNav = document.getElementById('nav_bar');
const toggleNav = document.getElementById('hamburger');
const mainSec = document.getElementById('mainContent');

toggleNav.addEventListener('click', (e) =>{
  e.preventDefault();
  const visibility = mainNav.getAttribute('data-visible');
  if(visibility === "false"){
    mainNav.setAttribute('data-visible', true);
    toggleNav.setAttribute('aria-expanded', true);
  }else{
    mainNav.setAttribute('data-visible', false);
    toggleNav.setAttribute('aria-expanded', false);
  }
 
});
mainSec.addEventListener('click', (e) =>{
  e.preventDefault();
  const visibility = mainNav.getAttribute('data-visible');
  if(visibility === 'true'){
    mainNav.setAttribute('data-visible', false);
    toggleNav.setAttribute('aria-expanded', false);
  }
});

/*the block below stops the animation of the navbar sliding when the page is being resized.*/
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
  
/*Form section*/

/*The block below controls the the button events to open the contact forms. */
const buttons = document.querySelectorAll('.btn');
   const formOne = document.getElementById('form_one');
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', (e) =>{

   formOne.style.display = "flex";
});
}
 

/*The block below controls the close button on the contact form.*/

const close = document.getElementById('close');
close.addEventListener('click', (e) =>{
  formOne.style.display = "none";
})

//The code block below sends the data in the contact form to the client via email using email.js.
let sendMail = document.getElementById('send');
let mailSubject = document.getElementById('subject');

sendMail.addEventListener('click', (e)=>{
    e.preventDefault();
    (function(){
        emailjs.init('vZMLDtvaSFfOmOU0L') //this is where the public key from emailjs goes.
    })();
    let params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email').value,
        phone_id: document.getElementById('phone').value,
        subject: mailSubject.options[mailSubject.selectedIndex].text,
        message: document.getElementById('message').value
    };

    let serviceID = "service_2twjo1r"; //This is the emailJS service ID.
    let templateID = "template_z51erll"// thisis the actual email template id in emailJS.
    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert("Your email has been sent successfully");
    })
    .catch(error => {
        alert("Error 400 email not sent!")
    });
});














//banner section
let hero1 = 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1438&q=80';

let hero2 ='https://images.unsplash.com/photo-1597524678053-5e6fef52d8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1352&q=80'

let hero3 = 'https://plus.unsplash.com/premium_photo-1661393579989-93d4b808f054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

let hero4 = 'https://images.unsplash.com/photo-1563196638-8c9457546e5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

let hero5 = 'https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80'

let hero6 = 'https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'

const heroCarosel = [hero1, hero2, hero3, hero4, hero5, hero6];

let bannerImg = 'url('+ heroCarosel[2] + ')';

 let bannerStyle =`
     position: relative;
     background-size:cover;
     background-repeat:no-repeat;
     background-position:center center;
     `
 
 const carosel = () =>{
  for(let i = 0; i < heroCarosel.length; i++){
    
}
  
}
  document.getElementById('banner').style.cssText=bannerStyle;
let heroImg = document.getElementById('banner').style.backgroundImage = bannerImg;