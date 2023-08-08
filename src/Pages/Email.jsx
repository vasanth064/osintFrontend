import React from 'react';
import FlowDiagram from '../components/FlowDiagram';
import { emailNodes } from '../data/nodeData';
import { emailEdgesData } from '../data/edgesData';

const Email = () => {
  return (
    <section style={{ height: '80vh', width: 'auto' }}>
      <h3>Email Results</h3>
      <FlowDiagram nodes={emailNodes} edges={emailEdgesData} />
    </section>
  );
};

export default Email;
