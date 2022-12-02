let lodinButton = document.querySelector('.lodin-button');
let loginPopup = document.querySelector('.login-popup');

lodinButton.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();
    loginPopup.classList.toggle('show-popup');
}