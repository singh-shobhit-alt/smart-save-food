import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../App';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Tracker', path: '/tracker' },
        { name: 'Tips', path: '/tips' },
        { name: 'Recipes', path: '/recipes' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Community', path: '/community' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className="fixed w-full z-50 glass-card rounded-none border-t-0 border-l-0 border-r-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <Leaf className="h-8 w-8 text-earth-600 dark:text-earth-400" />
                            <span className="font-bold text-xl tracking-tight text-earth-800 dark:text-earth-100">SmartSave</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? 'bg-earth-100 text-earth-800 dark:bg-gray-800 dark:text-earth-300'
                                        : 'text-gray-600 hover:bg-earth-50 hover:text-earth-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-earth-400'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 ml-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-earth-500"
                            aria-label="Toggle dark mode"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-earth-50 dark:hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass-card rounded-b-2xl border-x-0 absolute w-full top-16 shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                        ? 'bg-earth-100 text-earth-800 dark:bg-gray-800 dark:text-earth-300'
                                        : 'text-gray-600 hover:bg-earth-50 hover:text-earth-600 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
