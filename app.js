var qwerty = document.getElementById('qwerty');
var phrase1 = document.getElementById('phrase');
var missed = 0;

function resetbtn(){

  document.getElementById('overlay').style.display="none";
  // document.getElementsByClassName("btn__reset").addEventListener("click", function() {
  //   alert("Hello World!");
  // });
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

/* function addPhraseToDisplay(arr){
  
  var str = '<ul>';
  console.log(newsplitphrase);
  newsplitphrase.forEach(function(item){
  str += '<li>' + item + '</li>';
  });
  str += '</ul>';
  document.getElementById('phrase').innerHTML = str;
  
  
  }
  const newsplitphrase = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(newsplitphrase); */

//  document.getElementById('phrase').innerHTML = addPhraseToDisplay();
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
      // newli.appendChild(document.createTextNode(character));
      
      // ul.appendChild(newli);
      
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
           

              /*   
               //  for loops through one single time
               for (let i in letterarray){
                var maskedphrase = letterarray[i];
                console.log(maskedphrase.innerHTML);
                if (maskedphrase.innerHTML===selectedbutton){
                  console.log("There is a match");
                  maskedphrase.setAttribute('class', 'show');
                  return maskedphrase.innerHTML;
                }
                else{
                  console.log("No match found")
                  return null;                }
            } 
             */
            

/* 
                 //loops through one single time
               for (let i of letterarray){
                // var maskedphrase = letterarray[i];
                // console.log(maskedphrase.innerHTML);
                console.log(i);
                if (i.innerHTML===selectedbutton){
                 // i.setAttribute('class', 'show');
                  console.log("There is a match");
                  return i.innerHTML;
                }
                else{
                  console.log("No match found")
                  return null;                }
            }
               */






        //  console.log("tik tok "+ letterarray.toString());
          //console.log('Tik tok '+letterarray.innerHTML);
            


            /* 
              //for(var hiddenletter =0;  hiddenletter< letterarray.length; hiddenletter++){
               // var hiddenletter = 0, len = letterarray.length, maskedphrase ;
                for(var hiddenletter =0;  hiddenletter< letterarray.length; hiddenletter++){
              var maskedphrase = letterarray;
              console.log(maskedphrase);
                //var maskedphrase = hiddenletter.innerHTML;
                  console.log(letterarray[hiddenletter]);
               
                if (hiddenletter === selectedbutton){
                  console.log("There is a match");
                  console.log('WOWOWOW   '+ hiddenletter);
                  //hiddenletter.setAttribute('class', 'show');
                  //hiddenletter.setAttribute('disabled', 'true');
                  var match = selectedbutton;
                  console.log(match);
                  return  selectedbutton;
                 
                }
                else  {
                  console.log("No match found");
                  return null;
    
                }

              } 

                  */






          /* 
              
              

              //for(var hiddenletter =0;  hiddenletter< letterarray.length; hiddenletter++){
                var hiddenletter = 0, len = letterarray.length, maskedphrase ;
                for(;  hiddenletter< len; hiddenletter++){
               var maskedphrase = letterarray[hiddenletter];

                
                if (maskedphrase.innerHTML === selectedbutton){
                  console.log("There is a match");
                  console.log('WOWOWOW   '+ hiddenletter);
                  //hiddenletter.setAttribute('class', 'show');
                  //hiddenletter.setAttribute('disabled', 'true');
                  var match = selectedbutton;
                  console.log(match);
                  return  selectedbutton;
                 
                }
                else  {
                  console.log("No match found");
                  return null;
    
                }

              }  */ 

              /* 
          //using For Eaach
          //forEach works on arrays and maps so "letter must be transformed into an array "
          letterarray.forEach(function(hiddenletter){
            console.log('THis that this');
            //console.log(keyboardletter.innerHTML);
            var maskedphrase = hiddenletter.innerHTML
            if (maskedphrase === selectedbutton){
              console.log("There is a match");
              hiddenletter.setAttribute('class', 'show');
              var match = selectedbutton;
              console.log(match);
              //return  match;
              return maskedphrase;
            }
            else  {
              //console.log("No match found");
              return null;

            }
            
          }); 
              */
            
          
            /*  
            //using filter 1
              var letusloop =   letterarray.filter(function somefunction (hiddenletter){
              console.log('THis that this');
              //console.log(keyboardletter.innerHTML);
              
              var maskedphrase = hiddenletter.innerHTML
              console.log(maskedphrase)
               if (maskedphrase === selectedbutton){
                console.log("There is a match");
                hiddenletter.setAttribute('class', 'show');
                console.log("The masked phrase is: " + maskedphrase);
                var match = selectedbutton;
                console.log(match);
                                
                
              }
              else {
               // return null
               
              }
              // console.log("kwifo " + maskedphrase);
              //return maskedphrase; 
              
            });
 
            console.log(letusloop)  
           // return letusloop; */
           
           
                
 /* 
            //using filters 2 // this loops through over and over
            var bla = letterarray.filter(somefunction);
            function somefunction(hiddenletter){
              var maskedphrase = hiddenletter.innerHTML
             // console.log(maskedphrase);
               if (maskedphrase === selectedbutton){
                console.log("There is a match");
                hiddenletter.setAttribute('class', 'show');
                console.log("The masked phrase is: " + maskedphrase);
                var match = selectedbutton;
               // console.log(maskedphrase);
                return maskedphrase
                             
              }
              else {
                return null;
              } 
            
            }
      
            return bla; */

 


/*............................The loops end ........................................................*/  


        }
        
        
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
  
  
 






  