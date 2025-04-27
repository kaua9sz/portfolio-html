tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                dark: {
                    100: '#1E1E1E',
                    200: '#171717',
                    300: '#121212',
                    400: '#0D0D0D',
                }
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif']
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'fadeIn': 'fadeIn 1s ease-in',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                }
            }
        }
    }
}
