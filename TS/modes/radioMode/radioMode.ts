import fetch from "node-fetch";
import { showListIndex , runFromURL } from "../../utilities/helperFunctions";
const url: string = "https://api.mp3quran.net/radios/radio_english.json";

/**
 * 
 * @returns The available radios data from the endpoint
 */
function getRadioData(): Promise<object> {
    return fetch(url)
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => {
                    return res['radios'];
            })
}

/**
 * 
 * @returns The radio names list
 */
async function getRadioNamesList(): Promise<string[]> {
    let data  = await getRadioData();
    // loop on json and extract the radio names
    let radios : string[] = [];
    for (let i = 0; i < data.length; i++) {
        radios.push(data[i]['name']);
    }
    return radios;
}

/**
 * Show all the available radios in a pretty table
 */
function showAllRadios(){
    getRadioNamesList().then(res => {
       showListIndex(res, 'Radio Index', 'Name');
    }).catch(err => {
        console.log(err);
    });
}
/**
 * 
 * @param radioIndex The index of the radio in the query data
 * @returns The specified radio name
 */
async function getRadioName(radioIndex: number) : Promise<string> {
    let data = await getRadioData();
    return data[radioIndex]['name'] ;
}


/**
 * 
 * @param radioIndex The index of the radio in the query data
 * @returns The URL of the radio
 */
async function getRadioURL(radioIndex: number) : Promise<string> {
    let data = await getRadioData()
    return data[radioIndex]['radio_url']
}

/**
 * Runs the specified radio
 * @param radioIndex The index of the radio in the query data
 */
async function runRadio(radioIndex: number) {
    let radioName = await getRadioName(radioIndex);
    console.log(`Playing ${radioName}`);
    runFromURL(await getRadioURL(radioIndex))
}

