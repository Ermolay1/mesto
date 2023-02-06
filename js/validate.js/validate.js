

 const variables = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    
});


const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(variables.inputErrorClass, settings);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(variables.errorClass, settings);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(variables.inputErrorClass, settings );
  errorElement.classList.remove(variables.errorClass, settings);
  errorElement.textContent = ' ';
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};


function setEventListeners (formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(variables.inputSelector));
  const buttonElement = formElement.querySelector(variables.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, settings);

  formElement.addEventListener('reset', () => {
    setTimeout(() => {
     toggleButtonState(inputList, buttonElement);
    }, 0);
  });

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};


function enableValidation (settings) {
  const formList = Array.from(document.querySelectorAll(variables.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(e){
      e.preventDefault();
    });
      setEventListeners(formElement, settings);
});
};


enableValidation(variables);

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(variables.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(variables.inactiveButtonClass);
  };
}