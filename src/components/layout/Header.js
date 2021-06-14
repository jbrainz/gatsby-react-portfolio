import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltips from "../tooltips/MenuToolTips"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  const handleClick = event => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }
  const handleClickAction = event => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickAction)
    return () => {
      document.removeEventListener("mousedown", handleClickAction)
    }
  }, [])
  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="logo" />
      </Link>
      <MenuWrapper ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/contact" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => handleClick(event)}
            />
          ) : (
            <MenuButton key={index} item={item} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={event => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltips isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, auto);
  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export default Header
