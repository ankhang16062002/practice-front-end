import React from 'react'
import PropTypes from 'prop-types'

const Move = ({text}) => {
    return (
        <div className="move">
            <span>{text}</span>
            <div className="move__img">
            <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d14818767ac37ac193eccf4_circle-container.svg" alt="" />
            <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d24aa633c6cae18850994a2_arrow.svg" alt="" />
            </div>
        </div>
    )
}

export default Move

Move.propTypes = {
    text: PropTypes.string,
}
