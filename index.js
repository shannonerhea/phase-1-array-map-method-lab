const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
//titleCased(): returns an array with title case tutorial names. 
//Note that this function takes no arguments and should use the 
//global tutorials variable as data.

//1. I need to change the first letter of every word toUpperCase()
//2. im gonna use map to change them

const titleCased = () => {
  const capitalize = tutorials.split(' ');
  capitalize.map(el => el[0].toUpperCase().join(' '))
  return tutorials
};
