const componentThree = document.querySelector('.componentThree');
const shareIcon = document.querySelector('.shareIcon');

shareIcon.addEventListener('click', function() {
    componentThree.classList.add('componentThreeActive');
});