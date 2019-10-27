import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const ControlBar = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
`
const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 25px 1fr;
  align-items: center;
`
const SearchBar = styled.input`
  width: 100%;
  font-size: 0.8rem;
`

const Home = () => {
  return (
    <div>
      <ControlBar>
        <SearchWrapper>
          <FontAwesomeIcon icon={faSearch} />
          <SearchBar
            type="text"
            name="search"
            id="search"
            placeholder="Search fonts"
          />
        </SearchWrapper>
        <select name="options" id="options">
          <option value="sentence">Sentence</option>
          <option value="alphabet">Alphabet</option>
          <option value="Paragraph">Paragraph</option>
          <option value="numerals">Numerals</option>
          <option value="custom">Custom</option>
        </select>
        <input
          type="text"
          name="lorem"
          id="lorem"
          placeholder="Type something"
        />
        <div>
          <select name="fontsize" id="fontsize">
            <option value="8">8px</option>
            <option value="12">12px</option>
            <option value="14">14px</option>
            <option value="20">20px</option>
            <option value="24">24px</option>
            <option value="32">32px</option>
            <option value="40">40px</option>
            <option value="64">64px</option>
            <option value="96">96px</option>
            <option value="120">120px</option>
            <option value="184">184px</option>
            <option value="280">184px</option>
          </select>
          <div>
            <input
              type="range"
              name="fontsize"
              id="fontsize-range"
              min="8"
              max="280"
              step="1"
            />
          </div>
        </div>
        <button type="button">paint bucket</button>
        <button type="button">grid</button>
        <button type="button">reset</button>
      </ControlBar>
      <div>
        <select name="categories" id="categories">
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
          <option value="display">Display</option>
          <option value="handwriting">Handwriting</option>
          <option value="monospace">Monospace</option>
        </select>
        <select name="font-properties" id="font-properties">
          <option value="styles">Number of styles</option>
          <option value="weight">Thickness</option>
        </select>
      </div>
      <select name="sort" id="sort">
        <option value="trending">Trending</option>
        <option value="popular">Most Popular</option>
        <option value="newest">Newest</option>
        <option value="name">Name</option>
      </select>
      <div>
        <h1>Font Catalog</h1>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
        <div>
          <div>
            <div>
              <p>NAME</p>
              <p>Author (10 styles)</p>
            </div>
            <button type="button">+</button>
          </div>
          <p>Consequat nostrud amet duis ullamco enim Lorem.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
