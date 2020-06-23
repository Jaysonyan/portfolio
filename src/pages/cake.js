import React from 'react'
import styled from 'styled-components'
import Confetti from 'react-confetti'

const PageWrapper = styled.div`
	display: grid;
  justify-items: center;
  align-items: center;
	height: 100vh;
`

const Cake = () => (
	<PageWrapper>
		<h1>Yay!!! Happy Birthday!!! 🤩</h1>
		<img src="https://vignette.wikia.nocookie.net/fnaf-rp/images/d/d3/Cakeboss.jpg/revision/latest/scale-to-width-down/340?cb=20190421022433"/>
		<Confetti width={2000} height={2000} recycle={false} numberOfPieces={400}/>
	</PageWrapper>
)

export default Cake
