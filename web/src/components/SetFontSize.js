/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  DropDown,
  DropDownButton,
  List,
  ListItem,
  Option,
} from './shared/StyledComponents'

const SFSWrapper = styled.div`
  display: flex;
  align-items: center;
`
const SliderThumb = css`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
  border: 1px solid #000000;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
`
const FontSizeRange = styled.input`
  width: 100%;
  background: transparent;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background-color: lightgray;
    border-radius: 2px;
  }
  &::-webkit-slider-thumb {
    ${SliderThumb}
    -webkit-appearance: none;
    margin-top: -14px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: lightgray;
  }
  &::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: lightgray;
    border-radius: 2px;
  }
  &::-moz-range-thumb {
    ${SliderThumb}
  }
  &::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: lightgrey;
    border-radius: 2px;
  }
  &::-ms-fill-upper {
    background: grey;
    border-radius: 2px;
  }
  &::-ms-thumb {
    ${SliderThumb}
  }
  &:focus::-ms-fill-lower {
    background: lightgray;
  }
  &:focus::-ms-fill-upper {
    background: grey;
  }
`

const SetFontSize = ({ fontSize, setFontSize }) => {
  const [open, setOpen] = useState(false)

  const FontSizes = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184]
  const handleClick = size => {
    setOpen(!open)
    setFontSize(size)
  }

  return (
    <SFSWrapper>
      <DropDownButton type="button" open={open} onClick={() => setOpen(!open)}>
        {fontSize}
      </DropDownButton>
      <DropDown open={open}>
        <List>
          {FontSizes.map((size, index) => (
            <ListItem key={index}>
              <Option type="button" onClick={() => handleClick(size)}>
                {size}px
              </Option>
            </ListItem>
          ))}
        </List>
      </DropDown>
      <div>
        <FontSizeRange
          type="range"
          name="fontsize"
          id="fontsize-range"
          min="8"
          max="280"
          step="1"
          value={fontSize}
          onChange={e => setFontSize(Number(e.target.value))}
        />
      </div>
    </SFSWrapper>
  )
}

SetFontSize.propTypes = {
  fontSize: PropTypes.number.isRequired,
  setFontSize: PropTypes.func.isRequired,
}

export default SetFontSize
