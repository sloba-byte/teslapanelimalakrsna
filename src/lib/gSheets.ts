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

export interface PanelLowestPrice {
    price: string
    priceNoPDV: string
}

function prepareDataFromGSheet(gSheetData: GoogleSheetApiFormat): PanelPrice {
    const values = gSheetData.values.slice(1) as string[][];
    const header = gSheetData.values[0] as string[]

    return { header, values };
}

export function TK5_fetchDataFromGSheet(): PanelPrice {
    return prepareDataFromGSheet(tk5)
}

export function TK5_getLowerPrice(): PanelLowestPrice {
    let price = "-1"
    let priceNoPDV = "-1"

    if (tk5.values.length < 2) {
        return { price, priceNoPDV }
    }

    let priceNoPDVIndex = -1
    let priceIndex = -1

    const header = tk5.values[0]

    header.forEach((e, i) => {
        if (e.includes("Cena")) {
            //first Cena is with no PDV
            if (priceNoPDVIndex == -1) {
                priceNoPDVIndex = i
            } else {
                priceIndex = i
            }
        }
    });

    if (tk5.values.length > 1 && priceIndex != -1 && priceNoPDVIndex != -1) {
        price = tk5.values[1][priceIndex]
        priceNoPDV = tk5.values[1][priceNoPDVIndex]
    }

    return {
        price, priceNoPDV
    }
}

export function TFH_fetchDataFromGSheet(): PanelPrice {
    return prepareDataFromGSheet(tfh)
}

export function TFV_fetchDataFromGSheet(): PanelPrice {
    return prepareDataFromGSheet(tfv)
}


