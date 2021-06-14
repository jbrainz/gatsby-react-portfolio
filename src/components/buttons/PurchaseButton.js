import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Caption2, SmallText } from "../Syles/TextStyles"

const PurchaseButton = ({ title, subtitle }) => {
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" className="icon" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "My Projects"}</Title>
          <Subtitle>{subtitle || "5+"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

export default PurchaseButton

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(30px);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  *,
  & {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    .icon {
      transform: scale(1.2);
    }
  }
`
const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

const Icon = styled.img`
  width: 29px;
  height: 29px;
`

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  ${Wrapper}: hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
  ${Wrapper}::hover & {
    filter: hue-rotate(30deg) brightness(150%) saturate(120%);
  }
`
