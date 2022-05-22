import React from 'react'
import './Searchbox.css'
import SearchIcon from '@mui/icons-material/Search';
const Searchbox = () => {
    return (
        <div id="searchbox">
            <section className="search">
                <form action="">
                    <div id="searchselect"><input type="text" placeholder='Search...' autoFocus={true}/><SearchIcon id="searchicon" /></div>
                </form>
            </section>
        </div>
    )
}

export default Searchbox