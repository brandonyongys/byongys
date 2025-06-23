import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import searchIndex from "../data/searchIndex.json";

export default function useSearch(query) {
    const [results, setResults] = useState([]);

    const fuse = useMemo(() => {
        return new Fuse(searchIndex, {
        keys: ["title", "description", "tags"],
        threshold: 0.4,
        });
    }, []);

    useEffect(() => {
        if (query.trim() === "") {
        setResults([]);
        return;
        }
        const searchResults = fuse.search(query).map(res => res.item);
        setResults(searchResults);
    }, [query, fuse]);

    return results;
}
