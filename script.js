const componentThree = document.querySelector('.componentThree');
const shareIcon = document.querySelector('.shareIcon');

let widthLimit = 1200;
let windowWidth = window.innerWidth;

shareIcon.addEventListener('click', function() {
    if(windowWidth >= widthLimit ) {
        componentThree.classList.add('componentThreeActive');
    }  
});