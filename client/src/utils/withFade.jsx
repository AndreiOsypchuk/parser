import React from 'react';
const styles = {};
styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

export const Fade = ({ ComponentToFade }) => {
  return (
    <div style={styles.fill}>
      <ComponentToFade />
    </div>
  );
};
export const withFade = (component) => {
  return () => <Fade ComponentToFade={component} />;
};
