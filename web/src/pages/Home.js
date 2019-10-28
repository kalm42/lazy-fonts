import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faList, faUndo } from '@fortawesome/free-solid-svg-icons'
import PreviewTextSettingControl from '../components/PreviewTextSettingControl'
import FontSearch from '../components/FontSearch'
import SetPreviewText from '../components/SetPreviewText'
import SetFontSize from '../components/SetFontSize'
import FontEntry from '../components/FontEntry'

const ControlBar = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
`
const BlankButton = styled.button`
  background: none;
  border: none;
`
const FontCatalog = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`

const FakeFontData = [
  {
    id: '1sadcadckm',
    name: 'Fira Code',
    styles: 2,
    foundry: 'Grazil Ltd',
    fontFamily: 'Fira Code',
    taxonomy: 'monospace',
    source: 'https://dank.sh',
    css: 'https://fonts.googleapis.com/css?family=Fira+Code&display=swap',
  },
  {
    id: '2sadcadckm',
    name: 'Fira Sans',
    styles: 2,
    foundry: 'Grazil Ltd',
    fontFamily: 'Fira Sans',
    taxonomy: 'sans-serif',
    source: 'https://fonts.google.com/specimen/Roboto',
    css: 'https://fonts.googleapis.com/css?family=Fira+Sans&display=swap',
  },
  {
    id: '3sadcadckm',
    name: 'Lato',
    styles: 10,
    foundry: 'Lukasz Dziedzic',
    fontFamily: 'Lato',
    taxonomy: 'sans-serif',
    source: 'https://fonts.google.com/specimen/lato',
    css: 'https://fonts.googleapis.com/css?family=Lato&display=swap',
  },
  {
    id: '4sadcadckm',
    name: 'Liu Jian Mao Cao',
    styles: 1,
    foundry: 'Liu Zhengjiang',
    fontFamily: 'Liu Jian Mao Cao',
    taxonomy: 'cursive',
    source: 'https://fonts.google.com/specimen/lato',
    css:
      'https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap',
  },
  {
    id: '5sadcadckm',
    name: 'Nunito',
    styles: 2,
    foundry: 'Grazil Ltd',
    fontFamily: 'Nunito',
    taxonomy: 'sans-serif',
    source: 'https://dank.sh',
    css: 'https://fonts.googleapis.com/css?family=Nunito&display=swap',
  },
  {
    id: '6sadcadckm',
    name: 'Roboto',
    styles: 12,
    foundry: 'Christian Robertson',
    fontFamily: 'Roboto',
    taxonomy: 'sans-serif',
    source: 'https://fonts.google.com/specimen/Roboto',
    css: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
  },
  {
    id: '7sadcadckm',
    name: 'Roboto Slab',
    styles: 10,
    foundry: 'Lukasz Dziedzic',
    fontFamily: 'Roboto Slab',
    taxonomy: 'serif',
    source: 'https://fonts.google.com/specimen/lato',
    css: 'https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap',
  },
  {
    id: '8sadcadckm',
    name: 'Slabo 27px',
    styles: 1,
    foundry: 'Liu Zhengjiang',
    fontFamily: 'Slabo 27px',
    taxonomy: 'sans-serif',
    source: 'https://fonts.google.com/specimen/lato',
    css: 'https://fonts.googleapis.com/css?family=Slabo+27px&display=swap',
  },
]

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
      <h1>Font Catalog</h1>
      <FontCatalog>
        {FakeFontData.map(font => (
          <FontEntry key={font.id} font={{ ...font, size: fontSize }} />
        ))}
      </FontCatalog>
    </div>
  )
}

export default Home
