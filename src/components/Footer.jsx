import React from 'react';
import { Leaf, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-earth-100 dark:border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Leaf className="h-6 w-6 text-earth-600 dark:text-earth-400" />
                            <span className="font-bold text-xl text-earth-800 dark:text-earth-100">SmartSave</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mb-4">
                            Empowering individuals to reduce food waste, save money, and protect our environment through tracking, education, and community action.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-earth-600 dark:hover:text-earth-400 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-earth-600 dark:hover:text-earth-400 transition-colors">
                                <span className="sr-only">GitHub</span>
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-earth-600 dark:hover:text-earth-400 transition-colors">
                                <span className="sr-only">Email</span>
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase mb-4">Features</h3>
                        <ul className="space-y-3">
                            <li><a href="/tracker" className="text-sm text-gray-500 dark:text-gray-400 hover:text-earth-600 dark:hover:text-earth-400">Waste Tracker</a></li>
                            <li><a href="/recipes" className="text-sm text-gray-500 dark:text-gray-400 hover:text-earth-600 dark:hover:text-earth-400">Recipe Suggestions</a></li>
                            <li><a href="/dashboard" className="text-sm text-gray-500 dark:text-gray-400 hover:text-earth-600 dark:hover:text-earth-400">Impact Dashboard</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><a href="/tips" className="text-sm text-gray-500 dark:text-gray-400 hover:text-earth-600 dark:hover:text-earth-400">Tips & Guides</a></li>
                            <li><a href="/community" className="text-sm text-gray-500 dark:text-gray-400 hover:text-earth-600 dark:hover:text-earth-400">Community Pledge</a></li>
                            <li><a href="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-earth-600 dark:hover:text-earth-400">About Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-earth-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} SmartSave. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
