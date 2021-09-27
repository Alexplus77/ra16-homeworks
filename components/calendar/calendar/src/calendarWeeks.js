import React from "react";


const CalendarWeek = ({daysWeek}) => {
    return(
        <tr>{
        daysWeek.map((dayWeek, i)=> {
          return  <th key={i} scope="col" title={dayWeek}>{dayWeek}</th>})
        }
        </tr>
    )
}

export default CalendarWeek