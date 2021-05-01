import { Route } from "react-router-dom";
import { motion } from "framer-motion";
interface RouteProps {
  exact?: boolean;
  path: string;
  component: React.ReactNode;
}
export const TransitionRoute: React.FC<RouteProps> = ({
  exact,
  path,
  component,
}) => (
  <Route exact={exact} path={path}>
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {component}
    </motion.div>
  </Route>
);
