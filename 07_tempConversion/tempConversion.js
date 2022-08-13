const ftoc = function(f) {
  let c = (f-32)*(5/9) // F to C conversion formula
  if (c === 0) return c; // If value is 0, no decimal rounding
  return +c.toFixed(1); // Decimal rounding to 1 decimal point
};

const ctof = function(c) {
  let f = c*(9/5)+32; // C to F conversion formula
  if (f === 0) return f; // If value is 0, no decimal rounding
  return +f.toFixed(1); // Decimal rounding to 1 decimal point

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
