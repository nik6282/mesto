const root = document.querySelector('.page');
const profile = root.querySelector('.profile')
const profileName = profile.querySelector('.profile__info-title');
const profileAbout = profile.querySelector('.profile__info-subtitle');
const popup = root.querySelector('.popup');
const popupEditProfile = root.querySelector('.popup__edit-prolie');

const btnEditProfile = profile.querySelector ('.profile__edit-button');
const btnCloseEditProfile = popupEditProfile.querySelector('.popup__close-button');
const btnSaveEditProfile = popupEditProfile.querySelector('#btnOK-frmEditProfile')
const inputProfileName = popupEditProfile.querySelector('#name-input');
const inputProfileAbout = popupEditProfile.querySelector('#about-input');

btnEditProfile.addEventListener('click', onclickOpenEditProfile);
btnCloseEditProfile.addEventListener('click', onclickCloseEditProfile);
btnSaveEditProfile.addEventListener('click', onclickSaveEditProfile);

function onclickOpenEditProfile() {
  openPopupForm(popup);
  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
};

function onclickCloseEditProfile() {
  closePopupForm(popup);
};

function onclickSaveEditProfile() {
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
  onclickCloseEditProfile();
};

function openPopupForm(popupForm) {
  popupForm.classList.add('popup_active');
};

function closePopupForm(popupForm) {
  popupForm.classList.remove('popup_active');
};

