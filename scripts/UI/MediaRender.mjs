import { Media, Book, Film } from '../Elements/Media.mjs';

export class MediaRender {
  constructor(mediaBlocks) {
    this.mediaItems = mediaBlocks;
    this.loadMedia();
  }

  loadMedia() {
    for (const media of this.mediaItems) {
      if (media instanceof Book) {
        media.addBook();
      } else if (media instanceof Film) {
        media.addFilm();
      }
    }
  }
}
