import React from 'react'
import imgdish from '../../../assets/imgdish.jpg'
import axios from 'axios'
import { useState, useEffect } from 'react'
function Newdish() {
    const [dish, setDish] = useState([])

    useEffect(() => {
        const getDish = async () => {
            const res = await axios.get(`https://foodtestdeploy-production.up.railway.app/api/list-dish/1/10`)
            setDish(res.data)
            console.log(' món: ', res.data);
        }
        getDish()
    }, [])
    return (
        <>
            <h3>Món mới</h3>
            <div className='row row-cols-2 row-cols-lg-6 g-2 g-lg-3'>
                {
                    dish.map(dish => (
                        <div className='col'>
                            <div className='border p-2' style={{ width: "200px" }}>
                                <img src={imgdish} style={{ width: "100%", height: "200px" }} alt='hinhmonan'></img>
                                <div className='pt-2'>
                                    <b><h5>{dish.dishName}</h5></b>
                                    <div>giá: {dish.price}</div>
                                    <div>giá khuyến mãi: {dish.discount}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Newdish