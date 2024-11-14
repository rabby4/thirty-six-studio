/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import canvasImage from "./canvasImage"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Canvas = ({ details }) => {
	const { startIndex, numImages, duration, size, top, left, zIndex } = details
	const [index, setIndex] = useState({ value: startIndex })
	const canvasRef = useRef(null)

	useGSAP(() => {
		gsap.to(index, {
			value: startIndex + numImages - 1,
			duration: duration,
			repeat: -1,
			ease: "linear",
			onUpdate: () => {
				setIndex({ value: Math.round(index.value) })
			},
		})
	})

	useEffect(() => {
		const scale = window.devicePixelRatio
		const canvas = canvasRef.current
		const context = canvas.getContext("2d")
		const image = new Image()
		image.src = canvasImage[index.value]
		image.onload = () => {
			canvas.width = canvas.offsetWidth * scale
			canvas.height = canvas.offsetHeight * scale
			canvas.style.width = canvas.offsetWidth + "px"
			canvas.style.width = canvas.offsetHeight + "px"
			context.scale(scale, scale)

			context.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight)
		}
	}, [index])

	return (
		<canvas
			data-scroll
			data-scroll-speed={Math.random().toFixed(1)}
			ref={canvasRef}
			id="canvas"
			className="absolute"
			style={{
				width: `${size * 1.3}px`,
				height: `${size * 1.3}px`,
				top: `${top}%`,
				left: `${left}%`,
				zIndex: `${zIndex}`,
			}}
		></canvas>
	)
}

export default Canvas
