<script>
	let products = [
		{
			name: 'Ancient Timber',
			description: 'Grounding essence of sandalwood and oud with a fresh citrusy touch.',
			image: '/ancient_timber.png',
			price: '$20.99'
		}
	];
</script>

<div class="flex min-h-screen items-center justify-center bg-neutral text-primary-content">
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 p-4 md:grid-cols-2">
		{#each products as product}
			<div class="card bg-secondary text-secondary-content shadow-xl">
				<figure><img src={product.image} alt={product.name} class="w-full rounded-lg" /></figure>
				<div class="card-body">
					<h2 class="font-gothic card-title text-accent">{product.name}</h2>
					<p class="font-body">{product.description}</p>
					<p class="font-body text-bronze text-xl font-bold">{product.price}</p>
					<div class="card-actions justify-end">
						<button class="btn btn-outline">Buy Now</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
