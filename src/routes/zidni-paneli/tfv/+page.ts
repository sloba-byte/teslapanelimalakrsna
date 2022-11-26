import type { PageLoad } from './$types';
import { PanelTypes, fetchDataFromGSheet } from '$lib/gSheets'

export const load: PageLoad = async ({ fetch, params }) => {
    return await fetchDataFromGSheet(fetch, PanelTypes.TFV_Panel)
};