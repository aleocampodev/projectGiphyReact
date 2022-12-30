import { useState } from "react"
<<<<<<< HEAD
import AddCategory from "./components/AddCategory"
=======
import GifGrid from "./components/GifGrid"
>>>>>>> main

const GifExpertApp = () => {
	const [categories, setCategories] = useState(["drag0n ball", "smile"])
	//const [inputValue, setInputValue]=useState('')
	/*const addNewCategory = () => {
		setCategories([
			...categories,
			"hello"
		])
	}*/


	const onAddNewCategory= (newCategory) => {
		if(categories.includes(newCategory))return
		setCategories([newCategory, ...categories])

	}

	/*const onSubmit = (e) => {
		e.preventDefault()
		if(inputValue.trim().length <= 1)return 
		setCategories([
			...categories,
			inputValue
		])
		setInputValue('')
	}*/
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