var msubmit = document.getElementById('submit');
var msgdisplay = document.getElementById('msgdisplay');

msubmit.addEventListener('click', function(){
   console.log('hi'); 
    msgdisplay.className = "msgdisplay";
    msgdisplay.innerText = "Thanks for your opinoin. We will contact you soon."
});

