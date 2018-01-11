var msubmit = document.getElementById('submit');
var msgdisplay = document.getElementById('msgdisplay');
var weblogo = document.getElementById('weblogo');
var cartIcon = document.getElementById('cartIcon'),
    yourEmai = document.getElementById('yourEmail'),
    toggleMenu = document.getElementById('togglemobile-menu2'),
    sidermove = document.getElementById('sidermove'),
    toggleBtn = true;

var count = localStorage.getItem('clickTimes');
        if(count){
            var clicks = JSON.parse(count);
            setTimeout(function(){
                numnum.className = "counter";
            }, 100);
            numnum.innerHTML = clicks;
        }
/*
setTimeout(function(){
                numnum.className = "counter";
            }, 100);
            */

weblogo.addEventListener('click', function () {
	window.location = './Homepage.html';
});

msubmit.addEventListener('click', function () {
    console.log('hi');
    msgdisplay.className = "msgdisplay";
    msgdisplay.innerText = "Thanks for your opinoin. We will contact you soon.";
});

function validateEmail(){
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
        if(re.test(yourEmai).value){
            return true;
        }
        else{
            alert('Please enter an valid email.');
        }
}
//carticon change to use a links

toggleMenu.addEventListener('click', function(){
    if(toggleBtn == true){
        

        sidermove.style.left = "0px";
        sidermove.style.transition = "left 0.5s linear";
        toggleBtn = false;
    } else{
        

        sidermove.style.left = "-225px";
        sidermove.style.transition = "left 0.5s linear";
        toggleBtn = true;
    }
    
});