create database lol_akinator_clone;

create table champion_objects (Name varchar(30), Region varchar(20), Dmg_type char(2), Sex char(1), 
Story_relation varchar(20), Typical_lane varchar(6), Role_type varchar(20), Resource_type varchar(10), Race varchar(10));

-- subcategories: 
-- Story_relation -> familial/ romantic relation
-- Story_relation -> Being relation (Kayn/ Rhaast, Sej/ Winter's Claw) 

-- regarding factions: question can be framed as "Does your character have any ties to..."
-- this is true for character relations as well. Benefit of being vague and allowing for different choices
-- not all answers have to make sense. Not everyone will know the lore. But it has to be just enough.
-- is your character SOMEHOW relate to... this is enough (or has your character some connection to)
-- or DOES YOUR CHARACTER HAVE SOMETHING IN COMMON WITH
-- Has your character ever been related to (associated with )... (faction esp. like Graves or any ex sentinel)
-- the cool thing about akinator are his semi-educated guesses that are precise
-- is your character (or has) AFFILIATED with the X

-- could have a "did you know" trivia section at the end when you guess where the program
-- tells you certain things you may not have known about the champion
-- is your champion often played in more than 1 role? If none, then program selects "None"s.
-- it can also ask about a second role. Does your champion have a commonly played secondary role?
-- again, the specific value doesn't matter. Just matters that it isn't none.
-- the same goes for factions. Don't ask for the specific faction. Just "are they tied to A faction?"

-- the app can get specific if there are various values which match outside the faction,
-- and then the only way to clarify what champion is by asking which faction they belong to

-- I get the impression that I will need multiple values for key regions and relations. That's fine.
-- Those would be represented by arrays within objects

-- could the math random be used to generate the question for "MAYBE" button?

-- don't worry about strange values. You can say "if not human..." rather than asking specifics.

INSERT INTO champion_objects
values
("Aatrox", "Shurima", "physical", "M", "Top", "None", "Bruiser", "None", "Darkin", "the Darkin", "Pantheon"),
("Ahri", "Ionia", "magical", "F", "Mid", "None", "Mage", "Mana", "Vastaya", "the Vastaya", "Yasuo"),
("Akali", "Ionia", "magical", "F", "Mid", "Top", "Assassin", "Energy", "Human", "the Kinkou Order", "Shen"),
("Akshan", "Shurima", "physical", "M", "Mid", "Top", "Marksman", "Mana", "Human", "the Sentinels of Light", "Viego"),
("Alistar", "Noxus", "magical", "M", "Support", "None", "Multi-class", "Mana", "Minotaur", "the Reckoners", "Sett"),
("Amumu", "Shurima", "magical", "M", "Jungle", "Support", "Tank", "Mana", "Yordle", "None", "None"),
("Anivia", "the Freljord", "magical", "F", "Mid", "None", "Mage", "Mana", "Spirit God", "the Avarosan", "Ashe"),
("Annie", "Noxus", "magical", "F", "Mid", "Support", "Mage", "Mana", "Human", "None", "LeBlanc"),
("Aphelios", "Targon", "physical", "M", "Bottom", "None", "Marksman", "Mana", "Human", "the Lunari", "Diana"),
("Ashe", "the Freljord", "physical", "F", "Bottom", "Support", "Marksman", "Mana", "Human", "the Avarosan", "Tryndamere"),
("Aurelion Sol", "Targon", "magical", "M", "Mid", "None", "Mage", "Mana", "Celestial", "None", "Pantheon"),
("Azir", "Shurima", "magical", "M", "Mid", "None", "Mage", "Mana", "Ascendant", "the Shuriman Empire", "Xerath"),
("Bard", "Unknown", "magical", "N", "Support", "None", "Support", "Mana", "Celestial", "None", "Aurelion Sol"),
("Bel'Veth", "the Void", "physical", "F", "Jungle", "None", "Fighter", "None", "Voidborn", "the Void", "Kai'Sa"),
("Blitzcrank", "Zaun", "magical", "M", "Support", "None", "Support", "Mana", "Golem", "None", "Viktor"),
("Brand", "the Freljord", "magical", "M", "Support", "Mid", "Mage", "Mana", "Human", "None", "Ryze"),
("Braum", "the Freljord", "magical", "M", "Support", "None", "Tank", "Mana", "Human", "the Avarosan", "Ashe"),
("Caitlyn", "Piltover", "physical", "F", "Bottom", "None", "Marksman", "Mana", "Human", "the Piltover Wardens", "Vi"),
("Camille", "Piltover", "physical", "F", "Top", "Mid", "Fighter", "Mana", "Human", "the Ferros Clan", "Viktor"),
("Cassiopeia", "Noxus", "magical", "F", "Mid", "Bottom", "Mage", "Mana", "Human", "the Du Couteau House", "Katarina"),
("Cho'Gath", "the Void", "magical", "M", "Top", "Mid", "Tank", "Mana", "Voidborn", "the Void", "Vel'Koz"),
("Corki", "Bandle City", "magical", "M", "Mid", "Bottom", "Multi-class", "Mana", "Yordle", "the Yipsnakes", "Teemo"),
("Darius", "Noxus", "physical", "M", "Top", "None", "Fighter", "Mana", "Human", "the Trifarian Legion", "Draven"),
("Diana", "Targon", "magical", "F", "Jungle", "Mid", "Multi-class", "Mana", "Human", "the Lunari", "Leona"),
("Dr. Mundo", "Zaun", "physical", "M", "Top", "Jungle", "Tank", "Health", "Human", "None", "Ekko"),
("Draven", "Noxus", "physical", "M", "Bottom", "None", "Marksman", "Mana", "Human", "the Reckoners", "Darius"),
("Ekko", "Zaun", "magical", "M", "Mid", "Jungle", "Assassin", "Mana", "Human", "the Sumpsnipe", "Vi"),
("Elise", "Noxus", "magical", "F", "Jungle", "None", "Assassin", "Mana", "Human", "the Black Rose", "LeBlanc"),
("Evelynn", "Unknown", "magical", "F", "Jungle", "None", "Assassin", "Mana", "Demon", "None", "Fiddlesticks"),
("Ezreal", "Piltover", "physical", "M", "Bottom", "Mid", "Marksman", "Mana", "Human", "None", "Kassadin"),
("Fiddlesticks", "Unknown", "magical", "N", "Jungle", "None", "Mage", "Mana", "Demon", "None", "Evelynn"),
("Fiora", "Demacia", "physical", "F", "Top", "None", "Fighter", "Mana", "Human", "the Laurent House", "Garen"),
("Fizz", "Bandle City", "magical", "M", "Mid", "Top", "Assassin", "Mana", "Yordle", "None", "Nami"),
("Galio", "Demacia", "magical", "M", "Mid", "Suppor", "Multi-class", "Mana", "Golem", "the Durand House", "Poppy"),
("Gangplank", "Bilgewater", "physical", "M", "Top", "Mid", "Fighter", "Mana", "Human", "the Jagged Hooks", "Illaoi"),
("Garen", "Demacia", "physical", "M", "Top", "Mid", "Fighter", "None", "Human", "the Dauntless Vanguard", "Lux"),
("Gnar", "the Freljord", "physical", "M", "Top", "Mid", "Fighter", "Rage", "Yordle", "None", "Rengar"),
("Gragas", "the Freljord", "magical", "M", "Top", "Mid", "Mage", "Mana", "Human", "the Avarosan", "Tryndamere"),
("Graves", "Bilgewater", "physical", "M", "Jungle", "None", "Marksman", "Mana", "Human", "the Sentinels of Light", "Twisted Fate"),
("Gwen", "Shadow Isles", "magical", "F", "Top", "Mid", "Fighter", "Mana", "Human", "the Sentinels of Light", "Isolde"),
("Hecarim", "Shadow Isles", "physical", "M", "Jungle", "Top", "Multi-class", "Mana", "Wraith", "the Black Mist Vanguard", "Kalista"),
("Heimerdinger", "Bandle City", "magical", "M", "Mid", "Top", "Mage", "Mana", "Yordle", "None", "Jayce"),
("Illaoi", "Bilgewater", "physical", "F", "Top", "None", "Multi-class", "Mana", "Human", "the Buhru", "Gangplank"),
("Irelia", "Ionia", "physical", "F", "Top", "Mid", "Fighter", "Mana", "Human", "the Sentinels of Light", "Swain"),
("Ivern", "the Freljord", "magical", "M", "Jungle", "None", "Support", "Mana", "Human", "None", "Lissandra"),
("Janna", "Zaun", "magical", "F", "Support", "None", "Support", "Mana", "Spirit God", "None", "Ekko"),
("Jarvan IV", "Demacia", "physical", "M", "Jungle", "None", "Fighter", "Mana", "Human", "the Lightshield House", "Shyvana"),
("Jax", "Icathia", "physical", "M", "Top", "Jungle", "Fighter", "Mana", "Unknown", "None", "Fiora"),
("Jayce", "Piltover", "physical", "M", "Top", "Mid", "Multi-class", "Mana", "Human", "the Ferros Clan", "Viktor"),
("Jhin", "Ionia", "physical", "M", "Bottom", "None", "Marksman", "Mana", "Human", "None", "Zed"),
("Jinx", "Zaun", "physical", "F", "Bottom", "None", "Marksman", "Mana", "Human", "None", "Vi"),
("Kai'Sa", "Shurima", "magical", "F", "Bottom", "None", "Multi-class", "Mana", "Human", "The Preservers of Valoran", "Kassadin"),
("Kalista", "Shadow Isles", "physical", "F", "Bottom", "None", "Marksman", "Mana", "Wrath", "None", "Hecarim"),
("Karma", "Ionia", "magical", "F", "Support", "Mid", "Multi-class", "Mana", "Human", "Ionia", "Irelia"),
("Karthus", "Shadow Isles", "magical", "M", "Jungle", "Mid", "Mage", "Mana", "Wraith", "None", "Thresh"),
("Kassadin", "the Void", "magical", "M", "Mid", "None", "Assassin", "Mana", "Human", "The Preservers of Valoran", "Kai'Sa"),
("Katarina", "Noxus", "magical", "F", "Mid", "None", "Multi-class", "None", "Human", "the Du Couteau House", "Cassiopeia"),
("Kayle", "Demacia", "physical", "F", "Top", "Mid", "Fighter", "Mana", "Human", "None", "Morgana"),
("Kayn", "Noxus", "physical", "M", "Jungle", "None", "Multi-class", "Mana", "Human", "the Shadow Order", "Zed"),
("Kennen", "Bandle City", "magical", "M", "Top", "Mid", "Multi-class", "Energy", "Yordle", "the Kinkou Order", "Shen"),
("Kha'Zix", "the Void", "physical", "M", "Jungle", "None", "Assassin", "Mana", "Voidborn", "the Void", "Rengar"),
("Kindred", "Unknown", "physical", "N", "Jungle", "None", "Marksman", "Mana", "Spirit God", "None", "Mordekaiser"), 
("Kled", "Bandle City", "physical", "M", "Top", "Jungle", "Fighter", "Courage", "Yordle", "the Trifarian Legion", "Darius"),
("Kog'Maw", "the Void", "physical", "M", "Bottom", "Mid", "Multi-class", "Mana", "Voidborn", "the Void", "Kha'Zix"),
("Le'Blanc", "Noxus", "magical", "F", "Mid", "None", "Assassin", "Mana", "Human", "the Black Rose", "Swain"),
("Lee'Sin", "Ionia", "physical", "M", "Jungle", "None", "Multi-class", "Energy", "Human", "the Shojin Order", "Udyr"),
("Leona", "Targon", "magical", "F", "Support", "None", "Support", "Mana", "Aspect Host", "the Solari", "Diana"),
("Lillia", "Ionia", "magical", "F", "Jungle", "Top", "Mage", "Mana", "Fae Fawn", "None", "Yone"),
("Lissandra", "the Freljord", "magical", "F", "Mid", "Top", "Mage", "Mana", "Human", "the Frostguard", "Trundle"),
("Lucian", "Demacia", "physical", "M", "Bottom", "Mid", "Marksman", "Mana", "Human", "the Sentinels of Light", "Senna"),
("Lulu", "Bandle City", "magical", "F", "Support", "Top", "Support", "Mana", "Yordle", "None", "Teemo"),
("Lux", "Demacia", "magical", "F", "Support", "Mid", "Multi-class", "Mana", "Human", "the Crownguard House", "Sylas"),
("Malphite", "Ixtal", "magical", "N", "Top", "Mid", "Multi-class", "Mana", "Golem", "None", "Taliyah"),
("Malzahar", "Icathia", "magical", "M", "Mid", "None", "Mage", "Mana", "Human", "The Cult of the Void", "Kassadin"),
("Maokai", "Shadow Isles", "magical", "M", "Top", "Support", "Multi-class", "Mana", "Treant", "None", "Zyra"),
("Master Yi", "Ionia", "physical", "M", "Jungle", "None", "Fighter", "Mana", "Human", "the Wuju Order", "Wukong"),
("Miss Fortune", "Bilgewater", "physical", "F", "Bottom", "None", "Marksman", "Mana", "Human", "the Syrens", "Gangplank"),
("Mordekaiser", "Noxus", "magical", "M", "Top", "Jungle", "Fighter", "Shield", "Deceased", "the Iron Revenant", "LeBlanc"),
("Morgana", "Demacia", "magical", "F", "Support", "Mid", "Multi-class", "Mana", "Human", "None", "Kayle"),
("Nami", "N", "magical", "F", "Support", "None", "Multi-class", "Mana", "Vastaya", "the Vastaya", "Fizz"),
("Nasus", "Shurima", "physical", "M", "Top", "Jungle", "Multi-class", "Mana", "Ascendant", "None", "Renekton"),
("Nautilus", "Bilgewater", "magical", "M", "Support", "Top", "Multi-class", "Mana", "Revenant", "None", "Fizz"),
("Neeko", "Ixtal", "magical", "F", "Middle", "Support", "Mage", "Mana", "Oovi-kat", "the Vastaya", "Nidalee"),
("Nidalee", "Ixtal", "magical", "F", "Jungle", "Support", "Multi-class", "Mana", "Human", "None", "Neeko"), 
("Nilah", "Bilgewater", "physical", "F", "Bottom", "None", "Multi-class", "Mana", "Human", "None", "Graves"),
("Nocturne", "Unknown", "physical", "N", "Jungle", "Top", "None", "Multi-class", "Mana", "Demon", "Zed"),
("Nunu and Willump", "the Freljord", "magical", "M", "Jungle", "Mid", "Multi-class", "Mana", "Human", "the Frostguard", "Lissandra"),
("Olaf", "the Freljord", "physical", "M", "Jungle", "Top", "Fighter", "Mana", "Human", "the Winter's Claw", "Sejuani"),
("Orianna", "Piltover", "magical", "F", "Mid", "None", "Mage", "Mana", "Golem", "Piltover", "Blitzcrank"),
("Ornn", "the Freljord", "physical", "M", "Top", "None", "Tank", "Mana", "Spirit God", "None", "Volibear"),
("Pantheon", "Targon", "physical", "M", "Top", "Support", "Multi-class", "Mana", "Human", "the Rakkor", "Aatrox"),
("Poppy", "Bandle City", "physical", "F", "Top", "Jungle", "Multi-class", "Mana", "Yordle", "None", "Galio"),
("Pyke", "Bilgewater", "physical", "M", "Support", "Mid", "Assassin", "Mana", "Revenant", "the Sentinels of Light", "Graves"),
("Qiyana", "Ixtal", "physical", "F", "Mid", "Jungle", "Assassin", "Mana", "Human", "None", "Malphite"),
("Quinn", "Demacia", "physical", "F", "Top", "None", "Multi-class", "Mana", "Human", "the Demacian Rangers", "Jarvan IV"),
("Rakan", "Ionia", "magical", "M", "Support", "Mid", "Support", "Mana", "Vastaya", "the Vastaya", "Xayah"),
("Rammus", "Shurima", "physical", "M", "Jungle", "None", "Tank", "Mana", "Unknown", "None", "None"),
("Rek'Sai", "the Void", "physical", "F", "Jungle", "None", "Fighter", "Rage", "Voidborn", "None", "Skarner"),
("Rell", "Noxus", "magic", "F", "Support", "None", "Support", "Mana", "Human", "None", "LeBlanc"),
("Renata Glasc", "Zaun", "magic", "F", "Support", "None", "Support", "Mana", "Human", "the Glasc Industries", "Zeri"),
("Renekton", "Shurima", "physical", "M", "Top", "Mid", "Fighter", "Fury", "Ascendant", "None", "Nasus"),
("Rengar",  "Ixtal", "physical", "M", "Jungle", "Top", "Assassin", "Ferocity", "Vastaya", "the Sentinels of Light", "Kha'Zix"),
("Riven", "Noxus", "physical", "F", "Top", "None", "Fighter", "None", "Human", "the Reckoners", "Yasuo"),
("Rumble", "Bandle City", "magical", "M", "Top", "Mid", "Mage", "Heat", "Yordle", "None", "Tristana"),
("Ryze", "Unknown", "magical", "M", "Mid", "Top", "Mage", "Mana", "Human", "None", "Brand"),
("Samira", "Noxus", "physical", "F", "Bottom", "None", "Marksman", "Mana", "Human", "None", "LeBlanc"),
("Sejuani", "the Freljord", "magical", "F", "Jungle", "Top", "Multi-class", "Mana", "Human", "the Winter's Claw", "Olaf"),
("Senna", "Shadow Isles", "physical", "F", "Bottom", "None", "Multi-class", "Mana", "Human", "the Sentinels of Light", "Lucian"),
("Seraphine", "Piltover", "magical", "F", "Support", "Mid", "Multi-class", "Mana", "Human", "None", "Skarner"),
("Sett", "Ionia", "physical", "M", "Top", "Support", "Fighter", "Grit", "Vastaya", "the Vastaya", "Draven"),
("Shaco", "Unknown", "physical", "M", "Jungle", "Support", "Assassin", "Mana", "Spirit", "None", "Fiddlesticks"),
("Shen", "Ionia", "physical", "M", "Top", "Support", "Tank", "Energy", "Human", "the Kinkou Order", "Zed"),
("Shyvana", "Demacia", "physical", "F", "Jungle", "Top", "Multi-class", "Fury", "Dragon", "Dragonguard", "Jarvan IV"),
("Singed", "Zaun", "magical", "M", "Top", "None", "Multi-class", "Mana", "Human", "None", "Warwick"),
("Sion", "Noxus", "physical", "M", "Top", "None", "Multi-class", "Mana", "Revenant", "None", "Jarvan IV"),
("Sivir", "Shurima", "physical", "F", "Bottom", "None", "Marksman", "Mana", "Human", "None", "Azir"),
("Skarner", "Shurima", "physical", "M", "Jungle", "Top", "Fighter", "Mana", "Brackern", "the Brackern", "Seraphine"),
("Sona", "Demacia", "magical", "F", "Support", "None", "Multi-class", "Mana", "Human", "the Buvelle House", "Ryze"),
("Soraka", "Targon", "magical", "F", "Support", "None", "Support", "Mana", "Celestial", "None", "Bard"),
("Swain", "Noxus", "magical", "M", "Support", "Mid", "Mage", "Mana", "Human", "the Swain House", "Katarina"),
("Sylas", "Demacia", "magical", "M", "Mid", "Top", "Mage", "Mana", "Human", "Winter's Claw", "Lux"),
("Syndra", "Ionia", "magical", "F", "Mid", "Bottom", "Mage", "Mana", "Human", "None", "Irelia"),
("Tahm Kench", "Bilgewater", "magical", "M", "Top", "Support", "Tank", "Mana", "Demon", "None", "Fiddlesticks"),
("Taliyah", "Shurima", "magical", "F", "Mid", "Jungle", "Mage", "Mana", "Human", "None", "Yasuo"),
("Talon", "Noxus", "physical", "M", "Mid", "None", "Assassin", "Mana", "Human", "the Du Couteau House", "Katarina"),
("Taric", "Targon", "physical", "M", "Support", "Jungle", "Support", "Mana", "Aspect Host", "the Dauntless Vanguard", "Zoe"),
("Teemo", "Bandle City", "physical", "M", "Top", "None", "Multi-class", "Mana", "Yordle", "None", "Tristana"),
("Thresh", "Shadow Isles", "physical", "M", "Support", "None", "Support", "Mana", "Wraith", "None", "Lucian"),
("Tristana", "Bandle City", "physical", "F", "Bottom", "Mid", "Marksman", "Mana", "Yordle", "None", "Teemo"),
("Trundle", "the Freljord", "physical", "M", "Jungle", "Top", "Fighter", "Mana", "Troll", "the Frostguard", "Lissandra"),
("Tryndamere", "the Freljord", "physical", "M", "Top", "None", "Fighter", "Fury", "Human", "the Avarosan", "Aatrox"),
("Twisted Fate", "Bilgewater", "magical", "M", "Mid", "None", "Mage", "Mana", "Human", "None", "Graves"),
("Twitch", "Zaun", "physical", "M", "Bottom", "Jungle", "Marksman", "Mana", "Plague Rat", "None", "Zac"),
("Udyr", "the Freljord", "physical", "M", "Jungle", "Top", "Multi-class", "Mana", "Human", "the Winter's Claw", "Lee Sin"),
("Urgot", "Zaun", "physical", "M", "Top", "None", "Fighter", "Mana", "Human", "None", "Caitlyn"),
("Varus", "Ionia", "physical", "M", "Bottom", "None", "Multi-class", "Mana", "Darkin", "the Darkin", "Kayn"),
("Vayne", "Demacia", "physical", "F", "Bottom", "Top", "Marksman", "Mana", "Human", "the Sentinels of Light", "Evelynn"),
("Veigar", "Bandle City", "magical", "M", "Mid", "Bottom", "Mage", "Mana", "Yordle", "None", "Lulu"),
("Vel'Koz", "the Void", "magical", "M", "Mid", "Support", "Mage", "Mana", "Voidborn", "the Void", "Kha'Zix"),
("Vex", "Bandle City", "magical", "F", "Mid", "None", "Mage", "Mana", "Yordle", "None", "Viego"),
("Vi", "Piltover", "physical", "F", "Jungle", "None", "Fighter", "Mana", "Human", "the Piltover Wardens", "Jinx"),
("Viego", "Shadow Isles", "physical", "M", "Jungle", "None", "Fighter", "None", "Wraith", "None", "Kalista"),
("Viktor", "Zaun", "magical", "M", "Mid", "None", "Mage", "Mana", "Human", "None", "Jayce"),
("Vladimir", "Noxus", "magical", "M", "Mid", "Top", "Mage", "Bloodthirst", "Human", "the Black Rose", "Viego"),
("Volibear", "the Freljord", "physical", "M", "Top", "Jungle", "Multi-class", "Mana", "Spirit God", "the Ursine", "Ornn"),
("Warwick", "Zaun", "physical", "M", "Jungle", "Top", "Fighter", "Mana", "Human", "None", "Singed"),
("Wukong", "Ionia", "physical", "M", "Top", "Jungle", "Fighter", "Mana", "Vastaya", "the Wuju Order", "Master Yi"),
("Xayah", "Ionia", "physical", "F", "Bottom", "None", "Marksman", "Mana", "Vastaya", "the Vastaya", "Rakan"),
("Xerath", "Shurima", "magical", "M", "Mid", "Support", "Mage", "Mana", "Baccai", "None", "Azir"),
("Xin Zhao", "Demacia", "physical", "M", "Jungle", "None", "Fighter", "Mana", "Human", "the Lightshield House", "Jarvan IV"),
("Yasuo", "Ionia", "physical", "M", "Mid", "Top", "Fighter", "Flow", "Human", "None", "Yone"),
("Yone", "Ionia", "physical", "M", "Mid", "Top", "Fighter", "None", "Human", "None", "Yasuo"),
("Yorick", "Shadow Isles", "physical", "M", "Top", "None", "Multi-class", "Mana", "Human", "None", "Hecarim"),
("Yuumi", "Bandle City", "magical", "F", "Support", "None", "Multi-class", "Mana", "Cat", "None", "Tristana"),
("Zac", "Zaun", "magical", "M", "Jungle", "Top", "Multi-class", "Health", "Golem", "None", "Twitch"),
("Zed", "Ionia", "physical", "M", "Mid", "Jungle", "Assassin", "Energy", "Human", "the Shadow Order", "Shen"),
("Zeri", "Zaun", "physical", "F", "Bottom", "None", "Marksman", "Mana", "Human", "None", "Ekko"),
("Ziggs", "Bandle City", "magical", "M", "Mid", "Bottom", "Mage", "Mana", "Yordle", "None", "Heimerdinger"),
("Zilean", "Icathia", "magical", "M", "Support", "Mid", "Mage", "Mana", "Human", "None", "Jax"),
("Zoe", "Targon", "magical", "F", "Mid", "None", "Mage", "Mana", "Aspect Host", "the Rakkor", "Leona"),
("Zyra", "Ixtal", "magical", "F", "Support", "None", "Mage", "Mana", "Unknown", "None", "Ivern");

update champion_objects
set Race = "Demon"
where name = "Nocturne";

update champion_objects
set Faction = "the Winter's Claw"
where name = "Sylas";

select * from champion_objects;


