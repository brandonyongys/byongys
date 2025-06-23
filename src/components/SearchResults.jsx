export default function SearchResults({ results, query }) {
    if (!query.trim()) return null;

    if (results.length === 0) {
        return <div className="mt-2 text-gray-500">No results found for <strong>{query}</strong>.</div>;
    }

    return (
        <ul className="mt-2 space-y-2">
        {results.map((item, index) => (
            <li key={index} className="p-3 rounded-lg border shadow hover:bg-gray-50">
            <a href={item.url} className="block focus:outline-none focus:ring focus:ring-blue-300">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-1 text-sm text-blue-600">
                {item.tags.join(", ")}
                </div>
            </a>
            </li>
        ))}
        </ul>
    );
}
