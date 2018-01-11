var weblogo = document.getElementById('weblogo');
var cartIcon = document.getElementById('cartIcon'),
    toggleMenu = document.getElementById('togglemobile-menu2'),
    sidermove = document.getElementById('sidermove'),
    toggleBtn = true;

weblogo.addEventListener('click', function () {
	window.location = './Homepage.html';
});


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