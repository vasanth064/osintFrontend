import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

function FlowDiagram({ nodes, edges }) {
  return (
    <ReactFlow nodes={nodes} edges={edges} fitView>
      <Background />
    </ReactFlow>
  );
}

export default FlowDiagram;
