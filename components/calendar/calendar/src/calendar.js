import React from "react";
import CalendarWeek from "./calendarWeeks";
import CalendarCol from "./calendarCol";
import CalendarDate from "./calendarDate";
import './css/main.css';

function Calendar({date}) {
    const monthNow = date.toLocaleString('ru', {month: 'long'})
    const weekDay = date.toLocaleString('ru', {weekday: 'long'})


    const daysWeek=[
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс'
    ]
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{weekDay}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                    <div className="ui-datepicker-material-month">{monthNow}</div>
                    <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{monthNow}</span>&nbsp;<span
                    className="ui-datepicker-year">{date.getFullYear()}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <CalendarCol date={date} daysWeek={daysWeek}/>
                <thead>
                <CalendarWeek daysWeek={daysWeek}/>
                </thead>
                <tbody>
                < CalendarDate date={date} daysWeek={daysWeek}/>
                {/*<tr>*/}
                {/*    <td className="ui-datepicker-other-month">27</td>*/}
                {/*    <td className="ui-datepicker-other-month">28</td>*/}
                {/*    <td>1</td>*/}
                {/*    <td>2</td>*/}
                {/*    <td>3</td>*/}
                {/*    <td>4</td>*/}
                {/*    <td>5</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>6</td>*/}
                {/*    <td>7</td>*/}
                {/*    <td className="ui-datepicker-today">8</td>*/}
                {/*    <td>9</td>*/}
                {/*    <td>10</td>*/}
                {/*    <td>11</td>*/}
                {/*    <td>12</td>*/}
                {/*</tr>*/}
                // остальные недели>
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;