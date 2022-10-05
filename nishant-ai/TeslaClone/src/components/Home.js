import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title = 'Model S'
            description = 'Order Online for Touchless Delivery'
            leftBtnText = 'CUSTOM ORDER'
            rightBtnText = 'EXISTING INVENTORY'
            backgroundImg = 'model-s.jpg'
        />
        <Section 
            title = 'Model Y'
            description = 'Order Online for Touchless Delivery'
            leftBtnText = 'CUSTOM ORDER'
            rightBtnText = 'EXISTING INVENTORY'
            backgroundImg = 'model-y.jpg'
        />
        <Section 
            title = 'Model 3'
            description = 'Order Online for Touchless Delivery'
            leftBtnText = 'CUSTOM ORDER'
            rightBtnText = 'EXISTING INVENTORY'
            backgroundImg = 'model-3.jpg'
        />
        <Section 
            title = 'Model X'
            description = 'Order Online for Touchless Delivery'
            leftBtnText = 'CUSTOM ORDER'
            rightBtnText = 'EXISTING INVENTORY'
            backgroundImg = 'model-x.jpg'
        />
        <Section 
            title = 'Lowest Cost Solar Panels in America'
            description = 'Money-back guarantee'
            leftBtnText = 'order now'
            rightBtnText = 'Learn More'
            backgroundImg = 'solar-panel.jpg'
        />
        <Section 
            title = 'Solar for New Roofs'
            description = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
            leftBtnText = 'order now'
            rightBtnText = 'Learn More'
            backgroundImg = 'solar-roof.jpg'
        />
        <Section 
            title = 'Accessories'
            description = ''
            leftBtnText = 'Shop now'
            backgroundImg = 'accessories.jpg'
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`