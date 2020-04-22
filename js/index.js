/* global $, PromptElement */

const flex1 = $('#flex1');
const flex2 = $('#flex2');

function addElementInputs() {
  Object.keys(PromptElement).forEach((key) => {
    const el = PromptElement[key];
    const elementInput = $(`<span class="element-input" title="${el.description}" data-key="${key}"><span>${el.name}</span></span>`);
    elementInput.click(() => {
      const removeElement = $('<span class="remove-element" title="Remove">X</span>');
      const elementAdded = $(`<span class="element-added" title="${el.description}" data-key="${key}"><span>${el.name}</span></span>`);
      elementAdded.append(removeElement);
      removeElement.click(() => elementAdded.remove());
      flex2.append(elementAdded);
    });
    flex1.append(elementInput);
  });
}

window.onload = () => {
  addElementInputs();
};
