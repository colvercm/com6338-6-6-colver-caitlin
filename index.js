var hamburgerBtn = document.querySelector('.hamburger-btn')
var hamburgerMenu = document.querySelector('.hamburger-menu')

//Open Function
function openMenu(e) {
    e.stopPropagation()
    hamburgerMenu.classList.toggle('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  
        if (hamburgerMenu.classList.contains('show-menu')) {
            hamburgerBtn.setAttribute("aria-expanded", "true");
        } else {
            hamburgerBtn.setAttribute("aria-expanded", "false");
        }
        hamburgerBtn.focus()

    var menuA = document.querySelector('.hamburger-menu a');
        menuA.addEventListener("click", () => {
        menuA.focus();
    });     
}

hamburgerBtn.onclick = openMenu

//Close Function
function closeMenu(e) {
    e.stopPropagation()
    hamburgerMenu.classList.remove('show-menu')

    if (hamburgerMenu.classList.remove('show-menu')) {
        hamburgerBtn.setAttribute("aria-expanded", "false");
    } else {
        hamburgerBtn.setAttribute("aria-expanded", "true");
    } 
        hamburgerMenu.focus();
}

//Escape Button
document.onkeyup = function(e) {
    if (e.key === 'Escape') {
        closeMenu(e)
    }
}

//When body is clicked on
document.body.onclick = function(e) {
    if(!hamburgerMenu.contains(e.target)) {
       closeMenu(e)
     }
}



