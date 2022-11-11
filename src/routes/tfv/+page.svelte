<script lang="ts">
	const res = fetch(
		'https://sheets.googleapis.com/v4/spreadsheets/1m1MZ8M5Klu1JEtz0izLJXnIdBpzYFPBaV0QdMu7ag70/values/TFV?key=AIzaSyAOEQWWM7bDPWDCeISNqTfduR64vEWK55o'
	);

	console.log(res);
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
	<img class="w-3/5" alt="TFV" src="tfv_panel.png" width="500px" />
</div>

<h2 class="flex mt-4 font-medium text-3xl">Nasa ponuda panela sa cenama:</h2>

<div class="flex flex-col">
	<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
			<div class="overflow-hidden">
				<table class="min-w-full">
					<thead class="bg-white border-b">
						<tr>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
								Oznaka
							</th>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
								Debljina(mm)
							</th>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
								Dužina(mm)
							</th>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
								Širina(mm)
							</th>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
								Cena bez PDV
							</th>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
								Cena sa PDV
							</th>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
								Boja
							</th>
							<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
								Opis
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-gray-100 border-b">
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Mark </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Mark </td>

							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Otto </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> @mdo </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Otto </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Otto </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Otto </td>
						</tr>
						<tr class="bg-white border-b">
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Mark </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Mark </td>

							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Otto </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> @mdo </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Otto </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Otto </td>
							<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> Otto </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
