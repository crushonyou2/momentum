const quotes = [
  {
    quote:
      "인생에는 반드시 죽음이 있고 죽고 사는 것에는 반드시 명이 있으니 사람으로 태어나 한 번 죽는 것은 진실로 아까울 게 없는 것이다.",
    author: "정운",
  },
  {
    quote: "죽은 자를 위해 울지 말라. 그는 휴식을 취하고 있기 때문이다.",
    author: "레오나르도 다 빈치",
  },
  {
    quote:
      "겁쟁이는 죽음에 앞서 몇 번이고 죽지만 용감한 사람은 한 번밖에 죽음을 맛보지 않는다.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote:
      "인간은 시간이 부족하다고 항상 불평하면서도, 마치 시간이 무한정 있는 것처럼 행동한다.",
    author: "루키우스 안나이우스 세네카",
  },
  {
    quote: "시간은 훌륭한 스승이지만, 불행히도 모든 제자들을 죽인다.",
    author: "엑토르 베를리오즈",
  },
  {
    quote: "지식은 사랑이자, 빛이자, 통찰력이다.",
    author: "헬렌 켈러",
  },
  {
    quote: "내가 아는 모든 것은 아무 것도 모른다는 것이다.",
    author: "소크라테스",
  },
  {
    quote:
      "그들이 당신에 대해 뭐라고 쓰든 전혀 신경쓰지 말라. 다만 그것을 자세히 평가하라.",
    author: "앤디 워홀",
  },
  {
    quote: "현재가 과거와 다르길 바란다면 과거를 공부하라.",
    author: "바뤼흐 스피노자",
  },
  {
    quote:
      "많은 인생의 실패자들은 포기할 때 자신이 성공에서 얼마나 가까이 있었는지 모른다.",
    author: "토마스 A. 에디슨",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
