<script>
	import { page } from '$app/stores';
	import 'tailwindcss/tailwind.css';
	import '../app.css';
	let { children } = $props();
	let current = $page.url.pathname;
</script>

<header class="bg-primary py-4 text-primary-content shadow-md">
	<div class="container mx-auto flex items-center justify-between px-4">
		<h1 class="font-gothic text-2xl">
			<a href="/" class="font-gothic hover:text-accent">The Alchemist's Beard</a>
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

{@render children()}

<footer class="bg-neutral py-4 text-center text-primary-content">
	<div class="container mx-auto">
		<p class="mb-2 text-sm">
			&copy; {new Date().getFullYear()} The Alchemist's Beard. All rights reserved.
		</p>
		<div class="flex justify-center space-x-4">
			<a
				href="https://instagram.com"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent"
			>
				Instagram
			</a>
			<a
				href="https://facebook.com"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent"
			>
				Facebook
			</a>
			<a
				href="https://bsky.app"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-accent"
			>
				Bluesky
			</a>
		</div>
	</div>
</footer>
