import { mockFilms } from '../mock/films.js';
import Observable from '../framework/observable.js';

export default class FilmsModel extends Observable {
  #films = mockFilms;

  get films() {
    return this.#films;
  }
}
