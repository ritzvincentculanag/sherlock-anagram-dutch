const inputWord = "ENTER_WORD_HERE_THEN_CLICK_RUN";

const wordList = [
    "zijn",
    "voor",
    "niet",
    "maar",
    "door",
    "naar",
    "over",
    "meer",
    "jaar",
    "zich",
    "geen",
    "Maar",
    "werd",
    "moet",
    "deze",
    "veel",
    "twee",
    "haar",
    "gaat",
    "waar",
    "goed",
    "daar",
    "gaan",
    "alle",
    "Voor",
    "komt",
    "doen",
    "weer",
    "heel",
    "toch",
    "onze",
    "tijd",
    "mijn",
    "zelf",
    "drie",
    "iets",
    "eens",
    "land",
    "hier",
    "zegt",
    "werk",
    "zeer",
    "toen",
    "zien",
    "rond",
    "want",
    "hele",
    "Deze",
    "geld",
    "ligt",
    "lang",
    "kwam",
    "deel",
    "keer",
    "vaak",
    "vier",
    "week",
    "even",
    "laat",
    "doet",
    "echt",
    "ging",
    "vijf",
    "weet",
    "snel",
    "elke",
    "oude",
    "tien",
    "Daar",
    "huis",
    "Toch",
    "boek",
    "naam",
    "stad",
    "Zijn",
    "hand",
    "vrij",
    "Bank",
    "ziet",
    "paar",
    "Want",
    "stuk",
    "Door",
    "Niet",
    "eeuw",
    "eind",
    "Toen",
    "hoge",
    "valt",
    "soms",
    "film",
    "zaak",
    "kost",
    "ooit",
    "vorm",
    "hoog",
    "vele",
    "kans",
    "best",
    "open",
    "druk",
    "bank",
    "vast",
    "ruim",
    "vlak",
    "plan",
    "kant",
    "deed",
    "juni",
    "liet",
    "vind",
    "dood",
    "idee",
    "Over",
    "vond",
    "denk",
    "Paul",
    "Info",
    "rest",
    "mens",
    "ogen",
    "Irak",
    "mooi",
    "Veel",
    "kort",
    "acht",
    "hebt",
    "kind",
    "Onze",
    "Gent",
    "feit",
    "juli",
    "raad",
    "half",
    "duur",
    "Mijn",
    "Unie",
    "zoek",
    "Twee",
    "Geen",
    "erop",
    "taal",
    "York",
    "auto",
    "kent",
    "gang",
    "John",
    "merk",
    "stap",
    "bent",
    "Alle",
    "hulp",
    "eten",
    "wijn",
    "lage",
    "kunt",
    "legt",
    "Meer",
    "hoop",
    "heet",
    "wist",
    "hard",
    "Marc",
    "lijn",
    "Hier",
    "doel",
    "telt",
    "erin",
    "laag",
    "foto",
    "punt",
    "euro",
    "viel",
    "Elke",
    "Raad",
    "Waar",
    "noch",
    "mate",
    "heen",
    "hart",
    "orde",
    "ware",
    "foto",
    "neer",
    "rode",
    "loop",
    "deur",
    "slag",
    "zoon",
    "niks",
    "auto",
    "Soms",
    "volk",
    "wind",
    "leek",
    "pers",
    "taak",
    "bang",
    "past",
    "Naar",
    "munt",
    "spel",
    "plus",
    "bouw",
    "baan",
    "liep",
    "koop",
    "band",
    "rust",
    "tuin",
    "rijk",
    "blad",
    "reis",
    "Drie",
    "fout",
    "trok",
    "Haar",
    "pond",
    "Club",
    "Heel",
    "neus",
    "fors",
    "kerk",
    "glas",
    "uren",
    "jobs",
    "voet",
    "stem",
    "Haag",
    "name",
    "Dirk",
    "goud",
    "Eind",
    "type",
    "Bush",
    "plek",
    "olie",
    "dure",
    "last",
    "jong",
    "that",
    "huid",
    "vuur",
    "Andr",
    "baas",
    "Eric",
    "diep",
    "mode",
    "Zuid",
    "fase",
    "Wall",
    "Jean",
    "kijk",
    "dorp",
    "club",
    "zorg",
    "mark",
    "leuk",
    "hoor",
    "welk",
    "team",
    "Ford",
    "hoek",
    "dans",
    "kust",
    "Bill",
    "rand",
    "maak",
    "stof",
    "hout",
    "stil",
    "warm",
    "muur",
    "zaal",
    "Hans",
    "blik",
    "koos",
    "mond",
    "PvdA",
    "blij",
    "site",
    "Neem",
    "Rode",
    "aard",
    "maat",
    "Belg",
    "enig",
    "word",
    "Luik",
    "Hugo",
    "Kohl",
    "Vier",
    "pijn",
    "gauw",
    "Vaak",
    "nood",
    "Golf",
    "been",
    "voel",
    "post",
    "rood",
    "Laat",
    "City",
    "ding",
    "bron",
    "mist",
    "http",
    "zout",
    "Oost",
    "ruil",
    "Jean",
    "Cash",
    "slot",
    "kern",
    "Mark",
    "pure",
    "Kijk",
    "vlug",
    "call",
    "Even",
    "wijk",
    "Blok",
    "Zelf",
    "boot",
    "stel",
    "oren",
    "Open",
    "wees",
    "kilo",
    "peil",
    "toon",
    "nota",
    "heer",
    "pand",
    "Tijd",
    "geur",
    "ziek",
    "wint",
    "ramp",
    "maal",
    "Tony",
    "loon",
    "Bert",
    "Tien",
    "Vijf",
    "Iran",
    "term",
    "geef",
    "pour",
    "luxe",
    "zwak",
    "bier",
    "vlot",
    "Rome",
    "fles",
    "eist",
    "gids",
    "bord",
    "puur",
    "koud",
    "lukt",
    "leer",
    "saus",
    "brug",
    "arts",
    "Rond",
    "nauw",
    "Goed",
    "have",
    "Fund",
    "Foto",
    "Post",
    "park",
    "leeg",
    "lees",
    "boom",
    "melk",
    "mede",
    "Stel",
    "Bart",
    "Theo",
    "veld",
    "doek",
    "lijf",
    "Neen",
    "seks",
    "Erik",
    "Piet",
    "Oude",
    "Iets",
    "golf",
    "NMBS",
    "Suez",
    "Unie",
    "klok",
    "klap",
    "Mars",
    "nvdr",
    "Smet",
    "jury",
    "cash",
    "neem",
    "kast",
    "ziel",
    "verf",
    "Huis",
    "Bron",
    "lege",
    "vers",
    "this",
    "mikt",
    "adem",
    "pakt",
    "Vele",
    "they",
    "jazz",
    "Park",
    "Blue",
    "ASLK",
    "oven",
    "Moet",
    "test",
    "Zegt",
    "West",
    "Genk",
    "wens",
    "line",
    "hond",
    "wild",
    "rijp",
    "Koen",
    "sich",
    "gast",
    "norm",
    "dode",
    "Anne",
    "Yves",
    "arme",
    "moed",
    "riep",
    "Plus",
    "baby",
    "leed",
    "Coca",
    "Cola",
    "Sony",
    "kamp",
    "ster",
    "Denk",
    "Eddy",
    "mail",
    "huur",
    "dank",
    "Opel",
    "data",
    "time",
    "dier",
    "Zuid",
    "doos",
    "bond",
    "BRTN",
    "prof",
    "trek",
    "Navo",
    "Carl",
    "oogt",
    "Hoge",
    "CERA",
    "fijn",
    "Maas",
    "Jack",
    "tips",
    "Euro",
    "West",
    "West",
    "Beek",
    "will",
    "zand",
    "show",
    "lire",
    "Life",
    "Maes",
    "Ruim",
    "Echt",
    "held",
    "zone",
    "wilt",
    "gele",
    "room",
    "logo",
    "from",
    "trap",
    "Bonn",
    "kaas",
    "Jaar",
    "boos",
    "Jean",
    "Java",
    "lift",
    "Taal",
    "boer",
    "Fred",
    "cent",
    "Lang",
    "klas",
    "keek",
    "bood",
    "roze",
    "chef",
    "Rupo",
    "make",
    "Nike",
    "hemd",
    "Cuba",
    "late",
    "auch",
    "live",
    "jurk",
    "code",
    "brak",
    "Tour",
    "Eens",
    "dame",
    "stak",
    "vlag",
    "menu",
    "King",
    "fris",
    "trio",
    "Plan",
    "boze",
    "vice",
    "Komt",
    "raam",
    "Gimv",
    "Ooit",
    "Star",
    "Gaat",
    "Bond",
    "unie",
    "berg",
    "look",
    "trad",
    "Bach",
    "stop",
    "Rudy",
    "West",
    "Food",
    "ruwe",
    "noem",
    "roer",
    "fans",
    "klus",
    "Zuid",
    "luik",
    "Jazz",
    "hete",
    "buik",
    "Croo",
    "faam",
    "link",
    "ring",
    "Alan",
    "piek",
    "dito",
    "Werk",
    "zuur",
    "priv",
    "Weet",
    "Baan",
    "Audi",
    "klom",
    "Kort",
    "gold",
    "Bell",
    "daad",
    "Time",
    "Geld",
    "Cera",
    "eine",
    "gram",
    "plat",
    "paus",
    "bvba",
    "soep",
    "NCMV",
    "Zuid",
    "reed",
    "Week",
    "hoef",
    "gras",
    "Kris",
    "Sint",
    "baat",
    "more",
    "koor",
    "info",
    "knap",
    "lief",
    "rock",
    "Hall",
    "Data",
    "Bank",
    "deal",
    "neen",
    "Weer",
    "Zeer",
    "must",
    "wekt",
    "Aken",
    "mits",
    "zalm",
    "heus",
    "loep",
    "Fons",
    "wand",
    "vult",
    "Zuid",
    "spot",
    "VOOR",
    "geel",
    "meet",
    "chte",
    "vaag",
    "thee",
    "hing",
    "Voeg",
    "Fiat",
    "Peel",
    "Land",
    "vice",
    "saai",
    "maan",
    "Rijn",
    "Dale",
    "bril",
    "blok",
    "rook",
    "aids",
    "haat",
    "heil",
    "Dior",
    "ABVV",
    "Jong",
    "koel",
    "durf",
    "Real",
    "rard",
    "proc",
    "rare",
    "anno",
    "zult",
    "Henk",
    "graf",
    "Bent",
    "para",
    "Geef",
    "houd",
    "Rock",
    "wijs",
    "race",
    "Acht",
    "Mike",
    "Lion",
    "zakt",
    "Nuth",
    "Miet",
    "gros",
    "Brit",
    "Nick",
    "roos",
    "Born",
    "than",
    "Akzo",
    "Hoog",
    "ISBN",
    "Doel",
    "Oeso",
    "Sint",
    "Kerk",
    "Mary",
    "Koop",
    "Soci",
    "alom",
    "Shop",
    "them",
    "Rijk",
    "zoet",
    "Amro",
    "sexy",
    "jouw",
    "boel",
    "Home",
    "Anna",
    "dook",
    "hoed",
    "Maak",
    "Corp",
    "Karl",
    "Leon",
    "Zuid",
    "deeg",
    "kook",
    "Oost",
    "raak",
    "woud",
    "Film",
    "Vera",
    "Eaux",
    "This",
    "high",
    "Jean",
    "LHSP",
    "koek",
    "maag",
    "your",
    "staf",
    "fier",
    "Vrij",
    "Arte",
    "wird",
    "avec",
    "haal",
    "lost",
    "lied",
    "erom",
    "grof",
    "doch",
    "West",
    "lijk",
    "Elio",
    "Hebt",
    "Love",
    "very",
    "Faes",
    "dien",
    "Mode",
    "vuil",
    "Nord",
    "baby",
    "raar",
    "vals",
    "Orde",
    "dekt",
    "boog",
    "chip",
    "priv",
    "most",
    "Berg",
    "tent",
    "Best",
    "Hill",
    "grap",
    "just",
    "Ludo",
    "chef",
    "tong",
    "taxi",
    "Aziz",
    "Welk",
    "Kees",
    "stal",
    "elan",
    "real",
    "vage",
    "priv",
    "Alfa",
    "trip",
    "tout",
    "flat",
    "Vlak",
    "nazi",
    "Muur",
    "Jean",
    "Paul",
    "Kurt",
    "Rudi",
    "sind",
    "life",
    "poot",
    "zake",
    "Line",
    "Poor",
    "Alex",
    "koks",
    "knie",
    "Andy",
    "Lyon",
    "Hool",
    "klim",
    "Munt",
    "slim",
    "roep",
    "Last",
    "GIMV",
    "rede",
    "Mens",
    "only",
    "what",
    "Oost",
    "Elst",
    "Trio",
    "denn",
    "roms",
    "lust",
    "korf",
    "auto",
    "Expo",
    "Mann",
    "noot",
    "rale",
    "Lijn",
    "AMRO",
    "BASF",
    "Oost",
    "keus",
    "Rose",
    "voer",
    "wier",
    "dele",
    "halt",
    "knop",
    "rich",
    "vork",
    "stok",
    "muis",
    "vies",
    "Jean",
    "Mede",
    "Lady",
    "tand",
    "Maij",
    "zaak",
    "glad",
    "Adam",
    "Benz",
    "were",
    "Tina",
    "nach",
    "hals",
    "Bois",
    "Jane",
    "Moor",
    "kaap",
    "belt",
    "year",
    "ller",
    "incl",
    "Dijk",
    "Wolf",
    "Gold",
    "Dole",
    "bont",
    "dijk",
    "Bull",
    "East",
    "Dick",
    "Lier",
    "good",
    "Ivan",
    "puin",
    "They",
    "tram",
    "Peru",
    "Bird",
    "zeep",
    "lamp",
    "werf",
    "wieg",
    "Road",
    "Palm",
    "Mare",
    "lokt",
    "Kind",
    "Jean",
    "Juan",
    "expo",
    "Polo",
    "MUYS",
    "keel",
    "kale",
    "Zorg",
    "file",
    "home",
    "Lord",
    "Gids",
    "prat",
    "blue",
    "Mooi",
    "long",
    "many",
    "Long",
    "Lode",
    "touw",
    "sein",
    "inkt",
    "also",
    "trui",
    "neef"
];

function getLetterFrequency(word) {
  const frequency = {};
  for (const letter of word) {
    frequency[letter] = (frequency[letter] || 0) + 1;
  }
  return frequency;
}

function canFormWordFromInput(inputWord, testWord) {
  const inputFrequency = getLetterFrequency(inputWord);
  const testFrequency = getLetterFrequency(testWord);

  // Check if the input word has enough letters to form the test word
  for (const letter in testFrequency) {
    if (testFrequency[letter] > (inputFrequency[letter] || 0)) {
      return false;
    }
  }
  return true;
}

function findAnagrams(inputWord, wordList) {
  return wordList.filter(word => canFormWordFromInput(inputWord, word));
}

const anagrams = findAnagrams(inputWord, wordList);
anagrams.forEach(word => console.log(word));
