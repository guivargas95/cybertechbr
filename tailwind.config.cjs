/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.tsx",
        "./src/components/**/**/*.tsx",],
    theme: {
        extend: {
            width: {
                '140': '50rem',
                '128': '32rem',
                '112': '28rem',
            },

            height: {
                '128': '32rem',
                '112': '28rem',

            },
        },
    },
    plugins: [],
}