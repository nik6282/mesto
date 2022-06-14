const root = document.querySelector('.page');

// сведения о профиле и кнопка для редактирования
const profile = root.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__info-title');
const profileAbout = profileInfo.querySelector('.profile__info-subtitle');
const btnEditProfile = profileInfo.querySelector ('.profile__edit-button');

// объявляем секцию для popup и модального окна Редактирования Профиля
const popup = root.querySelector('.popup');
const popupEditProfile = root.querySelector('.popup__edit-profile');
const frmEditProfile = popupEditProfile.querySelector('.form-edit');
// поля отображения для Профиля: Имя и О_себе
const inputProfileName = popupEditProfile.querySelector('#name-input');
const inputProfileAbout = popupEditProfile.querySelector('#about-input');
// кнопки для формы Закрыть
const btnCloseEditProfile = popupEditProfile.querySelector('.popup__close-button');

function openEditProfile_OnClick(evt) {
  console.log(evt.target);
  popup.classList.add('popup_active');
  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
};

function closeEditProfile_OnClick(evt) {
  console.log(evt.target)
  popup.classList.remove('popup_active');
};

function submit_frmEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
  popup.classList.remove('popup_active');
};

btnEditProfile.addEventListener('click', openEditProfile_OnClick);
btnCloseEditProfile.addEventListener('click', closeEditProfile_OnClick);
frmEditProfile.addEventListener('submit', submit_frmEditProfile)
