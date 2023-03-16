/**
 * Checks if a user is currently logged in.
 *
 * @function
 * @returns {boolean} - True if a session token exists, otherwise false.
 */
export const isUserLoggedIn = () => {
  const token = localStorage.getItem('session_token')
  return token ? true : false
}

/**
 * Retrieves the current session token.
 *
 * @function
 * @returns {string} - A session token as a string.
 */
export const getToken = () => {
  const token = localStorage.getItem('session_token')
  return token
}

/**
 * Sets the session token in local storage.
 *
 * @function
 * @param {string} token - The session token to set.
 * @returns {string} - The session token that was set.
 * @throws {Error} - Throws an error if the token argument is not a string.
 */
export const setToken = (token) => {
  if(typeof token !== 'string') {
    throw new Error("token must be type: 'string'")
  }
  localStorage.setItem('session_token', token)
  return token
}

/**
 * Removes the current session token from local storage.
 *
 * @function
 * @returns {boolean} - Always returns true.
 */
export const clearToken = () => {
  localStorage.removeItem('session_token')
  return true
}

export const utilityJSON = () => {

  const data = [
    {
      "category": "Arts & Literature",
      "id": "622a1c3b7cc59eab6f95177a",
      "correctAnswer": "Brave New World",
      "incorrectAnswers": [
        "Big Old Planet",
        "Strange New Land",
        "Cruel Old Country"
      ],
      "question": "Which novel, published in 1932, was a vision of the future as a sanitised society?",
      "tags": ["arts_and_literature", "literature", "classic_novels"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "627164961ba117625baac967",
      "correctAnswer": "Canelazo",
      "incorrectAnswers": ["Kumis", "Rakı", "Tuba"],
      "question": "Which of these drinks would you associate with Equador?",
      "tags": ["drink", "alcohol"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "6250064c0d86c8f685d80ee0",
      "correctAnswer": "Bavette",
      "incorrectAnswers": ["Farfalle", "Tortellini", "Conchiglie"],
      "question": "Which pasta's name means 'Bibs'?",
      "tags": ["food", "words", "language", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "639c9dae929b90846f2fc98f",
      "correctAnswer": "Shiva",
      "incorrectAnswers": ["Vishnu", "Brihaspati", "Krishna"],
      "question": "What is the name of the Hindu god of destruction?",
      "tags": ["hinduism", "religion", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c3c7cc59eab6f951b1c",
      "correctAnswer": "Babylon",
      "incorrectAnswers": ["Atlantis", "Jerusalem", "Jericho"],
      "question": "In which city were the Hanging Gardens?",
      "tags": ["history"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c397cc59eab6f950ca8",
      "correctAnswer": "Pink Floyd",
      "incorrectAnswers": ["Wings", "Rudimental", "The Alan Parsons Project"],
      "question": "Which English rock band released the song 'Us and Them'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "6266e68eff2394bd44dee053",
      "correctAnswer": "Seven",
      "incorrectAnswers": ["Yellow", "White", "Black"],
      "question": "In Spanish, what is the meaning of the word 'siete'?",
      "tags": ["language", "translations", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "622a1c357cc59eab6f94fceb",
      "correctAnswer": "Indo-European",
      "incorrectAnswers": ["Sino-Tibetan", "Dravidian", "Koreanic"],
      "question": "The language 'Portuguese' belongs to which language family?",
      "tags": ["language", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c397cc59eab6f950d66",
      "correctAnswer": "Genesis",
      "incorrectAnswers": [
        "Orchestral Manoeuvres in the Dark",
        "Soft Machine",
        "The Human League"
      ],
      "question": "Which band includes 'Mike Rutherford'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "62417dd70f96c4efe8d773ef",
      "correctAnswer": "Washington Wizards",
      "incorrectAnswers": [
        "Washington Knicks",
        "Washington Raiders",
        "Washington Red Sox"
      ],
      "question": "Which of these is a basketball team based in Washington?",
      "tags": ["sport"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c367cc59eab6f950404",
      "correctAnswer": "Halloween",
      "incorrectAnswers": ["A Nightmare on Elm Street", "Scream", "Child's Play"],
      "question": "The Character Of Mike Myers Features Heavily In Which Series Of Horror Movies?",
      "tags": ["film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "625fd6dbdc0dd3b72da64d10",
      "correctAnswer": "2001",
      "incorrectAnswers": ["1998", "2004", "2007"],
      "question": "In which year was Amélie first released in the cinema?",
      "tags": ["film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "62433561cfaae40c129614a2",
      "correctAnswer": "A Kit",
      "incorrectAnswers": ["A Hatchling", "A Larva", "An Owlet"],
      "question": "A young squirrel is known as what?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c357cc59eab6f94ff30",
      "correctAnswer": "Michael Jackson",
      "incorrectAnswers": ["Nicki Minaj", "Neil Young", "Eric Clapton"],
      "question": "Which American singer released the song 'You Rock My World'?",
      "tags": ["songs", "musicians", "music"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c3c7cc59eab6f951a2d",
      "correctAnswer": "Parthenon",
      "incorrectAnswers": ["Colosseum", "Vivarium", "Academy"],
      "question": "Which of these is a building in the acropolis of Athens?",
      "tags": ["history"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c377cc59eab6f950530",
      "correctAnswer": "gemstones and ornamental materials",
      "incorrectAnswers": [
        "wood",
        "one of two main branches of soil science",
        "the nose and its diseases"
      ],
      "question": "What is Gemmology or Gemology the study of?",
      "tags": ["words", "science"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c387cc59eab6f950813",
      "correctAnswer": "Asia",
      "incorrectAnswers": ["South America", "Oceania", "Europe"],
      "question": "The country of Laos is on which continent?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c347cc59eab6f94fa2c",
      "correctAnswer": "Northern Renaissance",
      "incorrectAnswers": [
        "Art Nouveau",
        "Dutch and Flemish Renaissance",
        "Primitivism"
      ],
      "question": "The painting \"The Arnolfini Marriage\" by Jan van Eyck is a part of which art movement?",
      "tags": ["painting", "art", "arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c3e7cc59eab6f952322",
      "correctAnswer": "Real & Imaginary",
      "incorrectAnswers": ["True & False", "Big & Small", "Logical & Intuitive"],
      "question": "What are the 2 parts of complex numbers known as?",
      "tags": ["mathematics", "science"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "General Knowledge",
      "id": "622a1c3d7cc59eab6f951c3a",
      "correctAnswer": "Testicles",
      "incorrectAnswers": ["Eyes", "Fists", "Arms"],
      "question": "'Christmas Crackers' is cockney rhyming slang for which body part?",
      "tags": ["general_knowledge"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "625ea001796f721e95543fc7",
      "correctAnswer": "Ukraine",
      "incorrectAnswers": ["Ghana", "Denmark", "Puerto Rico"],
      "question": "Which country's flag can be described as 'Two equal horizontal bands of blue and yellow.'?",
      "tags": ["flags", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "639ae361929b90846f2fc8cb",
      "correctAnswer": "Quetzalcoatl",
      "incorrectAnswers": ["Huitzilopochtli", "Tlaloc", "Tezcatlipoca"],
      "question": "What is the name of the Aztec feathered serpent god?",
      "tags": ["history", "aztecs"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c3a7cc59eab6f95101e",
      "correctAnswer": "Poisons",
      "incorrectAnswers": [
        "Radiation",
        "Abstract Categorisation",
        "Venomous Animals"
      ],
      "question": "What Is Toxicology The Study Of?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "63b058814799123c67712f47",
      "correctAnswer": "Secular",
      "incorrectAnswers": ["Communist", "Feudal", "Monarchial"],
      "question": "Which of these words describes the Indian state?",
      "tags": ["india", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c377cc59eab6f95050f",
      "correctAnswer": "fish",
      "incorrectAnswers": ["a variant of physiognomy", "oceans", "the Islam"],
      "question": "What is Ichthyology the study of?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c347cc59eab6f94fba6",
      "correctAnswer": "\"Renegade\" by Styx",
      "incorrectAnswers": [
        "\"Circle of Life\" by Elton John",
        "\"I'll Make a Man Out of You\" by Donny Osmond",
        "\"Welcome to the Black Parade\" by My Chemical Romance"
      ],
      "question": "Which song begins with the lyrics: \"Oh, Mama, I’m in fear for my life from the long arm of the law...\"?",
      "tags": ["lyrics", "music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "625063e8e12f6dec240bdf8b",
      "correctAnswer": "All My Life",
      "incorrectAnswers": [
        "We Don't Have to Take Our Clothes Off",
        "Rock Me Amedeus",
        "Relax"
      ],
      "question": "K-Ci & JoJo had a one hit wonder in 1997 with which song?",
      "tags": ["songs", "one_hit_wonders", "music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c357cc59eab6f94fe49",
      "correctAnswer": "Water",
      "incorrectAnswers": ["Salt", "Foliage", "Human Settlement"],
      "question": "Over 75% of the Earth's surface is covered by some form of _____.",
      "tags": ["general_knowledge", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "63a03979c7d86251f9b65c64",
      "correctAnswer": "The Evil Queen",
      "incorrectAnswers": [
        "The Wicked Witch",
        "Maleficent",
        "The Lady of the Lake"
      ],
      "question": "What is the name of the witch in Snow White and the Seven Dwarfs?",
      "tags": ["film_and_tv", "disney", "film"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "622a1c347cc59eab6f94f86b",
      "correctAnswer": "Football",
      "incorrectAnswers": ["Athletics", "Rugby Union", "Surfing"],
      "question": "With which sport is George Best associated?",
      "tags": ["people", "sport"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c3a7cc59eab6f951025",
      "correctAnswer": "Stratosphere",
      "incorrectAnswers": ["Exosphere", "Thermosphere", "Mesosphere"],
      "question": "What is the troposphere immediately lower than?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "639898405c9a75021f31046c",
      "correctAnswer": "Fermentation",
      "incorrectAnswers": ["Distillation", "Oxidation", "Clarification"],
      "question": "What is the process used to convert grape juice into wine called?",
      "tags": ["food_and_drink", "wine", "drink", "chemistry"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "63f394fd989356ef48370bd7",
      "correctAnswer": "Kiwi",
      "incorrectAnswers": ["Cantaloupe", "Honeydew", "Watermelon"],
      "question": "Which of these fruits is not a melon?",
      "tags": ["food_and_drink", "food", "fruit"],
      "type": "Multiple Choice",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "622a1c357cc59eab6f94fce6",
      "correctAnswer": "Austroasiatic",
      "incorrectAnswers": ["Uralic", "Sino-Tibetan", "Kra–Dai"],
      "question": "The language 'Vietnamese' belongs to which language family?",
      "tags": ["language", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c367cc59eab6f9501bd",
      "correctAnswer": "Harry Potter and the Prisoner of Azkaban",
      "incorrectAnswers": [
        "Harry Potter and the Half-Blood Prince",
        "New Moon",
        "The Alchemist"
      ],
      "question": "Which piece of written work starts with the line 'Harry Potter was a highly unusual boy in many ways.'?",
      "tags": [
        "harry_potter",
        "literature",
        "young_adult",
        "fiction",
        "arts_and_literature"
      ],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "6260302a4b176d54800e3d11",
      "correctAnswer": "Chisinau",
      "incorrectAnswers": ["Vienna", "Cologne", "Geneva"],
      "question": "Which of these cities is in Moldova?",
      "tags": ["cities", "europe", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "6233856f62eaad73716a8c6e",
      "correctAnswer": "Colorado and Wyoming",
      "incorrectAnswers": [
        "Texas and Illinois",
        "Florida and Georgia",
        "Maine and Nevada"
      ],
      "question": "What two US states are rectangular?",
      "tags": ["usa", "us_states", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "622a1c367cc59eab6f9502f5",
      "correctAnswer": "Mayonnaise",
      "incorrectAnswers": ["Mustard", "Onion Soup", "Quiche"],
      "question": "What was bought to France by Duke Richelieu after visiting Mahon, Minorca? ",
      "tags": ["food", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94f8d1",
      "correctAnswer": "Dustin Hoffman",
      "incorrectAnswers": ["Dennis Hopper", "Malcolm McDowell", "Al Pacino"],
      "question": "Which actor played the role of Ratso Rizzo in Midnight Cowboy?",
      "tags": ["acting", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "63d952fc168979b94b2e4f6b",
      "correctAnswer": "Simon Bolivar",
      "incorrectAnswers": ["Juan Peron", "Augusto Pinochet", "Ho Chi Minh"],
      "question": "Which leader was known as 'The Great Liberator'?",
      "tags": ["history", "leaders", "people"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c3a7cc59eab6f9510c2",
      "correctAnswer": "Flax",
      "incorrectAnswers": ["Sunflower", "Hemp", "Wheat"],
      "question": "Linen is obtained from the fibers of what plant?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "622a1c357cc59eab6f94fcbe",
      "correctAnswer": "Austroasiatic",
      "incorrectAnswers": ["Afroasiatic", "Koreanic", "Niger–Congo"],
      "question": "The language 'Khmer' belongs to which language family?",
      "tags": ["language", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c3c7cc59eab6f9517e3",
      "correctAnswer": "Indonesia",
      "incorrectAnswers": ["Malaysia", "Thailand", "The Philippines"],
      "question": "Which country was previously known as the Dutch East Indies?",
      "tags": [
        "history",
        "geography",
        "the_netherlands",
        "southeast_asia",
        "previous_names",
        "countries"
      ],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c357cc59eab6f94ff61",
      "correctAnswer": "Bob Dylan",
      "incorrectAnswers": ["Neil Young", "Eric Clapton", "Alanis Morissette"],
      "question": "Which American musician released the song 'Mr. Tambourine Man'?",
      "tags": ["songs", "music"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "622a1c347cc59eab6f94f86e",
      "correctAnswer": "Football",
      "incorrectAnswers": ["Snooker", "Cricket", "Motor racing"],
      "question": "With which sport is Cristiano Ronaldo associated?",
      "tags": ["people", "general_knowledge", "sport"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c387cc59eab6f950ba8",
      "correctAnswer": "Nine Inch Nails",
      "incorrectAnswers": [
        "In This Moment",
        "Nitty Gritty Dirt Band",
        "Animal Collective"
      ],
      "question": "Which American industrial rock band released the song 'Hurt'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c387cc59eab6f950ac5",
      "correctAnswer": "Austria",
      "incorrectAnswers": ["Croatia", "Monaco", "Liechtenstein"],
      "question": "Which of these countries borders Italy?",
      "tags": ["italy", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c357cc59eab6f94fe35",
      "correctAnswer": "The Bronx",
      "incorrectAnswers": ["Manhattan", "Harlem", "Brooklyn"],
      "question": "What is the only borough of New York City that is not on an island? ",
      "tags": ["cities", "new_york", "usa", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c377cc59eab6f950570",
      "correctAnswer": "The characteristics of the skull",
      "incorrectAnswers": [
        "Mythological beings",
        "Large machinery",
        "Angels and Demons"
      ],
      "question": "What is Craniology the study of?",
      "tags": ["words", "science"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "622a1c3b7cc59eab6f951635",
      "correctAnswer": "Bread",
      "incorrectAnswers": ["Cheese", "Fruit", "Nut"],
      "question": " What type of food is pitta?",
      "tags": ["food", "general_knowledge", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "623742d1cb85f7ce9e949df4",
      "correctAnswer": "London",
      "incorrectAnswers": ["Manchester", "Birmingham", "Winchester"],
      "question": "What is the capital city of The United Kingdom?",
      "tags": [
        "capital_cities",
        "uk",
        "cities",
        "general_knowledge",
        "europe",
        "geography"
      ],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "62374186cb85f7ce9e949d6f",
      "correctAnswer": "Mozambique",
      "incorrectAnswers": ["Burkina Faso", "Sao Tome and Principe", "Micronesia"],
      "question": "Maputo is the capital city of which country?",
      "tags": ["africa"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "639c9da1929b90846f2fc974",
      "correctAnswer": "1947",
      "incorrectAnswers": ["1945", "1938", "1955"],
      "question": "In which year did the Cold War between the U.S. and Soviet Union begin?",
      "tags": ["history", "1900's", "cold_war", "usa", "soviet_union", "wars"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "639c9d95929b90846f2fc95b",
      "correctAnswer": "Burj Khalifa",
      "incorrectAnswers": [
        "Shanghai Tower",
        "Taipei 101",
        "Empire State Building"
      ],
      "question": "What is the tallest building in the world?",
      "tags": [
        "architecture",
        "geography",
        "tourist_attractions",
        "buildings",
        "general_knowledge"
      ],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c357cc59eab6f94fe6d",
      "correctAnswer": "Lady Gaga",
      "incorrectAnswers": ["Hikaru Utada", "Drake", "Madonna"],
      "question": "Which American singer, songwriter, and actress released the song 'G.U.Y.'?",
      "tags": ["musicians", "songs", "music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c357cc59eab6f94ffe4",
      "correctAnswer": "Budapest",
      "incorrectAnswers": ["Pécs", "Prague", "Salzburg"],
      "question": "What is the capital of Hungary? ",
      "tags": ["capital_cities", "europe", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c387cc59eab6f950a5c",
      "correctAnswer": "Russia",
      "incorrectAnswers": ["Bulgaria", "Lithuania", "Latvia"],
      "question": "Which of these countries borders Ukraine?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c367cc59eab6f9501a2",
      "correctAnswer": "Don Quixote",
      "incorrectAnswers": [
        "The Diary of a Chambermaid",
        "The Neverending Story",
        "Orlando Furioso"
      ],
      "question": "In which book does 'Sancho Panza' appear?",
      "tags": [
        "literature",
        "classic_novels",
        "fictitious_characters",
        "arts_and_literature"
      ],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "622a1c367cc59eab6f950094",
      "correctAnswer": "Let",
      "incorrectAnswers": ["Dus", "Par", "See"],
      "question": "What 3 Letter Word It The Name Given To A Replayed Point In Tennis?",
      "tags": ["tennis", "sport", "words"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c3b7cc59eab6f951779",
      "correctAnswer": "Frankenstein",
      "incorrectAnswers": ["Great Expectation", "Ullyses", "Of Mice and Men"],
      "question": "Which novel opens and closes with the letters of Robert Walton?",
      "tags": ["arts_and_literature", "literature", "classic_novels"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "6371623c1bf863c45ca6c361",
      "correctAnswer": "Sapientia potentia est",
      "incorrectAnswers": [
        "Hodie mihi, cras tibi",
        "Ego te provoco",
        "Melita, domi adsum"
      ],
      "question": "Which of these Latin phrases means 'Wisdom is power'?",
      "tags": ["society_and_culture", "language", "the_romans", "classics"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950e55",
      "correctAnswer": "Washington Irving",
      "incorrectAnswers": [
        "Suzanne Collins",
        "James Fenimore Cooper",
        "Donna Leon"
      ],
      "question": "Which author wrote 'Le Livre d’esquisses'?",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c367cc59eab6f95019f",
      "correctAnswer": "Naive art",
      "incorrectAnswers": ["Beginner's art", "Natural art", "Pop art"],
      "question": "Name the art style, usually paintings, characterized by a simplified style, nonscientific perspective, and bold colors. The artists are generally not professionally trained.",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "624c6144badf21197f98f770",
      "correctAnswer": "The Middle East",
      "incorrectAnswers": ["China", "Cameroon", "Guyana"],
      "question": "Shawarma is a dish that is most associated with which part of the world?",
      "tags": ["food", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c397cc59eab6f950dc1",
      "correctAnswer": "The Beatles",
      "incorrectAnswers": ["Deep Purple", "Feeder", "Uriah Heep"],
      "question": "Which band includes 'Paul McCartney'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "625063d0e12f6dec240bdf84",
      "correctAnswer": "Rapper's Delight",
      "incorrectAnswers": ["Epic", "Groove Is in the Heart", "Take on Me"],
      "question": "What song did Sugarhill Gang have a hit with in 1980?",
      "tags": ["songs", "one_hit_wonders", "music"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c357cc59eab6f94ffa3",
      "correctAnswer": "Dominican Republic",
      "incorrectAnswers": ["Haiti", "Jamaica", "Saint Kitts and Nevis"],
      "question": "What country is Santo Domingo the capital of?",
      "tags": ["capital_cities", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "62602e584b176d54800e3cd4",
      "correctAnswer": "Gent",
      "incorrectAnswers": ["Prague", "Vienna", "Stockholm"],
      "question": "Which of these cities is in Belgium?",
      "tags": ["cities", "europe", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "627164321ba117625baac94e",
      "correctAnswer": "China",
      "incorrectAnswers": ["Brazil", "England", "Ukraine"],
      "question": "In which country is maotai a popular drink?",
      "tags": ["drink", "alcohol"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "62417d1c0f96c4efe8d773a5",
      "correctAnswer": "Edmonton Oilers",
      "incorrectAnswers": [
        "Edmonton Steelers",
        "Edmonton Eathquakes",
        "Edmonton Padres"
      ],
      "question": "Which of these is a hockey team based in Edmonton?",
      "tags": ["canada", "hockey", "nhl", "sport"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950e28",
      "correctAnswer": "Philip Pullman",
      "incorrectAnswers": [
        "J. R. R. Tolkien",
        "Christopher Tolkien",
        "Neil Gaiman"
      ],
      "question": "Which author wrote 'His Dark Materials trilogy'?",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c357cc59eab6f94ff7c",
      "correctAnswer": "Brussels",
      "incorrectAnswers": ["Antwerp", "Liège", "Amsterdam"],
      "question": "Where city has the statue, 'Manneken Pis, depicting a naked boy urinating into a fountain?",
      "tags": ["cities", "tourist_attractions", "statues", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "623b579ffd6c701a9211836c",
      "correctAnswer": "Bulgaria",
      "incorrectAnswers": ["Guatemala", "Cuba", "Belgium"],
      "question": "In which country would you find the Rila Monastery?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "62373f70cb85f7ce9e949c99",
      "correctAnswer": "Buenos Aires",
      "incorrectAnswers": ["Porto-Novo", "São Paulo", "Córdoba"],
      "question": "What is the capital city of Argentina?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "6357fd4368bd5000211e718e",
      "correctAnswer": "Zimbabwe",
      "incorrectAnswers": ["Malawi", "Taiwan", "Mozambique"],
      "question": "Xhosa is a language spoken in which of these countries?",
      "tags": ["language", "linguistics", "society_and_culture"],
      "type": "Multiple Choice",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "6293ec3c7f41d6338b96eee1",
      "correctAnswer": "Political philosopher who promoted a theory of liberal democracy and a social contract.",
      "incorrectAnswers": [
        "Renaissance sculptor, painter and architect",
        "Explorer who landed in America.",
        "Biologist who discovered penicillin."
      ],
      "question": "Which of the following describes John Locke?",
      "tags": ["people", "history", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94fc1a",
      "correctAnswer": "\"Greed, for lack of a better word, is good.\"",
      "incorrectAnswers": [
        "\"Hello, gorgeous.\"",
        "\"That’s a bingo!\"",
        "\"Tell 'em to go out there with all they got and win just one for the Gipper.\""
      ],
      "question": "Which of these quotes is from the film 'Wall Street'?",
      "tags": ["quotes", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "625740ef9da29df7b05f7403",
      "correctAnswer": "Dead Poets Society",
      "incorrectAnswers": ["Raging Bull", "Modern Times", "The Wizard of Oz"],
      "question": "Name the movie that matches the following plot summary: 'A maverick teacher emboldens his students to new heights of self-expression.'",
      "tags": ["film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "62611f2c4b176d54800e3d46",
      "correctAnswer": "1949",
      "incorrectAnswers": ["1941", "1970", "1923"],
      "question": "In which year did the communists come into to power in Beijing following the Chinese Civil War?",
      "tags": ["events", "revolutions", "wars", "cold_war", "politics", "china"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c357cc59eab6f94fd97",
      "correctAnswer": "Mariah Carey",
      "incorrectAnswers": ["Rihanna", "Beyonce", "Christina Aguilera"],
      "question": "Which Singing Diva Flopped At The Box Office With Her Debut Movie “Glitter”?",
      "tags": ["people", "music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "62433454cfaae40c12961438",
      "correctAnswer": "An Eyas",
      "incorrectAnswers": ["A Nymph", "A Calf", "A Poult"],
      "question": "What is a baby hawk known as?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c3a7cc59eab6f951364",
      "correctAnswer": "Mural",
      "incorrectAnswers": ["Sculpture", "Graffiti", "Mozaic"],
      "question": "A large painting or decoration done on a wall is known as what?",
      "tags": ["art", "words", "arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "622a1c357cc59eab6f94fcca",
      "correctAnswer": "Indo-European",
      "incorrectAnswers": ["Sino-Tibetan", "Koreanic", "Afroasiatic"],
      "question": "The language 'Eastern Punjabi' belongs to which language family?",
      "tags": ["language", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "625e9e52796f721e95543f4f",
      "correctAnswer": "Denmark",
      "incorrectAnswers": ["Netherlands", "Poland", "Qatar"],
      "question": "Which country's flag fits the description of 'Red with a white cross that extends to the edges.'?",
      "tags": ["flags", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c3d7cc59eab6f951c1a",
      "correctAnswer": "Denmark",
      "incorrectAnswers": ["Norway", "Sweden", "Finland"],
      "question": "From what country did the U.S. buy the Virgin Islands?",
      "tags": ["usa", "history"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950de9",
      "correctAnswer": "Louisa May Alcott",
      "incorrectAnswers": [
        "Edgar Allan Poe",
        "Nathaniel Hawthorne",
        "Stephen King"
      ],
      "question": "Which author wrote 'Little Women'?",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "622a1c367cc59eab6f95024e",
      "correctAnswer": "Apple ",
      "incorrectAnswers": ["Grape", "Banana", "Cherry"],
      "question": "Blanche Ames, Lord Lambourne and Willis Williams are all varieties of _________",
      "tags": ["food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "63dd25c4742e43ed64f1f010",
      "correctAnswer": "Fiscal Policy",
      "incorrectAnswers": ["Honesty Policy", "Tax Policy", "Free Market"],
      "question": "In economics, what is the term for the use of government funds to influence the economy?",
      "tags": ["society_and_culture", "economics"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94f8e4",
      "correctAnswer": "Barbara Stanwyck",
      "incorrectAnswers": ["Vivien Leigh", "Anne Bancroft", "Olivia Newton-John"],
      "question": "Which actress played the role of Phyllis Dietrichson in Double Indemnity?",
      "tags": ["people", "acting", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "62417d960f96c4efe8d773d6",
      "correctAnswer": "Portland Timbers",
      "incorrectAnswers": [
        "Portland Sporting",
        "Portland Indians",
        "Portland Dolphins"
      ],
      "question": "Which of these is a soccer team based in Portland?",
      "tags": ["sport"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950e7b",
      "correctAnswer": "Kurt Vonnegut",
      "incorrectAnswers": [
        "Vladimir Nabokov",
        "Edgar Allan Poe",
        "Stanisław Lem"
      ],
      "question": "Which author wrote 'Slaughterhouse-Five'?",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c367cc59eab6f9503b4",
      "correctAnswer": "Charles I",
      "incorrectAnswers": ["Louis XIV", "Louis XVI", "Charles III"],
      "question": "Which King Wore Two Shirts At His Execution So As Not To Shiver And Appear Frightened?",
      "tags": ["kings", "uk", "history"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "6243331bcfaae40c129613bf",
      "correctAnswer": "A Boar",
      "incorrectAnswers": ["A Dog", "A Tom", "A Jack"],
      "question": "What is the word for a male badger?",
      "tags": ["names", "animals", "science"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950ee1",
      "correctAnswer": "George R. R. Martin",
      "incorrectAnswers": ["Stephen King", "Jack Vance", "Edgar Rice Burroughs"],
      "question": "Which author wrote 'A Song of Ice and Fire'?",
      "tags": ["fantasy", "literature", "arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c3c7cc59eab6f9518d1",
      "correctAnswer": "Guillotine",
      "incorrectAnswers": ["Firing Squad", "Fire", "Dogs"],
      "question": "What was the instrument of execution during the \"Reign of Terror\"?",
      "tags": ["france", "1700's", "revolutions", "history"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c367cc59eab6f95014f",
      "correctAnswer": "Jane Austen",
      "incorrectAnswers": ["Emily Bronte", "Oscar Wilde", "John Updike"],
      "question": "Who wrote the novel \"Emma\"?",
      "tags": ["classic_novels", "literature", "arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94faf9",
      "correctAnswer": "Brie Larson",
      "incorrectAnswers": [
        "Cate Blanchett",
        "Jennifer Lawrence",
        "Charlotte Rampling"
      ],
      "question": "Who won the 2015 Academy Award for Best Leading Actress for playing the role of Ma in Room?",
      "tags": ["acting", "academy_awards", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "625698cc9da29df7b05f729e",
      "correctAnswer": "Ayo",
      "incorrectAnswers": [
        "Agent Peggy Carter",
        "Agent Maria Hill",
        "Jane Foster"
      ],
      "question": "In the Marvel Cinematic Unvierse, which character is played by Florence Kasumba?",
      "tags": ["mcu", "film", "acting", "marvel", "comics", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c377cc59eab6f9504a5",
      "correctAnswer": "the mental processes within mental illness or disorders",
      "incorrectAnswers": [
        "life in outer space",
        "a synonym for taxonomy",
        "prehistoric climates"
      ],
      "question": "What is Psychopathology the study of?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "6266bc8cb0e62e469cf43e9b",
      "correctAnswer": "Cornett",
      "incorrectAnswers": ["Drum", "Bongo", "Ukelele"],
      "question": "Which of these is a brass instrument?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "62433434cfaae40c1296142b",
      "correctAnswer": "A Sow",
      "incorrectAnswers": ["A Queen", "A Ewe", "A Gander"],
      "question": "What would you call a female guinea pig?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "63b069514799123c67712f7b",
      "correctAnswer": "Indlamu",
      "incorrectAnswers": ["Hula", "Tango", "Flamenco"],
      "question": "What is the traditional dance of the Zulu people of South Africa?",
      "tags": ["society_and_culture", "dance", "africa", "zulu"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "625063bce12f6dec240bdf7e",
      "correctAnswer": "99 Luftballoons",
      "incorrectAnswers": [
        "Bust a Move",
        "Nothing Compares 2 U",
        "I'Ve Never Been to Me"
      ],
      "question": "What song did Nena have a hit with in 1984?",
      "tags": ["songs", "one_hit_wonders", "music"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c3a7cc59eab6f951354",
      "correctAnswer": "Monochrome",
      "incorrectAnswers": ["Magenta", "Unicolor", "Solohue"],
      "question": "What word describes a painting executed in a single color?",
      "tags": ["words", "art", "painting", "arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "6257402b9da29df7b05f73c9",
      "correctAnswer": "Casino",
      "incorrectAnswers": [
        "Parasite",
        "Eternal Sunshine of the Spotless Mind",
        "The Godfather"
      ],
      "question": "Name the movie that matches the following plot summary: 'A mafia enforcer and a casino executive compete against each other over a gambling empire.'",
      "tags": ["film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "625740909da29df7b05f73e7",
      "correctAnswer": "After a prince is betrayed and enslaved, he regains his freedom and comes back for revenge.",
      "incorrectAnswers": [
        "A group of thieves feel the pressure from the police when they leave a clue at their latest heist.",
        "A car salesman's inept crime falls apart due to his and his henchmen's bungling.",
        "After his father goes missing, a professor finds himself in a search for the Holy Grail."
      ],
      "question": "What is the plot of the movie Ben-Hur?",
      "tags": ["film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "622a1c367cc59eab6f950056",
      "correctAnswer": "Joe Frazier",
      "incorrectAnswers": ["Sugar Ray Robinson", "George Foreman", "Mike Tyson"],
      "question": "Who Was Beaten By Muhammad Ali In The Bout Entitled 'The Thriller In Manilla'?",
      "tags": ["boxing", "sport"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "62417db40f96c4efe8d773e1",
      "correctAnswer": "Seattle Seahawks",
      "incorrectAnswers": [
        "Seattle Raptors",
        "Seattle Bengals",
        "Seattle Brewers"
      ],
      "question": "Which of these is an American Football team based in Seattle?",
      "tags": ["sport"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "624c607b50d1a5e051325a5e",
      "correctAnswer": "England",
      "incorrectAnswers": ["Mexico", "Philippines", "Spain"],
      "question": "Fish & Chips is a dish that is most associated with which part of the world?",
      "tags": ["food", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "622a1c367cc59eab6f9500c7",
      "correctAnswer": "10",
      "incorrectAnswers": ["7", "5", "13"],
      "question": "How Many Cards Are You Dealt In A Game Of Gin Rummy? ",
      "tags": ["games"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "6242cba0d543524f1b19c941",
      "correctAnswer": "A flock",
      "incorrectAnswers": ["A skulk", "A down", "A brood"],
      "question": "What is the word for a group of swifts?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c3c7cc59eab6f951a39",
      "correctAnswer": "Communist Manifesto",
      "incorrectAnswers": [
        "The American Declaration of Independence",
        "The Gettysberg Address",
        "Magna Carta"
      ],
      "question": "The last line of which document is 'Working men of all countries, unite.'?",
      "tags": ["quotes", "literature", "history"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c3d7cc59eab6f951c45",
      "correctAnswer": "Dido",
      "incorrectAnswers": ["Nelly Furtado", "Mariah Carey", "Norah Jones"],
      "question": "Which female singer dueted with Eminem on the 2000 hit 'Stan'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "62611f444b176d54800e3d4d",
      "correctAnswer": "1962",
      "incorrectAnswers": ["1950", "1970", "1973"],
      "question": "When did the Cuban Missile Crisis bring the world to the brink of nuclear war?",
      "tags": [
        "events",
        "politics",
        "cold_war",
        "usa",
        "russia",
        "cuba",
        "history"
      ],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c3c7cc59eab6f951803",
      "correctAnswer": "Ming",
      "incorrectAnswers": ["Tang", "Qing", "Wu"],
      "question": "Which dynasty ruled China from 1368- to 1644?",
      "tags": ["china", "history"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "6237422bcb85f7ce9e949db1",
      "correctAnswer": "Saudi Arabia",
      "incorrectAnswers": ["Burundi", "Cuba", "North Macedonia"],
      "question": "Riyadh is the capital city of which country?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "63b0694e4799123c67712f79",
      "correctAnswer": "Parka",
      "incorrectAnswers": ["Peacoat", "Trenchcoat", "Puffer Jacket"],
      "question": "What type of coat originates from the Inuit people of the Arctic?",
      "tags": ["society_and_culture", "fashion"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94fc32",
      "correctAnswer": "\"After all, tomorrow is another day!\"",
      "incorrectAnswers": [
        "\"Here's Johnny!\"",
        "\"Take your stinking paws off me, you damned dirty ape.\"",
        "\"You shall not pass!\""
      ],
      "question": "Which of these quotes is from the film 'Gone with the Wind'?",
      "tags": ["quotes", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94facb",
      "correctAnswer": "Philip Seymour Hoffman",
      "incorrectAnswers": ["Terrence Howard", "Heath Ledger", "Joaquin Phoenix"],
      "question": "Who won the 2005 Academy Award for Best Leading Actor for playing the role of Truman Capote in Capote?",
      "tags": ["film", "acting", "academy_awards", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c397cc59eab6f950d4c",
      "correctAnswer": "Fleetwood Mac",
      "incorrectAnswers": ["W.A.S.P.", "Paramore", "Alice in Chains"],
      "question": "Which band includes 'Stevie Nicks'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c387cc59eab6f950aef",
      "correctAnswer": "Luxembourg",
      "incorrectAnswers": ["Liechtenstein", "Slovenia", "San Marino"],
      "question": "Which of these countries borders Germany?",
      "tags": ["europe", "germany", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "626030654b176d54800e3d21",
      "correctAnswer": "Guimaraes",
      "incorrectAnswers": ["The Hague", "Budapest", "Milan"],
      "question": "Which of these cities is in Portugal?",
      "tags": ["cities", "europe", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c357cc59eab6f94ff0a",
      "correctAnswer": "Madonna",
      "incorrectAnswers": ["Eric Clapton", "Nicki Minaj", "Alanis Morissette"],
      "question": "Who sung 'Material Girl'?",
      "tags": ["songs", "musicians", "general_knowledge", "music"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "63e13a21106de6ffa7d4a79d",
      "correctAnswer": "Patella",
      "incorrectAnswers": ["Humerus", "Femur", "Clavicle"],
      "question": "What is the medical term for the kneecap?",
      "tags": ["science", "biology", "anatomy", "medicine"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c387cc59eab6f950ae9",
      "correctAnswer": "Andorra",
      "incorrectAnswers": ["Liechtenstein", "United Kingdom", "San Marino"],
      "question": "Which of these countries borders France?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "622a1c3a7cc59eab6f9511cd",
      "correctAnswer": "Achilles",
      "incorrectAnswers": ["Narcissus", "Hercules", "Jason"],
      "question": "In Greek mythology, who was the son of Peleus and Thetis?",
      "tags": ["society_and_culture", "ancient_greece", "mythology"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c377cc59eab6f95078b",
      "correctAnswer": "Gary Oldman",
      "incorrectAnswers": [
        "James Franco",
        "George Clooney",
        "Laurence Fishburne"
      ],
      "question": "Which actor has starred in both Harry Potter and Batman Begins?",
      "tags": ["film", "acting", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "62602e3a4b176d54800e3ccb",
      "correctAnswer": "Jerusalem",
      "incorrectAnswers": ["Al-Ain", "Antalya", "Adana"],
      "question": "Which of these cities is in Israel?",
      "tags": ["cities", "geography"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "62374031cb85f7ce9e949ce5",
      "correctAnswer": "Denmark",
      "incorrectAnswers": ["Portugal", "San Marino", "Poland"],
      "question": "Copenhagen is the capital city of which country?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c397cc59eab6f950cf3",
      "correctAnswer": "The Beatles",
      "incorrectAnswers": ["Deep Purple", "Feeder", "Uriah Heep"],
      "question": "Which English rock band released the album 'Magical Mystery Tour'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c397cc59eab6f950c18",
      "correctAnswer": "Nirvana",
      "incorrectAnswers": [
        "Counting Crows",
        "Three 6 Mafia",
        "The Velvet Underground"
      ],
      "question": "Which American rock band released the album 'Bleach'?",
      "tags": ["rock_music", "music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "623b577afd6c701a9211835e",
      "correctAnswer": "India",
      "incorrectAnswers": ["Egypt", "Italy", "China"],
      "question": "In which country would you find the Taj Mahal?",
      "tags": ["tourist_attractions", "general_knowledge", "geography"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "622a1c347cc59eab6f94f8a3",
      "correctAnswer": "Athletics",
      "incorrectAnswers": ["Badminton", "Motor racing", "Basketball"],
      "question": "With which sport is Emil Zatopek associated?",
      "tags": ["people", "sport"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c367cc59eab6f95020c",
      "correctAnswer": "Ron Howard",
      "incorrectAnswers": ["Steven Spielberg", "Woody Allen", "Martin Scorsese"],
      "question": "Which director directed Solo: A Star Wars Story?",
      "tags": ["film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94fb2c",
      "correctAnswer": "Argo",
      "incorrectAnswers": [
        "Amour",
        "Beasts of the Southern Wild",
        "Django Unchained"
      ],
      "question": "Which film won the Academy Award for Best Picture in 2012?",
      "tags": ["academy_awards", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c3a7cc59eab6f951019",
      "correctAnswer": "Antelope",
      "incorrectAnswers": ["Bison", "Elk", "Deer"],
      "question": "What large herbivore sleeps only one hour a night?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c397cc59eab6f950c90",
      "correctAnswer": "The Rolling Stones",
      "incorrectAnswers": ["McFly", "Delirious?", "Depeche Mode"],
      "question": "Which English rock band released the song 'Brown Sugar'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c397cc59eab6f950d44",
      "correctAnswer": "Green Day",
      "incorrectAnswers": ["Animal Collective", "Fall Out Boy", "Blink-182"],
      "question": "Which band released the classic punk rock album 'American Idiot'?",
      "tags": ["00's", "music"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950dd8",
      "correctAnswer": "Emily Brontë",
      "incorrectAnswers": [
        "Oscar Wilde",
        "H. Rider Haggard",
        "Percy Bysshe Shelley"
      ],
      "question": "Which author wrote 'Wuthering Heights'?",
      "tags": ["literature", "classic_novels", "arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c377cc59eab6f950738",
      "correctAnswer": "Josh Brolin",
      "incorrectAnswers": [
        "Michael Douglas",
        "Ben Kingsley",
        "Kiefer Sutherland"
      ],
      "question": "Which actor has starred in films including Avengers: Endgame and No Country for Old Men?",
      "tags": ["film_and_tv", "film", "acting"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "622a1c3e7cc59eab6f952231",
      "correctAnswer": "South Korea",
      "incorrectAnswers": ["Taiwan", "China", "Japan"],
      "question": "In which country is the company Daewoo based?",
      "tags": ["society_and_culture", "business"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "6357fd4a68bd5000211e7191",
      "correctAnswer": "Malawi",
      "incorrectAnswers": ["India", "Algeria", "Nigeria"],
      "question": "Chewa is a language spoken in which of these countries?",
      "tags": ["language", "linguistics", "society_and_culture"],
      "type": "Multiple Choice",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "622a1c367cc59eab6f950075",
      "correctAnswer": "Greece",
      "incorrectAnswers": ["Argentina", "Japan", "Australia"],
      "question": "Which Country Hosted The 2004 Summer Olympics?",
      "tags": ["olympics", "sport", "00's"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "62602d774b176d54800e3c9a",
      "correctAnswer": "Finland",
      "incorrectAnswers": ["Italy", "Spain", "Portugal"],
      "question": "Where would you find the city of Helsinki?",
      "tags": ["cities", "europe", "geography"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94fa79",
      "correctAnswer": "Kevin Kline",
      "incorrectAnswers": ["Alec Guinness", "Martin Landau", "River Phoenix"],
      "question": "Who won the 1988 Academy Award for Best Supporting Actor for playing the role of Otto in A Fish Called Wanda?",
      "tags": ["academy_awards", "acting", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "General Knowledge",
      "id": "622a1c3a7cc59eab6f951002",
      "correctAnswer": "A Hogshead",
      "incorrectAnswers": ["An Alekeg", "A Bogteen", "A Grond"],
      "question": "Which archaic imperial unit of measure is equivalent to 54 gallons?",
      "tags": ["general_knowledge"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "63dd25cb742e43ed64f1f01c",
      "correctAnswer": "Tariff",
      "incorrectAnswers": ["Sales Tax", "Trade Tax", "Bordereux"],
      "question": "What is the term for a tax on a good or service imported from another country?",
      "tags": ["society_and_culture", "economics"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c367cc59eab6f9503d9",
      "correctAnswer": "Pacific",
      "incorrectAnswers": ["Atlantic", "Indian", "Arctic"],
      "question": "What ocean was amelia earhart flying over when she disappeared",
      "tags": ["history"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c377cc59eab6f95061a",
      "correctAnswer": "Simon Pegg",
      "incorrectAnswers": ["Terry O'Quinn", "Michael Keaton", "Toshirō Mifune"],
      "question": "Which actor has featued in films including Band of Brothers and Mission: Impossible – Fallout?",
      "tags": ["film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "622a1c367cc59eab6f95025b",
      "correctAnswer": "Lindisfarne Mead ",
      "incorrectAnswers": [
        "Long Island Iced Tea",
        "Camomile Tea",
        "Dandelion & Burdock"
      ],
      "question": "Which drink do you associate with a holy island in Northumberland?",
      "tags": ["drink", "uk", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c3a7cc59eab6f951367",
      "correctAnswer": "A Palette",
      "incorrectAnswers": ["An eisel", "A square", "A pitcher"],
      "question": "What is the word given to a flat board used by a painter to mix and hold colors?",
      "tags": ["words", "art", "painting", "arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950e4a",
      "correctAnswer": "Douglas Adams",
      "incorrectAnswers": ["Neil Gaiman", "H. G. Wells", "Arthur C. Clarke"],
      "question": "Which author wrote 'The Hitchhiker's Guide to the Galaxy'?",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c3a7cc59eab6f95139b",
      "correctAnswer": "Harry Potter",
      "incorrectAnswers": [
        "Voyages Extraordinaires",
        "Percy Jackson & the Olympians",
        "Twilight"
      ],
      "question": "In which book series does 'Ginny Weasley' appear?",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c387cc59eab6f950b11",
      "correctAnswer": "The Cranberries",
      "incorrectAnswers": ["The Corrs", "Boyzone", "Thin Lizzy"],
      "question": "Which band includes 'Dolores O'Riordan'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94f8cb",
      "correctAnswer": "Judy Garland",
      "incorrectAnswers": ["Anne Bancroft", "Olivia Newton-John", "Vivien Leigh"],
      "question": "Which actress played the role of Dorothy Gale in The Wizard of Oz?",
      "tags": ["people", "acting", "general_knowledge", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c357cc59eab6f950000",
      "correctAnswer": "Burkina Faso",
      "incorrectAnswers": ["Ghana", "Mali", "Togo"],
      "question": "Ouagadougou is the capital of ______?",
      "tags": ["capital_cities", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c377cc59eab6f950674",
      "correctAnswer": "Jack Lemmon",
      "incorrectAnswers": ["Timothy Spall", "Hugo Weaving", "Tim Roth"],
      "question": "Which actor has featued in films including Some Like It Hot and JFK?",
      "tags": ["film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c377cc59eab6f950618",
      "correctAnswer": "Zoe Saldana",
      "incorrectAnswers": ["Catherine Deneuve", "Audrey Hepburn", "Rachel Weisz"],
      "question": "Which actor has featued in films including Avengers: Endgame and Avatar?",
      "tags": ["acting", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "62417ccd8c3137686862d73c",
      "correctAnswer": "Boston Celtics",
      "incorrectAnswers": ["Boston Braves", "Boston Capitals", "Boston Browns"],
      "question": "Which of these is a basketball team based in Boston?",
      "tags": ["basketball", "nba", "boston", "usa", "sport"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "62602d9d4b176d54800e3ca5",
      "correctAnswer": "Hungary",
      "incorrectAnswers": ["Luxembourg", "Moldova", "Greece"],
      "question": "In which country is the city of Budapest?",
      "tags": ["cities", "europe", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c387cc59eab6f95080a",
      "correctAnswer": "North America",
      "incorrectAnswers": ["South America", "Oceania", "Europe"],
      "question": "The country of The Bahamas is on which continent?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "624dba6dde6018633d31f6c6",
      "correctAnswer": "Sean Connery",
      "incorrectAnswers": ["George Lazenby", "Roger Moore", "Timothy Dalton"],
      "question": "Who played the role of James Bond in Dr. No?",
      "tags": ["james_bond", "film", "acting", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "62573f899da29df7b05f73a1",
      "correctAnswer": "A young man joins forces with an old man, a cocky pilot, a beast and two robots to save the galaxy.",
      "incorrectAnswers": [
        "The son of a city's mastermind falls in love with a working-class prophet.",
        "After two male musicians witness a murder, they flee in an all-female band disguised as women.",
        "Violence and mayhem ensue after a man stumbles upon more than two million dollars."
      ],
      "question": "What is the plot of the movie Star Wars?",
      "tags": ["film"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c357cc59eab6f94ff3b",
      "correctAnswer": "Michael Jackson",
      "incorrectAnswers": ["Nicki Minaj", "Neil Young", "Eric Clapton"],
      "question": "Who released the song 'Off the Wall'?",
      "tags": ["songs", "music"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "622a1c347cc59eab6f94f867",
      "correctAnswer": "Football",
      "incorrectAnswers": ["Swimming", "Hockey", "Motor racing"],
      "question": "With which sport is Eusebio associated?",
      "tags": ["people", "sport"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94fb01",
      "correctAnswer": "Marion Cotillard",
      "incorrectAnswers": ["Cate Blanchett", "Julie Christie", "Laura Linney"],
      "question": "Who won the 2007 Academy Award for Best Leading Actress for playing the role of Edith Piaf in La Vie en Rose?",
      "tags": ["acting", "film", "academy_awards", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "62417d200f96c4efe8d773a7",
      "correctAnswer": "Houston Astros",
      "incorrectAnswers": [
        "Houston Predators",
        "Houston City",
        "Houston Football"
      ],
      "question": "Which of these is a baseball team based in Houston?",
      "tags": ["baseball", "nba", "usa", "sport"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c367cc59eab6f950347",
      "correctAnswer": "Dwight Eisenhower",
      "incorrectAnswers": [
        "Franklin Roosevelt",
        "Lyndon Johnson",
        "Jimmy Carter"
      ],
      "question": "Who was President of the USA from 1953 till 1961?",
      "tags": ["history"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "63a0395dc7d86251f9b65c4d",
      "correctAnswer": "Feta",
      "incorrectAnswers": ["Gouda", "Mozzarella", "Parmesan"],
      "question": "What type of cheese is used in a classic Greek salad?",
      "tags": ["cheese", "food_and_drink", "food"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "625fd665dc0dd3b72da64ced",
      "correctAnswer": "1999",
      "incorrectAnswers": ["1993", "1996", "2002"],
      "question": "In which year was Fight Club released?",
      "tags": ["film"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c357cc59eab6f94fd96",
      "correctAnswer": "Glen Campbell",
      "incorrectAnswers": ["Bob Dylan", "Bruce Springsteen", "Neil Young"],
      "question": "Which Singer Started As A Session Guitarist Working With The Likes Of Bobby Darin , Frank Sinatra, Dean Martin & The Beach Boys?",
      "tags": ["musicians", "music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c3a7cc59eab6f95135f",
      "correctAnswer": "Monotype",
      "incorrectAnswers": ["Watercolor", "Mache", "Stenography"],
      "question": "What is the word given to a unique image printed from a polished plate which has been painted with a design in ink?",
      "tags": ["words", "art", "arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c3e7cc59eab6f9522f3",
      "correctAnswer": "Velociraptor",
      "incorrectAnswers": ["Tyrannosaurus Rex", "Diplodocus", "Stegosaurus"],
      "question": "Featured In The Film Jurassic Park, Which Creature's Name Means 'Quick Plunderer'?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "6293ec9f7f41d6338b96eefe",
      "correctAnswer": "Voltaire",
      "incorrectAnswers": ["Euclid", "Wilhelm Conrad Roentgen", "Mencius"],
      "question": "Which influential historical person was a key figure of the European Enlightenment whose satirical writings played a role in the French Revolution?",
      "tags": ["people", "history", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c3a7cc59eab6f9510ca",
      "correctAnswer": "Copper & Tin",
      "incorrectAnswers": ["Iron & Copper", "Iron & Zinc", "Aluminium & Zinc"],
      "question": "From What Metals Is Brass Made?",
      "tags": ["science"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "62500664ea7a97fd2e356d2a",
      "correctAnswer": "Campanelle",
      "incorrectAnswers": ["Macaroni", "Rigatoni", "Orecchiette"],
      "question": "Which pasta's name means 'Little bells'?",
      "tags": ["food", "words", "language", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c357cc59eab6f94ffe9",
      "correctAnswer": "Yamagata",
      "incorrectAnswers": ["Ōsaka", "Kyoto", "Yokohama"],
      "question": "Which city used to be called Takase?",
      "tags": ["cities", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c377cc59eab6f9507e4",
      "correctAnswer": "Oceania",
      "incorrectAnswers": ["South America", "Europe", "Asia"],
      "question": "The country of Nauru is on which continent?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "General Knowledge",
      "id": "622a1c357cc59eab6f94fc83",
      "correctAnswer": "Fipple",
      "incorrectAnswers": ["Smicker", "Bibble", "Firman"],
      "question": "Which word is defined as 'the mouthpiece of a recorder or similar wind instrument'?",
      "tags": ["words", "general_knowledge"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c377cc59eab6f95069a",
      "correctAnswer": "Jason Bateman",
      "incorrectAnswers": ["Javier Bardem", "Colin Firth", "Tim Roth"],
      "question": "Which actor has featued in films including Arrested Development and Up in the Air?",
      "tags": ["film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950ee5",
      "correctAnswer": "Charles Dickens",
      "incorrectAnswers": ["Oscar Wilde", "Joseph Conrad", "Henryk Sienkiewicz"],
      "question": "Which author wrote 'The Old Curiosity Shop'?",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c367cc59eab6f950218",
      "correctAnswer": "Cream ",
      "incorrectAnswers": ["Deep Purple", "Led Zeppelin", "Prince"],
      "question": "Who released the album 'Strange brew '",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94fafc",
      "correctAnswer": "Natalie Portman",
      "incorrectAnswers": [
        "Annette Bening",
        "Nicole Kidman",
        "Jennifer Lawrence"
      ],
      "question": "Who won the 2010 Academy Award for Best Leading Actress for playing the role of Nina Sayers/The Swan Queen in Black Swan?",
      "tags": ["acting", "film", "academy_awards", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "623385f162eaad73716a8ca2",
      "correctAnswer": "Peru",
      "incorrectAnswers": ["Algeria", "Papua New Guinea", "Finland"],
      "question": "Where are the Nazca Lines?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c3d7cc59eab6f951c4c",
      "correctAnswer": "Battle of Balaclava",
      "incorrectAnswers": [
        "Battle of Waterloo",
        "Battle of Leipzig",
        "Battle of Smolensk"
      ],
      "question": "At which battle was the Charge Of The Light Brigade?",
      "tags": ["battles", "wars", "history"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "625006f10d86c8f685d80f08",
      "correctAnswer": "Stuffed pasta",
      "incorrectAnswers": ["Soup pasta", "Strand pasta", "Ribbon pasta"],
      "question": "What type of pasta is ravioli?",
      "tags": ["food", "italy", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "62374303cb85f7ce9e949e08",
      "correctAnswer": "Harare",
      "incorrectAnswers": ["Monrovia", "Baku", "Bulawayo"],
      "question": "What is the capital city of Zimbabwe?",
      "tags": ["capital_cities", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c377cc59eab6f950757",
      "correctAnswer": "Jack Nicholson",
      "incorrectAnswers": [
        "Dwayne Johnson",
        "Shah Rukh Khan",
        "Gérard Depardieu"
      ],
      "question": "Which actor has featured in films including Batman and One Flew Over the Cuckoo's Nest?",
      "tags": ["acting", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "623389510161109f922aacdf",
      "correctAnswer": "Denver ",
      "incorrectAnswers": ["Columbus", "Austin", "Sacramento"],
      "question": "Which US state capital is known as the mile high city?",
      "tags": ["usa", "cities", "nicknames", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "639ae36f929b90846f2fc8d1",
      "correctAnswer": "Ehecatl",
      "incorrectAnswers": ["Tlaloc", "Huitzilopochtli", "Quetzalcoatl"],
      "question": "What was the name of the Aztec god of the wind?",
      "tags": ["history", "aztecs", "mythology"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950eb4",
      "correctAnswer": "Charles Darwin",
      "incorrectAnswers": [
        "Percy Bysshe Shelley",
        "H. Rider Haggard",
        "Robert Louis Stevenson"
      ],
      "question": "Which author wrote 'On the Tendency of Species to form Varieties; and on the Perpetuation of Varieties and Species by Natural Means of Selection'?",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "625e9e25796f721e95543f42",
      "correctAnswer": "Chile",
      "incorrectAnswers": ["Guatemala", "Estonia", "India"],
      "question": "Which of these countries has red on its flag?",
      "tags": ["flags", "geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94fb41",
      "correctAnswer": "Spotlight",
      "incorrectAnswers": ["The Big Short", "Bridge of Spies", "Brooklyn"],
      "question": "Which film won the Academy Award for Best Picture in 2015?",
      "tags": ["academy_awards", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "62506441e12f6dec240bdfa5",
      "correctAnswer": "Vicki Sue Robinson",
      "incorrectAnswers": ["Jermaine Stewart", "Aqua", "The Verve"],
      "question": "Who had a hit in 1976 with Turn the Beat Around?",
      "tags": ["songs", "one_hit_wonders", "music"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "62611fb94b176d54800e3d6c",
      "correctAnswer": "2008",
      "incorrectAnswers": ["2000", "2004", "2012"],
      "question": "When was the first black US President elected?",
      "tags": [
        "events",
        "firsts",
        "people",
        "presidents",
        "politics",
        "usa",
        "history"
      ],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "General Knowledge",
      "id": "622a1c357cc59eab6f94fc80",
      "correctAnswer": "Fudgel",
      "incorrectAnswers": ["Bumfuzzle", "Groke", "Whippersnapper"],
      "question": "Which word is defined as 'Pretending to work when you’re not actually doing anything at all'?",
      "tags": ["words", "general_knowledge"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c357cc59eab6f94fe05",
      "correctAnswer": "Lake Maracaibo",
      "incorrectAnswers": ["Lagoa dos Patos", "Lake Nicaragua", "Lake Titicaca"],
      "question": "Which is the largest lake in South America?",
      "tags": ["bodies_of_water", "south_america", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "62611f6a4b176d54800e3d57",
      "correctAnswer": "2020",
      "incorrectAnswers": ["2019", "2021", "2018"],
      "question": "When was COVID-19 declared a Global Pandemic?",
      "tags": ["events", "medicine", "history"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c367cc59eab6f950393",
      "correctAnswer": "Oliver Cromwell",
      "incorrectAnswers": ["Henry VIII", "Francis Drake", "Elizabeth I"],
      "question": "Who banned Christmas in Britain in 1647?",
      "tags": ["history"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "62611f634b176d54800e3d56",
      "correctAnswer": "2001",
      "incorrectAnswers": ["1993", "1997", "2005"],
      "question": "In which year were the 9/11 attacks?",
      "tags": ["events", "usa"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "624c60c095b12387e142c79b",
      "correctAnswer": "Ramen",
      "incorrectAnswers": ["Ceviche", "Plov", "Chilli Crab"],
      "question": "Which of these dishes would you most expect to find in Japan?",
      "tags": ["food", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c397cc59eab6f950f9d",
      "correctAnswer": "William Shakespeare",
      "incorrectAnswers": ["Arthur C. Clarke", "Isaac Newton", "Enid Blyton"],
      "question": "Which author wrote 'Othello'?",
      "tags": [
        "literature",
        "theater",
        "general_knowledge",
        "arts_and_literature"
      ],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "622a1c367cc59eab6f950236",
      "correctAnswer": "Spey ",
      "incorrectAnswers": ["Tay", "Tweed", "Clyde"],
      "question": "Which Scottish river supplies over 90% of the water used in whiskey manufacturing?",
      "tags": ["food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "6242cb91d543524f1b19c93b",
      "correctAnswer": "A herd",
      "incorrectAnswers": ["A yoke", "A murder", "A clowder"],
      "question": "What is the word for a group of seals?",
      "tags": [],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Sport & Leisure",
      "id": "62417d460f96c4efe8d773b6",
      "correctAnswer": "Milwaukee Brewers",
      "incorrectAnswers": [
        "Milwaukee Jets",
        "Milwaukee Orioles",
        "Milwaukee Tigers"
      ],
      "question": "Which of these is a baseball team based in Milwaukee?",
      "tags": ["baseball", "mlb", "usa", "sport"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "62ab32e35202de619af2812e",
      "correctAnswer": "Corolla",
      "incorrectAnswers": ["Beetle", "911", "E-Type"],
      "question": "Which of these models of car is made by Toyota?",
      "tags": ["motoring", "business", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "General Knowledge",
      "id": "622a1c3a7cc59eab6f951062",
      "correctAnswer": "Chihuahua",
      "incorrectAnswers": ["Maltese", "Pomeranian", "Havanese"],
      "question": "What dog is named after a Mexican state?",
      "tags": ["animals", "central_america", "names", "general_knowledge"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "622a1c367cc59eab6f9503be",
      "correctAnswer": "France",
      "incorrectAnswers": ["Italy", "Russia", "Spain"],
      "question": "Where did the bayonet originate?",
      "tags": ["inventions", "wars", "history"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "62573fbc9da29df7b05f73a9",
      "correctAnswer": "Once Upon a Time in America",
      "incorrectAnswers": [
        "Goodfellas",
        "Gone with the Wind",
        "There Will Be Blood"
      ],
      "question": "Name the movie that matches the following plot summary: 'A former gangster returns home, where he must confront the regrets of his old life.'",
      "tags": ["film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "63e13a2c106de6ffa7d4a7aa",
      "correctAnswer": "Nonagon",
      "incorrectAnswers": ["Octagon", "Hexagon", "Septagon"],
      "question": "What is the name of a shape with nine sides?",
      "tags": ["science", "mathematics", "shapes"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "623740e2cb85f7ce9e949d2c",
      "correctAnswer": "Kingston",
      "incorrectAnswers": ["Bridgetown", "Gaborone", "Mogadishu"],
      "question": "What is the capital city of Jamaica?",
      "tags": ["geography"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c357cc59eab6f94fea0",
      "correctAnswer": "Rihanna",
      "incorrectAnswers": ["Drake", "Nicki Minaj", "Ricky Martin"],
      "question": "Which singer released the song 'Only Girl (In the World)'?",
      "tags": ["musicians", "songs", "music"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c367cc59eab6f95014b",
      "correctAnswer": "Bertolt Brecht",
      "incorrectAnswers": [
        "Giuseppe Verdi",
        "Robert Wilson",
        "Maurice Maeterlinck"
      ],
      "question": "Who wrote the \"Threepenny\" opera?",
      "tags": ["arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "623b57ebfd6c701a92118388",
      "correctAnswer": "Iran",
      "incorrectAnswers": ["Turkey", "Thailand", "Northern Ireland"],
      "question": "In which country would you find the UNESCO World Heritage site of The Bam Citadel?",
      "tags": ["tourist_attractions", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "63f394f9989356ef48370bce",
      "correctAnswer": "Yen",
      "incorrectAnswers": ["Dollar", "Dong", "Yuan"],
      "question": "What is the currency of Japan?",
      "tags": ["japan", "currency", "society_and_culture"],
      "type": "Multiple Choice",
      "difficulty": "easy",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Society & Culture",
      "id": "6371621b1bf863c45ca6c352",
      "correctAnswer": "Acta non verba",
      "incorrectAnswers": [
        "Tempora mutantur et nos mutamur in illis",
        "Calamus gladio fortior",
        "Quam bene non quantum"
      ],
      "question": "Which of these Latin phrases means 'Deeds, not words'?",
      "tags": ["society_and_culture", "language", "the_romans", "classics"],
      "type": "Multiple Choice",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Film & TV",
      "id": "622a1c347cc59eab6f94fb72",
      "correctAnswer": "Casablanca",
      "incorrectAnswers": [
        "For Whom the Bell Tolls",
        "Heaven Can Wait",
        "The Human Comedy"
      ],
      "question": "Which film won the Academy Award for Best Picture in 1943?",
      "tags": ["academy_awards", "film", "film_and_tv"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "General Knowledge",
      "id": "622a1c357cc59eab6f94fc82",
      "correctAnswer": "Flummox",
      "incorrectAnswers": ["Argle-bargle", "Kakorrhaphiophobia", "Pauciloquent"],
      "question": "Which word is defined as 'to perplex someone greatly'?",
      "tags": ["words", "general_knowledge"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Geography",
      "id": "622a1c387cc59eab6f950ae1",
      "correctAnswer": "Pakistan",
      "incorrectAnswers": ["Bangladesh", "Thailand", "Cambodia"],
      "question": "Which of these countries borders People's Republic of China?",
      "tags": ["china", "geography"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Science",
      "id": "622a1c3f7cc59eab6f95237d",
      "correctAnswer": "Gills",
      "incorrectAnswers": ["Fins", "A vertebrate", "A tail"],
      "question": "An animal is a fish if it has what?",
      "tags": ["biology", "fish", "animals", "science"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Arts & Literature",
      "id": "622a1c347cc59eab6f94fa3f",
      "correctAnswer": "Neoclassicism",
      "incorrectAnswers": ["Dutch Golden Age", "Crystal Cubism", "Primitivism"],
      "question": "The painting \"Napoleon crossing the Alps\" by Jacques-Louis David is a part of which art movement?",
      "tags": ["painting", "art", "arts_and_literature"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "History",
      "id": "63989c175c9a75021f31047f",
      "correctAnswer": "The Thirty Years' War",
      "incorrectAnswers": [
        "The Hundred Years' War",
        "The War of the Roses",
        "The War of Spanish Succession"
      ],
      "question": "What was the name of the prominent religious conflict that arose in Europe in the 17th century?",
      "tags": [
        "history",
        "1600s",
        "wars",
        "religion",
        "holy_roman_empire",
        "europe"
      ],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Food & Drink",
      "id": "624ab0a5348a461bfc67068b",
      "correctAnswer": "Africa",
      "incorrectAnswers": ["The Middle East", "Central America", "North America"],
      "question": "Where in the world are yams originally from?",
      "tags": ["food", "food_and_drink"],
      "type": "Multiple Choice",
      "difficulty": "hard",
      "regions": [],
      "isNiche": false
    },
    {
      "category": "Music",
      "id": "622a1c387cc59eab6f950b53",
      "correctAnswer": "Paramore",
      "incorrectAnswers": [
        "Alice Cooper",
        "Three 6 Mafia",
        "The Velvet Underground"
      ],
      "question": "Which band includes 'Hayley Williams'?",
      "tags": ["music"],
      "type": "Multiple Choice",
      "difficulty": "medium",
      "regions": [],
      "isNiche": false
    },
    
   
  ]

  let newArray = data.map(element => {
    
    let properties = {
      "question_id": element.id,
      "question": element.question,
      "difficulty": element.difficulty,
      "category": element.category,
      "correctAnswer": element.correctAnswer,
      "incorrectAnswer1": element.incorrectAnswers[0],
      "incorrectAnswer2": element.incorrectAnswers[1],
      "incorrectAnswer3": element.incorrectAnswers[2]
    }
    return properties
   })
   
  //  console.log(newArray)
}