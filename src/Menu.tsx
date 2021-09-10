import React, { useLayoutEffect, useState, FC } from 'react';

interface IMenuItemProps {
  to: string;
}

const MenuItem: FC<IMenuItemProps> = ({ children, to }) => {
  return (
    <a href={ to }>
      <li>{children}</li>
    </a>
  )
}

export const Menu: FC = () => {
  return (
    <ul>
      <MenuItem to="/home">Home</MenuItem>
      <MenuItem to="/about">About me</MenuItem>
      <MenuItem to="/projects">Projects</MenuItem>
      <MenuItem to="/blog">Blog</MenuItem>
    </ul>
  );  
}


