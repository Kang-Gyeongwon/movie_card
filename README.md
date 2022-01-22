# movie_card web

![MainScreen](./public/images/mainScreen.png)

[Movie Card App](https://movie-kang.netlify.app/)

- 영화 포스터를 카드 형태로 만들어서 클릭하면 Modal창에서 영화에 대한 내용을 확인할 수 있도록 만들게 된 웹 페이지입니다.  

- React 함수 기반컴포넌트 학습
- styled-component 를 사용하여 스타일 적용하기
- React-router-dom 을 사용하여 Modal 페이지 만들기

![Modal](./public/images/modalScreen.png)

- Array 객체를 생성 후 map()함수를 활용하여 각 Modal Page에 객체 전달하기
- 미디어쿼리(@media)를 사용하여 반응형 레이아웃

  + 450px 이하의 화면(핸드폰)
  ![phoneScreen](./public/images/phoneScreen.png)
  
  + 450px 이상 800px 이하의 화면(태블릿)
  ![tabletScreen](./public/images/tabletScreen.png)

  + 800px 이상의 화면
  ![mainScreen](./public/images/mainScreen.png)

- Netlify를 사용하여 배포하기