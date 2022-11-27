
export enum PanelTypes {
    TK5_Panel = "TK5_Panel",
    TFH_Panel = "TFH_Panel",
    TFV_Panel = "TFV_Panel",
}

export interface PanelPrice {
    header: string[],
    values: string[][]
}

const gSheetApiBase = "https://sheets.googleapis.com/v4/spreadsheets/1m1MZ8M5Klu1JEtz0izLJXnIdBpzYFPBaV0QdMu7ag70/values/"
const keyParam = "?key="
const gSheetApiKey = "AIzaSyAOEQWWM7bDPWDCeISNqTfduR64vEWK55o"

export async function fetchDataFromGSheet(fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>, panel: PanelTypes): Promise<PanelPrice> {

    const res = await fetch(
        gSheetApiBase + panel + keyParam + gSheetApiKey
    );

    const result = await res.json()

    const values = result.values as string[][];

    const header = values[0] as string[]
    //remove header from values
    values.shift()

    return { header, values };
}

export async function fetchDataFromTK5GSheet(fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>): Promise<PanelPrice> {

    const res = await fetch(
        gSheetApiBase + PanelTypes.TK5_Panel + keyParam + gSheetApiKey
    );

    const result = await res.json()

    const values = result.values as string[][];

    const header = values[0] as string[]
    //remove header from values
    values.shift()

    return { header, values };
}

export async function fetchDataFromTFHGSheet(fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>): Promise<PanelPrice> {

    const res = await fetch(
        gSheetApiBase + PanelTypes.TFH_Panel + keyParam + gSheetApiKey
    );

    const result = await res.json()

    const values = result.values as string[][];

    const header = values[0] as string[]
    //remove header from values
    values.shift()

    return { header, values };
}

export async function fetchDataFromTFVGSheet(fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>): Promise<PanelPrice> {

    const res = await fetch(
        gSheetApiBase + PanelTypes.TFV_Panel + keyParam + gSheetApiKey
    );

    const result = await res.json()

    const values = result.values as string[][];

    const header = values[0] as string[]
    //remove header from values
    values.shift()

    return { header, values };
}


