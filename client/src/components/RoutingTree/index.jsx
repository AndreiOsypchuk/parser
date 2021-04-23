import React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
export const RoutingTree = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={200}>
          <Switch location={location}>{children}</Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
