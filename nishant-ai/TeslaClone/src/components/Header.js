import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a href="https://www.tesla.com">
        <img src='/images/logo.svg' alt='TESLA' />
      </a>
      <Menu>
        {cars && cars.map((car, index) => 
          <a href="https://www.tesla.com" key={index}>{car}</a>
        )}

      </Menu>
      <RightMenu>
        <a href="https://www.tesla.com">Shop</a>
        <a href="https://www.tesla.com">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show = {burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li><a href="https://www.tesla.com">Existing Inventory</a></li>
        <li><a href="https://www.tesla.com">Used Inventory</a></li>
        <li><a href="https://www.tesla.com">Trade-in</a></li>
        <li><a href="https://www.tesla.com">Cybertruck</a></li>
        <li><a href="https://www.tesla.com">Roadster</a></li>
        {cars && cars.map((car, index) => 
          <li><a key={index} href="https://www.tesla.com">{car}</a></li>
        )}
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media(max-width: 768px){
    display: none;
  }

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }

  }
`

const CustomClose = styled(CloseIcon)`
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`