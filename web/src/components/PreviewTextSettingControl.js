import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {
  DropDown,
  DropDownButton,
  List,
  ListItem,
  Option,
} from './shared/StyledComponents'

const PreviewTextSettingControl = ({ setting, setPreviewText }) => {
  const [open, setOpen] = useState(false)
  const handleClick = selection => {
    setOpen(!open)
    setPreviewText(selection)
  }

  return (
    <div>
      <DropDownButton type="button" open={open} onClick={() => setOpen(!open)}>
        {setting}{' '}
        {open ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </DropDownButton>
      <DropDown open={open}>
        <List>
          <ListItem>
            <Option type="button" onClick={() => handleClick('Sentence')}>
              Sentence
            </Option>
          </ListItem>
          <ListItem>
            <Option type="button" onClick={() => handleClick('Alphabet')}>
              Alphabet
            </Option>
          </ListItem>
          <ListItem>
            <Option type="button" onClick={() => handleClick('Paragraph')}>
              Paragraph
            </Option>
          </ListItem>
          <ListItem>
            <Option type="button" onClick={() => handleClick('Numerals')}>
              Numerals
            </Option>
          </ListItem>
          <ListItem>
            <Option type="button" onClick={() => handleClick('Custom')}>
              Custom
            </Option>
          </ListItem>
        </List>
      </DropDown>
    </div>
  )
}

PreviewTextSettingControl.propTypes = {
  setting: PropTypes.string.isRequired,
  setPreviewText: PropTypes.func.isRequired,
}

export default PreviewTextSettingControl
