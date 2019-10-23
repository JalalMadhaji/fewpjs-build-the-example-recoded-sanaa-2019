// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let like = document.querySelectorAll('.like-glyph');
let model = document.getElementById('modal');
let msg = document.getElementById('modal-message');
let liked;
like.forEach(function(e){
  e.addEventListener('click',mimicServerCall);
  liked = e;
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
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  }).then(res=>liked.innerHTML = FULL_HEART).catch((err)=>{
    msg.innerHTML = err;
    console.log(err)
    model.classList.remove('hidden');
    setTimeout(function(){
      model.classList.add('hidden');
    },5000);
  });
}
