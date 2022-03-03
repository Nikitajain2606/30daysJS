setInterval(()=>{
   setTiming(); 

},1000)

function setTiming()
{
    const dd=new Date();

    const hr=dd.getHours()%12;
    const min=dd.getMinutes();
    const sec=dd.getSeconds();

    const hrDeg=hr*30+(0.5)*min;
    const minDeg=6*min;
    const secDeg=6*sec;

    const hrHand=document.querySelector("#hour-hand");
    const minHand=document.querySelector("#min-hand");
    const secHand=document.querySelector("#sec-hand");
    minHand.style.transform=`rotate(${minDeg}deg)`;
    hrHand.style.transform=`rotate(${hrDeg}deg)`;
    secHand.style.transform=`rotate(${secDeg}deg)`;
}

