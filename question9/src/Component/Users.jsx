import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch users');
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center mt-4">Loading users...</p>;
    if (error) return <p className="text-center mt-4 text-red-600">Error: {error}</p>;

    return (
        <div className="max-w-md mx-auto mt-10 font-sans">
            <h2 className="text-2xl font-semibold text-center mb-6">User List</h2>
            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="bg-gray-300 p-4 rounded-md mb-3 shadow-sm hover:bg-blue-700 hover:text-white transition-colors cursor-default"
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
