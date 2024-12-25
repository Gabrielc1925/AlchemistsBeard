<script>
	export let current = '/';
</script>

<header class="bg-primary py-4 text-primary-content shadow-md">
	<div class="container mx-auto flex items-center justify-between px-4">
		<h1 class="font-gothic text-2xl">
			<a href="/" class="hover:text-accent">The Alchemist's Beard</a>
		</h1>
		<nav class="flex space-x-4">
			{#each [{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }] as link}
				<a
					href={link.href}
					class="hover:text-accent {current === link.href ? 'text-accent underline' : ''}"
					aria-label={'Go to ' + link.label}
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</div>
</header>
