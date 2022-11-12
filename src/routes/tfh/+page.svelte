<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex">
	<div class="w-2/5 tracking-tight text-base-content">
		<h1 class="mt-4 font-medium text-3xl">TESLA <strong class="text-red-600">TFV</strong></h1>
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
	<img class="w-3/5" alt="TFH" src="tfh_panel.png" width="500px" />
</div>

<h2 class="flex mt-4 font-medium text-3xl">Nasa ponuda panela sa cenama:</h2>
<div class="flex flex-col">
	<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
			<div class="overflow-hidden">
				<table class="min-w-full">
					<thead class="bg-white border-b">
						<tr>
							{#each data.header as h}
								<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									{h}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each data.values as values, i}
							<tr class="{i % 2 == 0 ? 'bg-gray-100' : 'bg-white'} border-b">
								{#each values as v}
									<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{v}</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<p class="mt-3 tracking-tight text-base-content text-xl">
	Više o ovom tipu panela pročitaj na sajtu proizvodjača:
	<a
		rel="noreferrer"
		target="_blank"
		href="https://www.teslapanels.rs/paneli/tesla-tfh/"
		class="btn btn-active btn-primary">Tesla TFH panel</a
	>
</p>
