// 이미지들을 자동으로 불러오는 함수 (CRA용)
function importAll(r) {
    return r.keys().map((key) => ({
      path: key,
      src: r(key),
    }));
  }
  
  // 이미지 폴더 경로: src/img (하위 폴더는 불러오지 않음)
  const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
  
  export default images;
  