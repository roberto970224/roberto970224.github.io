(function(){

const openButton = document.querySelector('.nav_menu');
const menu = document.querySelector('.nav_link');
const closeMenu = document.querySelector('.nav_close');

openButton.addEventListener('click', ()=>{
    
    menu.classList.toggle('nav_link--show')

})
closeMenu.addEventListener('click',()=>{
    menu.classList.remove('nav_link--show');
})
   


// document.querySelectorAll(".nav_links").forEach(element => {
//     element.addEventListener("click", function (e) {
//         e.preventDefault();

//         const targetId = this.getAttribute("href").substring(1);
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {

//             const offset = targetElement.getBoundingClientRect().top + window.scrollY;
//             window.scrollTo({
//                 top: offset,
//                 behavior: 'smooth'
//             });
//             // window.scrollTo({
//             //     top: targetElement.offsetTop,
//             //     behavior: 'smooth'
//             // });
//         }
//     });
// });







})();