# Momentum

**시계·인사말·날씨·할 일을 한 화면에 모은 개인 대시보드 — 바닐라 JS로 상태를 직접 관리했습니다**

[![JS](https://img.shields.io/badge/Vanilla%20JS-no%20framework-F7DF1E?logo=javascript&logoColor=black)](#기술-스택)
[![Storage](https://img.shields.io/badge/localStorage-persist-informational)](#무엇을-배웠나)

Momentum 확장 프로그램을 참고해 만든 개인 대시보드입니다.
로그인한 사용자 이름으로 인사하고, 시계·랜덤 배경·현재 위치 날씨·할 일 목록을 한 화면에 둡니다.

## 무엇을 배웠나

- **상태를 어디에 두는가** — 할 일을 지울 때 배열과 화면을 각각 갱신해야 해서, 한쪽만 고치면 어긋났습니다. 프레임워크 없이 만들다 보니 화면과 데이터를 직접 맞춰야 했고, 상태 관리 라이브러리가 왜 필요한지 체감했습니다
- **localStorage로 새로고침을 견디기** — 사용자 이름과 할 일이 새로고침에도 남도록 저장·복원 흐름을 만들었습니다
- **비동기 API 호출** — Geolocation으로 좌표를 얻고 날씨 API를 호출하는 순서를 다뤘습니다
- **기능별 파일 분리** — 시계·인사말·할 일·배경·명언·날씨를 각각의 JS 파일로 나누고 CSS도 기능별로 분리해 서로 얽히지 않게 했습니다

## 기능

시계 · 사용자 인사말 · 랜덤 배경 · 랜덤 명언 · 현재 위치 날씨 · 할 일 목록(추가·삭제·유지)

## 기술 스택

HTML5, CSS3, Vanilla JavaScript, Web Storage API, Geolocation API

## 실행

`js/weather.js`의 `API_KEY`에 [OpenWeatherMap](https://openweathermap.org/api) 무료 키를 넣고,
`index.html`을 브라우저로 열어 이름을 입력하면 됩니다. 날씨는 위치 권한이 필요합니다.

> 클라이언트 전용 정적 페이지라 키가 브라우저에 노출됩니다. **사용량 제한이 걸린 무료 키만 사용하세요.**

## 범위와 조건

- **JavaScript 학습 프로젝트입니다.** 서버가 없어 데이터는 브라우저에만 저장됩니다.
- 날씨는 브라우저 위치 권한을 거부하면 표시되지 않습니다.

## 만든 사람

**Jigwan Joe** — [@crushonyou2](https://github.com/crushonyou2) · jigwan.joe@gmail.com
