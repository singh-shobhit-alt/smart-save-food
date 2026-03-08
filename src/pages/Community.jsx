import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Share2, Quote } from 'lucide-react';

const DEFAULT_PLEDGES = [
    {
        id: '1',
        name: 'Sarah J.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
        pledge: 'I pledge to always check my fridge before going to the grocery store.',
        date: '2026-03-01T10:00:00Z',
        likes: 12
    },
    {
        id: '2',
        name: 'Michael T.',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150&q=80',
        pledge: 'I pledge to start a small compost bin on my balcony this week!',
        date: '2026-02-28T14:30:00Z',
        likes: 8
    },
    {
        id: '3',
        name: 'Elena R.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
        pledge: 'I pledge to freeze my vegetable scraps and use them to make homemade broth.',
        date: '2026-02-25T09:15:00Z',
        likes: 24
    },
    {
        id: '4',
        name: 'David W.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
        pledge: 'I pledge to eat all my leftovers for lunch instead of buying out.',
        date: '2026-02-20T16:45:00Z',
        likes: 15
    }
];

export default function Community() {
    const [pledges, setPledges] = useState([]);
    const [formData, setFormData] = useState({ name: '', pledge: '' });

    useEffect(() => {
        const saved = localStorage.getItem('smartSavePledges');
        if (saved) {
            setPledges(JSON.parse(saved));
        } else {
            setPledges(DEFAULT_PLEDGES);
            localStorage.setItem('smartSavePledges', JSON.stringify(DEFAULT_PLEDGES));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.pledge.trim()) return;

        const newPledge = {
            id: Date.now().toString(),
            name: formData.name,
            pledge: formData.pledge,
            date: new Date().toISOString(),
            likes: 0
        };

        const updatedPledges = [newPledge, ...pledges];
        setPledges(updatedPledges);
        localStorage.setItem('smartSavePledges', JSON.stringify(updatedPledges));
        setFormData({ name: '', pledge: '' });
    };

    const handleLike = (id) => {
        const updatedPledges = pledges.map(p =>
            p.id === id ? { ...p, likes: p.likes + 1 } : p
        );
        setPledges(updatedPledges);
        localStorage.setItem('smartSavePledges', JSON.stringify(updatedPledges));
    };

    const timeAgo = (dateString) => {
        const now = new Date();
        const past = new Date(dateString);
        const diffDays = Math.floor((now - past) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 30) return `${diffDays} days ago`;
        return '1 month ago';
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Community Pledge Wall</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Join thousands of others committing to reducing food waste. Make your pledge below to inspire the community.
                </p>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
                <div className="glass-card p-6 md:p-8 bg-gradient-to-br from-earth-50 to-white dark:from-gray-800 dark:to-gray-900 border-t-4 border-earth-600">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <MessageSquare className="text-earth-600 w-6 h-6" /> Make a Pledge
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g., Alex Curry"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="pledge" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Your Pledge
                            </label>
                            <textarea
                                id="pledge"
                                value={formData.pledge}
                                onChange={(e) => setFormData({ ...formData, pledge: e.target.value })}
                                placeholder="e.g., I pledge to meal-plan every Sunday to buy only what I need."
                                rows="3"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full md:w-auto mt-2">
                            Submit My Pledge
                        </button>
                    </form>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                Recent Pledges
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pledges.map((p) => (
                    <div key={p.id} className="glass-card p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <Quote className="w-8 h-8 text-earth-200 dark:text-earth-900 mb-4" />
                            <p className="text-gray-800 dark:text-gray-200 text-lg italic mb-6 leading-relaxed">
                                "{p.pledge}"
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-3">
                                {p.avatar ? (
                                    <img src={p.avatar} alt={p.name} className="w-10 h-10 rounded-full object-cover shadow-sm border border-earth-100 dark:border-gray-700" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-earth-100 dark:bg-earth-900/50 flex items-center justify-center text-earth-700 dark:text-earth-300 font-bold border border-earth-200 dark:border-gray-700">
                                        {p.name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white line-clamp-1">{p.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{timeAgo(p.date)}</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => handleLike(p.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors group flex items-center gap-1"
                                >
                                    <Heart className={`w-5 h-5 group-hover:fill-current ${p.likes > 20 ? 'fill-red-500 text-red-500' : ''}`} />
                                    <span className="text-xs font-medium text-gray-500 group-hover:text-red-500">{p.likes}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
