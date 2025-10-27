import React, { useEffect, useState } from "react";

const ApiTasks = ({ theme }) => {
    const [data, setData ] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!res.ok) throw new Error('Failed to fetch data');
                const result = await res.json();
                setData(result);
                setFiltered(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        setFiltered(
            data.filter((item) => item.title.toLowerCase().includes(value))
        );
    };

    const startIndex = (page - 1) * itemsPerPage;
    const displayed = filtered.slice(startIndex, startIndex + itemsPerPage);


    return (
        <div className={`p-6 rounded-xl transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <h2 className="text-xl font-bold mb-4 text-center"> API Integration</h2>

            <input
                value={search}
                onChange={handleSearch}
                placeholder="Search posts...."
                className={`w-full p-3 mb-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
            />

            {loading ? (
                <p className="text-center">Loading.....</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <ul className="flex flex-col gap-3">
                    {displayed.map((item) => (
                        <li key={item.id} className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm opacity-80">{item.body}</p>
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex justify-center gap-3 mt-4">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-black text-white rounded-lg disbaled:opacity-40"
                >
                    Prev
                </button>
                <button
                    onClick={() => setPage((p) => (p < filtered.length / itemsPerPage ? p + 1 : p))}
                    disabled={page >= filtered.length / itemsPerPage}
                    className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-40"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ApiTasks;