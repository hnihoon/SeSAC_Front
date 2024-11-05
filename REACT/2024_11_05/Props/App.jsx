import Welcome from "./welcome"
import Card from "./card"
import Button from "./Button"

function App() {
  return (
    <>
    <Welcome
      name={"김동훈"}
    >
    </Welcome>
    <Card
    card={{
      title: "제목",
      content: "내용",
    }}
    size={100}
    ></Card>

    <Button
      data={{
        color:"blue",
        text:"확인"
      }}
    >
    </Button>
    <Button
      data={{
        color:"red",
        text:"취소"
      }}
    >
    </Button>
    <Button
      data={{
        color:"gray",
        text:"보류"
      }}
    >
    </Button>
    <Button
      data={{
        color:"palevioletred",
        text:"1억년"
      }}
    >
    </Button>
    </>
  )
}

export default App
