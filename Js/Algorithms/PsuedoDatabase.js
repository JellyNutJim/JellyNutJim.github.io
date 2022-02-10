class PDataBase 
{
  //The backup database
  //[0] is the element name.
  //[1] is the elements proton number.
  //[2] is the elements mass number.
  //[3] tells us whether the element is a metal or not.
  
  var elements = [['H', 1, 1, false],
                  ['He', 2, 4, false], //
                  ['Li', 3, 6.9, true],
                  ['Be', 4, 9, true],
                  ['B', 5, 10.8, false],
                  ['C', 6, 12, false],
                  ['N', 7, 14, false],
                  ['O', 8, 16, false],
                  ['F', 9, 19, false],
                  ['Ne', 10, 20.2, false], //
                  ['Na', 11, 23, true],
                  ['Mg', 12, 24.3, true],
                  ['Al', 13, 27, true],
                  ['Si', 14, 28.1, false],
                  ['P', 15, 31, false],
                  ['S', 16, 32.1, false],
                  ['Cl', 17, 35.5, false],
                  ['Ar', 18, 39.9, false], //
                  ['K', 19, 39.1, true],
                  ['Ca', 20, 40.1, true],
                  ['Sc', 21, 45, true],
                  ['Ti', 22, 47.9, true],
                  ['V', 23, 50.9, true],
                  ['Cr', 24, 52, true],
                  ['Mn', 25, 54.9, true],
                  ['Fe', 26, 55.8, true],
                  ['Co', 27, 58.9, true],
                  ['Ni', 28, 58.7, true],
                  ['Cu', 29, 63.5, true],
                  ['Zn', 30, 65.4, true],
                  ['Ga', 31, 69.7, true],
                  ['Ge', 32, 72.6, true],
                  ['As', 33, 74.9, false],
                  ['Se', 34, 79, false],
                  ['Br', 35, 79.9, false],
                  ['Kr', 36, 83.8, false], //
                  ['Rb', 37, 85.5, true],
                  ['Sr', 38, 87.6, true],
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
                  ['Xe', 54, 131.3, false]]; //
                  ['Cs', 55, 132.9, true];
                 

                  function testDB
                  {
                    Console.Table(elements);
                  }
  
  
  
}
