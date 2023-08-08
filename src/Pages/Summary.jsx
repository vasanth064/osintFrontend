import React from 'react';
import FlowDiagram from '../components/FlowDiagram';
import { summaryNodes } from '../data/nodeData';
import { summaryEdgesData } from '../data/edgesData';

const Summary = () => {
  return (
    <section style={{ height: '80vh', width: 'auto' }}>
      <h3>Summary</h3>
      <FlowDiagram nodes={summaryNodes} edges={summaryEdgesData} />
    </section>
  );
};

export default Summary;
