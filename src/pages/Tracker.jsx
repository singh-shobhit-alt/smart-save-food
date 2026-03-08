import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Trash2, Plus, Calendar, Type, Scale, LayoutGrid } from 'lucide-react';

const CATEGORIES = [
    'Vegetables & Fruits',
    'Dairy & Eggs',
    'Meat & Seafood',
    'Grains & Pasta',
    'Snacks & Sweets',
    'Leftovers & Prepared Foods',
    'Other'
];

const COLORS = ['#84af59', '#a3c77f', '#c6dcad', '#e1ecd2', '#f2f6eb', '#66923d', '#3f5826'];

export default function Tracker() {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        quantity: '',
        unit: 'grams',
        category: CATEGORIES[0],
        date: new Date().toISOString().split('T')[0]
    });

    useEffect(() => {
        const saved = localStorage.getItem('foodWasteItems');
        if (saved) {
            setItems(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('foodWasteItems', JSON.stringify(items));
    }, [items]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.quantity) return;

        const newItem = {
            id: Date.now().toString(),
            ...formData,
            quantity: parseFloat(formData.quantity)
        };

        setItems(prev => [newItem, ...prev]);
        setFormData(prev => ({ ...prev, name: '', quantity: '' }));
    };

    const handleDelete = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    // Prepare data for chart
    const getChartData = () => {
        const categoryTotals = items.reduce((acc, item) => {
            // Normalize weight to kg for chart, rough estimate if pieces
            let val = item.quantity;
            if (item.unit === 'grams') val = val / 1000;
            if (item.unit === 'oz') val = val * 0.0283495;
            if (item.unit === 'lbs') val = val * 0.453592;

            acc[item.category] = (acc[item.category] || 0) + val;
            return acc;
        }, {});

        return Object.entries(categoryTotals)
            .map(([name, value]) => ({ name, value: Number(value.toFixed(2)) }))
            .filter(entry => entry.value > 0);
    };

    const chartData = getChartData();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Waste Tracker</h1>
                <p className="text-gray-600 dark:text-gray-400">Log your food waste to identify patterns and reduce your environmental footprint.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Form Column */}
                <div className="lg:col-span-1">
                    <div className="glass-card p-6 border-t-4 border-earth-500">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Plus className="w-5 h-5 text-earth-500" />
                            Log New Item
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                                    <Type className="w-4 h-4" /> Item Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Half loaf of bread"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                                    required
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-grow">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                                        <Scale className="w-4 h-4" /> Quantity
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        min="0"
                                        step="0.1"
                                        placeholder="0.0"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        required
                                    />
                                </div>
                                <div className="w-28">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">&nbsp;</label>
                                    <select
                                        name="unit"
                                        value={formData.unit}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    >
                                        <option value="grams">g</option>
                                        <option value="kg">kg</option>
                                        <option value="lbs">lbs</option>
                                        <option value="oz">oz</option>
                                        <option value="pieces">pcs</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                                    <LayoutGrid className="w-4 h-4" /> Category
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                >
                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> Date Wasted
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white max-w-full"
                                    required
                                />
                            </div>

                            <button type="submit" className="w-full btn-primary mt-6 tracking-wide">
                                Log Item
                            </button>
                        </form>
                    </div>
                </div>

                {/* List and Chart Column */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Chart Section */}
                    <div className="glass-card p-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Waste by Category (Est. kg)</h2>
                        {chartData.length > 0 ? (
                            <div className="h-64 sm:h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            formatter={(value) => `${value} kg`}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-64 text-gray-400 dark:text-gray-500">
                                <PieChart className="w-16 h-16 opacity-20 mb-4" />
                                <p>No data yet. Log some items to see your chart!</p>
                            </div>
                        )}
                    </div>

                    {/* History List */}
                    <div className="glass-card p-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Recent Logs</h2>
                        {items.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                                            <th className="pb-3 px-2 font-medium">Date</th>
                                            <th className="pb-3 px-2 font-medium">Item</th>
                                            <th className="pb-3 px-2 font-medium">Category</th>
                                            <th className="pb-3 px-2 font-medium text-right">Amount</th>
                                            <th className="pb-3 px-2 font-medium text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                        {items.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                                <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-300">
                                                    {new Date(item.date).toLocaleDateString()}
                                                </td>
                                                <td className="py-3 px-2 font-medium text-gray-900 dark:text-white">
                                                    {item.name}
                                                </td>
                                                <td className="py-3 px-2 text-sm text-gray-600 dark:text-gray-300">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-earth-100 text-earth-800 dark:bg-earth-900/30 dark:text-earth-300">
                                                        {item.category}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-2 text-sm text-gray-900 dark:text-white text-right">
                                                    {item.quantity} {item.unit}
                                                </td>
                                                <td className="py-3 px-2 text-right">
                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                                                        aria-label="Delete item"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                                Your log is empty. Great job not wasting food!
                            </p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
