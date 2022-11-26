import type { PageLoad } from './$types';
import { PanelTypes, fetchDataFromGSheet } from '$lib/gSheets'

export const load: PageLoad = async ({ fetch, params }) => {
    const tk5 = await fetchDataFromGSheet(fetch, PanelTypes.TK5_Panel)
    const tfh = await fetchDataFromGSheet(fetch, PanelTypes.TFH_Panel)
    const tfv = await fetchDataFromGSheet(fetch, PanelTypes.TFV_Panel)

    return { tk5, tfh, tfv }
};