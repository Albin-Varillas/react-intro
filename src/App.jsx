import "./App.css"
import Card from "./Card"
const videos = [
    {
        title: "Epic brank",
        description: "yolo",
    },
    {
        title: "Epic brank 2",
        description: "yolo again",
    },
]

function App() {
    const happy = true
    return (
        <div className="App">
            {happy && ":)"}
            {videos.length === 0
                ? "no videos"
                : videos.map((video) => (
                      <Card
                          title={video.title}
                          description={video.description}
                      />
                  ))}
        </div>
    )
}

export default App
