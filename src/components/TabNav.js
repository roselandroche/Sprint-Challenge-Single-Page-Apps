import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledTabNav = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
    font-size: 18px;
`;

function TabNav() {
    return (
        <StyledTabNav className='TabNav'>
            <NavLink to='/characters'>Characters</NavLink>
            <NavLink to='/locations'>Locations</NavLink>
            <NavLink to='/episodes'>Episodes</NavLink>
        </StyledTabNav>
    )
}

export default TabNav