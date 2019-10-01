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

const TechIcon = (props) => {
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
        <IconWrapper data-tip={props.title} data-for={props.id} data-delay-show='300'>
            { props.icon === "cplusplus" ?
                <HardCodedIcon src={cplusplus}/> : 
                <IconContext.Provider value={{ size: '1.2em'}}>
                    {getIcon(props.type, props.icon)}
                </IconContext.Provider>
            }
            <ReactToolTip id={props.id} effect="solid"/>
        </IconWrapper>
    )
}

export default TechIcon