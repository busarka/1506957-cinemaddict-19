import { createElement } from '../render.js';

function createFilmsListContainerTemplate(){
  return `
  <div class="films-list__container">
</div>
  `;
}

export default class FilmsListContainer {
  #element = null;

  get template(){
    return createFilmsListContainerTemplate();
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
