const ftoc = function(fahrenheit) {
  result = (fahrenheit-32) * (5/9);
  return round1Dec(result);
}

const ctof = function(celsius) {
  result = celsius * (9/5) + 32;
  return round1Dec(result);
}

function round1Dec(num){
  return Math.round(num * 10) / 10; 
}

module.exports = {
  ftoc,
  ctof
}
