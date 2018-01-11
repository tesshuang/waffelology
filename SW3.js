var weblogo = document.getElementById('weblogo');
var cartIcon = document.getElementById('cartIcon');

weblogo.addEventListener('click', function () {
	window.location = './Homepage.html';
});

var allItems = JSON.parse(localStorage.getItem('cartItems'));
var items = [];
var mquantity = document.getElementById('quantity');
if (allItems != null){
    items = allItems;
}

var standobj = {
        price:8.99,
        amount: 0,
        premadeItem: false,
        premadeNum: 3
    };
var count = localStorage.getItem('clickTimes');
        if(count){
            var clicks = JSON.parse(count);
            numnum.className = "counter";
            numnum.innerHTML = clicks;
        }
document.getElementById("sub").addEventListener("click", function(){
    standobj.amount = mquantity.value;
    standobj.premadeNum = 3;
    items.push(standobj);
    var txt = JSON.stringify(items);
    console.log(standobj);
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
});
