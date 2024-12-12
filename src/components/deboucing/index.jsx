import React, { useEffect, useState } from 'react';


// What is debouncing?
// Debouncing a function ensures that it doesn’t get called too frequently.

// Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called. 
// This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming.





// Why debounce? What problem does it solve?
// Say you want to move a box on the page every time you scroll the browser window.
const Debouncing = () => {
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    useEffect(() => {
        // Set a timeout to update the debounced value
        const handler = setTimeout(() => {
            setDebouncedSearch(search); // Update debounced value
            console.log('Debounced value:', search);
        }, 1000);

        // Cleanup function to clear the previous timeout
        return () => {
            clearTimeout(handler);
        };
    }, [search]); // Effect runs whenever `search` changes

    return (
        <div>
            <h1>Debouncing Example</h1>
            <input 
                type="text" 
                placeholder="Search..." 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <p>Search Input: {search}</p>
            <p>Debounced Value: {debouncedSearch}</p>
        </div>
    );
};

export default Debouncing;
