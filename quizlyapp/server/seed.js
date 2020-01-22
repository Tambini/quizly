const { Trivia, User, Score } = require('./models');

const seed = async () => {
  await Trivia.destroy({
    where: {},
  });
  await User.destroy({
    where: {},
  });
  await Score.destroy({
    where: {},
  });

  const sinara = await User.create({
    username: "Sinara",
    password_digest: "$2b$11$7QAZqSbQMKdSUELv5ayHfeXFgItLPBmsPg60oHrOEX8bOKklbOlKC",
    admin: true
  });
  const carolyn = await User.create({
    username: "carolyn",
    password_digest: "$2b$11$q9xqtcWfpdJlfAIKNSvqm.3vKgYNPMAVpnMGvl59CZEgbBtYVEvQS",
    admin: true,
  })
  const nolan = await User.create({
    username: "nolan",
    password_digest: "$2b$11$yFqvts.WRvPe2oqlJJXeueIp/mfw0M9C51.mfGA3jJDHZcRRkHjxu",
    admin: true,
  })


  const nolanScore1 = await Score.create({
    username: "nolan",
    score: 100
  })
  const nolanScore2 = await Score.create({
    username: "nolan",
    score: 400
  })
  const nolanScore3 = await Score.create({
    username: "nolan",
    score: 700
  })
  const sinaraScore1 = await Score.create({
    username: "Sinara",
    score: 200
  })
  const sinaraScore2 = await Score.create({
    username: "Sinara",
    score: 500
  })
  const sinaraScore3 = await Score.create({
    username: "Sinara",
    score: 800
  })
  const carolynScore1 = await Score.create({
    username: "carolyn",
    score: 300
  })
  const carolynScore2 = await Score.create({
    username: "carolyn",
    score: 600
  })
  const carolynScore3 = await Score.create({
    username: "carolyn",
    score: 900
  })
  const carolynScore4 = await Score.create({
    username: "carolyn",
    score: 1000
  })


  await sinara.addScore([sinaraScore1, sinaraScore2, sinaraScore3]);
  await nolan.addScore([nolanScore1, nolanScore2, nolanScore3]);
  await carolyn.addScore([carolynScore1, carolynScore2, carolynScore3, carolynScore4]);


  await Trivia.bulkCreate([
    {
      answer: "a fox",
      option1: "a dog",
      option2: "racoon ",
      option3: "skunk",
      question: "A Sly creature sought by sportsmen riding to hounds",
      value: 100,
      category: "animals",
      approved: true

    },
    {
      answer: "a camel",
      option1: "horse",
      option2: "Addax antelope",
      option3: "Iguana",
      question: "The ship of the desert",
      value: 200,
      category: "animals",
      approved: true
    },
    {

      answer: "turkeys",
      option1: "chickens",
      option2: "owls",
      option3: "parrots",
      question: "The children are poults, the mothers hens & the fathers toms",
      value: 300,
      category: "animals",
      approved: true
    },
    {

      answer: "falconry",
      option1: "bo-taoshi",
      option2: "kaninhop ",
      option3: "buzkashi",
      question: "Name of the sport of hunting birds with other birds",
      value: 400,
      category: "animals",
      approved: true

    },
    {
      answer: "the Portuguese man-of-war",
      option1: "the mermaid",
      option2: "sea-lion",
      option3: "the whale",
      question: "Floating sea creature named by sailors for the Iberian fighting ship it resembles",
      value: 500,
      category: "animals",
      approved: true

    },
    {
      answer: "dogs",
      option1: "cats",
      option2: "hamsters",
      option3: "rabbits",
      question: "Scooby-Doo, Goofy & Pluto are cartoon versions",
      value: 100,
      category: "animals",
      approved: true
    },
    {

      answer: "a yak",
      option1: "wolf",
      option2: "mastiff",
      option3: " horse",
      question: "Tibetan ox used to carry travelers and mail",
      value: 500,
      category: "animals",
      approved: true

    },
    {
      answer: "rats",
      option1: "cockaroach",
      option2: "squierrel",
      option3: "chipmunk",
      question: "These rodents first got to America by stowing away on ships",
      value: 100,
      category: "animals",
      approved: true
    },
    {
      answer: "the trunk",
      option1: "the legs",
      option2: "the ears",
      option3: "the mouth",
      question: "There are about 40,000 muscles & tendons in this part of an elephant's body",
      value: 200,
      category: "animals",
      approved: true
    },
    {
      id: 741,
      answer: "the hippopotamus",
      option1: "the walrus",
      option2: "the seahorse",
      option3: "the shark",
      question: "Close relative of the pig, though its name means 'river horse'",
      value: 400,
      category: "animals",
      approved: true
    },
    {
      answer: "a mule",
      option1: "a ligar",
      option2: "a bonobo",
      option3: "a miniature horse",
      question: "If this species of hybrid's parents were reversed, you'd get a hinny",
      value: 500,
      category: "animals",
      approved: true
    },
    {
      answer: "a weasel",
      option1: "a muskrat",
      option2: "a sable",
      option3: "a horse",
      question: "When husbands 'pop' for an ermine coat, they're actually buying this fur",
      value: 300,
      category: "animals",
      approved: true
    },
    {
      answer: "civet",
      option1: "lynx",
      option2: "mountain-lion",
      option3: "cheetah",
      question: "Cat-like animal raised for the secretions it produces which are used to make perfumes",
      value: 400,
      category: "animals",
      approved: true
    },
    {
      answer: "man",
      option1: "hippopotamus",
      option2: "mosquito",
      option3: "lion",
      question: "According to New York's Bronx Zoo, it's 'the most dangerous animal in the world'",
      value: 500,
      category: "animals",
      approved: true
    },
    {
      answer: "their antlers",
      option1: "their skin",
      option2: "their hooves",
      option3: "their genitals",
      question: "New Zealanders used to raise red deer for these, which were ground & used as aphrodisiacs",
      value: 500,
      category: "animals",
      approved: true

    },
    {
      id: 3691,
      answer: "flies",
      option1: "butterflies/moths",
      option2: "fleas",
      option3: "beetles",
      question: "Varieties of these insects include bee, soldier, flower, blow & fruit",
      value: 500,
      category: "animals",
      approved: true
    },
    {
      id: 4260,
      answer: "the sponge",
      option1: "coral",
      option2: "seaweed",
      option3: "a starfish",
      question: "Types of this aquatic creature include chimney, sheep's wool, and common bath",
      value: 500,
      category: "animals",
      approved: true
    },
    {
      answer: "26",
      option1: "36",
      option2: "30",
      option3: "28",
      question: "Number of different basic shapes in a box of Post Alpha-Bits",
      value: 200,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "6",
      option1: "4",
      option2: "0",
      option3: "6.5",
      question: "Whole number equidistant from 5 & 7",
      value: 400,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "President Hoover",
      option1: "President Bush",
      option2: "President Trump",
      option3: "Benjamin Franklin",
      question: "President the Hoover Dam is named after",
      value: 100,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "Big Country",
      option1: "The Staties",
      option2: "Route 77",
      option3: "Small Farm",
      question: "This group's 1st big U.S. hit was 'In a Big Country'",
      value: 400,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "Seal",
      option1: "Huntsville",
      option2: "Alabama",
      option3: "Confederacy",
      question: "Word emblazoned in large letters in the center of the seal of Huntsville, Alabama",
      value: 500,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "De Smet",
      option1: "Pierre Jean",
      option2: "Paris",
      option3: "Springfield",
      question: "Town in S.D. that put up 9' statue of Fr. Pierre Jean De Smet, who died in 1873 & never visited the town",
      value: 400,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "K2",
      option1: "K1",
      option2: "Kilimanjaro",
      option3: "Kanchenjunga",
      question: "It initially got its name from being the second Karakoram peak to be measured",
      value: 500,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "the Encyclopedia Americana",
      option1: "wikipedia",
      option2: "the Encyclopedia Britannica",
      option3: "Encarta",
      question: "Begun in 1829, it was the 1st encyclopedia published in America",
      value: 500,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "Watergate",
      option1: "DoubleTree",
      option2: "Hamilton Hotel",
      option3: "The Mayflower Hotel",
      question: "Name of the hotel & office complex where the Watergate break-in occurred",
      value: 200,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "Key West",
      option1: "South Cove",
      option2: "Tortuga",
      option3: "Jacksonville",
      question: "2 Civil War forts were built on this western island of the Florida Keys",
      value: 400,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "Marshall Field",
      option1: "Macy's",
      option2: "Marshall's",
      option3: "Michaels",
      question: "In June 1997 this Chicago department store marshalled its forces for a 'Field Days Sale'",
      value: 500,
      category: "stupid answers",
      approved: true
    },
    {
      answer: "The Caribbean",
      option1: "The Bahamas",
      option2: "Adriatic sea",
      option3: "The Mediterranean",
      question: "Anguilla & Antigua are in this sea",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "French",
      option1: "English",
      option2: "Canadian",
      option3: "Dutch",
      question: "Classes at the University of Quebec are taught in this language, Quebec's official one",
      value: 100,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Spain",
      option1: "Italy",
      option2: "France",
      option3: "Germany",
      question: "It's believed that Cadiz, a city in this country, was once Gadir, a Phoenician settlement",
      value: 300,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Brazil",
      option1: "Venezuela",
      option2: "Colombia",
      option3: "Bolivia",
      question: "Most gem-quality topaz is mined in this South American country",
      value: 400,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Lanai",
      option1: "Maui",
      option2: "Oahu",
      option3: "Molokai",
      question: "It's Hawaii's 'Pineapple Island' though it could be called the 'Patio Island'",
      value: 500,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Malta",
      option1: "Cyprus",
      option2: "San Marino",
      option3: "Monaco",
      question: "The national anthem of this small country is Innu Malti",
      value: 100,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Great Britain",
      option1: "Denmark",
      option2: "Georgia",
      option3: "Sweden",
      question: "The cross of St. George on Manitoba's flag symbolizes its ties with this country",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Portugal",
      option1: "Spain",
      option2: "Brazil",
      option3: "Mexico",
      question: "Prince Henry the Navigator's tomb is in the church of Santa Maria da Vitoria in Batalha in this country",
      value: 300,
      category: "Around the World",
      approved: true

    },
    {
      answer: "the Aegean",
      option1: "the Adriatic",
      option2: "the Alboran",
      option3: "the Ionian",
      question: "The ballet Apollo is set on Delos, an island in this sea",
      value: 400,
      category: "Around the World",
      approved: true

    },
    {
      answer: "France",
      option1: "Italy",
      option2: "Russia",
      option3: "Spain",
      question: "The Bayeux Tapestry is on display in this country's Museum of Queen Matilda",
      value: 500,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Lace",
      option1: "Crochet",
      option2: "Brussels",
      option3: "Shawl Linen",
      question: "Nyandete, whose name is Guarani for spider web, is a type of this delicate open-work fabric made in Paraguay",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "London",
      option1: "Paris",
      option2: "Madrid",
      option3: "New York",
      question: "You'll find the original Hard Rock Cafe on Old Park Lane in this capital city",
      value: 300,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Danish",
      option1: "English",
      option2: "Finnish",
      option3: "Sweedish",
      question: "Greenland has two official languages: Greenlandic & this",
      value: 400,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Malta",
      option1: "New Zealand",
      option2: "Maldives",
      option3: "Brunei",
      question: "Island country whose capital, Valletta, is named for a grandmaster who led the knights in 1565",
      value: null,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Tokyo",
      option1: "Paris",
      option2: "Orlando",
      option3: "Los Angelos",
      question: "Disney's Fantillusion!, a spectacular musical parade, debuted in this city's Disneyland in 1995",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "National anthem",
      option1: "Happy Birthday",
      option2: "Dear John",
      option3: "Cheetahs",
      question: "Bulgaria's is Mila Rodino, which means Dear Homeland",
      value: 300,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Texas",
      option1: "Florida",
      option2: "California",
      option3: "Alaska",
      question: "Peru is almost twice as big as this second largest U.S. state",
      value: 400,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Sydney",
      option1: "Shoalhaven",
      option2: "Melbourne",
      option3: "Perth",
      question: "Noted for its aboriginal art, the Art Gallery of New South Wales is in this capital of New South Wales",
      value: 200,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Nairobi",
      option1: "Cairo",
      option2: "Khartoum",
      option3: "Harare",
      question: "The Kenyatta Conference Centre is one of this capital city's architectural landmarks",
      value: 500,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Athens",
      option1: "Petras",
      option2: "Volos",
      option3: "Thessaloniki",
      question: "You'll find Greece's Parliament building on Syntagma Square in this capital",
      value: 100,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Transvaal",
      option1: "Crossvaal",
      option2: "The other side over there",
      option3: "Vaalpaal",
      question: "The name of this South African province means 'across the Vaal' -- the Vaal River, that is",
      value: 200,
      category: "Around the World",
      approved: true
    },
    {
      answer: "Spain",
      option1: "France",
      option2: "Portugal",
      option3: "Italy",
      question: "This country's Cathedral of Leon is named for its soaring spires & stained glass windows",
      value: 300,
      category: "Around the World",
      approved: true

    },
    {
      answer: "New Zealand",
      option1: "Australia",
      option2: "Iceland",
      option3: "Greenland",
      question: "The Canterbury Plains, this country's largest flatland area, lies on South Island",
      value: 400,
      category: "Around the World",
      approved: true

    },
    {
      answer: "Cayman Islands Dollar",
      option1: "Bitcoin",
      option2: "Cayos",
      option3: "Pins",
      question: "This unit of currency of the Cayman Islands is divided into 100 cents; makes sense to us",
      value: 500,
      category: "Around the World",
      approved: true

    },
    {
      answer: "6",
      option1: "8",
      option2: "10",
      option3: "5",
      question: "A typical snowflake has this many sides",
      value: 100,
      category: "science",
      approved: true
    },
    {
      answer: "iron",
      option1: "steel",
      option2: "boar",
      option3: "aluminium",
      question: "Common element whose refined forms include pig, cast or wrought",
      value: 200,
      category: "science",
      approved: true
    },
    {
      answer: "time",
      option1: "height",
      option2: "up",
      option3: "travel",
      question: "After length, width & depth, the 4th dimension",
      value: 300,
      category: "science",
      approved: true
    },
    {
      answer: "a parasite",
      option1: "a virus",
      option2: "a child",
      option3: "mosquito",
      question: "Type of organism that lives off of another, contributing nothing",
      value: 400,
      category: "science",
      approved: true
    },
    {
      answer: "an echo",
      option1: "red-shift",
      option2: "blue-shift",
      option3: "reverberation",
      question: "A sound's repetition by reflection",
      value: 100,
      category: "science",
      approved: true
    },
    {
      answer: "Charles Darwin",
      option1: "Benjamin Franklin",
      option2: "Stephen Jay Gould",
      option3: "Jean-Baptiste Lamarck",
      question: "He originated 'The Origin of Species'",
      value: 200,
      category: "science",
      approved: true
    },
    {
      answer: "an electron",
      option1: "a neutron",
      option2: "a proton",
      option3: "a quarck",
      question: "Negative particle that orbits an atom's nucleus",
      value: 400,
      category: "science",
      approved: true
    },
    {
      answer: "Cells",
      option1: "Proteins",
      option2: "acids",
      option3: "Carbohydrates",
      question: "Cytology is the study of these biological building blocks",
      value: 500,
      category: "science",
      approved: true
    },
    {
      answer: "man",
      option1: "monkey",
      option2: "dog",
      option3: "cheetah",
      question: "The only animal that has walked on the moon",
      value: 100,
      category: "science",
      approved: true
    },
    {
      answer: "Drake",
      option1: "Mises",
      option2: "Hayek",
      option3: "Beethoven",
      question: "Not just 'Ludwig von; but any male duck",
      value: 200,
      category: "science",
      approved: true
    },
    {
      answer: "nursing",
      option1: "singing",
      option2: "dancing",
      option3: "running away",
      question: "Research shows a mother eating a candy bar before doing this helps a baby fall asleep quicker",
      value: 300,
      category: "science",
      approved: true
    },
    {
      answer: "sleet",
      option1: "hail",
      option2: "downpour",
      option3: "cats&dogs",
      question: "Partly frozen rain or rain mixed with snow",
      value: 400,
      category: "science",
      approved: true
    },
    {
      answer: "North America",
      option1: "South America",
      option2: "Austrailia",
      option3: "Antarctica",
      question: "If our solar system fit into a cup, our galaxy would be the size of this 3rd largest continent",
      value: 500,
      category: "science",
      approved: true
    },
    {
      answer: "a cell",
      option1: "a bell",
      option2: "a cheetah",
      option3: "freedom",
      question: "Most living organisms have millions, but a prisoner only has one",
      value: 100,
      category: "science",
      approved: true
    },
    {
      answer: "atoms",
      option1: "cells",
      option2: "minerals",
      option3: "elements",
      question: "A 5th C. B.C. Greek philosopher was 1st to theorize that all matter is made of these",
      value: 200,
      category: "science",
      approved: true
    },

    {
      answer: "the equator",
      option1: "Florida",
      option2: "Greenland",
      option3: "Tropics",
      question: "Days & nights are always 12 hours long there",
      value: 400,
      category: "science",
      approved: true
    },
    {
      answer: "measuremen",
      option1: "cartography",
      option2: "geology",
      option3: "cheetahs",
      question: "If you're studying mensuration, you're studying this",
      value: 500,
      category: "science",
      approved: true
    },
    {
      answer: "light",
      option1: "poop",
      option2: "chi",
      option3: "sound",
      question: "Bioluminescence is the emission of this from living organisms",
      value: 100,
      category: "science",
      approved: true
    },
    {
      answer: "the Normans",
      option1: "the Scots",
      option2: " the Dutch ",
      option3: " the French",
      question: "The western jury system is thought to have been brought to England by these peoples in 1066",
      value: 200,
      category: "history",
      approved: true
    },
    {
      answer: "the 16th",
      option1: "the 17th",
      option2: " the 14th",
      option3: "the 20th",
      question: "Century known as the 'high Renaissance'",
      value: 300,
      category: "history",
      approved: true
    },
    {
      answer: "Japan",
      option1: "France",
      option2: " Denmark ",
      option3: "Cambodia",
      question: "World power whose emperor gave up claims to divinity before it adopted a new constitution in 1947",
      value: 400,
      category: "history",
      approved: true
    },
    {
      answer: "the Eisenhower Doctrine",
      option1: "the Monroe Doctrine",
      option2: " the Reagan Doctrine",
      option3: "the Truman Doctrine",
      question: "1957 U.S. policy allowing the president to use armed force in the Middle East",
      value: 500,
      category: "history",
      approved: true
    },
    {
      answer: "Jerusalem",
      option1: "Mecca",
      option2: " Medina ",
      option3: "Bethlehem",
      question: "In July 1099, crusaders stormed this holy city, killing its Muslim & Jewish inhabitants",
      value: 100,
      category: "history",
      approved: true
    },
    {
      answer: "Rome",
      option1: "Paris",
      option2: "Istanbul ",
      option3: "Constantinople",
      question: "Legend says an Etruscan family, the Tarquins, ruled this 'Eternal City' from 616 to 510 B.C.",
      value: 200,
      category: "history",
      approved: true
    },
    {
      answer: "Farouk",
      option1: "Faud I",
      option2: "Khafra",
      option3: " Narmer",
      question: "Because of his Albanian descent, some said this king, deposed in 1952, was not a true Egyptian",
      value: 300,
      category: "history",
      approved: true
    },
    {
      answer: "Elizabeth I",
      option1: "Anne Boleyn",
      option2: "Elizabeth II",
      option3: "Edith of Wessex",
      question: "In 1570, Pius V issued a papal bull which excommunicated & tried to depose this English queen",
      value: 400,
      category: "history",
      approved: true
    },
    {
      answer: "Denmark",
      option1: "Norway",
      option2: "Finland ",
      option3: "Sweden",
      question: "Circa 950, under Harald Bluetooth, this was 1st Scandinavian country unified under just 1 king",
      value: 500,
      category: "history",
      approved: true
    },
    {
      answer: "Pope",
      option1: "Pastor",
      option2: "Attorney General",
      option3: "Speaker of the House",
      question: "The last married man to hold this job was Adrian II in the 9th century",
      value: 100,
      category: "history",
      approved: true
    },
    {
      answer: "General Custer",
      option1: "General Hooker",
      option2: "General Mattis",
      option3: " General Pershing",
      question: "It's said he angered Sioux by letting cavalry trample sacred cannabis field on way to Little Big Horn",
      value: 200,
      category: "history",
      approved: true
    },
    {
      answer: "Pontiac",
      option1: "Brock",
      option2: "Amherst",
      option3: " Boquet",
      question: "In 1763 he battled the English for Detroit -- where his name still builds excitement",
      value: 300,
      category: "history",
      approved: true
    },
    {
      answer: "Marie Curie",
      option1: "Sigrid Undset",
      option2: "Pearl S. Buck",
      option3: "Gertrude B. Elion",
      question: "When Dr. Pauling won his 2nd Nobel Prize in '62, he was 1st 2-time winner since this woman 51 years earlier",
      value: 400,
      category: "history",
      approved: true
    },
    {
      answer: "Soviet Union",
      option1: "Nigeria",
      option2: "Yemen ",
      option3: "Hatie",
      question: "This country reported in 1923 that U.S. famine relief efforts there had saved 10 million lives in 2 years",
      value: 500,
      category: "history",
      approved: true
    },
    {
      answer: "Joan of Arc",
      option1: "Marie of Anjou",
      option2: "Yolande of Aragon",
      option3: " Charlotte of Savoy",
      question: "She restored Charles VII to the throne, but he didn't lift a finger to save her from the stake",
      value: 100,
      category: "history",
      approved: true
    },
    {
      answer: "Queen Victoria",
      option1: "Queen Elizabeth II",
      option2: "Mary, Queen of Scots ",
      option3: " Marie-Antoniette of France",
      question: "It's said this royal grandmother of Kaiser Wilhelm II wouldn't let him visit Ireland",
      value: 200,
      category: "history",
      approved: true
    },
    {
      answer: "the James Brothers (Frank & Jessie)",
      option1: "the Wilkes  Booth Brothers (Edwin & John)",
      option2: "the Wright brothers (Wilber & Orville)",
      option3: "the Sullivan Brothers(Joseph & Albert)",
      question: "In 1881, despite a $10,000 reward for the arrest of these brothers, the posters left out 'dead or alive'",
      value: 300,
      category: "history",
      approved: true
    },
    {
      answer: "the Persian Empire",
      option1: "the Roman Empire",
      option2: "the British Empire ",
      option3: "the Portuguese Empire",
      question: "Darius I ruled this vast empire from 2 capitals, Susa & Persepolis",
      value: 400,
      category: "history",
      approved: true
    },
    {
      answer: "the East India Company",
      option1: "Verrinigde Oostndisches Compagnie",
      option2: "Virginia Company ",
      option3: "Danish East India Company",
      question: "In 1858, the Brittish government took over the rule of India from this company",
      value: 500,
      category: "history",
      approved: true
    },

  ])
  process.exit();
}

seed();