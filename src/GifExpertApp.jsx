import { useState } from "react"

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
			<ul>
				<li>{category}</li>
			</ul>
		))
	}
	</>
  )
}

export default GifExpertApp