import React, { useState } from 'react';
import { Search, ChefHat, Loader2, ArrowRight, Clock, Users } from 'lucide-react';

export default function Recipes() {
    const [ingredient, setIngredient] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);

    const searchRecipes = async (e) => {
        e.preventDefault();
        if (!ingredient.trim()) return;

        setLoading(true);
        setError(null);
        setRecipes([]);
        setSelectedRecipe(null);

        try {
            const encodedIngredient = encodeURIComponent(ingredient.trim());
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodedIngredient}`);
            const data = await response.json();

            if (data.meals) {
                setRecipes(data.meals);
            } else {
                setError(`We couldn't find any recipes using "${ingredient}". Try another ingredient like "chicken", "potato", or "tomato".`);
            }
        } catch (err) {
            setError("Failed to fetch recipes. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    const getRecipeDetails = async (id) => {
        setSelectedRecipe(id);
        setDetailsLoading(true);

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();

            if (data.meals && data.meals.length > 0) {
                setRecipeDetails(data.meals[0]);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setDetailsLoading(false);
        }
    };

    // Extract ingredients from theMealDB format
    const getIngredientsList = (meal) => {
        const list = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];

            if (ingredient && ingredient.trim() !== '') {
                list.push(`${measure ? measure.trim() + ' ' : ''}${ingredient}`);
            }
        }
        return list;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 mb-6">
                    <ChefHat className="w-8 h-8" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Rescue Leftovers</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Don't throw away perfectly good ingredients. Tell us what you have left, and we'll suggest delicious meals you can make right now.
                </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
                <form onSubmit={searchRecipes} className="relative">
                    <div className="flex shadow-lg rounded-full overflow-hidden border border-earth-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all focus-within:ring-2 focus-within:ring-earth-500 focus-within:border-earth-500">
                        <span className="pl-6 py-4 flex items-center text-gray-400 dark:text-gray-500">
                            <Search className="w-6 h-6" />
                        </span>
                        <input
                            type="text"
                            value={ingredient}
                            onChange={(e) => setIngredient(e.target.value)}
                            placeholder="e.g., Chicken, Rice, Tomatoes..."
                            className="w-full px-4 py-4 focus:outline-none bg-transparent text-gray-900 dark:text-white text-lg placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            disabled={loading || !ingredient.trim()}
                            className="bg-earth-600 hover:bg-earth-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:text-gray-500 text-white px-8 py-4 font-semibold transition-colors flex items-center gap-2"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Find Recipes'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Error Message */}
            {error && (
                <div className="max-w-2xl mx-auto mb-12 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-center border border-red-200 dark:border-red-900/50">
                    {error}
                </div>
            )}

            {/* Results and Details View */}
            {recipes.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* List of recipes */}
                    <div className={`${selectedRecipe ? 'lg:col-span-4' : 'lg:col-span-12'} space-y-4`}>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Found {recipes.length} ideas with "{ingredient}"
                        </h2>

                        <div className={`grid gap-6 ${selectedRecipe ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                            {recipes.map((recipe) => (
                                <div
                                    key={recipe.idMeal}
                                    onClick={() => {
                                        getRecipeDetails(recipe.idMeal);
                                        // Scroll to top of page to see details if on mobile
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`glass-card overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 ${selectedRecipe === recipe.idMeal ? 'border-earth-500 dark:border-earth-400' : 'border-transparent'}`}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={recipe.strMealThumb}
                                            alt={recipe.strMeal}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <span className="text-white font-medium flex items-center gap-2">
                                                View Recipe <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-gray-800">
                                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-earth-600 dark:group-hover:text-earth-400 transition-colors line-clamp-1">
                                            {recipe.strMeal}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recipe Details Panel */}
                    {selectedRecipe && (
                        <div className="lg:col-span-8 animate-fade-in">
                            <div className="glass-card overflow-hidden sticky top-24">
                                {detailsLoading ? (
                                    <div className="flex flex-col items-center justify-center p-20 text-gray-500">
                                        <Loader2 className="w-12 h-12 animate-spin mb-4 text-earth-500" />
                                        <p>Fetching the perfect recipe...</p>
                                    </div>
                                ) : recipeDetails ? (
                                    <div className="bg-white dark:bg-gray-800">
                                        <div className="relative h-64 md:h-80 w-full">
                                            <img
                                                src={recipeDetails.strMealThumb}
                                                alt={recipeDetails.strMeal}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                                <span className="inline-block px-3 py-1 rounded-full bg-earth-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                                                    {recipeDetails.strCategory} • {recipeDetails.strArea}
                                                </span>
                                                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                                                    {recipeDetails.strMeal}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className="p-6 md:p-8">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                                                <div className="md:col-span-1 border-r-0 md:border-r border-gray-200 dark:border-gray-700 pr-0 md:pr-8">
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-earth-200 dark:border-earth-900/30 pb-2">Ingredients</h3>
                                                    <ul className="space-y-3">
                                                        {getIngredientsList(recipeDetails).map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-earth-500 mt-2 shrink-0"></span>
                                                                <span className="text-sm">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="md:col-span-2">
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-earth-200 dark:border-earth-900/30 pb-2">Instructions</h3>
                                                    <div className="prose prose-earth dark:prose-invert max-w-none prose-p:leading-relaxed text-gray-700 dark:text-gray-300 text-sm md:text-base space-y-4 whitespace-pre-line">
                                                        {recipeDetails.strInstructions}
                                                    </div>

                                                    {recipeDetails.strYoutube && (
                                                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                                            <a
                                                                href={recipeDetails.strYoutube}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-medium hover:underline"
                                                            >
                                                                Watch Video Tutorial
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
