function wordBlanks(myNoun,myAdjective,myVerb,myAdverb) {
    let result = "";
     result+= "the " + myAdjective +' ' + myNoun+ ' ' +myVerb + ' ' + myAdverb;
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));



