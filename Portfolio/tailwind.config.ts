
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-15px) rotate(180deg)' }
				},
				'float-3d': {
					'0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)' },
					'33%': { transform: 'rotateX(20deg) rotateY(120deg) translateZ(20px)' },
					'66%': { transform: 'rotateX(-20deg) rotateY(240deg) translateZ(-20px)' }
				},
				'spin-3d': {
					'0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
					'100%': { transform: 'rotateX(360deg) rotateY(360deg)' }
				},
				'wiggle-3d': {
					'0%, 100%': { transform: 'rotateZ(0deg) scale3d(1, 1, 1)' },
					'25%': { transform: 'rotateZ(5deg) scale3d(1.05, 0.95, 1)' },
					'75%': { transform: 'rotateZ(-5deg) scale3d(0.95, 1.05, 1)' }
				},
				'pulse-3d': {
					'0%, 100%': { transform: 'scale3d(1, 1, 1)' },
					'50%': { transform: 'scale3d(1.1, 1.1, 1.2)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'typing': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink': {
					'50%': { borderColor: 'transparent' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' },
					'50%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.8)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'float-3d': 'float-3d 8s ease-in-out infinite',
				'spin-3d': 'spin-3d 10s linear infinite',
				'wiggle-3d': 'wiggle-3d 2s ease-in-out infinite',
				'pulse-3d': 'pulse-3d 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'typing': 'typing 2s steps(20, end)',
				'blink': 'blink 1s infinite',
				'bounce-slow': 'bounce-slow 2s infinite',
				'glow': 'glow 2s ease-in-out infinite'
			},
			perspective: {
				'500': '500px',
				'1000': '1000px',
				'2000': '2000px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
