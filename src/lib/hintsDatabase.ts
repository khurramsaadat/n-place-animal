interface HintsDatabase {
  [key: string]: {
    name: string[];
    place: string[];
    animal: string[];
    thing: string[];
  };
}

export const hintsDatabase: HintsDatabase = {
  'A': {
    name: ['Aaron', 'Adam', 'Adrian', 'Alice', 'Amanda', 'Amy', 'Andrew', 'Angela', 'Anna', 'Anthony', 'Ashley', 'Aisha', 'Arjun'],
    place: ['Afghanistan', 'Albania', 'Algeria', 'Amsterdam', 'Angola', 'Argentina', 'Arizona', 'Athens', 'Atlanta', 'Australia', 'Austria'],
    animal: ['Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Anaconda', 'Angelfish', 'Ant', 'Anteater', 'Antelope', 'Ape'],
    thing: ['Airplane', 'Album', 'Anchor', 'Antenna', 'Apple', 'Apron', 'Armchair', 'Arrow', 'Axe', 'Accordion']
  },
  'B': {
    name: ['Benjamin', 'Bernard', 'Beth', 'Bill', 'Blake', 'Bob', 'Brad', 'Brandon', 'Brian', 'Bruce', 'Bryan'],
    place: ['Bahamas', 'Bahrain', 'Bangkok', 'Barcelona', 'Beijing', 'Belgium', 'Berlin', 'Boston', 'Brazil', 'Brisbane', 'Budapest'],
    animal: ['Baboon', 'Badger', 'Barracuda', 'Bat', 'Bear', 'Beaver', 'Bee', 'Beetle', 'Bird', 'Bison', 'Butterfly'],
    thing: ['Backpack', 'Badge', 'Balloon', 'Banana', 'Bandage', 'Battery', 'Bed', 'Bell', 'Bicycle', 'Book', 'Bottle']
  },
  'C': {
    name: ['Calvin', 'Cameron', 'Carlos', 'Carol', 'Caroline', 'Catherine', 'Charles', 'Charlotte', 'Chris', 'Christina'],
    place: ['Cairo', 'California', 'Cambodia', 'Canada', 'Canberra', 'Cape Town', 'Chile', 'China', 'Colombia', 'Copenhagen'],
    animal: ['Camel', 'Cat', 'Caterpillar', 'Catfish', 'Cheetah', 'Chicken', 'Chimpanzee', 'Cobra', 'Cockroach', 'Crab'],
    thing: ['Cable', 'Calculator', 'Calendar', 'Camera', 'Candle', 'Cap', 'Car', 'Card', 'Chair', 'Clock', 'Computer']
  },
  'D': {
    name: ['Daniel', 'David', 'Dennis', 'Derek', 'Diana', 'Diego', 'Dominic', 'Donald', 'Dorothy', 'Douglas'],
    place: ['Damascus', 'Denmark', 'Detroit', 'Dubai', 'Dublin', 'Dakota', 'Dallas', 'Delhi', 'Denver', 'Denmark'],
    animal: ['Deer', 'Dingo', 'Dog', 'Dolphin', 'Donkey', 'Dove', 'Dragon', 'Duck', 'Dugong', 'Dung Beetle'],
    thing: ['Desk', 'Diamond', 'Dictionary', 'Dish', 'Door', 'Drawer', 'Dress', 'Drum', 'Dustbin', 'DVD']
  },
  'E': {
    name: ['Earl', 'Eddie', 'Edgar', 'Edward', 'Elena', 'Elizabeth', 'Ellen', 'Emily', 'Emma', 'Eric', 'Ethan'],
    place: ['Ecuador', 'Edinburgh', 'Egypt', 'England', 'Estonia', 'Ethiopia', 'El Salvador', 'Everest'],
    animal: ['Eagle', 'Earthworm', 'Echidna', 'Eel', 'Elephant', 'Elk', 'Emu', 'Ermine'],
    thing: ['Earphone', 'Easel', 'Egg', 'Elbow', 'Elevator', 'Envelope', 'Eraser', 'Escalator']
  },
  'F': {
    name: ['Fabian', 'Faith', 'Felix', 'Fernando', 'Fiona', 'Florence', 'Frank', 'Fred', 'Frederick'],
    place: ['Fiji', 'Finland', 'Florence', 'Florida', 'France', 'Frankfurt', 'Fukuoka'],
    animal: ['Falcon', 'Ferret', 'Finch', 'Firefly', 'Fish', 'Flamingo', 'Fox', 'Frog'],
    thing: ['Fan', 'Feather', 'Fence', 'Flag', 'Flashlight', 'Flower', 'Fork', 'Frame', 'Fridge']
  },
  'G': {
    name: ['Gabriel', 'Gary', 'George', 'Gerald', 'Gloria', 'Gordon', 'Grace', 'Grant', 'Greg'],
    place: ['Gabon', 'Georgia', 'Germany', 'Ghana', 'Glasgow', 'Greece', 'Greenland', 'Guatemala'],
    animal: ['Gazelle', 'Gecko', 'Gerbil', 'Giraffe', 'Goat', 'Goose', 'Gorilla', 'Grasshopper'],
    thing: ['Game', 'Garden', 'Garlic', 'Gate', 'Glass', 'Glove', 'Globe', 'Guitar']
  },
  'H': {
    name: ['Hannah', 'Harold', 'Harry', 'Helen', 'Henry', 'Holly', 'Howard', 'Hugh', 'Hunter'],
    place: ['Haiti', 'Hamburg', 'Hanoi', 'Hawaii', 'Helsinki', 'Holland', 'Hollywood', 'Hong Kong'],
    animal: ['Hamster', 'Hawk', 'Hedgehog', 'Hippopotamus', 'Horse', 'Hummingbird', 'Hyena'],
    thing: ['Hammer', 'Hat', 'Headphone', 'Heart', 'Helicopter', 'Hook', 'House']
  },
  'I': {
    name: ['Ian', 'Ibrahim', 'Ida', 'Igor', 'Imran', 'Ines', 'Ingrid', 'Irene', 'Isaac', 'Isabel'],
    place: ['Iceland', 'Idaho', 'Illinois', 'India', 'Indiana', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel'],
    animal: ['Ibex', 'Ibis', 'Iguana', 'Impala', 'Insect'],
    thing: ['Ice Cream', 'Iron', 'Ink', 'iPad', 'iPhone', 'Igloo']
  },
  'J': {
    name: ['Jack', 'Jacob', 'James', 'Jane', 'Janet', 'Jason', 'Jennifer', 'Jessica', 'John', 'Joseph'],
    place: ['Jamaica', 'Japan', 'Jerusalem', 'Jordan', 'Jakarta', 'Johannesburg'],
    animal: ['Jaguar', 'Jellyfish', 'Jay', 'Jackal'],
    thing: ['Jacket', 'Jar', 'Jeans', 'Jewelry', 'Juice', 'Jukebox']
  },
  'K': {
    name: ['Karen', 'Karl', 'Kate', 'Keith', 'Kelly', 'Kevin', 'Kim', 'Kyle', 'Kylie'],
    place: ['Kansas', 'Kazakhstan', 'Kenya', 'Korea', 'Kuwait', 'Kyoto', 'Kabul', 'Karachi'],
    animal: ['Kangaroo', 'Kingfisher', 'Kitten', 'Koala', 'Kookaburra'],
    thing: ['Kettle', 'Key', 'Keyboard', 'Kite', 'Knife']
  },
  'L': {
    name: ['Laura', 'Lauren', 'Lawrence', 'Leo', 'Leonard', 'Linda', 'Lisa', 'Louis', 'Lucy'],
    place: ['Lagos', 'Latvia', 'Lebanon', 'Libya', 'Lima', 'Lisbon', 'London', 'Los Angeles'],
    animal: ['Lamb', 'Leopard', 'Lion', 'Lizard', 'Llama', 'Lobster'],
    thing: ['Lamp', 'Laptop', 'Leaf', 'Lemon', 'Lock', 'Ladder']
  },
  'M': {
    name: ['Marcus', 'Maria', 'Mark', 'Martin', 'Mary', 'Matthew', 'Michael', 'Michelle'],
    place: ['Madagascar', 'Madrid', 'Malaysia', 'Malta', 'Manchester', 'Mexico', 'Miami', 'Milan'],
    animal: ['Macaw', 'Magpie', 'Monkey', 'Moose', 'Mouse', 'Mule'],
    thing: ['Machine', 'Map', 'Marker', 'Mirror', 'Money', 'Moon', 'Mouse']
  },
  'N': {
    name: ['Nancy', 'Nathan', 'Neil', 'Nicholas', 'Nicole', 'Nina', 'Noah', 'Norman'],
    place: ['Namibia', 'Nepal', 'Netherlands', 'Nevada', 'New York', 'Nigeria', 'Norway'],
    animal: ['Narwhal', 'Newt', 'Nightingale', 'Numbat', 'Nuthatch', 'Nilgai', 'Natterjack Toad', 'Nurse Shark', 'Nine-banded Armadillo', 'Northern Cardinal'],
    thing: ['Nail', 'Napkin', 'Necklace', 'Needle', 'Newspaper', 'Notebook']
  },
  'O': {
    name: ['Oliver', 'Olivia', 'Omar', 'Oscar', 'Owen', 'Olga', 'Octavia'],
    place: ['Oakland', 'Oaxaca', 'Ohio', 'Oklahoma', 'Oman', 'Ontario', 'Oregon', 'Oslo', 'Ottawa'],
    animal: ['Octopus', 'Ocelot', 'Orangutan', 'Ostrich', 'Otter', 'Owl', 'Ox'],
    thing: ['Oak', 'Oar', 'Ocean', 'Oil', 'Onion', 'Orange', 'Oven']
  },
  'P': {
    name: ['Pablo', 'Patricia', 'Patrick', 'Paul', 'Peter', 'Philip', 'Phoebe'],
    place: ['Pakistan', 'Panama', 'Paris', 'Peru', 'Philadelphia', 'Phoenix', 'Poland', 'Portugal'],
    animal: ['Panda', 'Panther', 'Parrot', 'Peacock', 'Penguin', 'Pig', 'Platypus'],
    thing: ['Paint', 'Paper', 'Pen', 'Pencil', 'Phone', 'Piano', 'Pillow']
  },
  'Q': {
    name: ['Quincy', 'Quinn', 'Quinton', 'Qasim', 'Queenie', 'Quentin', 'Quinlan', 'Qiana', 'Quade', 'Quannah'],
    place: ['Qatar', 'Quebec', 'Queensland', 'Quezon City', 'Qingdao', 'Qom', 'Quito', 'Queenstown', 'Qinhuangdao', 'Quanzhou'],
    animal: ['Quail', 'Quokka', 'Quoll', 'Queen Butterfly', 'Queen Snake', 'Queen Angelfish', 'Queen Triggerfish', 'Queen Conch', 'Quetzal', 'Quahog'],
    thing: ['Quilt', 'Quarter', 'Queen (chess)', 'Quiver', 'Quiz', 'Quiche', 'Quicksand', 'Quill', 'Quartz', 'Quinoa']
  },
  'R': {
    name: ['Rachel', 'Ralph', 'Raymond', 'Rebecca', 'Richard', 'Robert', 'Rose', 'Ryan', 'Raphael', 'Regina', 'Roland', 'Ruby', 'Russell', 'Ruth'],
    place: ['Rabat', 'Raleigh', 'Rome', 'Romania', 'Russia', 'Rwanda', 'Reykjavik', 'Rio de Janeiro', 'Rotterdam', 'Riyadh', 'Richmond', 'Riga'],
    animal: ['Rabbit', 'Raccoon', 'Rat', 'Raven', 'Rhinoceros', 'Robin', 'Red Panda', 'Reindeer', 'Roadrunner', 'Rooster', 'Rattlesnake', 'Ray'],
    thing: ['Radio', 'Rainbow', 'Ring', 'Robot', 'Rocket', 'Rope', 'Ruler', 'Radar', 'Raft', 'Ramp', 'Remote', 'Router']
  },
  'S': {
    name: ['Samuel', 'Sarah', 'Scott', 'Sean', 'Sharon', 'Simon', 'Sophie', 'Steven', 'Sophia', 'Sebastian', 'Stella', 'Stuart'],
    place: ['Sacramento', 'Santiago', 'Scotland', 'Seoul', 'Singapore', 'Spain', 'Sydney', 'Shanghai', 'Stockholm', 'Seattle', 'Sao Paulo', 'Switzerland'],
    animal: ['Salamander', 'Salmon', 'Seal', 'Shark', 'Sheep', 'Snake', 'Spider', 'Squirrel', 'Starfish', 'Swan', 'Scorpion', 'Sloth'],
    thing: ['Saddle', 'Salt', 'Scissors', 'Ship', 'Shoe', 'Soap', 'Socks', 'Satellite', 'Scanner', 'Screen', 'Speaker', 'Stapler']
  },
  'T': {
    name: ['Taylor', 'Thomas', 'Timothy', 'Tony', 'Tracy', 'Tyler', 'Tara', 'Theodore', 'Tessa', 'Trevor', 'Tristan', 'Tiffany'],
    place: ['Taiwan', 'Tanzania', 'Texas', 'Thailand', 'Tokyo', 'Toronto', 'Turkey', 'Taipei', 'Tehran', 'Tibet', 'Tunisia', 'Turin'],
    animal: ['Tiger', 'Toad', 'Turkey', 'Turtle', 'Tarantula', 'Tapir', 'Termite', 'Toucan', 'Tuna', 'Tasmanian Devil'],
    thing: ['Table', 'Telephone', 'Television', 'Tent', 'Toaster', 'Train', 'Tree', 'Tablet', 'Telescope', 'Thermometer', 'Torch', 'Tractor']
  },
  'U': {
    name: ['Ulysses', 'Uma', 'Ursula', 'Usama', 'Umar', 'Ulrich', 'Umberto', 'Unity', 'Urban', 'Uriah'],
    place: ['Uganda', 'Ukraine', 'Uruguay', 'Utah', 'Uzbekistan', 'Uppsala', 'Udaipur', 'Ulaanbaatar', 'Ulm', 'Urumqi'],
    animal: ['Uakari', 'Umbrella Bird', 'Unicorn', 'Urial', 'Urutu', 'Uguisu', 'Upupa', 'Urchin', 'Urubu', 'Umbrellabird'],
    thing: ['Umbrella', 'Uniform', 'Ukulele', 'Utensils', 'USB', 'Unicycle', 'Urn', 'Underwear', 'Upholstery', 'Uranium']
  },
  'V': {
    name: ['Valerie', 'Victor', 'Victoria', 'Vincent', 'Virginia', 'Valentina', 'Vanessa', 'Vera', 'Vernon', 'Violet'],
    place: ['Vancouver', 'Vatican City', 'Venezuela', 'Venice', 'Vienna', 'Vietnam', 'Valencia', 'Valletta', 'Versailles', 'Vladivostok'],
    animal: ['Vampire Bat', 'Viper', 'Vulture', 'Vicuna', 'Vole', 'Vervet Monkey', 'Vinegaroon', 'Vaquita', 'Velvet Worm', 'Violet Snail'],
    thing: ['Vacuum', 'Van', 'Vase', 'Violin', 'Volcano', 'Vest', 'Video Game', 'Vinegar', 'Visor', 'Voice Recorder']
  },
  'W': {
    name: ['Walter', 'Warren', 'Wayne', 'William', 'Wendy', 'Winston', 'Wade', 'Wallace', 'Wesley', 'Willow'],
    place: ['Wales', 'Warsaw', 'Washington', 'Wellington', 'Wisconsin', 'Wyoming', 'Wuhan', 'Winnipeg', 'Wollongong', 'Windhoek'],
    animal: ['Walrus', 'Warthog', 'Whale', 'Wolf', 'Wombat', 'Woodpecker', 'Wasp', 'Weasel', 'Wildebeest', 'Wolverine'],
    thing: ['Wagon', 'Wall', 'Wallet', 'Watch', 'Window', 'Wire', 'Waffle', 'Wand', 'Whistle', 'Wrench']
  },
  'X': {
    name: ['Xavier', 'Xerxes', 'Ximena', 'Xiomar', 'Xander', 'Xiomara', 'Xico', 'Xavi', 'Xenon', 'Xena'],
    place: ['Xi\'an', 'Xiamen', 'Xinjiang', 'Xochimilco', 'Xuzhou', 'Xalapa', 'Xiangyang', 'Xining', 'Xinyu', 'Xuancheng'],
    animal: ['X-Ray Fish', 'Xerus', 'Xenops', 'Xenopus', 'Xantus Murrelet', 'Xeme', 'Xoloitzcuintli', 'Xenarthra', 'Xiphosura', 'Xiphias'],
    thing: ['Xylophone', 'X-Ray', 'Xbox', 'Xenon Lamp', 'Xerograph', 'XML', 'Xanadu', 'Xebec', 'Xerox', 'Xyster']
  },
  'Y': {
    name: ['Yakov', 'Yolanda', 'Yuri', 'Yasmine', 'Yves', 'Yara', 'Yoshi', 'Yale', 'Yoko', 'Yusuf'],
    place: ['Yale', 'Yemen', 'Yokohama', 'York', 'Yukon', 'Yalta', 'Yangon', 'Yerevan', 'Yokosuka', 'Yunnan'],
    animal: ['Yak', 'Yellow Jacket', 'Yorkshire Terrier', 'Yellowhammer', 'Yapok', 'Yabby', 'Yellow-eyed Penguin', 'Yellow Mongoose', 'Yellowfin Tuna', 'Yellow-bellied Marmot'],
    thing: ['Yacht', 'Yam', 'Yarn', 'Yo-yo', 'Yogurt', 'Yoke', 'Yucca', 'Yearbook', 'Yardstick', 'Yurt']
  },
  'Z': {
    name: ['Zachary', 'Zara', 'Zeus', 'Zoe', 'Zack', 'Zelda', 'Zander', 'Zena', 'Ziggy', 'Zion'],
    place: ['Zagreb', 'Zambia', 'Zimbabwe', 'Zurich', 'Zanzibar', 'Zaragoza', 'Zhengzhou', 'Zibo', 'Zion', 'Zurich'],
    animal: ['Zebra', 'Zebu', 'Zorilla', 'Zebra Finch', 'Zebra Shark', 'Zebra Dove', 'Zebrafish', 'Zone-tailed Hawk', 'Zebra Duiker', 'Zebra Moray'],
    thing: ['Zipper', 'Zucchini', 'Zamboni', 'Zero', 'Zinc', 'Zither', 'Zodiac', 'Zoom Lens', 'Zeppelin', 'Zigzag']
  }
}; 