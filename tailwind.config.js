module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
				primary: '#0A12FF',
				secondary: '#001272',
        tertiary: '#FF4658',
				offwhite:'#F5F5F5',
        orange: '#F7B23B',
				links: '#4895EF',
        border: '#E1E1E1',
				alert:{
					success : '#22D3BB',
					info : '#4895EF',
					warning: '#FFB554',
					error: '#F54952'
				}
			},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
