import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import useSearch from "../utils/useSearch";
import SearchResults from "../components/SearchResults";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
  const query = useQuery().get("q") || "";
  const results = useSearch(query);

  useEffect(() => {
    if (query) {
      document.title = `Search: ${query} | Brandon Yong`;
    } else {
      document.title = 'Search | Brandon Yong';
    }
    return () => { document.title = 'Brandon Yong'; };
  }, [query]);

  return (
    <div className="max-w-3xl mx-auto my-8 p-4">
      <div className="page-background" aria-hidden="true"></div>
      <h1 className="text-2xl font-bold mb-4">Search results for: <em>{query}</em></h1>
      <SearchResults results={results} query={query} />
    </div>
  );
}
