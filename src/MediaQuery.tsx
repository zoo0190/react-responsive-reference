import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Mobile: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:320px)',
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

export const Tablet: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({
    query: '(min-width:321px) and (max-width:1023px)',
  });
  return <React.Fragment>{isTablet && children}</React.Fragment>;
};

export const PC: React.FC = ({ children }) => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};
