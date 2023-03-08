import { createElement } from '../render.js';

function createFilmsListSectionTemplate(isExtra, title){
  return `<section class="films-list ${isExtra ? 'films-list--extra' : ''}">
  <h2 class="films-list__title ${isExtra ? '' : 'visually-hidden'}">${title || 'All films. Upcoming'}</h2>
  </section>`;
}

export default class FilmsListSection {
  #element = null;
  #isExtra = null;
  #title = null;

  constructor(isExtra, title) {
    this.#isExtra = isExtra;
    this.#title = title;
  }

  get template(){
    return createFilmsListSectionTemplate(this.#isExtra, this.#title);
  }

  get element(){
    if(!this.#element){
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement(){
    this.#element = null;
  }
}
