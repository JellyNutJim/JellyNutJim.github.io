class PDataBase 
{
  //The backup database
  //[0] is the element's symbol.
  //[1] is the element's full name.
  //[1] is the element's proton/atomic number.
  //[2] is the element'ss mass number.
  //[3] tells us whether the element is a metal or not. 
  
  var elements = [['H', 'hydrogen', 1, 1, false], //Start of period 1.
                  ['He','helium', 2, 4, false], 
                  ['Li', 'lithium', 3, 6.9, true], //Start of period 2.
                  ['Be', 'beryllium', 4, 9, true],
                  ['B', 'boron', 5, 10.8, false],
                  ['C', 'carbon', 6, 12, false],
                  ['N', 'nitrogen', 7, 14, false],
                  ['O', 'oxygen', 8, 16, false],
                  ['F', 'fluorine', 9, 19, false],
                  ['Ne', 'neon', 10, 20.2, false], 
                  ['Na', 'sodium', 11, 23, true], //Start of period 3.
                  ['Mg', 'magnesium', 12, 24.3, true],
                  ['Al', 'aluminium', 13, 27, true],
                  ['Si', 'silicon', 14, 28.1, false],
                  ['P', 'phosphorus', 15, 31, false],
                  ['S', 'sulfur', 16, 32.1, false],
                  ['Cl', 'chlorine', 17, 35.5, false],
                  ['Ar', 'argon', 18, 39.9, false], 
                  ['K', 'potassium', 19, 39.1, true], //Start of period 4.
                  ['Ca', 'calcium', 20, 40.1, true],
                  ['Sc', 'scandium', 21, 45, true],
                  ['Ti', 'titanium', 22, 47.9, true],
                  ['V', 'vanadium', 23, 50.9, true],
                  ['Cr', 'chromium', 24, 52, true],
                  ['Mn', 'manganese', 25, 54.9, true],
                  ['Fe', 'iron', 26, 55.8, true],
                  ['Co', 'cobalt', 27, 58.9, true],
                  ['Ni', 'nickel', 28, 58.7, true],
                  ['Cu', 'copper', 29, 63.5, true],
                  ['Zn', 'zinc', 30, 65.4, true],
                  ['Ga', 'gallium', 31, 69.7, true],
                  ['Ge', 'germanium', 32, 72.6, true],
                  ['As', 'arsenic', 33, 74.9, false],
                  ['Se', 'selenium', 34, 79, false],
                  ['Br', 'bromine', 35, 79.9, false],
                  ['Kr', 'krypton', 36, 83.8, false], //
                  ['Rb', 'rubidium', 37, 85.5, true], //Start of period 5.
                  ['Sr', 'strontium', 38, 87.6, true],
                  ['Y', 'yttrium', 39, 88.9, true],
                  ['Zr', 'zirconium',40, 91.2, true],
                  ['Nb', 'niobium', 41, 92.9, true],
                  ['Mo', 'molybdenum', 42, 96, true],
                  ['Tc', 'technetium', 43, 98, true],
                  ['Ru', 'ruthenium', 44, 101.1, true],
                  ['Rh', 'rhodium', 45, 102.9, true],
                  ['Pd', 'palladium', 46, 106.4, true],
                  ['Ag', 'silver', 47, 107.9, true],
                  ['Cd', 'cadmium', 48, 112.4, true],
                  ['In', 'indium', 49, 114.8, true],
                  ['Sn', 'tin', 50, 118.7, true],
                  ['Sb', 'antimony', 51, 121.8, true],
                  ['Te', 'tellurium', 52, 127.6, false],
                  ['I', 'iodine', 53, 126.9, false],
                  ['Xe', 'xeonon', 54, 131.3, false], 
                  ['Cs', 'cesium', 55, 132.9, true], //Start of period 6
                  ['Ba', 'barium', 56, 137.3, true],
                  ['La', 'lanthanum', 57, 138.9, true],
                  ['Ce', 'cerium', 58, 140.1, true], //Start of Lanthanides (58 - 71).
                  ['Pr', 'praseodymium', 59, 140.9, true],
                  ['Nd', 'neodymium', 60, 144.2, true],
                  ['Pm', 'promethium', 61, 145, true],
                  ['Sm', 'samarium', 62, 150.4, true],
                  ['Eu', 'europium', 63, 152, true],
                  ['Gd', 'gadolinium', 64, 157.3, true],
                  ['Tb', 'terbium', 65, 158.9, true],
                  ['Dy', 'dysprosium', 66, 162.5, true],
                  ['Ho', 'holmium', 67, 164.9, true],
                  ['Er', 'erbium', 68, 167.3, true],
                  ['Tm', 'thulium', 69, 168.9, true],
                  ['Yb', 'ytterbium', 70, 173.1, true],
                  ['Lu', 'luteium', 71, 175, true], //End of Lanthanides
                  ['Hf', 'hafnium', 72, 178.5, true],
                  ['Ta', 'tantalum', 73, 180.9, true],
                  ['W', 'tungsten', 74, 183.8, true],
                  ['Re', 'rhenium', 75, 186.2, true],
                  ['Os', 'osmium', 76, 190.2, true],
                  ['Ir', 'iridium', 77, 192.2, true],
                  ['Pt', 'platinum', 78, 195.1, true],
                  ['Au', 'gold', 79, 197, true],
                  ['Hg', 'mercury', 80, 200.6, true],
                  ['Tl', 'thallium', 81, 204.4, true],
                  ['Pb', 'lead', 82, 207.4, true],
                  ['Bi', 'bismuth', 83, 209, true],
                  ['Po', 'polonium', 84, 209, false],
                  ['At', 'astatine', 85, 210, false],
                  ['Rn', 'radon', 86, 222, false],
                  ['Fr', 'francium', 87, 223, true], //Start of period 7.
                  ['Ra', 'radium', 88, 226, true],
                  ['Ac', 'actinium', 89, 227, true],
                  ['Th' 'thorium', 90, 232, true], //Start of Actinides (90 - 103).
                  ['Pa', 'protactinium', 91, 231, true],
                  ['U', 'uranium', 92, 238, true],
                  ['Np', 'neptunium', 93, 247, true],
                  ['Pu', 'plutonium', 94, 244, true],
                  ['Am', 'americium', 95, 243, true],
                  ['Cm', 'curium', 96, 247, true],
                  ['Bk', 'berkelium', 97, 247, true],
                  ['Cf', 'californium', 98, 251, true],
                  ['Es', 'einsteinium', 99, 252, true],
                  ['Fm', 'fermium', 100, 257, true],
                  ['Md', 'mendelevium', 101, 258, true],
                  ['No', 'nobelium', 102, 259, true],
                  ['Lr', 'lawrencium', 103, 262, true], //End of Actinides.
                  ['Rf', 'rutherfordium', 104, 267, true],
                  ['Db', 'dubnium', 105, 268, true],
                  ['Sg', 'seaborgium', 106, 271, true],
                  ['Bh', 'bohrium', 107, 272, true],
                  ['Hs', 'hassium', 108, 270, true],
                  ['Mt', 'meitnerium', 109, 276, true],
                  ['Ds', 'darmstadtium', 110, 281, true],
                  ['Rg', 'roentgenium', 11, 280, true]];
                  
                 

                  function testDB
                  {
                    Console.Table(elements);
                  }
  
  
  
}
