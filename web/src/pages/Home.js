import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faList, faUndo } from '@fortawesome/free-solid-svg-icons'
import PreviewTextSettingControl from '../components/PreviewTextSettingControl'
import FontSearch from '../components/FontSearch'
import SetPreviewText from '../components/SetPreviewText'
import SetFontSize from '../components/SetFontSize'

const ControlBar = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
`
const BlankButton = styled.button`
  background: none;
  border: none;
`

const Home = () => {
  const [loremDisplay, setLoremDisplay] = useState('Sentence')
  const [fontSize, setFontSize] = useState(16)
  const [toggleGrid, setToggleGrid] = useState(true)

  const reset = () => {
    setLoremDisplay('Sentence')
    setFontSize(16)
    setToggleGrid(true)
  }

  return (
    <div>
      <ControlBar>
        <FontSearch />
        <PreviewTextSettingControl
          setting={loremDisplay}
          setPreviewText={setLoremDisplay}
        />
        <SetPreviewText />
        <SetFontSize fontSize={fontSize} setFontSize={setFontSize} />
        <BlankButton type="button" onClick={() => setToggleGrid(!toggleGrid)}>
          {toggleGrid ? (
            <FontAwesomeIcon icon={faThLarge} />
          ) : (
            <FontAwesomeIcon icon={faList} />
          )}
        </BlankButton>
        <BlankButton type="button" onClick={reset}>
          <FontAwesomeIcon icon={faUndo} />
        </BlankButton>
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
