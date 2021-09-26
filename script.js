const componentOne = document.querySelector('.componentOne');
const componentTwo = document.querySelector('.componentTwo');

const shareBtn = document.querySelector('.shareIcon');
const shareBtn2 = document.querySelector('.shareIcon2');

let count = 0;

function clicked() {
    if (count === 0) {
        componentTwo.classList.add('componentTwoActive');
        componentOne.classList.add('componentOneDeactivated');
        count = 1;
    } else {
        componentTwo.classList.remove('componentTwoActive');
        componentOne.classList.remove('componentOneDeactivated');
        count = 0;
    }

}


shareBtn.addEventListener('click', clicked)

shareBtn2.addEventListener('click', clicked);

