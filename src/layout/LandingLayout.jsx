import React from 'react'
import PropTypes from 'prop-types'
import MainMenu from 'src/components/pageBlock/MainMenu';

const LandingLayout = props => {
  
  const {component: Component, ...rest} = props

  return (
    <div>
      <div>
        <MainMenu />
      </div>
      <Component {...rest} />
    </div>
  )
}

LandingLayout.propTypes = {
  component: PropTypes.elementType.isRequired
}

export default LandingLayout
