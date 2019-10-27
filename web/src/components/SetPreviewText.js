import React from 'react'
import styled from 'styled-components'

const PreviewText = styled.input`
  width: 100%;
  font-size: 0.8rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
`

const SetPreviewText = () => {
  return (
    <div>
      <PreviewText
        type="text"
        name="lorem"
        id="lorem"
        placeholder="Type something"
      />
    </div>
  )
}

export default SetPreviewText
