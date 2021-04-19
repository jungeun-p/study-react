// component 생성
function LikeButton() {
  // React === react.development 의 전역변수 / useState로 상태값 변경
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  // React 요소를 반환하는 createElement 함수
  return React.createElement(
    // 1. 태그
    "button",
    // 2. 속성값
    { onClick: () => setLiked(!liked) },
    // 3. children
    text
  );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <LikeButton />
      <span style={{ marginRight: 10 }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

// root === id인 div에 rendering
const domContainer = document.getElementById("root");
// react-dom.development.js 전역변수
// domContainer에 react element rendering
ReactDOM.render(React.createElement(Container), domContainer);
