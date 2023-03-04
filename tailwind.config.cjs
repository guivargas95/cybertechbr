/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.tsx",
        "./src/components/**/**/*.tsx",],
    theme: {
        extend: {
            width: {
                '150': '80rem',
                '140': '50rem',
                '128': '32rem',
                '112': '28rem',
            },
            transitionProperty: {
                'width': 'width'
            },

            height: {
                '150': '80rem',
                '140': '50rem',
                '128': '32rem',
                '112': '28rem',

            },
        },
        fontFamily: {
            texts: ['Roboto', 'sans-serif'],
            titles: ['Open Sans', 'sans-serif'],
        },
    },
    plugins: [],
}