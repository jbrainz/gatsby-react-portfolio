import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuButton = ({ item, index, onClick }) => {
  return (
    <Link to={item.link} key={index} onClick={onClick}>
      <MenuItem>
        <img alt="icon" src={item.icon} />
        {item.title}
      </MenuItem>
    </Link>
  )
}
const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
export default MenuButton
