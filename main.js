// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let like = document.querySelectorAll('.like-glyph');
let model = document.getElementById('modal');
let msg = document.getElementById('modal-message');
like.forEach(function(e){
  e.addEventListener('click',mimicServerCall);
  console.log(e)
});


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.")..catch((err)=>{
          msg.innerHTML = err.massage;
          model.classList.remove('hidden');
          setTimeout(function(){
            model.classList.add('hidden');
          },5000);
        });
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
