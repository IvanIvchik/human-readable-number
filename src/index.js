module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const upToTwenty = ['ten' ,'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['zero' ,'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let str = number.toString();

  if (number < 10) return units[number];
  if (number === 10) return upToTwenty[0];
  if (number > 10 && number < 20) return upToTwenty[+str[1]];
  if (number > 19 && number < 100 && number % 10 === 0) return dozens[+str[0]];
  if (number > 20 && number < 100 && number % 10 !== 0) return `${dozens[+str[0]]} ${units[+str[1]]}`;
  if (number > 99 && number % 100 === 0) return `${units[+str[0]]} hundred`;
  if (number > 99 && number % 100 !== 0 && +str[1] === 0) return `${units[+str[0]]} hundred ${units[+str[2]]}`;
  if (number > 99 && number % 100 !== 0 && number % 10 === 0) return `${units[+str[0]]} hundred ${dozens[+str[1]]}`;
  if (number > 99 && number % 100 !== 0 && +str[1] === 1) return `${units[+str[0]]} hundred ${upToTwenty[+str[2]]}`;
  if (number > 99 && number % 100 !== 0 && +str[1] > 1) return `${units[+str[0]]} hundred ${dozens[+str[1]]} ${units[+str[2]]}`
}
