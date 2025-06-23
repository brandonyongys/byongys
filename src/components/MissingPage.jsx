import { Link } from 'react-router-dom';

export default function MissingPage({pageName}) {
    return (
        <article className="max-w-3xl mx-auto p-8 my-8 bg-gray-50 rounded shadow">
            <div className="page-background" aria-hidden="true"></div>
            <h1 className="text-4xl font-bold mb-4 text-orange-800">{pageName} not found</h1>
            {/* <Link to="/" className="text-blue-600 underline">Go back home</Link> */}
        </article>
    )
}