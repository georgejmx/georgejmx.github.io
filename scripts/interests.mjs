import { addNavbar } from './UI/navbar.mjs';
import { ImageRender } from './UI/ImageRender.mjs';
import { MediaRender } from './UI/MediaRender.mjs';
import { ImageBlock } from './Elements/ImageBlock.mjs';
import { Book, Film } from './Elements/Media.mjs';

addNavbar();

const book1 = new Book(
  "The Shining",
  "Stephen King",
  `This classic was as much a psychological thriller as a
  horror, a riveting read for anyone looking for a mysterious story with
  intense character portrayal which facilitates a gripping plot.`
);
const book2 = new Book(
  "The Midnight Line",
  "Lee Child",
  `A quintessential Jack Reacher entry, an action-packed crime
  story which explores dark themes such as addiction, mental health,
  corruption and the innner workings of money laundering.`
);
const book3 = new Book(
  "I Claudius",
  "Robert Graves",
  `An historical account of Claudius' rise to power during the
  eventful Julian-Claudio dynasty's grip on the Western World. This period
  has all the drama typical of modern TV shows, hence this book is comparable
  to the popular Game of Thrones series in quality and suspense.`
);
const film1 = new Film(
  "Office Space",
  "I'm going to need those TPS reports...ASAP",
  "Ron Livingston, Jennifer Aniston, Gary Cole",
  `A cult '90s film about office life, Office Space manages to
  capture the mood among white-collar office workers after computing became
  mainstream.'`
);
const film2 = new Film(
  "Cape Fear",
  "If you hang onto the past you die a little each day.",
  "Robert de Niro, Nick Nolte, Jessica Lange",
  `The 1991 remake of the classic story about a successful
  lawyer who's life is turned upside down by a convicted rapist who has been
  released from jail. This film explores themes of jealousy, crime and human
  character. There are many classic scenes to remember`
);
const film3 = new Film(
  "Fight Club",
  "The things you own end up owning you.",
  "Edward Norton, Brad Pitt, Helena Bonham Carter",
  `Probably one of my favourite films, Fight Club shows how we
  should all listen to our inner voice seeking adventure and thrill. This film
  explores philosphy and politics to examine modern life and the human
  psyche`
);

const image1 = new ImageBlock(
  'Sydney Coastline',
  2019,
  'images/rocks.jpeg',
  `Was taken when walking from Coogee to Bondi Beach in Sydney. An amazing
  walk where you could see the power of the Pacific Ocean and the natural
  landscape.`,
  true
);
const image2 = new ImageBlock(
  'Lion and the Lamb, Lake District',
  2020,
  'images/lakes.jpeg',
  `Was taken when walking in the lake district near Grassmere. Reaching the
  summit was a great experience, the views and rock formations made up for
  the bad weather.`,
  true
);
const image3 = new ImageBlock(
  'Sacred Monkey Sanctuary, Ubud',
  2018,
  'images/bali.jpeg',
  `Was taken when staying in Ubud, at a historical Buddhist Temple. Bali has
  many fascinating sites and also natural beauty to explore.`,
  true
);
const image4 = new ImageBlock(
  'Fiume Mincio',
  2015,
  'images/mincio.jpeg',
  `Was taken in Peschiera del Garda. Captures the laid back and
  scenic experience of Northern Italy.`,
  false
);
const image5 = new ImageBlock(
  'Saltburn Viaduct',
  2020,
  'images/viaduct.jpeg',
  `Was taken when walking locally. Now closed for passenger trains, this
  structure captures the ingenuity and ambition of the Victorians.`,
  false
);
const image6 = new ImageBlock(
  'Kuta Sunset',
  2018,
  'images/sunset.jpeg',
  `Was taken when taking an evening stroll on the beach in Kuta, Bali.
  Somehow I haven't been able to recreate the scene since returning to the
  Northern Hemisphere.`,
  false
);

const imageBlocks = new Array(image1, image2, image3, image4, image5, image6);
const mediaBlocks = new Array(film3, film2, book1, book2, film1, book3);
const imagesHTML = new ImageRender(imageBlocks);
const reviewsHTML = new MediaRender(mediaBlocks);

const subtitle = document.createElement('h3');
subtitle.id = 'images-subtitle';
subtitle.innerHTML = '<strong>All images were taken by me personally</strong>';
document.getElementById(imagesHTML.images[0].desc).appendChild(subtitle);
