import React, { useState } from 'react';
import ScriptNodeEditor from '../components/ScriptNodeEditor.tsx';
import ScriptFlowPreview from '../components/ScriptFlowPreview.tsx';

export default function AdminView() {
  const [nodes, setNodes] = useState([]);

  return (
    <div>
      <h2>Edit Script Workflow</h2>
      <ScriptNodeEditor nodes={nodes} setNodes={setNodes} />
      <h2>Preview</h2>
      <ScriptFlowPreview nodes={nodes} />
    </div>
  );
}