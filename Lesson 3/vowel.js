function disemvowel(str) {
   let vowel = str.replace(/[aeiou]/gi, '')
    return vowel
  }
  console.log(disemvowel("This website is for losers LOL!"));