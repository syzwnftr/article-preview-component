const componentOne = document.querySelector('.componentOne');
const componentThree = document.querySelector('.componentThree');
const componentTwo = document.querySelector('.componentTwo');

const shareIcon = document.querySelector('.shareIcon');

let widthLimitDesktop = 1200;
let widthLimitMobile = 375;
let windowWidth = window.innerWidth;


if (windowWidth >= widthLimitDesktop) {
   shareIcon.addEventListener('click', function() {
    componentThree.classList.add('componentThreeActive');
    componentOne.classList.remove('componentOneDeactivated');
    componentTwo.classList.remove('componentTwoActive');
   });
}

if (windowWidth >= widthLimitMobile && windowWidth <= widthLimitDesktop) {
    shareIcon.addEventListener('click', function() {
        componentOne.classList.add('componentOneDeactivated');
        componentTwo.classList.add('componentTwoActive');
        componentThree.classList.remove('componentThreeActive');
    });
 }
 
