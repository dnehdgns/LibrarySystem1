import React from 'react';
import './assets/css/reset.css'
import Lsystem from './library/Lsystem';


const App = () => {
  return (
    <div>
      <Lsystem />
    </div>
  );
};

export default App;

/*
  useEffect

  Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.

  side effect : 부수효과
                함수 결과값을 반환하는것 외에 다른일을 하는것
  side effects : 데이터 가져오기, 구독(subscription) 설정하기, 수동으로 React 컴포넌트의 DOM을 수정하는 것까지 이 모든 것이 side effects입니다

  class 생명주기 : 
  componentDidMount : 처음에 한번만 실행
  componentDidUpdate : 수정 갱신
  componentWillUnmount : 종료시, 로딩이 끝난후 ..

  위 세가지를 합쳐놓은것
  userEffect

  형식)
  useEffect(Callback , [의존값])

  형식1) mount 한번만 / update 갱신(수정) - 계속실행 (많이 사용하지 않는다.)
  useEffect( () => {
    실행문
  })

  형식2) mount 한번만 
  useEffect( () => {
    실행문
  },[])

  형식3) mount 한번만 / 특정 state나 props 가 변경될때 update
  ** props가 변경될때가 많다
  useEffect( () => {
    실행문
  },[state, props])

  형식4) 정리(clean-up) : 뒷정리
  mount 한번만 / 특정 state나 props 가 변경될때 update
  ** props가 변경될때가 많다


  useEffect( () => {
    실행문

    뒷정리
    return() => {
      실행문
    }
  },[state, props])

  useEffect : 화면에 그려진 후
  userLayoutEffect : 화면에 그려지기 전

  사용범위
  1. props를 받아서 갱신
  2. 외부 api (비동기 처리 - ajax)
  3. 시간 - setTimeout / setInterval
  4. 외부 라이브러리

*/