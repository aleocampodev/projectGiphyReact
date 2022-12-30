import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {
	const [categories, setCategories] = useState(["drag0n ball", "smile"])
	


	const onAddNewCategory= (newCategory) => {
		if(categories.includes(newCategory))return
		setCategories([newCategory, ...categories])

	}

  return (
	<>
	<h2>GifExpertApp</h2>
	<AddCategory  onNewCategory = {(value) => onAddNewCategory(value)}/>
	<button onClick={addNewCategory} >Agregar</button>
	{
		categories.map(category => (
			<GifGrid category={category} key={category}/>
		))
	}
	
	</>
  )
}

export default GifExpertApp