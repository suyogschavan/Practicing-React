import './HolidayCard.css';
export function HolidayCard({date, name}){
    return (
        <div className='holiday-div'>
            <span className='date-span'>{date}</span>
            <span className='name-span'>{name}</span>
        </div>
    )
}