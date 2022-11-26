<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	import type { PanelPrice } from '$lib/gSheets';
	import PanelPriceTable from '$lib/PanelPriceTable.svelte';

	export let data: PanelPrice;
</script>

<div class="flex">
	<div class="w-2/5 tracking-tight text-base-content">
		<h1 class="mt-4 font-medium text-3xl">TESLA <strong class="text-red-600">TFV</strong></h1>
		<div class="mt-6" />
		<p>
			Zidni panel sa vidljivim zavrtnjem i ispunom od poliuretana (PUR) i samogasivim poliuretanom
			(PIR).
		</p>
	</div>
	<img class="w-3/5" alt="TFV" src="{base}/tfv_panel.png" width="500px" />
</div>

<h2 class="flex mt-4 tracking-tight text-base-content font-medium text-3xl">
	Nasa ponuda panela sa cenama:
</h2>
<PanelPriceTable panelPriceData={data} />

<p class="mt-3 tracking-tight text-base-content text-xl">
	Više o ovom tipu panela pročitaj na sajtu proizvodjača:
	<a
		rel="noreferrer"
		target="_blank"
		href="https://www.teslapanels.rs/paneli/tesla-tvf/"
		class="btn btn-active btn-primary">Tesla TFV panel</a
	>
</p>
