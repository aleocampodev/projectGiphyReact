import PropTypes from 'prop-types'

const GifGrid = ({category,key}) => {
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