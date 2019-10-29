import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PreviewText = styled.input`
  width: 100%;
  font-size: 0.8rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
`

const SetPreviewText = ({ text, setText }) => {
  return (
    <div>
      <PreviewText
        type="text"
        name="lorem"
        id="lorem"
        placeholder="Type something"
        value={text}
        onChange={e => setText(e.currentTarget.value)}
      />
    </div>
  )
}

SetPreviewText.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
}

export default SetPreviewText
