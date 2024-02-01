import data from '../json/molengeek.json' assert { type: "json" };

export function partners() {
    let i = 0;
    let images = [];
    let time = 3000;

    Object.values(data.partenaires).forEach(element => {
        images.push(element.logo);
        console.log(images);
    });

    function changeImg() {
        document.querySelector('.partnersCarousel').style.backgroundImage = `url(${images[i]})`;

        if(i < images.length -1){
            i++;
        } else {
            i = 0;
        }
        setTimeout(changeImg, time);
    };

    window.onload = changeImg;
}