import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const res = await fetch(
        'https://sheets.googleapis.com/v4/spreadsheets/1m1MZ8M5Klu1JEtz0izLJXnIdBpzYFPBaV0QdMu7ag70/values/TFV?key=AIzaSyAOEQWWM7bDPWDCeISNqTfduR64vEWK55o'
    );

    console.log(res);
    return {};
};