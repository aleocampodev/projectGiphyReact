
import { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import { getGifs } from '../helpers'
const GifGrid = ({category}) => {

	useEffect(() => {
		getGifs(category)
	},[])
	
  return (
	<>
		<h3 >{category}</h3>
	</>
  )
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

GifGrid.defaultProps = {
	category:"No hay categoria"
}

export default GifGrid