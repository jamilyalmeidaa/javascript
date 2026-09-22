// Valores falsy
console.log(!!0);        // false
console.log(!!"");      // false
console.log(!!null);      // false

// Valores trutuhy
console.log(!!1);    // true
console.log(!!"texto"); // true
console.log(!![]);    // true(arrays vazios sao objetos, logo sao truthy)
console.log(!!{})      // true (objetos vazios sao truthy)