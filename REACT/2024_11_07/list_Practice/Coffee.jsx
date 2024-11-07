import "./Coffee.css"

const menus = [
  {id: "coffee", menu: "아메리카노", price: "5.0/5.5"},
  {id: "coffee", menu: "카페라떼", price: "6.0/6.5"},
  {id: "coffee", menu: "바닐라라떼", price: "6.0/6.5"},
  {id: "coffee", menu: "카라멜마끼아또", price: "6.5/7.0"},
  {id: "ade", menu: "레몬에이드", price: "6.0"},
  {id: "ade", menu: "자몽에이드", price: "6.0"},
  {id: "ade", menu: "유자에이드", price: "6.0"}
]

export default function Coffee() {
  // `coffee`와 `ade`로 메뉴 필터링
  const coffeemenu = menus
    .filter(menu => menu.id === "coffee")  // 필터링 조건
    .map(menu => (
      <div className="menu" key={menu.menu}>
        <span className="menu-name">{menu.menu}</span>
        <span>{menu.price}</span>
      </div>
    ));

  const ademenu = menus
    .filter(menu => menu.id === "ade")
    .map(menu => (
      <div className="menu" key={menu.menu}>
        <span className="menu-name">{menu.menu}</span>
        <span>{menu.price}</span>
      </div>
    ));

  return (
    <>
      <h1>MENU</h1>
      <div className="menu-board">
        <div className="menu-category">COFFEE</div>
        <hr />
        <div>{coffeemenu}</div>
        
        <div className="menu-category">ADE</div>
        <hr />
        <div>{ademenu}</div>
      </div>
    </>
  );
}
