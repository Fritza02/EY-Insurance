import React, {useState} from "react";
import "../styles/date.css";
import HeaderBack from "./HeaderBack";
import { DatePicker } from "@material-ui/pickers";


const SelectDate = () => {

const [dateSelected, changeDate] = useState(new Date());

console.log(dateSelected);

    return ( 
    <section className="date-container">
         <HeaderBack/>
            <div className="date-title">
                    <h1>¿Cuándo sucedió?</h1>
                    
                </div>
     
            <div className="date-box">
            <label className="date-text">Selecciona la fecha para cambiarla:</label>
            <div className="date-picker">
            <DatePicker value={dateSelected} onChange={changeDate} format="        dd MMMM yyyy" className="textDate"/>
            </div>
            </div>
       
        </section>

     );
}
 
export default SelectDate;

