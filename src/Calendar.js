import './Calendar.css';


const Calendar = () =>{
    
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토']  //요일 순서 
    const dayInMonth = 30;  // 11월달은 30일까지
    const firstDay = new Date(2025, 10, 1).getDay();  //11월 1일이 무슨 요일인지 확인
    const weddingDay = 8; // 결혼식은 8일



    const calendarDays = [];
    for(let i=0; i < firstDay; i++ ){
        calendarDays.push(<td key={`empty-${i}`}></td>);
    }

    for(let day = 1; day <= dayInMonth; day++){
        calendarDays.push(
            <td key={day} className ={day === weddingDay ? 'wedding_day' : ''}>{day}</td>
        )
    }

    const rows = [];
    for(let i = 0; i < calendarDays.length; i += 7){
        const week = calendarDays.slice(i, i + 7);
        rows.push(
            <tr key={`row-${i}`}>
                {week.map((day, index) => (
                    <td key={index} className ={Number(day.key) === weddingDay ? "wedding_day" : (index === 0) ? 'sunday' : ''}>
                        {day.props.children}   
                    </td> // day가 아니라 day.prors.children 사용
                ))}
            </tr>
            
        );
       
    }

    
    //console.log(index);

    return(
        <div>
            <span>11월</span>
            <table>
                <thead>
                    <tr>
                        {dayOfWeek.map((day, index) => (
                            <th key={index} className={index === 0 ? 'sunday' : ''} >{day}</th>
                            
                        ))}
                        
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );



}
export default Calendar;