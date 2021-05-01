import React from "react";
import { Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const TransitionTree: React.FC = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        {children}
      </Switch>
    </AnimatePresence>
  );
};
