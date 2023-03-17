import AbstractView from '../framework/view/abstract-view.js';

function createFilmCardViewTemplate(film){
  const {filmInfo, userDetails, comments} = film;
  const isActiveStatus = (status) => status ? 'film-card__controls-item--active' : '';

  return `
    <article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${filmInfo.title}</h3>
        <p class="film-card__rating">${filmInfo.totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">1929</span>
          <span class="film-card__duration">${filmInfo.duration}</span>
          <span class="film-card__genre">${filmInfo.genre}</span>
        </p>
        <img src="./${filmInfo.poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${filmInfo.description}</p>
        <span class="film-card__comments">${comments.length} comment${comments.length > 1 ? 's' : ''}</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${isActiveStatus(userDetails.watchlist)}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${isActiveStatus(userDetails.alreadyWatched)}" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite ${isActiveStatus(userDetails.favorite)}" type="button">Mark as favorite</button>
      </div>
    </article>
  `;
}

export default class FilmCardView extends AbstractView {
  #element = null;
  #film = null;
  #comments = null;
  #handleCardClick = null;

  constructor({film, onCardClick}) {
    super();
    this.#film = film;
    this.#handleCardClick = onCardClick;
    this.element.querySelector('.film-card__link').addEventListener('click', this.#openPopupClickHandler);
  }

  get template(){
    return createFilmCardViewTemplate(this.#film);
  }

  #openPopupClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCardClick();
  };
}
