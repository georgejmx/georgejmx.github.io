export class ImageRender {
  constructor(imageBlocks) {
    this.images = imageBlocks;
    this.loadImages(true);
    this.showButton();
    this.hideButton();
  }

  loadImages(bool) {
    if (bool) {
      for (const image of this.images) {
        if (image.isFirst) {
          image.add();
        }
      }
    } else {
      for (const image of this.images) {
        if (!image.isFirst) {
          image.add();
        }
      }
    }
  }

  showButton() {
    const _button = document.getElementById('show-btn');
    _button.addEventListener('click', this.showHandler.bind(this));
  }

  hideButton() {
    const _button = document.getElementById('hide-btn');
    _button.addEventListener('click', this.hideHandler.bind(this));
  }

  showHandler() {
    this.loadImages(false);
    document.getElementById('hide-btn').style.backgroundColor = 'red';
    document.getElementById('hide-btn').disabled = false;
  }

  hideHandler() {
    for (const image of this.images) {
      if (!image.isFirst) {
        image.remove();
      }
    }
  }
}
