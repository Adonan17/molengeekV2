import data from '../json/molengeek.json' assert { type: "json" };

export function contact() {
    function information() {
        Object.values(data.molengeekInfo).forEach(element => {
            document.querySelector('.contactInformationList').innerHTML += `<li>${element}</li>`
        });
    }
    window.onload = information()
}