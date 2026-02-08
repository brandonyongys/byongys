export default function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-700"></div>
            <p className="mt-4 text-orange-800 font-semibold italic">Loading...</p>
        </div>
    );
}
