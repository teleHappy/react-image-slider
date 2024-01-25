import { ImageSlider } from "./features/ImageSlider"
import { ImageSliderContextProvider } from "./contexts/ImageSliderContextProvider"

export default function App() {
  return (

    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "auto",
        margin: "0 auto",
      }}
    >
      <ImageSliderContextProvider>
        <ImageSlider />
      </ImageSliderContextProvider>
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>
  )
}
