const root = document.querySelector('.page');
const profile = root.querySelector('.profile')

const btnEditProfile = profile.querySelector ('.profile__edit-button');
const btnAddPlace = profile.querySelector('.profile__add-place-button')

const popupEditProfile = root.querySelector('.popup__edit-profile');
const btnLikes = root.querySelectorAll('.place-card__like-button')

btnEditProfile.addEventListener('click', popupEditProfileActive);

function popupEditProfileActive() {
  console.log('Hello World');
  popupEditProfile.classList.add('popup_active');
  // popupEditProfile.classList.add('popup_active');
};

// for each btnLikes {
//   btnLikes[],addEventListener('click', btnLikeActive);
// }

// function btnLikeActive() {
//   btnLikes[i].toggleAttribute('place-card__like-button_active') 
// }

// console.log (btnEdit);
// console.log (btnAddPlace);

// .popup__close-icon {
//   width: 32px;
//   height: 32px;
//   position: absolute;
//   right: -40px;
//   top: -40px;
//   opacity: 1;
//   transition: opacity 0.2s linear 0.1s;
//   background: none;
//   background-image: url(images/Close_Icon.png);
//   border: none;
// }

// let formElement = document.querySelector("a");
// let nameInput = formElement.querySelector("a");
// let jobInput = formElement.querySelector("a");

// function formSubmitHandler (evt) {
  // evt.preventDefault();
  // let myName;
  // let nameInput;
  
  // myName.textcontent = nameInput.value;
// }
