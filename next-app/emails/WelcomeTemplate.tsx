import React from 'react'
import {Html, Body, Text, Link, Container, Preview} from "@react-email/components"


const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Body>Welcome aboard!
            <Container>
                <Text>Hello {name}</Text>
                <Link>www.codewithmosh.com</Link>
            </Container>
        </Body>
    </Html>
  )
}



export default WelcomeTemplate
