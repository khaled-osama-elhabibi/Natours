navLinks = document.querySelectorAll(".navigation__item");
navCheckbox = document.querySelector(".navigation__checkbox");
navLinks.forEach(navLink => {
    navLink.addEventListener("click",()=>{
        navCheckbox.checked = false ; 
    })    
});