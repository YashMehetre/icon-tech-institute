/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'type': 'typing 2s steps(10) 1s 1 normal both, blink 0.75s step-end infinite',
                'bubble-spark': 'bubble-spark 1.5s infinite cubic-bezier(0.5, 0.05, 0.5, 1)',
                'fadeInUp': 'fadeInUp 1s ease-out',
                'scroll': 'scroll 40s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-1280px))' }, // Adjust based on your card width and number
                },
                'bubble-spark': {
                    '0%': { transform: 'scale(0.8) translateY(0px)', opacity: 0.2 },
                    '50%': { transform: 'scale(1.2) translateY(-20px)', opacity: 0.8 },
                    '100%': { transform: 'scale(0.8) translateY(0px)', opacity: 0.2 },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}