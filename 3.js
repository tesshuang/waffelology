var weblogo = document.getElementById('weblogo');
var cartIcon = document.getElementById('cartIcon');
var butcom = document.getElementById('combut'),
    toggleMenu = document.getElementById('togglemobile-menu2'),
    sidermove = document.getElementById('sidermove'),
    toggleBtn = true;
var count = localStorage.getItem('clickTimes');
if (count) {
    var clicks = JSON.parse(count);
    setTimeout(function () {
    numnum.className = "counter";
        },100);
    numnum.innerHTML = clicks;
}
weblogo.addEventListener('click', function () {
	window.location = './Homepage.html';
});

butcom.addEventListener('click', function () {
	window.location = "./completion.html";
    
            if(clicks !== undefined){
                clicks = 0;
                var txtnn = JSON.stringify(clicks);
                localStorage.setItem('clickTimes', txtnn);
                numnum.className = "";
                setTimeout(function(){
                    numnum.className = "counter";
                },100);
                numnum.innerHTML = clicks;
                console.log(clicks);
            }
    localStorage.clear();
});

function checkload(){
    if(localStorage.length == 0){
        var emptycart = document.createElement('div');
        emptycart.className = "emptycart";
        emptycart.innerHTML = "Oh no! Your Cart is currently empty.<br>Please choose your favourite waffle."
        document.body.appendChild(emptycart);
    }
    
    else {
		var allItems = JSON.parse(localStorage.getItem("cartItems"));
		console.log(allItems);
		var allspan = [];

		var toppings =["","./img/Top_Ice_vani.png","./img/Top_Ice_Mat.png","./img/Top_Ice_Tara.png","./img/Top_Ice_coco.png","./img/Top_Ice_man.png"];
        
        var topdetail =["","icecream:vanlla ","icecream:matcha","icecream:tiramsu","icecream:coconut","icecream:mango"];
        
		var middle = ["","./img/Top_straw.png", "./img/Top_kiwi.png","./img/Top_blue.png","./img/Top_bana.png","./img/Top_oreo.png","./img/Top_whit_cho.png","./img/Top_dark_cho.png","./img/Top_nutella.png"];
        
        var middetail = ["","topping:strawberry", "topping:kiwi","topping:blueberry","topping:banana","topping:oreo","topping:white chocolate","topping:dark chocolate","topping:nutella"];
        
		var bottoms = ["",  "./img/waffle1.png", "./img/waffle2.png","./img/waffle3.png","./img/waffle4.png","./img/waffle5.png"];        
        
		var botdetail = ["",  "base:pumpkin", "base:carrot","base:spanish","base:sweet potato","base:beeroot"];
        
		var premadeItem =["","./productImages/sw01.jpg","./productImages/sw02.jpg","./productImages/sw03.jpg","./productImages/sw04.jpg","./productImages/sa01.jpg","./productImages/sa02.jpg","./productImages/sa03.jpg","./productImages/sa04.jpg","./productImages/as01.jpg","./productImages/as02.jpg","./productImages/as03.jpg","./productImages/as04.jpg"];
        
        var detwaffle = ["",""]
        
		for(var i = 0; i<allItems.length; i++){
			console.log("HEllO HENRY");
            
           var waffleimg = document.createElement('div');
            var mtop = document.createElement('div');
            var mmid = document.createElement('div');
            var mbottom = document.createElement('div');
            var fadiv = document.createElement('div');
            waffleimg.className = "cawaffle";
            mbottom.className = "cawaffleimg";
            mmid.className = "cawaffleimg";
            mtop.className = "cawaffleimg";
            var ndiv = document.createElement("div");
            
            waffleimg.appendChild(mbottom);
            
            waffleimg.appendChild(mmid);
            waffleimg.appendChild(mtop);
            
			if(allItems[i].premadeItem == false) {
				var nimg = document.createElement('img');
				console.log(allItems[i].premadeNum);
				nimg.src = premadeItem[allItems[i].premadeNum];
				nimg.className = "premadeItem";
				fadiv.appendChild(nimg);
                ndiv.appendChild(fadiv);
				}

			else{
				var nimg1 = document.createElement('img');
                nimg1.className = "waimg";
				nimg1.src = bottoms[allItems[i].waffle.bottomItem];
				mbottom.appendChild(nimg1);

				var nimg2 = document.createElement('img');
                nimg2.className = "waimg";
				nimg2.src = middle[allItems[i].waffle.midItem];
				mmid.appendChild(nimg2);

				var nimg3 = document.createElement('img');
                nimg3.className = "waimg";
				nimg3.src = toppings[allItems[i].waffle.topItem];
				mtop.appendChild(nimg3);

				console.log(nimg3);
                ndiv.appendChild(waffleimg);
				};
            
            var priceText = document.createElement("span");
            var price = document.createElement("span"); 
            var amount = document.createElement("input");
            var total = document.createElement('div');
            var mdelete = document.createElement('img');
            var bline = document.createElement("hr");
            
            allspan.push(price);
            
            priceText.style.margin = "10px";
            priceText.appendChild(price);
			price.className = "caprice";
			amount.className = "caquan";
			bline.className = "bline";
			amount.setAttribute("type", "number");
			amount.min = 1;
			amount.max = 99;
            amount.value = allItems[i].amount;
            price.innerText = parseFloat(amount.value) * allItems[i].price;

            //new  associate amount with price
            amount.waid = price;
            amount.wacd = i;

            amount.addEventListener("change", function(){
                this.waid.innerText = parseInt(this.value)*allItems[this.wacd].price;
                allItems[this.wacd].amount = this.value;

                var total = 0;
                console.log(allspan);
                for(var j =0; j<allspan.length; j++){
                    total += parseFloat(allspan[j].innerHTML);
                }
            });

			var total = 0;
			for(var j =0; j<allspan.length; j++){
				total += parseFloat(allspan[j].innerHTML);
			}
			
			document.getElementById("final").innerHTML = "Total: " + total;

			mdelete.src = "./Trash.png";
			mdelete.style.width = "30px";
			mdelete.className = "debut";
			mdelete.mydiv = ndiv;
			mdelete.myindex = i;
            mdelete.addEventListener('click', function(){
                allItems.splice(this.myindex, 1);
                localStorage.setItem("cartItems", JSON.stringify(allItems));
                location.reload();
                console.log(allItems);
                
                if(clicks !== undefined){
                clicks = parseInt(clicks) - 1;
                var txtnn = JSON.stringify(clicks);
                localStorage.setItem('clickTimes', txtnn);
                numnum.className = "counter";
                numnum.innerHTML = clicks;
                console.log(clicks);  
            }
        });
            
			ndiv.className = "ndiv";
			ndiv.appendChild(amount);
			ndiv.appendChild(priceText);
			ndiv.appendChild(mdelete);

			document.getElementById("allItems").appendChild(ndiv);
		}
    }
}

window.onload = checkload;

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