let doc = document
let priceChart = doc.querySelector(".outer")
let randomNum = Math.floor(Math.random() * 100);
let orgValueInpute = doc.querySelector(".chart")
let attribChartValue = orgValueInpute.getAttribute("data-percent")
let priceBattery = doc.querySelector('.figcaptionOrg')

let fineliPriceChart;

function changerNumPriceChart(p) {
    console.log(p);
    
    let Ucircle = priceChart.getAttribute("r")
    environment = Ucircle*2*3.14
    
    let numberChart = randomNum*5.34
    let fineliPriceChart1 = 534 - numberChart
    

    ////////////////////////////////

    

    /////////////////////////////

    priceChart.style.strokeDashoffset = fineliPriceChart1
    
    priceBattery.innerHTML = "%" + randomNum

    if (randomNum<=5) {
        priceChart.style.stroke="red"

    }else if(randomNum<=15){

        priceChart.style.stroke="rgb(255, 161, 78)"



    }else if(randomNum<=50){
        
        priceChart.style.stroke="rgb(255, 214, 78)"


    }else if(randomNum<=100){

        priceChart.style.stroke="rgb(13, 255, 0)"


    }


}
changerNumPriceChart(randomNum)



