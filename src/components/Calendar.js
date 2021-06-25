import React,{useState} from "react";
import DateTimePicker from 'react-datetime-picker';


function Calendar({service}){
const [selectDate,setSelectDate]=useState(new Date());


function calendarFunction(){
    console.log(service.name)

}
  function handleChange(e){
      console.log(e)
  }

  return(
      <div>
        <DateTimePicker onChange={(e)=>handleChange(e)}
            setSelectDate={setSelectDate}
            selectDate={selectDate}
           
            
        />
      </div>
   );
}

export default Calendar;