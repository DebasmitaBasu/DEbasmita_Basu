function isVowel(char)
{
  if (char.length == 1)
  {
    var vowels = new Array('a','e','i','o','u');
    var isVowel = false;

    for(e in vowels)
    {
      if(vowels[e] == char)
      {
        isVowel = true;
      }
    }

    return isVowel;
  }
}

console.log(isVowel('e'));
