import React from 'react';
import Button from '../Button';

export const SearchComponent = ({ input, setInput, handleSubmit, placeholder }) => {
    return (
        <form className="flex items-center gap-4" onSubmit={handleSubmit}>
            <input
                type="text"
                name="query"
                className="border border-gray-300 rounded-md border-white-hover-gray p-2"
                placeholder={placeholder}
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <Button text="Search"></Button>
        </form>
    );
};

export default SearchComponent;
