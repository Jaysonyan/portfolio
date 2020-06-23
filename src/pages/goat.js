import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
	display: grid;
  justify-items: center;
  align-items: center;
	height: 100vh;
`
const Button = styled.a`
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    font-family: "montserrat", sans-serif;
    font-weight: 800;
    transition: 0.3s;
    opacity: 0.5;
    :hover {
        opacity: 1;
    }
`

const Goat = () => (
	<PageWrapper>
		<h1>Ouch too bad...</h1>
		<img src="https://lh3.googleusercontent.com/proxy/OnFHTgo_8sc29ugihHOF0kBEdDn5y2gH8xY4wzUjho3rFaM1EuNbBa3zafqIxj0TobfiHGqyd846CpWtVDtsCR5FzmuGaqF9fle-zg1okL2_DKrXfBdW4WFp9QCAdQ"/>
		<Button href="/hbd">
			{"Try Again"}
		</Button>
	</PageWrapper>
)

export default Goat
