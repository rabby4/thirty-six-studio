import { useEffect } from "react"
import Canvas from "./Canvas"
import data from "./data"
import LocomotiveScroll from "locomotive-scroll"

function App() {
	useEffect(() => {
		const locomotiveScroll = new LocomotiveScroll()
	}, [])

	return (
		<>
			<div className="w-full relative min-h-screen ">
				{data[0].map((canvasDetails, index) => (
					<Canvas key={index} details={canvasDetails} />
				))}
				<div className="w-full h-screen text-white">
					<nav className="fixed top-0 left-0 w-full p-8 flex justify-between z-50">
						<div className="brand text-2xl font-semibold">ThirtySixStudios</div>
						<div className="links flex gap-10">
							{["Home", "About", "Projects", "Contact"].map((link, index) => (
								<a key={index} href={`#${link.toLocaleLowerCase()}`}>
									{link}
								</a>
							))}
						</div>
					</nav>
				</div>
			</div>
		</>
	)
}

export default App
