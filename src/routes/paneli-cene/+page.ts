import type { PageLoad } from './$types';
import { fetchDataFromTK5GSheet, fetchDataFromTFHGSheet, fetchDataFromTFVGSheet } from '$lib/gSheets'

export const load: PageLoad = async ({ fetch, params }) => {
    const tk5 = await fetchDataFromTK5GSheet(fetch)
    const tfh = await fetchDataFromTFHGSheet(fetch)
    const tfv = await fetchDataFromTFVGSheet(fetch)

    return { tk5, tfh, tfv }
};