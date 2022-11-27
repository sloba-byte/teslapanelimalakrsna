<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	import type { PanelPrice } from '$lib/gSheets';
	import PanelPriceTable from '$lib/PanelPriceTable.svelte';

	export let data: PanelPrice;
</script>

<div class="flex">
	<div class="w-2/5 tracking-tight text-base-content">
		<h1 class="mt-4 font-medium text-3xl">
			Tesla paneli za zid - <strong class="text-red-600">TFH</strong>
		</h1>
		<div class="mt-6" />
		<p>
			Zidni panel sa skrivenim zavrtnjem i ispunom od poliuretana (PUR), ili samogasivog poliuretana
			(PIR).
		</p>
		<p>
			Sendvič panel sa skrivenim spojem odgovara najstrožijim estetskim zahtevima (pri montaži
			zavrtanj ostaje skriven u spoju panela).
		</p>
	</div>
	<img class="w-3/5" alt="TFH" src="{base}/tfh_panel.webp" width="500px" />
</div>

<h2 class="flex mt-4 font-medium text-3xl">Nasa ponuda panela sa cenama:</h2>
<PanelPriceTable panelPriceData={data} />

<p class="mt-3 tracking-tight text-base-content text-xl">
	Više o ovom tipu panela pročitaj na sajtu proizvodjača:
	<a
		rel="noreferrer"
		target="_blank"
		href="https://www.teslapanels.rs/paneli/tesla-tfh/"
		class="btn btn-active btn-primary">Tesla TFH panel</a
	>
</p>
