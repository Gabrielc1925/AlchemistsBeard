import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extends: {
			colors: {},
			fontFamily: {
				gothic: ['"Deutsch Gothic"'],
				serif: ['"Cinzel Decorative"'],
				body: ['"Raleway"']
			}
		}
	},
	plugins: [typography, daisyui, forms, containerQueries],
	daisyui: {
		themes: [
			{
				alchemist: {
					primary: '#25316D', // Indigo Blue
					secondary: '#4E6C50', // Muted Green
					accent: '#CFAF70', // Gold
					neutral: '#2B2D42', // Charcoal Gray
					'primary-content': '#F5F5F5', // Cream White
					'secondary-content': '#D4C5A6' // Pale Bronze
				}
			}
		]
	}
} satisfies Config;
