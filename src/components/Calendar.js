import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-date-picker';

function Calendar({service}){
    const [selectDate, setSelectDate] = useState(new Date());


    function calendarFunction(){
        console.log(service.name)

    }
    function handleChange(e){
        console.log(e)
        setSelectDate(e)
         
    }

    return(
        <div>
            <DatePicker onChange={(e) => handleChange(e)}
                setSelectDate={setSelectDate}
                selectDate={selectDate}
                value={selectDate} />
            
        </div>
    );
}

export default Calendar;