import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/feather/home';
import { user } from 'react-icons-kit/feather/user';
import { bell } from 'react-icons-kit/feather/bell';
import { bookmark } from 'react-icons-kit/feather/bookmark';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Sidebar = () => {
 return (
  <Wrapper>
   <CritterLogo />
   <ul>
    <li>
     <NavLink exact to="/">
      <IconMenu icon={home} size={23} />
      <span>Home</span>
     </NavLink>
    </li>
    <li>
     <NavLink exact to='/:profileId'>
      <IconMenu icon={user} size={23} />
      <span>Profile</span>
     </NavLink>
    </li>
    <li>
     <NavLink exact to="/notifications">
      <IconMenu icon={bell} size={23} />
      <span>Notifications</span>
     </NavLink>
    </li>
    <li>
     <NavLink exact to="/bookmarks">
      <IconMenu icon={bookmark} size={23} />
      <span>Bookmarks</span>
     </NavLink>
    </li>
   </ul>
  </Wrapper>
 );
};


const Wrapper = styled.div`
width: 200px;
ul{
 list-style: none;
 font-weight: 700;
}
&.active {
 color: hsl(258deg, 100%, 50%);
}
`;

const CritterLogo = styled(Logo)`
width: 50px;
margin-left: 10px;
`;

const IconMenu = styled(Icon)`
padding-right: 12px;

`;


export default Sidebar;