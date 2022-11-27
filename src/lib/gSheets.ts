import tk5 from '$lib/prefatched/tk5.json'
import tfh from '$lib/prefatched/tfh.json'
import tfv from '$lib/prefatched/tfv.json'

interface GoogleSheetApiFormat {
    range: string;
    majorDimension: string;
    values: string[][];
}

export interface PanelPrice {
    header: string[],
    values: string[][]
}

function prepareDataFromGSheet(gSheetData: GoogleSheetApiFormat): PanelPrice {
    const values = gSheetData.values as string[][];

    const header = values[0] as string[]
    //remove header from values
    values.shift()

    return { header, values };
}

export function TK5_fetchDataFromGSheet(): PanelPrice {
    return prepareDataFromGSheet(tk5)
}

export function TFH_fetchDataFromGSheet(): PanelPrice {
    return prepareDataFromGSheet(tfh)
}

export function TFV_fetchDataFromGSheet(): PanelPrice {
    return prepareDataFromGSheet(tfv)
}


