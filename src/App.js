import './App.css';
import Account from './Account';
import Gallery from './Gallery';
import Calendar from './Calendar';
import Dday from './Dday';

function App() {
  return (

    <div className='main'>
      <div className='music'>음악</div>
      <div className='img' >
      <img className='mainImg' src={`${process.env.PUBLIC_URL}/img/main_img.jpg`}></img>
      </div>
      <div className='date'>
        <pre>2025년 11월 8일 토요일, 오전 10시 50분</pre>
        <pre>엔타워컨벤션웨딩홀, 1층 베일리홀</pre>
      </div>
      <div className='text'>
        <pre>
        캠퍼스에서 시작된 사랑이<br />
        다섯 해를 지나 결실을 맺었습니다.<br />
        이제 부부로서 첫걸음을 내딛고자 하오니,<br />
        소중한 분들의 따뜻한 축복으로<br />
        함께해 주시면 큰 기쁨이 되겠습니다.<br />
        </pre>
      </div>
      <div className='img2'>이뮈쥐</div>
      <div className='calendar'>
        <Calendar />
        <Dday />
      </div>
      <div className='gallery'>
        <Gallery />
      </div>
      <div className='parents'>
        <b>윤 근 용 · 김 해 영</b> 의 장남   <b>윤 기 섭</b><br />
        <b>이 영 호 · 송 영 화</b> 의 차녀   <b>이 수 연</b>
        <div className='tel'>
          <div className='telBtn'>
            축하 연락하기
          </div>
        </div>
      </div>
      <div className='map'>지도
      </div>
      <div className='account'>
      <Account/>
      </div>

    </div>
    

  );
}

export default App;
