import React from 'react'
import img from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
function MenuBody() {
    return (
        <div className='container' style={{ textAlign: "center" }}>
            <div className=' row mt-2'>
                <div className='col align-self-center'>

                    <div className="me-auto d-flex flex-row bd-highlight">
                        <NavLink className=' me-4 text-decoration-none text-dark' to="/newdish" exact >
                            <img src={img} style={{ width: "70px", height: "70px" }} alt='atl'></img>
                            <b><p>Món mới</p></b>
                        </NavLink>
                        <NavLink className=' me-4 text-decoration-none text-dark' to="/highlightdish" exact >
                            <img src={img} style={{ width: "70px", height: "70px" }} alt='atl'></img>
                            <b><p>Món nổi bật</p></b>
                        </NavLink>
                        <NavLink className=' me-4 text-decoration-none text-dark' to="/discountdish" exact >
                            <img src={img} style={{ width: "70px", height: "70px" }} alt='atl'></img>
                            <b><p>Món giảm giá</p></b>
                        </NavLink>
                        <NavLink className=' me-4 text-decoration-none text-dark' to="/favouritedish" exact >
                            <img src={img} style={{ width: "70px", height: "70px" }} alt='atl'></img>
                            <b><p>Món yêu thích</p></b>
                        </NavLink>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default MenuBody