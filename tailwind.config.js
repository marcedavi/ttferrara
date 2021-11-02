const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    purge: [
        './*/*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/js/*.js',
        './safelist.txt'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            transitionProperty: {
                'max-height': 'max-height'
            },
        },
        fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                lg: '4rem',
                xl: '8rem',
                '2xl': '12rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
