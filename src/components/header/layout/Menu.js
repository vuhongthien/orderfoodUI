import React from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios'
import { useState, useEffect } from 'react'
import logo from '../../../assets/logo.png'
import { NavLink} from 'react-router-dom'
function Menu() {
    const [dishtypes, setDishTypes] = useState([])





    useEffect(() => {
        const getDishType = async () => {
            const res = await axios.get(`https://foodtestdeploy-production.up.railway.app/api/list-dish-type`)
            setDishTypes(res.data)
            console.log('loại món: ', res.data);
        }
        getDishType()
    }, [])
    return (
        <><div className='container-fluid p-0'>
            <div className='border row d-flex justify-content-evenly'>
                <div className='col-md-2 d-flex justify-content-center'>
                    <img src={logo} alt="logo" style={{ width: "100%", padding:"30px" }}></img>

                </div>
                <div className='col-md-5 row'>
                    <div className='col align-self-center'>

                        <div className="me-auto">
                        <NavLink className=' me-4 text-decoration-none text-dark' to="/" exact >Trang chủ</NavLink>
                            {
                                dishtypes.map(dishtype => (
                                    <NavLink className='me-4 text-decoration-none' href="#loaisanpham" key={dishtype.typeDishId}>{dishtype.typeDishName}</NavLink>
                                ))                                
                            }
                           
                            <NavLink className=' me-4 text-decoration-none text-dark' to="/thong-bao" exact >Thông báo</NavLink>
                            <NavLink className=' me-4 text-decoration-none text-dark' to="/gioi-thieu" exact >Giới thiệu</NavLink>
                            <NavLink className=' me-4 text-decoration-none text-dark' to="/chi-nhanh" exact >Chi nhánh</NavLink>
                            <NavLink className=' me-4 text-decoration-none text-dark' to="/hom-thu" exact >Hòm thư</NavLink>

                            
                        </div>

                    </div>
                </div>
                <div className='col-md-2 row'>
                    <div className='col align-self-center'>
                        <Button variant="secondary">
                            Đăng nhập
                        </Button>
                    </div>


                </div>
            </div>
        </div>
        </>
    )
}
export default Menu

