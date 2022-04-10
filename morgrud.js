let reachdiv = document.querySelector(".text-cold-tone");
let reachul = reachdiv.childNodes[5];
let reachli = reachul.children;

for (let i = 0; i < reachli.length; i++) {
    const element = reachli[i];
    element.addEventListener("mousedown",function(){
        element.style.color = "gray";
    });
    element.addEventListener("mouseup",function(){
        element.style.color = "rgb(56, 56, 56)";
    });

};




let clickToButton = document.querySelector(".change-button");
let imageList = document.querySelectorAll(".img-box > img")
let images = Array.from(imageList);
console.log(imageList);

clickToButton.addEventListener("click",function(){
    let currentIndex =  images.findIndex(isVisible);

    let nextIndex = currentIndex + 1;

    //mevcut resimin indisi son resiminin indisi ile ayni mi diye kontrol ediliyor.
    //son resimin indisi her zaman array'deki eleman sayisindan 1 eksiktir.
    if( currentIndex === imageList.length - 1){
        nextIndex = 0;
    }
    
    const currentImage = imageList[currentIndex];
    const nextImage = imageList[nextIndex];

    currentImage.classList.toggle("hide");
    nextImage.classList.toggle("hide");
});



function isVisible(element) {
    return !element.classList.contains("hide")

    /* ustteki kod alttaki ile ayni islemi yapar tek satirda. */
    // if ( element.classList.contains("hide") ){
    //     //hide class'i varsa gorunmezdr. IsVisible fonksiyonu false donmesi lazim
    //     return false;
    // }
    // else {
    //     //hide class'i yoksa gorunurdur. IsVisible fonksiyonu true donmesi lazim
    //     return true;
    // }
}