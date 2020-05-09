const mongoose = require(`mongoose`);
const db = require(`../models`);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/penpals`, {
  useNewUrlParser: true,
});

const poetSeed = [
  {
    userId: "12345adfjavjvubkdjsopv",
    name: "Edgar Alan Poe",
    image:
      "https://www.ic.edu/sites/default/files/styles/highlights_large2x/public/2019-01/EDGAR%2BALLAN%2BPOE%2BBY%2BSAM%2BSHEARON%2B2017%2B-%2BLow%2BResolution.jpg?h=82e0c6a3&itok=YkkEpsKL",
    info:
      "I'm the unoffical patron saint of the morbid. AKA the 'Gothic Grand-Daddy of American Literature'.",
    link: "https://www.poemuseum.org/poes-works-and-timeline",
    skills: "Poetry, moodiness, drinking",
    inquiry:
      "Raven handlers, type writer, a 'Robert Frost' type to balance me out",
    goals: "Outlive my young cousin",
  },
  {
    userId: "1123434234fbadass",
    name: "Jane Austen",
    image:
      "https://cdn.theatlantic.com/thumbor/fgrj4_Ci858UpfBsWCYKMGkmlCQ=/0x194:1000x757/720x405/media/img/mt/2018/04/gettyimages_517402698_1024-1/original.jpg",
    info:
      "I like to spend afternoons riding my horse around the english countryside. I also like to do my writing in the early mornings.",
    link: "https://www.janeausten.org/jane-austen-books.asp",
    skills: "Comedic romantic comedies, scoffing at the rich and arrogant.",
    inquiry: "Looking for adventurous types to collaborate with.",
    goals: "Write a lengthy adventure trilogy",
  },
];

db.Poet.remove({})
  .then(() => db.Poet.collection.insertMany(poetSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
