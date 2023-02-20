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

            height: {
                '150': '80rem',
                '140': '50rem',
                '128': '32rem',
                '112': '28rem',

            },
        },
        fontFamily: {
            texts: ['Inter', 'sans-serif'],
            titles: ['Gloock', 'serif'],
        },
    },
    plugins: [],
}