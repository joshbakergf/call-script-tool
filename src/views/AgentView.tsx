import React, { useState } from 'react';
import ScriptRunner from '../components/ScriptRunner.tsx';

export default function AgentView() {
  const [sessionId, setSessionId] = useState(null);

  return (
    <div>
      <h2>Call Script</h2>
      <ScriptRunner sessionId={sessionId} />
    </div>
  );
}