import React from 'react';
import styled from 'styled-components';


export const CurrentUserProvider = ({ children }) => {
 const [currentUser, setCurrentUser] = React.useState(null);
 const [status, setStatus] = React.useState('loading');

 return (
  <CurrentUserContext.Provider value={{ currentUser, status }}>{children}</CurrentUserContext.Provider>
 );
}