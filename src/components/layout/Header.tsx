import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about" },
	{ name: "Gallery", href: "/gallery" },
	{ name: "Products", href: "/products" },
	{ name: "Blogs", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const phoneNumber = "+91 9313163131";
	const phoneLink = "tel:+919313163131";

	return (
		<header className="fixed top-0 left-0 w-full z-[9999]">
			<div className={`transition-all ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-foreground/20 backdrop-blur-sm"}`}>
				<nav className="mx-auto max-w-7xl px-4 lg:px-8" aria-label="Top">
					<div className="flex w-full items-center justify-between">
						{/* Logo - stick to top */}
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<Link
								to="/"
								className="flex items-center space-x-3 transition-all p-4 bg-white shadow-md"
								style={{ marginTop: 0 }}
							>
								<div className="relative">
									<img
										className="h-16 w-22"
										src="/logo.png"
										alt="R Space - Royal Touch in Interiors"
										style={{ marginTop: 0, display: "block" }}
										fetchPriority="high"
										loading="eager"
										onError={(e) => {
											const target = e.target as HTMLImageElement;
											target.style.display = 'none';
											target.nextElementSibling?.classList.remove('hidden');
										}}
									/>
									{/* Fallback logo text */}
									<div className="hidden">
										<div className="h-10 flex items-center px-3 bg-primary rounded-lg">
											<span className="text-white font-bold text-lg">R SPACE</span>
										</div>
									</div>
								</div>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex lg:items-center lg:space-x-6">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className={`relative text-md font-medium transition-all hover:text-primary-foreground group ${location.pathname === item.href
										? "text-primary-foreground"
										: "text-white"
										}`}
								>
									{item.name}
									<span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-foreground transition-all ${location.pathname === item.href
										? "w-full"
										: "w-0 group-hover:w-full"
										}`}></span>
								</Link>
							))}
						</div>

						{/* Desktop CTA */}
						<div className="hidden lg:flex lg:w-0 lg:flex-1 lg:justify-end lg:items-center lg:space-x-3">
							<a
								href={phoneLink}
								className="flex items-center space-x-2 text-sm text-white/90 hover:text-primary-foreground transition-colors group px-3 py-2 rounded-full hover:bg-white/10"
								title="Call us"
							>
								<Phone className="h-4 w-4 transition-colors" />
								<span className="font-medium text-md">{phoneNumber}</span>
							</a>
							<div className="relative">
								<Button
									className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-2 text-sm rounded-full shadow-lg transition-all"
								>
									<Link to="/contact" className="flex items-center">
										<Calendar className="mr-2 h-4 w-4" />
										Free Consultation
									</Link>
								</Button>

								<span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1.5 py-0.5 rounded-full shadow-md">
									FREE
								</span>
							</div>
						</div>

						{/* Mobile menu button */}
						<div className="flex lg:hidden">
							<Button
								variant="ghost"
								className={`p-2 ${scrolled ? "bg-white/10" : "bg-primary/10"} rounded-full`}
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							>
								<span className="sr-only">Open main menu</span>
								{mobileMenuOpen ? (
									<X className={`h-10 w-10 ${scrolled ? "text-white" : "text-primary"}`} aria-hidden="true" />
								) : (
									<Menu className={`h-10 w-10 ${scrolled ? "text-white" : "text-primary"}`} aria-hidden="true" />
								)}
							</Button>
						</div>
					</div>

					{/* Mobile Navigation */}
					{mobileMenuOpen && (
						<div className="lg:hidden">
							<div className="space-y-1 px-2 pb-4 pt-2 bg-foreground/95 backdrop-blur-md rounded-2xl mx-4 mb-4 border border-white/20 shadow-xl">
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										className={`block rounded-xl px-4 py-3 text-base font-medium transition-all ${location.pathname === item.href
											? "bg-primary/20 text-primary-foreground border border-primary/50"
											: "text-white hover:bg-white/10"
											}`}
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								))}
								<div className="mt-4 space-y-3">
									<a
										href={phoneLink}
										className="flex items-center space-x-2 px-4 py-3 text-sm text-white/90 hover:text-primary-foreground rounded-xl transition-colors hover:bg-white/10"
									>
										<Phone className="h-4 w-4" />
										<span className="font-medium">{phoneNumber}</span>
									</a>
									<div className="relative">
										<Button
											className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl shadow-lg transition-all"
											onClick={() => setMobileMenuOpen(false)}
										>
											<Link to="/contact" className="flex items-center justify-center">
												<Calendar className="mr-2 h-5 w-5" />
												Free Consultation
											</Link>
										</Button>

										<span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-md">
											FREE
										</span>
									</div>
								</div>
							</div>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
};