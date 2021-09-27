import React from "react";

const CalendarDate =({daysWeek, date})=>{
    const dayWeekNum=date.getDay()
    return (
       <tr>
           {
               daysWeek.map((day, i)=>{
                   if((i+1)===dayWeekNum){
                       return <td className={"ui-datepicker-today"}>{date.getDate()}</td>
                   }
                   return <td></td>
               })
           }
       </tr>
    )
}

export default CalendarDate