import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const PageWrapper = styled.div`
	display: grid;
  justify-items: center;
  align-items: center;
	height: 100vh;
`

const SpoonTable = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	align-items: center;
`

const Spoon = styled.img`
	object-fit: cover
`

const AboutMe = () => (
	<PageWrapper>
	<h1>Pick a spoon... 🌚</h1>
		<SpoonTable>
			<Link to="/goat">
				<Spoon src="https://res-3.cloudinary.com/christofle/s--1pzQKvHM--/c_limit,dpr_1.0,f_auto,h_500,q_auto,w_500/media/catalog/product/S/e/Serving_20spoon_20Malmaison_20_20Silver_20plated_00018006000101_STQ_1_1.png"/>
			</Link>
			<Link to="/goat">
				<Spoon src="https://res-3.cloudinary.com/christofle/s--1pzQKvHM--/c_limit,dpr_1.0,f_auto,h_500,q_auto,w_500/media/catalog/product/S/e/Serving_20spoon_20Malmaison_20_20Silver_20plated_00018006000101_STQ_1_1.png"/>
			</Link>
			<Link to="/cake">
				<Spoon src="https://res-3.cloudinary.com/christofle/s--1pzQKvHM--/c_limit,dpr_1.0,f_auto,h_500,q_auto,w_500/media/catalog/product/S/e/Serving_20spoon_20Malmaison_20_20Silver_20plated_00018006000101_STQ_1_1.png"/>
			</Link>
		</SpoonTable>
	</PageWrapper>
)

export default AboutMe
