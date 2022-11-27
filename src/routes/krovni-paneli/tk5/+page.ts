import type { PageLoad } from './$types';
import { PanelTypes, fetchDataFromGSheet } from '$lib/gSheets'

export const load: PageLoad = async ({ fetch, params }) => {
    const res = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1m1MZ8M5Klu1JEtz0izLJXnIdBpzYFPBaV0QdMu7ag70/values/TK5_Panel?key=AIzaSyAOEQWWM7bDPWDCeISNqTfduR64vEWK55o"
    );

    const result = await res.json()

    const values = result.values as string[][];

    const header = values[0] as string[]
    //remove header from values
    values.shift()

    return { header, values };
};