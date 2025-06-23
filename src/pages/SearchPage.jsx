import { useLocation } from "react-router-dom";
import useSearch from "../utils/useSearch";
import SearchResults from "../components/SearchResults";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
    const query = useQuery().get("q") || "";
    const results = useSearch(query);

    return (
        <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Search results for: <em>{query}</em></h1>
        <SearchResults results={results} query={query} />
        </div>
    );
}
