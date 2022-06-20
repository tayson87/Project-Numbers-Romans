const convertNumbers = (data, reducer) => {
    if (reducer === "romanToDecimal") {
      // Create the normal numbers romans
      const romans = new Map();
  
      romans.set("I", 1);
      romans.set("V", 5);
      romans.set("X", 10);
      romans.set("L", 50);
      romans.set("C", 100);
      romans.set("D", 500);
      romans.set("M", 1000);
  
      // Create the exceptions numbers romans
      const romansExceptions = new Map();
  
      romansExceptions.set("IV", 4);
      romansExceptions.set("IX", 9);
      romansExceptions.set("XL", 40);
      romansExceptions.set("XC", 90);
      romansExceptions.set("CD", 400);
      romansExceptions.set("CM", 900);
  
      // Start!
      const dataToUpper = data.toUpperCase().split("");
  
      let result = 0;
  
      let i;
  
      let j;
  
      for (i = 0, j = 1; i < dataToUpper.length; i, j) {
        if (romansExceptions.get(dataToUpper[i] + dataToUpper[j])) {
          // Check if the current number is an exception and added to the result
          result += romansExceptions.get(dataToUpper[i] + dataToUpper[j]);
  
          dataToUpper.shift();
  
          dataToUpper.shift();
        } else {
          // Check if the current number is a normal number and added to the result
          result += romans.get(dataToUpper[i]);
  
          dataToUpper.shift();
        }
      }
  
      return result;
    } else if (reducer === "decimalToRoman") {
      const romanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      };
  
      let resultado = "";
      for (let r in romanos) {
        resultado += r.repeat(Math.floor(data / romanos[r]));
        data = data % romanos[r];
      }
      return resultado;
    }
  };
  
  export default convertNumbers;
  
  