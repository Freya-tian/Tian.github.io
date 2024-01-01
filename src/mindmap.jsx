
import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'react-flow-renderer';
import 'reactflow/dist/style.css';
import './App.css';
import {Node} from './Data/node'
import {Edge} from './Data/edge'

function Mindmap() {

  return (
  <div id='container' >
    <ReactFlow nodes={Node}  
     edges={Edge}
     
    >
      <Background color="#aaa" gap={16} />
      <Controls />
    </ReactFlow>
  </div>
  );
}

export default Mindmap;
