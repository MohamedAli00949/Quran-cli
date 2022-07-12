import fetch from "node-fetch";
const url: string = "https://api.mp3quran.net/radios/radio_english.json";

// Get the available radios data
function getRadioData(): Promise<object> {
    return fetch(url)
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => {
                    return res['radios'];
            })
}

// For testing purposes
// getRadioData().then(res => {
//     console.log(res);
// }
// ).catch(err => {
//     console.log(err);
// }  )

async function getRadioNamesList(): Promise<string[]> {
    let data  = await getRadioData();
    // loop on json and extrat the radio names
    let radios : string[] = [];
    for (let i = 0; i < data.length; i++) {
        radios.push(data[i]['name']);
    }
    return radios;
}
// For testing purposes
let items =  getRadioNamesList().then(res => {
    console.log(res);});