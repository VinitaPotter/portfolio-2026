/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: 'var(--color-charcoal)',
                celadon: 'var(--color-celadon)',
                'off-white': 'var(--color-off-white)',
                'soft-gray': 'var(--color-soft-gray)',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [],
}
