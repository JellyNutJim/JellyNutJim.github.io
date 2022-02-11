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
                  ['Ga', 'gallium, '31, 69.7, true],
                  ['Ge', 'germanium', 32, 72.6, true],
                  ['As', 'arsenic', 33, 74.9, false],
                  ['Se', 'selenium', 34, 79, false],
                  ['Br', 'bromine', 35, 79.9, false],
                  ['Kr', 'krypton', 36, 83.8, false], //
                  ['Rb', 'rubidium', 37, 85.5, true], //Start of period 5.
                  ['Sr', 'strontium', 38, 87.6, true],
                  ['Y', 39, 88.9, true],
                  ['Zr', 40, 91.2, true],
                  ['Nb', 41, 92.9, true],
                  ['Mo', 42, 96, true],
                  ['Tc', 43, 98, true],
                  ['Ru', 44, 101.1, true],
                  ['Rh', 45, 102.9, true],
                  ['Pd', 46, 106.4, true],
                  ['Ag', 47, 107.9, true],
                  ['Cd', 48, 112.4, true],
                  ['In', 49, 114.8, true],
                  ['Sn', 50, 118.7, true],
                  ['Sb', 51, 121.8, true],
                  ['Te', 52, 127.6, false],
                  ['I', 53, 126.9, false],
                  ['Xe', 54, 131.3, false], 
                  ['Cs', 55, 132.9, true], //Start of period 6
                  ['Ba', 56, 137.3, true],
                  ['La', 57, 138.9, true],
                  ['Ce', 58, 140.1, true], //Start of Lanthanides (58 - 71).
                  ['Pr', 59, 140.9, true],
                  ['Nd', 60, 144.2, true],
                  ['Pm', 61, 145, true],
                  ['Sm', 62, 150.4, true],
                  ['Eu', 63, 152, true],
                  ['Gd', 64, 157.3, true],
                  ['Tb', 65, 158.9, true],
                  ['Dy', 66, 162.5, true],
                  ['Ho', 67, 164.9, true],
                  ['Er', 68, 167.3, true],
                  ['Tm', 69, 168.9, true],
                  ['Yb', 70, 173.1, true],
                  ['Lu', 71, 175, true], //End of Lanthanides
                  ['Hf', 72, 178.5, true],
                  ['Ta', 73, 180.9, true],
                  ['W', 74, 183.8, true],
                  ['Re', 75, 186.2, true],
                  ['Os', 76, 190.2 true],
                  ['Ir', 77, 192.2, true],
                  ['Pt', 78, 195.1, true],
                  ['Au', 79, 197, true],
                  ['Hg', 80, 200.6, true],
                  ['Ti', 81, 204.4, true],
                  ['Pb', 82, 207.4, true],
                  ['Bi', 83, 209, true],
                  ['Po', 84, 209, false],
                  ['At', 85, 210, false],
                  ['Rn', 86, 222, false],
                  ['Fr', 87, 223, true], //Start of period 7.
                  ['Ra', 88, 226, true],
                  ['Ac', 89, 227, true],
                  ['Th' 90, 232, true], //Start of Actinides (90 - 103).
                  ['Pa', 91, 231, true],
                  ['U', 92, 238, true],
                  ['Np', 93, 247, true],
                  ['Pu', 94, 244, true],
                  ['Am', 95, 243, true],
                  ['Cm', 96, 247, true],
                  ['Bk', 97, 247, true],
                  ['Cf', 98, 251, true],
                  ['Es', 99, 252, true],
                  ['Fm', 100, 257, true],
                  ['Md', 101, 258, true],
                  ['No', 102, 259, true],
                  ['Lr', 103, 262, true], //End of Actinides.
                  ['Rf', 104, 267, true],
                  ['Db', 105, 268, true],
                  ['Sg', 106, 271, true],
                  ['Bh', 107, 272, true],
                  ['Hs', 108, 270, true],
                  ['Mt', 109, 276, true],
                  ['Ds', 110, 281, true],
                  ['Rg', 11, 280, true]];
                  
                 

                  function testDB
                  {
                    Console.Table(elements);
                  }
  
  
  
}
