import { useEffect, useState} from 'react';

const Dday = () => {
    const targetDate = new Date('2025-11-08T10:50:00').getTime();
  
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;
  
      const MS_IN_SECOND = 1000;
      const MS_IN_MINUTE = MS_IN_SECOND * 60;
      const MS_IN_HOUR = MS_IN_MINUTE * 60;
      const MS_IN_DAY = MS_IN_HOUR * 24;
  
      const days = Math.floor(diff / MS_IN_DAY);
      const hours = Math.floor((diff % MS_IN_DAY) / MS_IN_HOUR);
      const minutes = Math.floor((diff % MS_IN_HOUR) / MS_IN_MINUTE);
      const seconds = Math.floor((diff % MS_IN_MINUTE) / MS_IN_SECOND);
  
      return { days, hours, minutes, seconds };
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer); // cleanup
    }, []);
  
    return (
      <div className="Dday">
        <p>
          {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
        </p>
        <p>기섭 ❤ 수연 결혼식이 <span>{timeLeft.days}일</span> 남았습니다.</p>
      </div>
    );
  };
  

export default Dday;