import React, { useState } from 'react';
import { ChevronDown, ShoppingBag, ThermometerSnowflake, Tag, Leaf, CheckCircle2 } from 'lucide-react';

const AccordionItem = ({ title, icon, children, isOpen, onClick }) => {
    return (
        <div className="border border-earth-200 dark:border-gray-700 rounded-2xl mb-4 overflow-hidden glass-card transition-all duration-300">
            <button
                className="w-full flex items-center justify-between p-6 bg-white/50 dark:bg-gray-800/50 hover:bg-earth-50 dark:hover:bg-gray-700/80 transition-colors focus:outline-none"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="flex items-center gap-4 text-xl font-semibold text-gray-900 dark:text-white">
                    <div className="p-2 bg-earth-100 dark:bg-earth-900/30 text-earth-600 dark:text-earth-400 rounded-lg">
                        {icon}
                    </div>
                    {title}
                </span>
                <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 border-t border-earth-100 dark:border-gray-700 mt-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function Tips() {
    const [openIndex, setOpenIndex] = useState(0);

    const tips = [
        {
            title: "Smart Meal Planning",
            icon: <ShoppingBag className="w-6 h-6" />,
            content: (
                <div className="space-y-4">
                    <img src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&h=300&q=80" alt="Meal planning notebook" className="w-full h-48 object-cover rounded-xl mb-4" />
                    <p>Effective meal planning is the first and most crucial step in preventing food waste. By buying exactly what you need, you ensure everything gets eaten.</p>
                    <ul className="space-y-3">
                        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-earth-500 shrink-0" /> <span><strong>Take Inventory:</strong> Check your fridge and pantry before shopping to avoid buying duplicates.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-earth-500 shrink-0" /> <span><strong>Make a List:</strong> Plan your meals for the week and stick strictly to your grocery list.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-earth-500 shrink-0" /> <span><strong>Plan for 'Lazy' Days:</strong> Keep a few non-perishable emergency meals so fresh items don't spoil when you order takeout instead.</span></li>
                        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-earth-500 shrink-0" /> <span><strong>Designate an 'Eat Me First' Area:</strong> Use a bin in your fridge for foods that need to be consumed within 1-2 days.</span></li>
                    </ul>
                </div>
            )
        },
        {
            title: "Proper Food Storage",
            icon: <ThermometerSnowflake className="w-6 h-6" />,
            content: (
                <div className="space-y-4">
                    <img src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=800&h=300&q=80" alt="Organized food storage" className="w-full h-48 object-cover rounded-xl mb-4" />
                    <p>Storing food correctly extends its shelf life significantly. Not all produce belongs in the fridge!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-earth-50 dark:bg-gray-800 p-4 rounded-xl">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fridge Friendly</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Apples (last longer cold)</li>
                                <li>Berries (unwashed until eating)</li>
                                <li>Leafy greens (with a paper towel)</li>
                                <li>Carrots and celery</li>
                                <li>Broccoli and cauliflower</li>
                            </ul>
                        </div>
                        <div className="bg-earth-50 dark:bg-gray-800 p-4 rounded-xl">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Countertop Keeping</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Tomatoes (fridge ruins texture)</li>
                                <li>Bananas (keep away from others)</li>
                                <li>Onions & Garlic (cool, dark place)</li>
                                <li>Potatoes (away from onions!)</li>
                                <li>Bread (freezer is better than fridge)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Understanding Expiry Labels",
            icon: <Tag className="w-6 h-6" />,
            content: (
                <div className="space-y-4">
                    <img src="https://images.unsplash.com/photo-1584473457406-6240486414e9?auto=format&fit=crop&w=800&h=300&q=80" alt="Fresh produce" className="w-full h-48 object-cover rounded-xl mb-4" />
                    <p>Did you know that many dates on food packaging are about quality, not safety? Understanding the difference can save perfectly good food.</p>

                    <div className="space-y-4 mt-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-24 font-bold text-red-500 dark:text-red-400 text-right">"Use By"</div>
                            <div>
                                <strong>Safety indicator.</strong> This is the only date you must strictly adhere to. After this date, the food might not be safe to eat, even if it looks and smells fine. Common on meat, dairy, and prepared foods.
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-24 font-bold text-earth-600 dark:text-earth-400 text-right">"Best Before"</div>
                            <div>
                                <strong>Quality indicator.</strong> These foods are still perfectly safe to eat after this date. They might just lose some optimal flavor or texture. Use your senses (look, smell, taste) to judge.
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-24 font-bold text-blue-500 dark:text-blue-400 text-right">"Sell By"</div>
                            <div>
                                <strong>Retailer indicator.</strong> This date is meant for store staff for stock control. The food is still safe to eat for days or even weeks after this date if stored properly.
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Composting Basics",
            icon: <Leaf className="w-6 h-6" />,
            content: (
                <div className="space-y-4">
                    <img src="https://images.unsplash.com/photo-1595834888327-0466ebd7454f?auto=format&fit=crop&w=800&h=300&q=80" alt="Composting" className="w-full h-48 object-cover rounded-xl mb-4" />
                    <p>When food waste is inevitable (like peels, cores, and eggshells), composting returns those nutrients to the earth instead of sending them to a landfill where they produce methane.</p>

                    <div className="flex flex-col md:flex-row gap-6 mt-4">
                        <div className="flex-1 border border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-900/10 p-5 rounded-xl">
                            <h4 className="font-semibold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" /> YES to Compost
                            </h4>
                            <ul className="space-y-1 text-sm">
                                <li>• Fruit and vegetable scraps</li>
                                <li>• Coffee grounds and filters</li>
                                <li>• Eggshells (crushed)</li>
                                <li>• Tea bags (no staples)</li>
                                <li>• Nut shells</li>
                                <li>• Uncoated paper/cardboard</li>
                            </ul>
                        </div>

                        <div className="flex-1 border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10 p-5 rounded-xl">
                            <h4 className="font-semibold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center font-bold text-xs">X</div>
                                NO to Compost
                            </h4>
                            <ul className="space-y-1 text-sm">
                                <li>• Meat, fish, and bones</li>
                                <li>• Dairy products</li>
                                <li>• Oils and grease</li>
                                <li>• Pet waste</li>
                                <li>• Diseased plant materials</li>
                                <li>• Glossy or coated paper</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tips & Guides</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Master the art of food preservation. Small changes in how we buy, store, and consume food can have a massive impact.
                </p>
            </div>

            <div className="space-y-2">
                {tips.map((tip, index) => (
                    <AccordionItem
                        key={index}
                        title={tip.title}
                        icon={tip.icon}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    >
                        {tip.content}
                    </AccordionItem>
                ))}
            </div>
        </div>
    );
}
