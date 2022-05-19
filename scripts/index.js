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

let formElement = document.querySelector("a");
let nameInput = formElement.querySelector("a");
let jobInput = formElement.querySelector("a");

function formSubmitHandler (evt) {
  evt.preventDefault();

  myName.textcontent = nameInput.value;

}