<script lang="ts">
	import '../app.postcss';
</script>

<div class="h-full w-full min-h-screen bg-base-200 ">
	<div class="bg-base-100 border-b-2">
		<div class="navbar xl:container mx-auto bg-base-100 px-4">
			<div class="navbar-start">
				<a href="./">
					<img
						alt="Vizit karta"
						src="vizitka.png"
						width="250px"
						height="150px"
						style="border: 1px solid black"
					/>
				</a>
			</div>
			<div class="navbar-end space-x-2">
				<a href="./paneli" class="btn btn-outline">Cene Panela</a>
				<a href="./kontakt" class="btn btn-outline">Kontakt</a>
				<a href="./prica" class="btn btn-outline">O nama</a>
				<a href="./tesla" class="btn btn-outline">Tesla paneli</a>
			</div>
		</div>
	</div>
	<div class="h-full w-full xl:container mx-auto mt-8 px-4">
		<slot />
		<footer class="footer p-10 bg-base-200 text-base-content">
			<div>
				<a href="./">
					<img height="100px" width="150px" alt="Nasa lokacija" src="tesla_paneli_logo.png" />
				</a>
				<p class="font-semibold">Auto Šop Mala Krsna<br />Prodaja sendvič panela</p>
			</div>
			<div>
				<span class="footer-title">Lokacija</span>
				<a
					class="hover:underline hover:font-semibold"
					rel="noreferrer"
					target="_blank"
					href="https://goo.gl/maps/TgrMjtdUaP6hFB859"
				>
					Požarevački put bb <br /> Mala Krsna
				</a>
			</div>
			<div>
				<span class="footer-title">Telefon</span>
				<a class="hover:underline hover:font-semibold" href="tel:0658027827" title="Pozovite nas"
					>065 80 27 8 27</a
				>
				<a class="hover:underline hover:font-semibold" href="tel:026731168" title="Pozovite nas"
					>026 73 11 68</a
				>
			</div>
			<div>
				<span class="footer-title">E-mail</span>
				<a class="hover:underline hover:font-semibold" href="mailto:autosopdoo@yahoo.com"
					>autosopdoo@yahoo.com</a
				>
			</div>
			<div>
				<span class="footer-title">Radno vreme</span>
				<p>Pon-Sub: 8-17</p>
			</div>
		</footer>
	</div>
</div>
