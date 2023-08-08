import React from 'react';
import FlowDiagram from '../components/FlowDiagram';
import { usernameNodes } from '../data/nodeData';
import { userNameEdgesData } from '../data/edgesData';

const Username = () => {
  return (
    <section style={{ height: '80vh', width: 'auto' }}>
      <h3>Username Results</h3>
      <FlowDiagram nodes={usernameNodes} edges={userNameEdgesData} />
    </section>
  );
};

export default Username;
