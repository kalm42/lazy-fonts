import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  border-top: 1px solid black;
  padding: 15px;
`
const Header = styled.div`
  display: flex;
`
const Details = styled.div`
  flex: 1;
`
const AddFontBtn = styled.button`
  position: relative;
  top: 0;
  right: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  background: var(--red);
  color: white;
`
const FontExample = styled.p`
  font-family: ${props => `'${props.font.fontFamily}', ${props.font.taxonomy}`};
  font-size: ${props => `${props.font.size}px`};
`

const FontEntry = ({ font, text }) => {
  return (
    <Wrapper>
      <Helmet>
        <link rel="stylesheet" href={font.css} />
      </Helmet>
      <Header>
        <Details>
          <p>{font.name}</p>
          <p>
            {font.foundry} ({font.styles} styles)
          </p>
        </Details>
        <AddFontBtn type="button">
          <FontAwesomeIcon icon={faPlus} />
        </AddFontBtn>
      </Header>
      <FontExample font={font}>
        {text.length ? text : 'Consequat nostrud amet duis ullamco enim Lorem.'}
      </FontExample>
    </Wrapper>
  )
}

FontEntry.propTypes = {
  font: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    styles: PropTypes.number,
    foundry: PropTypes.string,
    fontFamily: PropTypes.string,
    taxonomy: PropTypes.string,
    source: PropTypes.string,
    css: PropTypes.string,
  }).isRequired,
  text: PropTypes.string.isRequired,
}

export default FontEntry
