import React from 'react';

const TabContent = ({ isActive, children }) => {
  return isActive ? <div className="tab-content">{children}</div> : null;
};

export default TabContent;
