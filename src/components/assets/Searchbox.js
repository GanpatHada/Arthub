import React from 'react'
import './Searchbox.css'
import Button from '@mui/material/Button';
const Searchbox = () => {
    return (
        <div id="searchbox">
            <section className="search">
                <form action="">
                    <div id="searchselect"><input type="text" placeholder='Search...' autoFocus={true}/>
                        <select>
                            <option value="BMW"> BMW
                            </option>
                            <option value="Mercedes"> Mercedes
                            </option>
                            <option value="Audi"> Audi
                            </option>
                            <option value="Skoda"> Skoda
                            </option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center"><Button id="search" type="button" variant="contained">Search</Button></div>
                </form>
            </section>
        </div>
    )
}

export default Searchbox