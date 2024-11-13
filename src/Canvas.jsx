import { useEffect, useRef } from "react"
import canvasImage from "./canvasImage"

const Canvas = () => {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas.getContext("2d")
		const image = new Image()
		image.src = canvasImage[80]
		image.onload = () => {
			canvas.width = image.width
			canvas.height = image.height
			context.drawImage(image, 0, 0)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			id="canvas"
			className="w-[18rem] h-[18rem]"
		></canvas>
	)
}

export default Canvas
