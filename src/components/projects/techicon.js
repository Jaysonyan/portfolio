import React from 'react'
import styled from 'styled-components'
import ReactToolTip from 'react-tooltip'
import { IconContext } from 'react-icons'
import * as FontAwesome from 'react-icons/fa'
import * as Ionicons from 'react-icons/io'
import cplusplus from '../../images/cplusplus.png'

const IconWrapper = styled.a`
    margin: 2px;
`

const HardCodedIcon = styled.img`
    margin-bottom: 0;
    filter: grayscale(100%);
`

const TechIcon = ({ title, icon, type, id }) => {
    function getIcon(type, icon) {
        switch(type) {
            case "Fa":
                return React.createElement(FontAwesome[icon]);
            case "Io":
                return React.createElement(Ionicons[icon]);
            default:
                return null;
        }
    }

    return (
        <IconWrapper data-tip={title} data-for={id} data-delay-show='100'>
            { icon === "cplusplus" ?
                <HardCodedIcon src={cplusplus}/> : 
                <IconContext.Provider value={{ size: '1.2em'}}>
                    {getIcon(type, icon)}
                </IconContext.Provider>
            }
            <ReactToolTip id={id} effect="solid"/>
        </IconWrapper>
    )
}

export default TechIcon