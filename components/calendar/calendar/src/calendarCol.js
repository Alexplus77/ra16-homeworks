import React from "react";

const CalendarCol = ({daysWeek}) => {
    return (
        <colgroup>
            {
                daysWeek.map((day, i) => {
                    if (i === 5 || i === 6) {
                        return <col key={i} className={'ui-datepicker-week-end'}/>
                    }
                    return <col key={i}/>
                })
            }
        </colgroup>
    )
}

export default CalendarCol