import React from 'react'
import Discountdish from './dish/Discountdish'
import Favouritedish from './dish/Favouritedish'
import Highlightdish from './dish/Highlightdish'
import Newdish from './dish/Newdish'
import MenuBody from './MenuBody'
import {
    Routes,
    Route
} from "react-router-dom";
function Dishmain() {
    return (<>        
        <div className='container'>
        <MenuBody />
            <Routes>
                <Route path="/newdish" element={<Newdish />} />
                <Route path="/highlightdish" element={<Highlightdish />} />
                <Route path="/discountdish" element={<Discountdish />} />
                <Route path="/favouritedish" element={<Favouritedish />} />
                <Route exact path="/" element={<>
                    <Newdish />
                    <Highlightdish />
                    <Discountdish />
                    <Favouritedish />
                </>}>

                </Route>
            </Routes>
        </div>
    </>
    )
}

export default Dishmain