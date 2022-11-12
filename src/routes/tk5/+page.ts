import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    const res = await fetch(
        'https://sheets.googleapis.com/v4/spreadsheets/1m1MZ8M5Klu1JEtz0izLJXnIdBpzYFPBaV0QdMu7ag70/values/TK5_Panel?key=AIzaSyAOEQWWM7bDPWDCeISNqTfduR64vEWK55o'
    );

    const result = await res.json()

    console.log("res:" + result)


    const header = result.values[0]
    const values = result.values;
    values.shift()

    console.log("h:" + header)
    console.log("rest:" + values)

    return { header, values };
};