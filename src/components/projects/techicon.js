import React from 'react'
import styled from 'styled-components'
import ReactToolTip from 'react-tooltip'
import { IconContext } from 'react-icons'
import * as FontAwesome from 'react-icons/fa'
import * as Ionicons from 'react-icons/io'

const IconWrapper = styled.a`
    margin: 2px;
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
        <IconWrapper data-tip={props.title} data-delay-show='500'>
            <IconContext.Provider value={{ size: '1.2em'}}>
                {getIcon(props.type, props.icon)}
            </IconContext.Provider>
            <ReactToolTip place="top" type="dark" effect="solid"/>
        </IconWrapper>
    )
}

export default TechIcon