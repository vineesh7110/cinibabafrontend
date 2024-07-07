import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Seat.module.css'
import { selectSeat, deselectSeat } from "../../store/screenSlice";
import { useState } from "react";
function Seat(props) {
    const [status, setStatus] = useState('available')
const dispatch = useDispatch()

const seatNumber = props.index+1

    function handleSelect(){
       
        
        if(status === 'available'){
            setStatus('selected')
            dispatch(selectSeat({rowName: props.rowName, seatNumber: seatNumber}))
        }
        else{
            setStatus('available')
            dispatch(deselectSeat({rowName: props.rowName, seatNumber: seatNumber}))
        }
    }
    
    return(
       <li className={styles.Seat + " " +(status==="selected"?styles.Selected:"")} onClick={()=>{handleSelect()}}>
        <span>{seatNumber}</span>
       </li>
 );
}
export default Seat;