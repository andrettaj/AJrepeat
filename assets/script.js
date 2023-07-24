var topic= "HTML";

if (topic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (topic === 'Git') {
    console.log("Let's study Git!");
  } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }



  var randomtopic = topic[Math.floor(Math.random() * topic.lenth)]
var topic = ['HTML', 'CSS', 'GIT','JavaScript '];

function listtopic() {
   for (var x=0; x < topic.length; x++) {
       console.log(topic[x]);
 }
}

function selecttopic() {

   if (randomtopic === 'HTML'){
      console.log("Let's study HTML!");

}  else if (randomtopic === 'CSS') {
   console.log("Let's study CSS!");
}  else if (randomtopic === 'Git') {
   console.log ("Let's study Git!");
}  else if (randomtopic === 'Javascript') {
  console.log ("Let's study Javascript!");

}  else  {

  console.log ("Please try again!");

  }
}

listtopic()
selecttopic()



