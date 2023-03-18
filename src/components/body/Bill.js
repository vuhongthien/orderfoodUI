import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Moment from 'moment';
function Bill() {
    const [bill, setBills] = useState([])
    useEffect(() => {
        const getBill = async () => {
            const res = await axios.get(`http://localhost:8080/api/list-bill`)
            setBills(res.data)
            console.log('bill ', res.data);
        }
        getBill()
    }, [])
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>idbill</th>
                    <th>userName</th>
                    <th>userAddress</th>
                    <th>userEmail</th>
                    <th>totalPrice</th>
                    <th>daySet</th>
                </tr>
            </thead>
            <tbody>
                {
                    bill.map(i => (
                        <tr key={i.billId}>
                            <td>THIENDEEPTRAI{i.billId}</td>
                            <td>{i.user.userName}</td>
                            <td>{i.user.userAddress}</td>
                            <td>{i.user.userEmail}</td>
                            <td>{i.totalPrice}</td>
                            <td>{Moment(i.daySet).format('dddd MMMM YYYY H:mma')}</td>
                        </tr>
                    ))
                }


            </tbody>
        </table>
    )
}

export default Bill