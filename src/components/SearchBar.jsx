import React, { useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";


export default function SearchBar({onSubmit}) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") {
            toast.error ("Oops! Please type something to search");
            return;
        }
        onSubmit(inputValue);
        setInputValue("");
       
    };

    return (
        <header>
          <form onSubmit={handleSubmit}> 
            <input
               type="text"
               autocomplete="off"
               autofocus
               placeholder="Search images and photos"
               value={inputValue}
               onChange={handleChange}
            />
            <button type="submit">Search</button>
           </form>
        </header>

    );
}