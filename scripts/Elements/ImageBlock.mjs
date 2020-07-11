export class ImageBlock {
  constructor(title, year, source, info, isFirst) {
    this.title = title;
    this.year = year;
    this.source = source;
    this.info = info;
    this.isFirst = isFirst;
  }

  get desc() {
    const words = this.title.split(' ');
    return words.join('').toLowerCase();
  }

  add() {
    const _imgBlock = document.createElement('section');
    _imgBlock.id = this.desc;
    _imgBlock.className = 'img-section';
    _imgBlock.innerHTML = `
      <img class="big-img" src="${this.source}" alt=${this.desc}>
      <div class="caption-box">
        <h2>${this.title} -${this.year}</h2>
        <p>${this.info}</p>
      </div>
    `;
    const form = document.getElementById('btn-section');
    if (this.isFirst) {
      document.getElementById('body').insertBefore(_imgBlock, form);
    } else {
      document.getElementById('body').appendChild(_imgBlock);
    };
  }

  remove() {
    document.getElementById(this.desc).remove();
  }
}
