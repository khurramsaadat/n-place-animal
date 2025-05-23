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
    name: ['Quincy', 'Quinn', 'Quinton', 'Qasim', 'Queenie'],
    place: ['Qatar', 'Quebec', 'Queensland', 'Quezon City'],
    animal: ['Quail', 'Quokka', 'Quoll'],
    thing: ['Quilt', 'Quarter', 'Queen (chess)', 'Quiver', 'Quiz']
  },
  'R': {
    name: ['Rachel', 'Ralph', 'Raymond', 'Rebecca', 'Richard', 'Robert', 'Rose', 'Ryan'],
    place: ['Rabat', 'Raleigh', 'Rome', 'Romania', 'Russia', 'Rwanda'],
    animal: ['Rabbit', 'Raccoon', 'Rat', 'Raven', 'Rhinoceros', 'Robin'],
    thing: ['Radio', 'Rainbow', 'Ring', 'Robot', 'Rocket', 'Rope', 'Ruler']
  },
  'S': {
    name: ['Samuel', 'Sarah', 'Scott', 'Sean', 'Sharon', 'Simon', 'Sophie', 'Steven'],
    place: ['Sacramento', 'Santiago', 'Scotland', 'Seoul', 'Singapore', 'Spain', 'Sydney'],
    animal: ['Salamander', 'Salmon', 'Seal', 'Shark', 'Sheep', 'Snake', 'Spider'],
    thing: ['Saddle', 'Salt', 'Scissors', 'Ship', 'Shoe', 'Soap', 'Socks']
  },
  'T': {
    name: ['Taylor', 'Thomas', 'Timothy', 'Tony', 'Tracy', 'Tyler'],
    place: ['Taiwan', 'Tanzania', 'Texas', 'Thailand', 'Tokyo', 'Toronto', 'Turkey'],
    animal: ['Tiger', 'Toad', 'Turkey', 'Turtle'],
    thing: ['Table', 'Telephone', 'Television', 'Tent', 'Toaster', 'Train', 'Tree']
  },
  'U': {
    name: ['Ulysses', 'Uma', 'Ursula', 'Usama', 'Umar'],
    place: ['Uganda', 'Ukraine', 'Uruguay', 'Utah', 'Uzbekistan'],
    animal: ['Uakari', 'Umbrella Bird', 'Unicorn', 'Urial'],
    thing: ['Umbrella', 'Uniform', 'Ukulele', 'Utensils']
  },
  'V': {
    name: ['Valerie', 'Victor', 'Victoria', 'Vincent', 'Virginia'],
    place: ['Vancouver', 'Vatican City', 'Venezuela', 'Venice', 'Vienna', 'Vietnam'],
    animal: ['Vampire Bat', 'Viper', 'Vulture'],
    thing: ['Vacuum', 'Van', 'Vase', 'Violin', 'Volcano']
  },
  'W': {
    name: ['Walter', 'Warren', 'Wayne', 'William', 'Wendy', 'Winston'],
    place: ['Wales', 'Warsaw', 'Washington', 'Wellington', 'Wisconsin', 'Wyoming'],
    animal: ['Walrus', 'Warthog', 'Whale', 'Wolf', 'Wombat', 'Woodpecker'],
    thing: ['Wagon', 'Wall', 'Wallet', 'Watch', 'Window', 'Wire']
  },
  'X': {
    name: ['Xavier', 'Xerxes', 'Ximena', 'Xiomar'],
    place: ['Xi\'an', 'Xiamen', 'Xinjiang'],
    animal: ['X-Ray Fish', 'Xerus'],
    thing: ['Xylophone', 'X-Ray', 'Xbox']
  },
  'Y': {
    name: ['Yakov', 'Yolanda', 'Yuri', 'Yasmine', 'Yves'],
    place: ['Yale', 'Yemen', 'Yokohama', 'York', 'Yukon'],
    animal: ['Yak', 'Yellow Jacket', 'Yorkshire Terrier'],
    thing: ['Yacht', 'Yam', 'Yarn', 'Yo-yo', 'Yogurt']
  },
  'Z': {
    name: ['Zachary', 'Zara', 'Zeus', 'Zoe', 'Zack'],
    place: ['Zagreb', 'Zambia', 'Zimbabwe', 'Zurich'],
    animal: ['Zebra', 'Zebu', 'Zorilla'],
    thing: ['Zipper', 'Zucchini', 'Zamboni', 'Zero']
  }
}; 