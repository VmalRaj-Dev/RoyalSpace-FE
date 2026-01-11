import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
			fontFamily: {
				'sans': ['Archivo', 'sans-serif'],
			},
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
				royal: {
					blue: 'hsl(var(--primary-blue))',
					'blue-light': 'hsl(var(--primary-blue-light))',
					'blue-dark': 'hsl(var(--primary-blue-dark))',
				},
				neutral: {
					50: 'hsl(var(--neutral-50))',
					100: 'hsl(var(--neutral-100))',
					200: 'hsl(var(--neutral-200))',
					300: 'hsl(var(--neutral-300))',
					700: 'hsl(var(--neutral-700))',
					800: 'hsl(var(--neutral-800))',
					900: 'hsl(var(--neutral-900))',
				},
				cream: 'hsl(var(--cream))',
				'warm-white': 'hsl(var(--warm-white))',
				charcoal: 'hsl(var(--charcoal))',
			},
			backgroundImage: {
				'gradient-royal': 'var(--gradient-royal)',
				'gradient-soft': 'var(--gradient-soft)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-luxe': 'var(--gradient-luxe)',
				'gradient-elegant': 'var(--gradient-elegant)',
				'gradient-modern': 'var(--gradient-modern)',
				
				// Enhanced background patterns
				'pattern-grid': 'linear-gradient(to right, hsl(var(--soft-pink-light)/0.1) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--soft-pink-light)/0.1) 1px, transparent 1px)',
				'pattern-dots': 'radial-gradient(circle, hsl(var(--soft-pink-medium)/0.2) 1px, transparent 1px)',
				'pattern-diagonal': 'repeating-linear-gradient(45deg, hsl(var(--soft-pink-light)/0.1), hsl(var(--soft-pink-light)/0.1) 10px, transparent 10px, transparent 20px)',
				'pattern-royal': 'repeating-linear-gradient(-45deg, hsl(var(--royal-blue-light)/0.05), hsl(var(--royal-blue-light)/0.05) 10px, hsl(var(--royal-blue)/0.08) 10px, hsl(var(--royal-blue)/0.08) 20px)',
				'pattern-diamonds': 'linear-gradient(45deg, hsl(var(--soft-pink-light)/0.1) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--soft-pink-light)/0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(var(--soft-pink-light)/0.1) 75%), linear-gradient(-45deg, transparent 75%, hsl(var(--soft-pink-light)/0.1) 75%)',
				'pattern-gold': 'radial-gradient(circle at 25% 25%, hsl(var(--gold)/0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, hsl(var(--gold)/0.1) 1px, transparent 1px)',
				'subtle-noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
				
				// Replace with stunning, innovative patterns
				'liquid-flow': 'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'400\' viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'flow1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.08\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%23182f58\' stop-opacity=\'0.04\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23f4e1e8\' stop-opacity=\'0.06\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M0 200Q100 100 200 200T400 200V400H0Z\' fill=\'url(%23flow1)\'/%3E%3Cpath d=\'M0 250Q150 150 300 250Q350 275 400 300V400H0Z\' fill=\'%23d3a81e\' fill-opacity=\'0.03\'/%3E%3C/svg%3E")',
				'crystal-luxury': 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cfilter id=\'glow\'%3E%3CfeGaussianBlur stdDeviation=\'3\' result=\'coloredBlur\'/%3E%3CfeMerge%3E%3CfeMergeNode in=\'coloredBlur\'/%3E%3CfeMergeNode in=\'SourceGraphic\'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg filter=\'url(%23glow)\' fill=\'%23d3a81e\' fill-opacity=\'0.06\'%3E%3Cpolygon points=\'100,20 140,60 120,100 80,100 60,60\'/%3E%3Cpolygon points=\'100,120 140,160 120,200 80,200 60,160\'/%3E%3Cpolygon points=\'20,100 60,140 40,180 0,180 -20,140\'/%3E%3Cpolygon points=\'180,100 220,140 200,180 160,180 140,140\'/%3E%3C/g%3E%3C/svg%3E")',
				'wave-topology': 'url("data:image/svg+xml,%3Csvg width=\'300\' height=\'300\' viewBox=\'0 0 300 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3CradialGradient id=\'wave-grad\' cx=\'50%25\' cy=\'50%25\' r=\'50%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23182f58\' stop-opacity=\'0.08\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23f4e1e8\' stop-opacity=\'0.02\'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cpath d=\'M0 150Q75 50 150 150T300 150Q225 250 150 150T0 150Z\' fill=\'url(%23wave-grad)\'/%3E%3Cpath d=\'M0 100Q100 0 200 100T400 100Q300 200 200 100T0 100Z\' fill=\'%23d3a81e\' fill-opacity=\'0.04\'/%3E%3C/svg%3E")',
				'particle-field': 'url("data:image/svg+xml,%3Csvg width=\'250\' height=\'250\' viewBox=\'0 0 250 250\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cfilter id=\'particle-glow\'%3E%3CfeGaussianBlur stdDeviation=\'2\'/%3E%3C/filter%3E%3C/defs%3E%3Cg filter=\'url(%23particle-glow)\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'2\' fill=\'%23d3a81e\' fill-opacity=\'0.4\'/%3E%3Ccircle cx=\'150\' cy=\'80\' r=\'1.5\' fill=\'%23182f58\' fill-opacity=\'0.3\'/%3E%3Ccircle cx=\'200\' cy=\'150\' r=\'2.5\' fill=\'%23f4e1e8\' fill-opacity=\'0.5\'/%3E%3Ccircle cx=\'80\' cy=\'200\' r=\'1\' fill=\'%23d3a81e\' fill-opacity=\'0.3\'/%3E%3Ccircle cx=\'180\' cy=\'40\' r=\'1.8\' fill=\'%23182f58\' fill-opacity=\'0.4\'/%3E%3Ccircle cx=\'40\' cy=\'180\' r=\'1.2\' fill=\'%23f4e1e8\' fill-opacity=\'0.4\'/%3E%3C/g%3E%3C/svg%3E")',
				'mesh-gradient': 'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'400\' viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'mesh1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'0%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.06\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%23f4e1e8\' stop-opacity=\'0.03\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23182f58\' stop-opacity=\'0.05\'/%3E%3C/linearGradient%3E%3ClinearGradient id=\'mesh2\' x1=\'0%25\' y1=\'0%25\' x2=\'0%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23182f58\' stop-opacity=\'0.04\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.06\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M0 0Q200 100 400 0V200Q200 300 0 200Z\' fill=\'url(%23mesh1)\'/%3E%3Cpath d=\'M0 200Q100 100 200 200Q300 300 400 200V400H0Z\' fill=\'url(%23mesh2)\'/%3E%3C/svg%3E")',
				'aurora-flow': 'url("data:image/svg+xml,%3Csvg width=\'600\' height=\'300\' viewBox=\'0 0 600 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'aurora1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.1\'/%3E%3Cstop offset=\'30%25\' stop-color=\'%23f4e1e8\' stop-opacity=\'0.05\'/%3E%3Cstop offset=\'70%25\' stop-color=\'%23182f58\' stop-opacity=\'0.07\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.03\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M0 150Q150 50 300 100Q450 150 600 80V220Q450 180 300 200Q150 250 0 200Z\' fill=\'url(%23aurora1)\'/%3E%3C/svg%3E")',
				'constellation': 'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'400\' viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cfilter id=\'star-glow\'%3E%3CfeGaussianBlur stdDeviation=\'1.5\'/%3E%3C/filter%3E%3C/defs%3E%3Cg filter=\'url(%23star-glow)\'%3E%3Cpath d=\'M100 100l2-6 2 6 6 0-5 4 2 6-5-4-5 4 2-6-5-4z\' fill=\'%23d3a81e\' fill-opacity=\'0.4\'/%3E%3Cpath d=\'M300 150l1.5-4.5 1.5 4.5 4.5 0-3.5 3 1.5 4.5-3.5-3-3.5 3 1.5-4.5-3.5-3z\' fill=\'%23182f58\' fill-opacity=\'0.3\'/%3E%3Cpath d=\'M200 300l2.5-7.5 2.5 7.5 7.5 0-6 5 2.5 7.5-6-5-6 5 2.5-7.5-6-5z\' fill=\'%23f4e1e8\' fill-opacity=\'0.5\'/%3E%3Cline x1=\'100\' y1=\'100\' x2=\'200\' y2=\'300\' stroke=\'%23d3a81e\' stroke-opacity=\'0.1\' stroke-width=\'1\'/%3E%3Cline x1=\'200\' y1=\'300\' x2=\'300\' y2=\'150\' stroke=\'%23182f58\' stroke-opacity=\'0.1\' stroke-width=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
				'geo-abstract': 'url("data:image/svg+xml,%3Csvg width=\'300\' height=\'300\' viewBox=\'0 0 300 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'geo1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23182f58\' stop-opacity=\'0.08\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.04\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points=\'150,50 200,100 150,150 100,100\' fill=\'url(%23geo1)\'/%3E%3Cpolygon points=\'250,150 280,180 250,210 220,180\' fill=\'%23f4e1e8\' fill-opacity=\'0.06\'/%3E%3Cpolygon points=\'50,200 90,240 50,280 10,240\' fill=\'%23d3a81e\' fill-opacity=\'0.05\'/%3E%3C/svg%3E")',
				'fiber-optics': 'url("data:image/svg+xml,%3Csvg width=\'500\' height=\'500\' viewBox=\'0 0 500 500\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'fiber1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.1\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%23f4e1e8\' stop-opacity=\'0.02\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23182f58\' stop-opacity=\'0.08\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M0 250Q125 150 250 250Q375 350 500 250\' stroke=\'url(%23fiber1)\' stroke-width=\'3\' fill=\'none\' opacity=\'0.4\'/%3E%3Cpath d=\'M0 200Q100 100 200 200Q300 300 400 200Q450 175 500 200\' stroke=\'%23182f58\' stroke-width=\'2\' fill=\'none\' opacity=\'0.3\'/%3E%3Cpath d=\'M0 300Q150 200 300 300Q400 350 500 300\' stroke=\'%23f4e1e8\' stroke-width=\'2\' fill=\'none\' opacity=\'0.25\'/%3E%3C/svg%3E")',
				'marble-veining': 'url("data:image/svg+xml,%3Csvg width=\'600\' height=\'400\' viewBox=\'0 0 600 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cfilter id=\'marble-blur\'%3E%3CfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'2\'/%3E%3C/filter%3E%3C/defs%3E%3Cg filter=\'url(%23marble-blur)\'%3E%3Cpath d=\'M0 200Q150 100 300 180Q450 250 600 200Q500 150 400 200Q250 280 100 220Q50 200 0 200\' fill=\'%23d3a81e\' fill-opacity=\'0.06\'/%3E%3Cpath d=\'M0 250Q100 200 200 240Q350 300 500 260Q550 250 600 250Q500 280 350 240Q200 200 50 260Q25 270 0 250\' fill=\'%23182f58\' fill-opacity=\'0.04\'/%3E%3C/g%3E%3C/svg%3E")',
				'fluid-modern': 'url("data:image/svg+xml,%3Csvg width=\'800\' height=\'600\' viewBox=\'0 0 800 600\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3CradialGradient id=\'fluid1\' cx=\'30%25\' cy=\'40%25\' r=\'70%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.08\'/%3E%3Cstop offset=\'60%25\' stop-color=\'%23f4e1e8\' stop-opacity=\'0.04\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23182f58\' stop-opacity=\'0.02\'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cpath d=\'M200 100Q400 50 600 150Q750 250 600 350Q400 450 200 400Q50 350 100 250Q150 150 200 100Z\' fill=\'url(%23fluid1)\'/%3E%3Cpath d=\'M100 200Q300 100 500 200Q650 300 500 400Q300 500 100 400Q-50 300 50 250Q100 225 100 200Z\' fill=\'%23182f58\' fill-opacity=\'0.03\'/%3E%3C/svg%3E")',
				'light-rays': 'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'400\' viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'ray1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.1\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%23f4e1e8\' stop-opacity=\'0.02\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23182f58\' stop-opacity=\'0.06\'/%3E%3C/linearGradient%3E%3ClinearGradient id=\'ray2\' x1=\'100%25\' y1=\'0%25\' x2=\'0%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%23182f58\' stop-opacity=\'0.08\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23d3a81e\' stop-opacity=\'0.03\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M200 0L250 200L200 400L150 200Z\' fill=\'url(%23ray1)\'/%3E%3Cpath d=\'M0 200L200 150L400 200L200 250Z\' fill=\'url(%23ray2)\'/%3E%3C/svg%3E")',
				'premium-texture': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cfilter id=\'texture\'%3E%3CfeTurbulence baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' seed=\'2\'/%3E%3CfeColorMatrix in=\'noise\' type=\'saturate\' values=\'0\'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type=\'discrete\' tableValues=\'0.02 0.04 0.06 0.08\'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23texture)\' fill=\'%23d3a81e\'/%3E%3C/svg%3E")',
			},
			boxShadow: {
				'royal': '0 2px 8px -2px hsl(var(--neutral-900) / 0.08)',
				'soft': '0 1px 3px 0 hsl(var(--neutral-900) / 0.06)',
				'elegant': '0 4px 16px -4px hsl(var(--neutral-900) / 0.1)',
				'minimal': '0 1px 2px 0 hsl(var(--neutral-900) / 0.05)',
			},
			transitionTimingFunction: {
				'royal': 'var(--transition-royal)',
				'smooth': 'var(--transition-smooth)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'soft-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'subtle-fade': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'background-shine': {
					from: { backgroundPosition: '200% 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				'pan-pattern': {
					from: { backgroundPosition: '0% 0%' },
					to: { backgroundPosition: '100% 100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
				'background-shine': 'none',
				'pan-pattern': 'none',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'subtle-fade': 'subtle-fade 0.4s ease-out'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;