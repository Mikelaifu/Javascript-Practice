// set kelvin to be interactive value

// We will not change the value saved to kelvin
const kelvin = prompt('What is the Kelvin temperature today?');


// Celsius is similar to Kelvin — the only difference // is that Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273 ;

// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

Fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log('The temperature is ' + Fahrenheit +  ' degrees fahrenheit.');

