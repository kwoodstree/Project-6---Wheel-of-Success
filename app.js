var qwerty = document.getElementById('qwerty');
var phrase1 = document.getElementById('phrase');
var missed = 0;

function resetbtn(){

  document.getElementById('overlay').style.display="none";

}

const phrases = [
  'hello south carolina',
  'bye south carolina',
  'see you soon',
  'on my way',
  'looking forward to seeing you'

];
var randomphrase = phrases[Math.floor(Math.random()*phrases.length)];
function getRandomPhraseAsArray(arr){

console.log(randomphrase);
var splitrandomphrase = randomphrase.split("");
console.log(splitrandomphrase);
return splitrandomphrase;

}
getRandomPhraseAsArray(phrases);


const newsplitphrase = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(newsplitphrase);

function addPhraseToDisplay(newsplitphrase){
    // do stuff any arr that is passed in, and add to `#phrase ul`

  newsplitphrase.forEach(function(character){
    var ul = document.getElementById("phrase");
    var newli = document.createElement('li');
    newli.appendChild(document.createTextNode(character));

      ul.appendChild(newli);
    if (character != ' '){

      newli.setAttribute('class', 'letter');


    }
    else if(character = ' ') {
      newli.setAttribute('class', 'space');
    }
});
}





//Event Listener
  var keyboard = document.getElementsByClassName('keyrow');
  var missed = 0;
  var bobo;

  console.log(keyboard);
  for (const keyrow of keyboard){
    keyrow.addEventListener('click', event => {

      if (event.target.tagName == 'BUTTON') {

        console.log('Button clicked');
        //add chosen class to keyboard
        event.target.setAttribute('class', 'chosen');
        //disable the button
        //event.target.setAttribute('disabled', 'true');
        console.log('the button '+ '"'+ event.target.innerHTML + '"' +' has been used. It will be disabled.');
        //get the value of the button clicked
        var selectedbutton = event.target.innerHTML;

        console.log(selectedbutton);
        //return selectedbutton;



        //start of checkletter function
          function checkLetter(selectedbutton) {

          const letter = document.getElementsByClassName('letter');
        //  console.log(letter);
          const letterarray = Array.from(letter);


  /*............................The loops begin ........................................................*/




               //loops through one single time
              for (var i=0, len= letterarray.length; i<len ; i++){
                someFn(letterarray[i]);

                function someFn(){
                  var maskedphrase = letterarray[i];
                  console.log(maskedphrase.innerHTML);
                  if (maskedphrase.innerHTML===selectedbutton){
                    console.log("There is a match");
                    maskedphrase.setAttribute('class', 'show');
                    console.log(maskedphrase.innerHTML);
                    return maskedphrase.innerHTML;
                  }
                  else{
                    console.log("No match found")
                    return null;
                  }
                }
                console.log(someFn(letterarray[i]));
                return someFn(letterarray[i]);
            }


/*............................The loops end ........................................................*/


        }
        //end of checkletter function


         // call the CheckLetter function
        checkLetter(selectedbutton);

         var letterfound = checkLetter();


        console.log(letterfound);
        console.log(letterfound);
        console.log(letterfound);

        //Check the value of letter found
        if (letterfound === null){
          missed += 1
          console.log(missed);

          /** change the scoreboard  **/
          const scoreboard = document.getElementById("scoreboard");
          //remove a blue heart
          blueheart = document.getElementsByTagName('<li>')
          scoreboard.innerHTML = '';
          //scoreboard.parentNode.removeChild(scoreboard.firstChild);



        }



      }




    });

  }
