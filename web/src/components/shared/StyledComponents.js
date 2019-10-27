import styled from 'styled-components'

export const DropDownButton = styled.button`
  font-size: 1rem;
  padding: 10px;
  background: ${props => (props.open ? 'var(--red)' : 'none')};
  border-radius: 4px;
  border: none;
  transition: all 400ms ease;
  &:hover {
    background-color: var(--red);
  }
`
export const DropDown = styled.div`
  transform-origin: left top 0px;
  box-sizing: inherit;
  position: fixed;
  top: 150px;
  z-index: 100;
  max-height: calc(100vh - 10px);
  overflow: auto;
  transition: all 200ms ease;
  background-color: white;
  ${props => !props.open && 'display: none;'}
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`
export const ListItem = styled.li`
  flex: 1;
`
export const Option = styled.button`
  padding: 20px;
  width: 100%;
  background: white;
  border: none;
  font-size: 1rem;
  transition: all 200ms ease;
  &:hover {
    background-color: var(--red);
    font-weight: 500;
  }
  &:active {
    font-weight: 300;
  }
`
