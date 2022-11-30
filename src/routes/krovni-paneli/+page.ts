import type { PageLoad } from './$types';
import { TK5_getLowerPrice } from '$lib/gSheets'

export const load: PageLoad = async () => {
    return TK5_getLowerPrice()
};