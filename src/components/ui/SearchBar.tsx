import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <div className='bg-base-200 px-6 py-12'>
      <div className='max-w-2xl mx-auto'>
        <p className='text-xs uppercase tracking-widest text-error font-medium mb-2'>
          Art Institute of Chicago
        </p>
        <h1 className='font-serif text-5xl font-normal text-base-content mb-8'>
          Search the Collection
        </h1>

        <div className='flex'>
          <input
            type='text'
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") onSearch(query);
            }}
            placeholder='e.g. cats, Monet, impressionism…'
            className='flex-1 px-5 py-3.5 bg-base-100 border border-base-300 border-r-0 rounded-l-sm text-base-content placeholder:text-base-content/40 outline-none focus:border-error text-sm transition-colors'
          />
          <button
            className='px-6 py-3.5 bg-error text-white text-xs font-medium uppercase tracking-widest rounded-r-sm hover:opacity-90 transition-opacity whitespace-nowrap'
            onClick={() => onSearch(query)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
