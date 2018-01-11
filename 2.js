var allItems = JSON.parse(localStorage.getItem('cartItems'));
var items = [];

var waffle1 = document.getElementById('waffle1');
var waffle2 = document.getElementById('waffle2');
var waffle3 = document.getElementById('waffle3');
var waffle4 = document.getElementById('waffle4');
var waffle5 = document.getElementById('waffle5');
var TopStraw = document.getElementById('Top_straw');
var TopKiwi = document.getElementById('Top_kiwi');
var TopBlue = document.getElementById('Top_blue');
var TopBana = document.getElementById('Top_bana');
var TopOre = document.getElementById('Top_oreo');
var TopWhi = document.getElementById('Top_white');
var TopBla = document.getElementById('Top_black');
var TopNut = document.getElementById('Top_nutella');
var TopIceVani = document.getElementById('Top_Ice_vani');
var TopIceMat = document.getElementById('Top_Ice_mat');
var TopIceTara = document.getElementById('Top_Ice_tara');
var TopIceCo = document.getElementById('Top_Ice_coco');
var TopIceMang = document.getElementById('Top_Ice_man');
var cartIcon = document.getElementById('cartIcon');
var mydisplay = document.getElementById('mydisplay');
var mreset = document.getElementById('rebut');
var weblogo = document.getElementById('weblogo');
var bbasechoice = document.getElementById('bbasechoice');
var ibasechoice = document.getElementById('ibasechoice');
var tbasechoice = document.getElementById('tbasechoice'),
    toggleMenu = document.getElementById('togglemobile-menu2'),
    sidermove = document.getElementById('sidermove'),
    toggleBtn = true;
var count = localStorage.getItem('clickTimes');
        if(count){
            var clicks = JSON.parse(count);
            setTimeout(function(){
            numnum.className = "counter";
                },100);
            numnum.innerHTML = clicks;
        }
if (allItems != null) {
    items = allItems;
}

weblogo.addEventListener('click', function () {
	window.location = './Homepage.html';
});

/*

bbasechoice.addEventListener('click', function () {
    tbasechoice.style.display = 'inline';
});

tbasechoice.addEventListener('click', function () {
    basechoice.style.display = 'inline';
});
*/

var wtop = document.getElementById('wtop'),
	wmid = document.getElementById('wmid'),
	wbot = document.getElementById('wbot');
                 
var obj = {
	price: 10.99,
	waffle: {
		topItem: 0,
		midItem: 0,
		bottomItem: 0
	},
	amount: 1
	};
            
waffle1.addEventListener('click', function () {
	wtop.src = "./img/waffle1.png";
	obj.waffle.bottomItem = 1;
});

waffle2.addEventListener('click', function () {
	wtop.src = "./img/waffle2.png";
	obj.waffle.bottomItem = 2;
});

waffle3.addEventListener('click', function () {
	wtop.src = "./img/waffle3.png";
	obj.waffle.bottomItem = 3;
	console.log(obj.waffle.bottomItem);
});

waffle4.addEventListener('click', function () {
	wtop.src = "./img/waffle4.png";
	obj.waffle.bottomItem = 4;
	console.log(obj.waffle.bottomItem);
});

waffle5.addEventListener('click', function () {
	wtop.src = "./img/waffle5.png";
	obj.waffle.bottomItem = 5;
	console.log(obj.waffle.bottomItem);
});

TopStraw.addEventListener('click', function () {
	wmid.src = "./img/Top_straw.png";
	obj.waffle.midItem = 1;
});

TopKiwi.addEventListener('click', function () {
	wmid.src = "./img/Top_kiwi.png";
	obj.waffle.midItem = 2; 
});

 TopBlue.addEventListener('click', function () {
	wmid.src = "./img/Top_blue.png";
	obj.waffle.midItem = 3; 
});

 TopBana.addEventListener('click', function () {
	wmid.src = "./img/Top_bana.png";
	obj.waffle.midItem = 4; 
});

 TopOre.addEventListener('click', function () {
	wmid.src = "./img/Top_oreo.png";
	obj.waffle.midItem = 5; 
});

TopWhi.addEventListener('click', function () {
	wmid.src = "./img/Top_whit_cho.png";
	obj.waffle.midItem = 6; 
});

TopBla.addEventListener('click', function () {
	wmid.src = "./img/Top_dark_cho.png";
	obj.waffle.midItem = 7; 
});

TopNut.addEventListener('click', function () {
	wmid.src = "./img/Top_nutella.png";
	obj.waffle.midItem = 8; 
});

TopIceVani.addEventListener('click', function () {
	wbot.src = "./img/Top_Ice_vani.png";
	obj.waffle.topItem = 1;
});

TopIceMat.addEventListener('click', function () {
	wbot.src = "./img/Top_Ice_Mat.png";
	obj.waffle.topItem = 2;
});

TopIceTara.addEventListener('click', function () {
	wbot.src = "./img/Top_Ice_Tara.png";
	obj.waffle.topItem = 3;
});

TopIceCo.addEventListener('click', function () {
	wbot.src = "./img/Top_Ice_coco.png";
	obj.waffle.topItem = 4;
});

TopIceMang.addEventListener('click', function () {
	wbot.src = "./img/Top_Ice_man.png";
	obj.waffle.topItem = 5;
});
            
console.log(obj);
document.getElementById("sub").addEventListener("click", function () {

	if(wbot.src == "" && wmid.src == "" && wtop.src == ""){
	   alert("You should pick the base, topping and icecream first")
	};
	
	if(wbot.src == "" && wmid.src == "" && wtop.src != "") {
	   alert("You should pick the topping and icecream first")
	};
	
	if(wbot.src == "" && wmid.src != "" && wtop.src == ""){
	   alert("You should pick the base and icecream first")
	};
	
	if(wbot.src == "" && wmid.src != "" && wtop.src != ""){
	   alert("You should pick the icecream first")
	};
	
	if(wbot.src != "" && wmid.src == "" && wtop.src == ""){
	   alert("You should pick the base, topping first")
	};
	
	if(wbot.src != "" && wmid.src == "" && wtop.src != ""){
	   alert("You should pick the topping first")
	};

	if(wbot.src != "" && wmid.src != "" && wtop.src == ""){
	   alert("You should pick the base first")
	};
	
	if(wbot.src != "" && wmid.src != "" && wtop.src != ""){
	   	var newobj ={
			price: obj.price,
			waffle:{
				topItem:obj.waffle.topItem,
				midItem:obj.waffle.midItem,
				bottomItem:obj.waffle.bottomItem
			},
			amount: obj.amount
		};

		items.push(newobj);
		var txt = JSON.stringify(items);
		console.log(newobj);
		localStorage.setItem("cartItems", txt); 

    if(clicks !== undefined){
                clicks = parseInt(clicks) + 1;
                var txtnn = JSON.stringify(clicks);
                localStorage.setItem('clickTimes', txtnn);
                numnum.className = "";
                setTimeout(function(){
                    numnum.className = "counter";
                },100);
                numnum.innerHTML = clicks;
                console.log(clicks);
                
            }
            else{
                clicks = 1;
                var txtnn = JSON.stringify(clicks);
                localStorage.setItem('clickTimes', txtnn);
                numnum.className = "counter";
                numnum.innerHTML = clicks;
                console.log(clicks);
            }
    }
});

mreset.addEventListener('click', function(){
	wtop.src = "";
	wmid.src = "";
	wbot.src = "";
	
	location.reload();
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