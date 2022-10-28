<script lang="ts">
	import '../app.postcss';
</script>

<div class="h-full w-full min-h-screen bg-base-200">
	<div class="bg-base-100 border-b-2">
		<div class="navbar xl:container mx-auto bg-base-100 px-4">
			<div class="navbar-start">
				<img
					alt="Vizit karta"
					src="vizitka.png"
					width="250px"
					height="150px"
					style="border: 1px solid black"
				/>
			</div>
			<div class="navbar-end space-x-2">
				<a href="./" class="btn btn-outline">Prodaja</a>
				<a href="./tesla" class="btn btn-outline">Tesla paneli</a>
			</div>
		</div>
	</div>
	<div class="h-full w-full xl:container mx-auto mt-8 px-4">
		<slot />
	</div>
</div>
