const socialMediaDiv = document.querySelector('.shareComponent');
const infoShareDiv = document.querySelector('.share')
const shareIcon = document.querySelector('.shareIcon');

shareIcon.addEventListener('click', function() {
    socialMediaDiv.classList.add('orderChange');
    infoShareDiv.classList.add('noDisplay');
})