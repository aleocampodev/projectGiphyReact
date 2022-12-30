import { useState } from "react"

const AddCategory = ({onNewCategory}) => {
	const [inputValue, setInputValue]=useState('')

	const handleValue = ({target}) => {
		setInputValue(target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if(inputValue.trim().length >= 1) return
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
		<button onClick={onSubmit}>Buscar</button>
		<button>Busqueda avanzada</button>
	</form>)
}

export default AddCategory