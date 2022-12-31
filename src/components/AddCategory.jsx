import { useState } from "react"

const AddCategory = ({onNewCategory}) => {
	const [inputValue, setInputValue]=useState('')

	const handleValue = ({target}) => {
		setInputValue(target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
	
		if(inputValue.trim().length <= 1) return
		onNewCategory(inputValue.trim())
		setInputValue('')
	}


	return (
	<form onSubmit={onSubmit}>
		<input
			type="text"
			placeholder="Buscar gifs"
			value={inputValue}
			onChange={handleValue}
		/>
		<button >Buscar</button>
		<button>Busqueda avanzada</button>
		<input type="submit" onClick={onSubmit}/>
	</form>)
}

export default AddCategory