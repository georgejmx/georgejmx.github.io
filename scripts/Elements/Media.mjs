export class Media {
  constructor(title, review) {
    this.title = title;
    this.review = review;

    const mediaNode = document.createElement('div');
    mediaNode.classList.add('tile');
    this.mediaNode = mediaNode;
  }

  get pathName() {
    const words = this.title.split(' ');
    return words.join('').toLowerCase();
  }

  add() {
    this.mediaNode.innerHTML = `
      <h3 class="tile-title"><u>${this.title}</u></h3>
      <img src="images/${this.pathName}.jpg" alt="Media cover image"><br>
      <button id="${this.pathName}-btn" class="reviews-button">
      See Review...</button>
    `;
    document.getElementById('media-box').append(this.mediaNode);
  }

  addReview() {
    const _button = document.getElementById(`${this.pathName}-btn`);
    _button.addEventListener(
      'click', () => document.getElementById('current-review').innerHTML =
      `"${this.review}"`
    );
  }
}

export class Book extends Media {
  constructor(title, author, review) {
    super(title, review);
    this.author = author;
  }

  addBook() {
    this.add.call(this);
    this.mediaNode.classList.add('book');
    this.mediaNode.lastElementChild.previousElementSibling
      .previousElementSibling.classList.add('book-img');
    const _authorEntry = `<h4>by ${this.author}</h4>`;
    this.mediaNode.firstElementChild.insertAdjacentHTML(
      'afterend',
      _authorEntry
    );
    this.addReview.call(this);
  }
}

export class Film extends Media {
  constructor(title, quote, cast, review) {
    super(title, review);
    this.quote = quote;
    this.cast = cast;
  }

  addFilm() {
    this.add.call(this);
    this.mediaNode.classList.add('film');
    this.mediaNode.lastElementChild.previousElementSibling
      .previousElementSibling.classList.add('film-img');
    const _quoteEntry = `<h4>"${this.quote}"</h4>`;
    this.mediaNode.firstElementChild.insertAdjacentHTML(
      'afterend',
      _quoteEntry
    );
    const _castEntry = `<h5><u>Starring:</u> ${this.cast}</h5>`;
    this.mediaNode.firstElementChild.nextElementSibling.insertAdjacentHTML(
      'afterend',
      _castEntry
    );
    this.addReview.call(this);
  }
}
