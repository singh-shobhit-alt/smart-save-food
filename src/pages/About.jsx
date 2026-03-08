import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Heart, Globe, Users } from 'lucide-react';

export default function About() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="animate-fade-in">
            {/* Mission Hero */}
            <section className="relative overflow-hidden bg-earth-50 dark:bg-gray-900 py-20 border-b border-earth-100 dark:border-gray-800">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1464226184884-faea80308316?auto=format&fit=crop&q=80&w=2000" alt="Sustainable food" className="w-full h-full object-cover" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-sm">Our Mission</h1>
                    <p className="text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium bg-white/50 dark:bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm">
                        We believe that no good food should go to waste. Our platform empowers individuals and communities to track their habits, learn sustainable practices, and create a lasting positive impact on our planet.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center group">
                            <div className="mb-6 overflow-hidden rounded-2xl shadow-xl h-48">
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80" alt="Environment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Environmental Impact</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Reducing food waste is one of the most effective ways to lower greenhouse gas emissions and conserve water resources.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="mb-6 overflow-hidden rounded-2xl shadow-xl h-48">
                                <img src="https://images.unsplash.com/photo-1593113544331-80720bfff6c9?auto=format&fit=crop&w=600&q=80" alt="Social Responsibility" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Social Responsibility</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                While billions of tons of food are wasted, millions go hungry. We educate communities to value food as a precious resource.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="mb-6 overflow-hidden rounded-2xl shadow-xl h-48">
                                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Community Driven" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Driven</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Change happens together. We connect people through shared goals, pledges, and ideas for a sustainable future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-earth-50/50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                                Have questions about our platform? Want to partner with us or share a success story? We'd love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-earth-100 dark:border-gray-700">
                                        <Mail className="w-6 h-6 text-earth-600 dark:text-earth-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Email Us</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Our team usually responds within 24 hours.</p>
                                        <a href="mailto:hello@smartsave.example.com" className="text-earth-600 dark:text-earth-400 hover:underline mt-1 inline-block">satakshikumari237@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-earth-100 dark:border-gray-700">
                                        <MapPin className="w-6 h-6 text-earth-600 dark:text-earth-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Visit Us</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Come say hello at our headquarters.</p>
                                        <span className="text-gray-700 dark:text-gray-300 mt-1 inline-block">Gargi college university of delhi</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-earth-100 dark:border-gray-700">
                                        <Phone className="w-6 h-6 text-earth-600 dark:text-earth-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Call Us</h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Mon-Fri from 9am to 6pm.</p>
                                        <a href="tel:+15551234567" className="text-earth-600 dark:text-earth-400 hover:underline mt-1 inline-block">+91 8088220906</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-card p-8 border-t-4 border-earth-500">
                            {isSubmitted ? (
                                <div className="text-center py-12 px-6">
                                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                                        Thanks for reaching out. A member of our team will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="btn-secondary"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary w-full flex justify-center items-center gap-2 mt-4">
                                        Send Message <Send className="w-4 h-4 ml-1" />
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
