const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;
  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add('warning');
    productNameInputElement.classList.add('warning');
  } else {
    remainingCharsElement.classList.remove('warning');
    productNameInputElement.classList.remove('warning');
  }

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);
