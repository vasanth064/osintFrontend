import React from 'react';
import FlowDiagram from '../components/FlowDiagram';
import { mobileNodes } from '../data/nodeData';
import { mobileEdgesData } from '../data/edgesData';

const Mobile = () => {
  return (
    <section style={{ height: '80vh', width: 'auto' }}>
      <h3>Mobile Results</h3>
      <FlowDiagram nodes={mobileNodes} edges={mobileEdgesData} />
    </section>
  );
};

export default Mobile;
