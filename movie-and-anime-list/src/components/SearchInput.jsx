import { useState } from "react"


export default function SearchInput({onSearch}) {
    const [value, setValue] = useState("")

    function handleChange(e) {
        setValue(e.target.value)
    }
    function handleSearch() {
        onSearch(value)
    }

    return (
        <>
            <input 
                type="text" 
                value={value} 
                onChange={handleChange}
                placeholder="Search anime..."
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
            <button 
                onClick={handleSearch}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition font-medium"
            >
                Search
            </button>
        </>
    )
}