// objects 
//accessing the object property using dot(.) and square([]) notation; 
//[""] 


let football = {
  "name" : "C.Ronaldo",                   //property
  "player no" : "7",
  "team" : "juventus",
  "previous team" : "real madrid",
  "sentence" : function() {                              //method
    return `${football.name} wear jersey number ${football["player no"]} and he is playing for ${football.team} and he 
     previously played for ${football["previous team"]}.`
  } 
};

const playerName = football.name;
console.log(playerName);

const playerNo = football["player no"];
console.log(playerNo);

const fullSentence = football.sentence();
console.log(fullSentence);