import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 25px 1fr;
  align-items: center;
  flex: 1;
`
const SearchBar = styled.input`
  width: 100%;
  font-size: 0.8rem;
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
`

const FontSearch = () => {
  return (
    <SearchWrapper>
      <label htmlFor="search">
        <FontAwesomeIcon icon={faSearch} />
      </label>
      <SearchBar
        type="text"
        name="search"
        id="search"
        placeholder="Search fonts"
      />
    </SearchWrapper>
  )
}

export default FontSearch
