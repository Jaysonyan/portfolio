import React from 'react'
import styled from 'styled-components'

const Name = styled.div`
    font-family: "Work Sans", monospace;
    font-size: 64px;
    @media (max-width: 768px) {
        grid-row: 2/2;
    }
`

const ProfileText = () => (
    <div>
        <Name>Jayson Yan</Name>
    </div>
)

export default ProfileText