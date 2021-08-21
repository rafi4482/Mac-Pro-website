var Total=0
var base=1300
var extraMemory=0
var extraStorage=0
var deliveryCharge=0
var PromoAmount=0

document.getElementById('dark8').addEventListener("click", function(){
    var extraMemoryCost=document.getElementById('extra-memory')
    extraMemoryCost.innerText=0
    extraMemory=0
    DisplayTotal()
    });

document.getElementById('dark16').addEventListener("click", function(){
   var extraMemoryCost=document.getElementById('extra-memory')
    extraMemoryCost.innerText=180
    extraMemory=180
    DisplayTotal()
    });
    

document.getElementById('low').addEventListener("click", function(){
    var extraStorageCost=document.getElementById('storage')
    extraStorageCost.innerText=0
    extraStorage=0
    DisplayTotal()


    });  
document.getElementById('medium').addEventListener("click", function(){
    var extraStorageCost=document.getElementById('storage')
    extraStorageCost.innerText=100
    extraStorage=100
    DisplayTotal()
        });  
document.getElementById('high').addEventListener("click", function(){
    var extraStorageCost=document.getElementById('storage')
    extraStorageCost.innerText=180
    extraStorage=150
    DisplayTotal()
    });  

document.getElementById('express').addEventListener("click", function(){
    var DeliveryCost=document.getElementById('delivery')
    DeliveryCost.innerText=20
    deliveryCharge=20
    DisplayTotal()
    });
document.getElementById('free').addEventListener("click", function(){
    var DeliveryCost=document.getElementById('delivery')
    DeliveryCost.innerText=0
    deliveryCharge=0
    DisplayTotal()
        });

document.getElementById('apply').addEventListener("click", function(){
    var str=document.getElementById('promo').value
    console.log(str)
    if(str=="stevekaku")
       PromoAmount=0.2
    else
    PromoAmount=0
    DisplayTotal()
     });
        

    function DisplayTotal(){
        Total=base+extraMemory+extraStorage+deliveryCharge;
        var GrandTotal=document.getElementById('gtotal')
        GrandTotal.innerText=Total 
        var PromoTotal=document.getElementById('ptotal')
        pTotal=Total-Total*PromoAmount
        PromoTotal.innerText=pTotal
    }


