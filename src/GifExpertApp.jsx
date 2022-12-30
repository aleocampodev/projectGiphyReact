import { useState } from "react"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {
	const [categories, setCategories] = useState(["drag0n ball", "smile"])
	const addNewCategory = () => {
		setCategories([
			...categories,
			"hello"
		])
	}
  return (
	<>
	<h2>GifExpertApp</h2>
	<button onClick={addNewCategory}>Agregar</button>
	{
		categories.map(category => (
			<GifGrid category={category} key={category}/>
		))
	}
	</>
  )
}

export default GifExpertApp