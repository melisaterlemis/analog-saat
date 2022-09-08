let saat = document.querySelector(".saat");
let dakika=document.querySelector(".dakika");
let saniye=document.querySelector(".saniye");

function tarih(){
    let seconds=new Date().getSeconds();
    let minute=new Date().getMinutes();
    let hour=new Date().getHours();

    saat.style.transform=`rotate(${180+(hour*30)}deg)`;
    saniye.style.transform=`rotate(${180+(seconds*6)}deg)`;
    dakika.style.transform=`rotate(${180+(minute*6)}deg)`;

}
setInterval(tarih,1000);