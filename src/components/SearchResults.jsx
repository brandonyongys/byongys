import { useState } from "react";
import { formatDate } from "../utils/formatDate";
import { PAGINATION } from "../config/constants";

const RESULTS_PER_PAGE = PAGINATION.RESULTS_PER_PAGE;

export default function SearchResults({ results, query }) {
    const [currentPage, setCurrentPage] = useState(1);

    if (!query.trim()) return null;

    if (results.length === 0) {
        return (
            <div className="mt-2 text-gray-custom-muted">
                No results found for <strong>{query}</strong>.
            </div>
        );
    }

    // Sort results by date (latest first)
    const sortedResults = [...results].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const totalPages = Math.ceil(sortedResults.length / RESULTS_PER_PAGE);

    // Slice results for the current page
    const startIdx = (currentPage - 1) * RESULTS_PER_PAGE;
    const currentResults = sortedResults.slice(
        startIdx,
        startIdx + RESULTS_PER_PAGE
    );

    function handlePrev() {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    }

    function handleNext() {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }

    return (
        <div className="mt-2 space-y-2">
            <ul className="space-y-2">
                {currentResults.map((item, index) => (
                    <li key={index} className="p-3 rounded-lg bg-gray-custom-bg hover:bg-accent-light">
                        <a
                            href={item.url}
                            className="block focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-semibold text-brand-text-main">{item.title}</h3>
                                <span className="text-sm font-semibold text-brand-text-muted mt-1">
                                    {formatDate(item.date)}
                                </span>
                            </div>
                            <p className="mt-1 text-gray-700">{item.description}</p>
                            <div className="mt-1 text-sm text-blue-600">
                                {item.tags.join(", ")}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>

            {/* ✅ Pagination Controls */}
            <div className="flex justify-center items-center space-x-2 mt-6">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-brand-primary rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span className="px-3 py-1 font-medium">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 bg-brand-primary rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
