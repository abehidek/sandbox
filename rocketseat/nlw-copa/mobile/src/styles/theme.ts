import { extendTheme } from 'native-base'

export const THEME = extendTheme({
	colors: {
		gray: {
			950: '#09090a',
			900: '#121214',
			800: '#202024',
			600: '#323238',
			300: '#8d8d99',
			200: '#c4c4cc'
		},
		green: {
			500: '#047C3F'
		},
		yellow: {
			500: '#F7DD43',
			600: '#bba314'
		},
		red: {
			500: '#db4437'
		},
		white: '#ffffff'
	},
	fonts: {
		heading: 'Roboto_700Bold',
		body: 'Roboto_400Regular',
		medium: 'Roboto_500Medium'
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
		xl: 24
	},
	sizes: {
		14: 56
	}
})