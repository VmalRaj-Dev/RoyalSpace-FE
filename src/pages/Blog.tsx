import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SEO from "@/components/common/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Heart,
  Share2,
  Eye,
  TrendingUp,
  Home,
  Lightbulb,
  Palette,
  Leaf,
  Star,
  ChevronRight,
  Filter,
  Grid3X3,
  Sparkles,
  List
} from "lucide-react";
import { Link } from "react-router-dom";

// Blog categories
const blogCategories = [
  {
    id: "all",
    name: "All Articles",
    icon: BookOpen,
    count: 24,
    color: "from-primary to-primary"
  },
  {
    id: "trends",
    name: "Design Trends",
    icon: TrendingUp,
    count: 8,
    color: "from-primary to-primary"
  },
  {
    id: "tips",
    name: "Interior Tips",
    icon: Lightbulb,
    count: 6,
    color: "from-primary to-primary"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    icon: Home,
    count: 5,
    color: "from-primary to-primary"
  },
  {
    id: "furniture",
    name: "Furniture Care",
    icon: Sparkles,
    count: 5,
    color: "from-primary to-primary"
  }
];

// Featured articles data
const featuredArticles = [
  {
    id: 1,
    title: "Madurai's Statement Interior Design Trends for 2025",
    excerpt: "Discover the latest interior design trends that are making waves in Madurai, from traditional touches to modern sustainability.",
    content: `The need for an environment that is not only stylish but comfortable has increased. The new year has brought hope of a covid-free world, and home decor is leaning towards a cosy, homely feel.

## Focus on Comfort and Style
Taking the textile theme into account, you can incorporate a touch of tradition with the gorgeous Tanjore theme. This amazing backdrop can set the pace for your decor.

## Maximalism Accentuated with Layering
Be it the fashion industry or interior designing, layering is in. It's all about adding interesting components to your decor. A play of textures and patterns works in this decor.

## Sustainability
Environmental issues have changed our thinking. And conscious shoppers are making green choices. Today, going green is much more than a style statement.`,
    image: "/blogs/1.webp",
    category: "trends",
    author: "Priya Sharma",
    date: "2024-12-15",
    readTime: "8 min read",
    views: 2340,
    likes: 156,
    tags: ["Interior Design", "Trends", "Madurai", "Traditional"],
    featured: true
  },
  {
    id: 2,
    title: "Modern Furniture Design Trends for 2025",
    excerpt: "Explore the future of furniture design with sustainable materials, modular solutions, and bold accent pieces.",
    content: `Modern furniture design in 2025 is all about versatility, sustainability, and bold statements that reflect personal style.

## Modular and Flexible Furniture
Modular and flexible furniture will dominate interior design trends in 2025. Thanks to the versatility and adaptability of modular designs, these pieces can effectively meet the evolving needs of modern households.

## Sustainable Materials
With climate concerns at an all-time high, sustainability remains a leading priority for both homeowners and furniture producers. Sustainably-sourced woods, recycled plastics, and responsibly-grown cotton and bamboo are becoming mainstays.

## Curved and Organic Shapes
After many years of straight lines and sharp edges dominating interior design projects, organic shapes and curved lines are taking precedence in both commercial and residential settings.`,
    image: "/blogs/2.webp",
    category: "trends",
    author: "Rajesh Kumar",
    date: "2024-12-10",
    readTime: "6 min read",
    views: 1890,
    likes: 134,
    tags: ["Modern Design", "Furniture", "2025 Trends", "Sustainability"],
    featured: true
  },
  {
    id: 3,
    title: "Creating the Perfect Home Office with Royal Furniture",
    excerpt: "Transform your workspace with ergonomic furniture solutions that boost productivity and style.",
    content: `Working from home has become the new normal, and creating a productive workspace is more important than ever.

## Ergonomic Excellence
Your home office should prioritize comfort without compromising on style. Our MODULAR collection offers executive desks and ergonomic chairs designed for long working hours.

## Storage Solutions
A clutter-free workspace leads to a clutter-free mind. Modular storage units can be customized to fit your specific needs and space constraints.

## Lighting and Ambiance
Proper lighting is crucial for productivity. Combine natural light with task lighting to create the perfect working environment.`,
    image: "/blogs/3.webp",
    category: "tips",
    author: "Meera Patel",
    date: "2024-12-08",
    readTime: "5 min read",
    views: 1567,
    likes: 89,
    tags: ["Home Office", "Productivity", "Ergonomics", "MODULAR"],
    featured: false
  }
];

// Regular articles
const articles = [
  {
    id: 4,
    title: "Sustainable Living: Eco-Friendly Furniture Choices",
    excerpt: "Make environmentally conscious decisions when choosing furniture for your home.",
    image: "/blogs/4.webp",
    category: "sustainability",
    author: "Anita Reddy",
    date: "2024-12-05",
    readTime: "7 min read",
    views: 1234,
    likes: 78,
    tags: ["Sustainability", "Eco-Friendly", "Environment"]
  },
  {
    id: 5,
    title: "Maximizing Small Spaces: Smart Furniture Solutions",
    excerpt: "Expert tips on making the most of limited space with clever furniture choices.",
    image: "/blogs/5.webp",
    category: "tips",
    author: "Karthik Venkat",
    date: "2024-12-03",
    readTime: "4 min read",
    views: 987,
    likes: 65,
    tags: ["Small Spaces", "Storage", "Optimization"]
  },
  {
    id: 6,
    title: "The Art of Color Coordination in Interior Design",
    excerpt: "Learn how to create harmonious color schemes that reflect your personality.",
    image: "/blogs/6.webp",
    category: "tips",
    author: "Lakshmi Iyer",
    date: "2024-12-01",
    readTime: "6 min read",
    views: 1456,
    likes: 92,
    tags: ["Color Theory", "Design", "Aesthetics"]
  },
  {
    id: 7,
    title: "Healthcare Furniture: Designing for Comfort and Hygiene",
    excerpt: "Explore how MEDIFURN solutions are revolutionizing healthcare environments.",
    image: "/blogs/7.webp",
    category: "lifestyle",
    author: "Dr. Suresh Babu",
    date: "2024-11-28",
    readTime: "8 min read",
    views: 876,
    likes: 54,
    tags: ["Healthcare", "MEDIFURN", "Hygiene", "Comfort"]
  },
  {
    id: 8,
    title: "Educational Spaces: Furniture for Learning Excellence",
    excerpt: "How EDUFURN is transforming classrooms and learning environments.",
    image: "/blogs/8.webp",
    category: "lifestyle",
    author: "Prof. Kavitha Nair",
    date: "2024-11-25",
    readTime: "5 min read",
    views: 1123,
    likes: 67,
    tags: ["Education", "EDUFURN", "Learning", "Classroom"]
  },
  {
    id: 9,
    title: "Retail Space Design: SHOPFIT Solutions for Modern Stores",
    excerpt: "Transform your retail environment with innovative SHOPFIT furniture that enhances customer experience.",
    image: "/blogs/9.webp",
    category: "trends",
    author: "Arun Krishnan",
    date: "2024-11-22",
    readTime: "6 min read",
    views: 1345,
    likes: 98,
    tags: ["Retail Design", "SHOPFIT", "Customer Experience", "Commercial"]
  },
  {
    id: 10,
    title: "Luxury Living: Premium INTERIO Collections",
    excerpt: "Discover our exclusive INTERIO range that brings sophistication to every corner of your home.",
    image: "/blogs/10.webp",
    category: "lifestyle",
    author: "Deepika Menon",
    date: "2024-11-20",
    readTime: "7 min read",
    views: 1876,
    likes: 142,
    tags: ["Luxury", "INTERIO", "Premium", "Sophistication"]
  },
  {
    id: 11,
    title: "Green Building Materials: The Future of Sustainable Design",
    excerpt: "Explore innovative eco-friendly materials that are reshaping the furniture industry.",
    image: "/blogs/11.webp",
    category: "sustainability",
    author: "Vikram Reddy",
    date: "2024-11-18",
    readTime: "8 min read",
    views: 1567,
    likes: 123,
    tags: ["Green Materials", "Sustainability", "Innovation", "Eco-Design"]
  },
  {
    id: 12,
    title: "Minimalist Design Philosophy: Less is More",
    excerpt: "Embrace the beauty of simplicity with minimalist furniture design principles.",
    image: "/blogs/12.webp",
    category: "trends",
    author: "Sanjay Gupta",
    date: "2024-11-15",
    readTime: "5 min read",
    views: 1234,
    likes: 87,
    tags: ["Minimalism", "Simplicity", "Design Philosophy", "Clean Lines"]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Combine all articles
  const allArticles = [...featuredArticles, ...articles];

  // Filter articles
  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (articleId: number) => {
    setFavorites(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEO 
        title="Blog - Royal Furniture | Design Trends & Interior Tips"
        description="Explore the latest furniture design trends, interior decoration tips, and expert insights from Royal Furniture. Learn about sustainable materials, modern design, and space optimization."
        keywords="furniture blog, interior design tips, furniture trends 2025, home decor ideas, office design, sustainable furniture"
      />
      <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/blogs/1.webp"
            alt="Design Inspiration"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-6 font-light">
              Insights & Inspiration
            </p>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Our
              <span className="block font-normal mt-2">Blog</span>
            </h1>
            
            <p className="text-xl text-white/90 font-light leading-relaxed">
              Explore design trends, tips, and stories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles, trends, tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-base border-neutral-200 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative overflow-hidden ${
                      activeCategory === category.id 
                        ? `bg-gradient-to-r ${category.color} text-white` 
                        : "hover:bg-accent/10"
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                );
              })}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {activeCategory === "all" && (
        <section className="py-16 bg-liquid-flow">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Featured Articles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our most popular and trending articles on interior design and furniture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-foreground/40" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>

                      {/* Actions */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full bg-white/10 backdrop-blur-md border-white/20"
                          onClick={() => toggleFavorite(article.id)}
                        >
                          <Heart className={`h-4 w-4 ${favorites.includes(article.id) ? 'fill-primary text-primary' : 'text-white'}`} />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full bg-white/10 backdrop-blur-md border-white/20"
                        >
                          <Share2 className="h-4 w-4 text-white" />
                        </Button>
                      </div>

                      {/* Stats */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(article.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>

                        {/* Title & Excerpt */}
                        <div>
                          <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground line-clamp-3">
                            {article.excerpt}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Read More */}
                        <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                          Read Full Article
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-particle-field">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}
          >
            {filteredArticles.map((article) => (
              <motion.div key={article.id} variants={itemVariants}>
                <Card className={`group hover:shadow-elegant transition-all duration-300 overflow-hidden h-full ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}>
                  <div className={`relative overflow-hidden ${
                    viewMode === "list" ? "w-64 flex-shrink-0" : "aspect-video"
                  }`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800 capitalize">
                        {blogCategories.find(cat => cat.id === article.category)?.name || article.category}
                      </Badge>
                    </div>

                    {/* Actions */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full bg-white/10 backdrop-blur-md"
                        onClick={() => toggleFavorite(article.id)}
                      >
                        <Heart className={`h-4 w-4 ${favorites.includes(article.id) ? 'fill-primary text-primary' : ''}`} />
                      </Button>
                    </div>
                  </div>

                  <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className="space-y-3">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{formatDate(article.date)}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      {/* Title & Excerpt */}
                      <div>
                        <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          <span>{article.likes}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#e8f0f7] text-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-8">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-700 font-light mb-12 max-w-2xl mx-auto">
              Explore our furniture collections and bring your interior design vision to life
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-lg font-light transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Blog;
