var weblogo = document.getElementById('weblogo');
var cartIcon = document.getElementById('cartIcon');
var favourite = document.getElementById("favourite");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var sweet = document.getElementById("sweet");
var savoury = document.getElementById("savoury");
var afset = document.getElementById("afset"),
    i1name = document.getElementById('i1name'),
    i2name = document.getElementById('i2name'),
    i3name = document.getElementById('i3name'),
    i4name = document.getElementById('i4name'),
    toggleMenu = document.getElementById('togglemobile-menu2'),
    sidermove = document.getElementById('sidermove'),
    toggleBtn = true,
    sweet2 = document.getElementById("sweet2"),
    savoury2 = document.getElementById("savoury2"),
    afset2 = document.getElementById("afset2");

var count = localStorage.getItem('clickTimes');
        if(count){
            var clicks = JSON.parse(count);
            setTimeout(function(){
            numnum.className = "counter";
                },100);
            numnum.innerHTML = clicks;
        }
weblogo.addEventListener('click', function(){
	window.location = './Homepage.html';
});

img1.addEventListener("click", function(){
        window.location = "./productSW1.html";
    });
img2.addEventListener("click", function(){
        window.location = "./productSW2.html";
    });
img3.addEventListener("click", function(){
        window.location = "./productSW3.html";
    });
img4.addEventListener("click", function(){
        window.location = "./productSW4.html";
    });

sweet.addEventListener("click", function(){
    img1.src = "./productImages/sw01.jpg";
    img2.src = "./productImages/sw02.jpg";
    img3.src = "./productImages/sw03.jpg";
    img4.src = "./productImages/sw04.jpg";
    i1name.innerHTML = "Strawberry Princess<br/>Price: $8.99";
    i2name.innerHTML = "Strawberry And Vanila<br/>Price: $8.99";
    i3name.innerHTML = "Blueberry Land<br/>Price: $8.99";
    i4name.innerHTML = "Banana World<br/>Price: $8.99";
    img1.addEventListener("click", function(){
        window.location = "./productSW1.html";
    });
    img2.addEventListener("click", function(){
        window.location = "./productSW2.html";
    });
    img3.addEventListener("click", function(){
        window.location = "./productSW3.html";
    });
    img4.addEventListener("click", function(){
        window.location = "./productSW4.html";
    });
});

savoury.addEventListener("click", function(){
    img1.src = "./productImages/sa01.jpg";
    img2.src = "./productImages/sa02.jpg";
    img3.src = "./productImages/sa03.jpg";
    img4.src = "./productImages/sa04.jpg";
    i1name.innerHTML = "Bacon and Egg<br/>Price: $8.99";
    i2name.innerHTML = "Butter Party<br/>Price: $8.99";
    i3name.innerHTML = "Egg Waffle<br/>Price: $8.99";
    i4name.innerHTML = "Heart Waffle<br/>Price: $8.99";
    
    img1.addEventListener("click", function(){
        window.location = "./productSA1.html";
    });
    img2.addEventListener("click", function(){
        window.location = "./productSA2.html";
    });
    img3.addEventListener("click", function(){
        window.location = "./productSA3.html";
    });
    img4.addEventListener("click", function(){
        window.location = "./productSA4.html";
    });
});

afset.addEventListener("click", function(){
    img1.src = "./productImages/as01.jpg";
    img2.src = "./productImages/as02.jpg";
    img3.src = "./productImages/as03.jpg";
    img4.src = "./productImages/as04.jpg";
    i1name.innerHTML = "Set A<br/>Price: $8.99";
    i2name.innerHTML = "Set B<br/>Price: $8.99";
    i3name.innerHTML = "Set C<br/>Price: $8.99";
    i4name.innerHTML = "Set D<br/>Price: $8.99";
    
    img1.addEventListener("click", function(){
        window.location = "./productAF1.html";
    });
    img2.addEventListener("click", function(){
        window.location = "./productAF2.html";
    });
    img3.addEventListener("click", function(){
        window.location = "./productAF3.html";
    });
    img4.addEventListener("click", function(){
        window.location = "./productAF4.html";
    });
});

sweet2.addEventListener("click", function(){
    img1.src = "./productImages/sw01.jpg";
    img2.src = "./productImages/sw02.jpg";
    img3.src = "./productImages/sw03.jpg";
    img4.src = "./productImages/sw04.jpg";
    i1name.innerHTML = "Strawberry Princess<br/>Price: $8.99";
    i2name.innerHTML = "Strawberry And Vanila<br/>Price: $8.99";
    i3name.innerHTML = "Blueberry Land<br/>Price: $8.99";
    i4name.innerHTML = "Banana World<br/>Price: $8.99";
    img1.addEventListener("click", function(){
        window.location = "./productSW1.html";
    });
    img2.addEventListener("click", function(){
        window.location = "./productSW2.html";
    });
    img3.addEventListener("click", function(){
        window.location = "./productSW3.html";
    });
    img4.addEventListener("click", function(){
        window.location = "./productSW4.html";
    });
});

savoury2.addEventListener("click", function(){
    img1.src = "./productImages/sa01.jpg";
    img2.src = "./productImages/sa02.jpg";
    img3.src = "./productImages/sa03.jpg";
    img4.src = "./productImages/sa04.jpg";
    i1name.innerHTML = "Bacon and Egg<br/>Price: $8.99";
    i2name.innerHTML = "Butter Party<br/>Price: $8.99";
    i3name.innerHTML = "Egg Waffle<br/>Price: $8.99";
    i4name.innerHTML = "Heart Waffle<br/>Price: $8.99";
    
    img1.addEventListener("click", function(){
        window.location = "./productSA1.html";
    });
    img2.addEventListener("click", function(){
        window.location = "./productSA2.html";
    });
    img3.addEventListener("click", function(){
        window.location = "./productSA3.html";
    });
    img4.addEventListener("click", function(){
        window.location = "./productSA4.html";
    });
})

afset2.addEventListener("click", function(){
    img1.src = "./productImages/as01.jpg";
    img2.src = "./productImages/as02.jpg";
    img3.src = "./productImages/as03.jpg";
    img4.src = "./productImages/as04.jpg";
    i1name.innerHTML = "Set A<br/>Price: $8.99";
    i2name.innerHTML = "Set B<br/>Price: $8.99";
    i3name.innerHTML = "Set C<br/>Price: $8.99";
    i4name.innerHTML = "Set D<br/>Price: $8.99";
    
    img1.addEventListener("click", function(){
        window.location = "./productAF1.html";
    });
    img2.addEventListener("click", function(){
        window.location = "./productAF2.html";
    });
    img3.addEventListener("click", function(){
        window.location = "./productAF3.html";
    });
    img4.addEventListener("click", function(){
        window.location = "./productAF4.html";
    });
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
    };
});
