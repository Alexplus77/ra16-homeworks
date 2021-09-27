import React from "react";
let firstDay=1
const CalendarDate =({daysWeek, date})=>{
    const dayWeekNum=date.getDay()
    return (

       <tr>
           {
               daysWeek.map((day, i)=>{
                   if((i+1)===dayWeekNum){
                       return <td key={i} className={"ui-datepicker-today"}>{date.getDate()}</td>
                   }
                   firstDay++
                   return <td key={i}></td>
               })
           }
       </tr>

    )

}

export default CalendarDate