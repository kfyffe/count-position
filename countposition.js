//input string
//output object, key and value

//function 'countLetters'
  //loop through string
  //create empty object
    //store character as key in object
  //count instances of each character
  //return object that includes key and value

function countLetters (initialString){
  var newString = initialString.split(" ").join("").toLowerCase();
  var ch;
  var counts = {};

  for (var i = 0; i < newString.length; ++i) {
    ch = newString[i];

    if (counts[ch]){
      counts[ch].push(i + 1);
    }
    else {
      counts[ch] = [i];
    }

  }
  return counts;
}

console.log(countLetters("Hello How are you"));
