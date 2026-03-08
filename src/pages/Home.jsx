import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, BarChart2, BookOpen, Utensils, Users } from 'lucide-react';

export default function Home() {
    const steps = [
        {
            icon: <BarChart2 className="w-8 h-8 text-earth-600 dark:text-earth-400" />,
            title: "Track Your Waste",
            description: "Log your daily food waste to understand your habits and see where you can improve."
        },
        {
            icon: <BookOpen className="w-8 h-8 text-earth-600 dark:text-earth-400" />,
            title: "Learn & Optimize",
            description: "Access tips on proper storage, portion planning, and understanding expiration dates."
        },
        {
            icon: <Utensils className="w-8 h-8 text-earth-600 dark:text-earth-400" />,
            title: "Rescue Ingredients",
            description: "Turn your forgotten leftovers into delicious meals with our smart recipe generator."
        },
        {
            icon: <Users className="w-8 h-8 text-earth-600 dark:text-earth-400" />,
            title: "Join the Community",
            description: "Make a pledge, share your progress, and inspire others on our community wall."
        }
    ];

    return (
        <div className="flex flex-col animate-fade-in">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-earth-50 dark:bg-gray-900 py-20 sm:py-32">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-earth-200 to-earth-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-100 dark:bg-earth-900/30 text-earth-700 dark:text-earth-300 mb-8 border border-earth-200 dark:border-earth-800/50">
                        <Leaf className="w-4 h-4" />
                        <span className="text-sm font-medium">Join the movement against food waste</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        Save Food. <span className="text-transparent bg-clip-text bg-gradient-to-r from-earth-500 to-earth-700">Save Money.</span><br />
                        Save the Planet.
                    </h1>

                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Every year, <strong>1.3 billion tons</strong> of food is wasted globally.
                        Start tracking your habits, finding smart recipes for leftovers, and discovering practical tips to make a real impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/tracker" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center text-lg px-8 py-4">
                            Start Tracking Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/about" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4 text-center">
                            Learn More
                        </Link>
                    </div>

                    <div className="mt-16 sm:mt-24 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
                            alt="Fresh organic vegetables"
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white dark:bg-gray-800 border-y border-earth-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
                        <div className="p-4 flex flex-col items-center justify-center">
                            <span className="text-4xl md:text-5xl font-extrabold text-earth-600 dark:text-earth-400 mb-2">1.3B</span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">Tons of food wasted annually</span>
                        </div>
                        <div className="p-4 flex flex-col items-center justify-center">
                            <span className="text-4xl md:text-5xl font-extrabold text-earth-600 dark:text-earth-400 mb-2">8%</span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">Of global greenhouse gas emissions</span>
                        </div>
                        <div className="p-4 flex flex-col items-center justify-center">
                            <span className="text-4xl md:text-5xl font-extrabold text-earth-600 dark:text-earth-400 mb-2">$1,500</span>
                            <span className="text-gray-500 dark:text-gray-400 font-medium">Lost per average family every year</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-24 bg-earth-50/50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How SmartSave Works</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A comprehensive toolkit designed to help you reduce waste effortlessly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="glass-card flex flex-col items-center text-center overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-40 w-full overflow-hidden mb-6 relative">
                                    <div className="absolute inset-0 bg-earth-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={
                                            index === 0 ? "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=600&q=80" :
                                                index === 1 ? "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80" :
                                                    index === 2 ? "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=600&q=80" :
                                                        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
                                        }
                                        alt={step.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="px-8 pb-8 flex flex-col items-center">
                                    <div className="bg-white dark:bg-gray-800 -mt-12 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 relative z-20 shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-earth-800 dark:bg-gray-950"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498837167922-c77f007c0e12?auto=format&fit=crop&q=80&w=2000')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to make a difference?</h2>
                    <p className="text-lg text-earth-100 mb-10 max-w-2xl mx-auto">
                        Join thousands of users who are already saving money and protecting the environment by reducing their food waste.
                    </p>
                    <Link to="/tracker" className="btn-primary bg-white text-earth-800 hover:bg-earth-50 inline-flex items-center gap-2 text-lg px-8 py-4">
                        Create Your Free Tracker
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
