import { ImageSliderContextProvider } from "../../src/contexts/ImageSliderContextProvider";

export default function ImageSliderDecorator(Story: any) {

    return (
        <div>
            <ImageSliderContextProvider >
                <Story />
            </ImageSliderContextProvider>
        </div>
    )
}