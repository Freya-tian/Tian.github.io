import { useCallback,memo  } from 'react';
import { Handle, Position } from 'reactflow';
 
const handleStyle = { left: 10 };
 
function CustomNode({ data }) { 
 
  return (
    <>
      
      <table>
        <th>
        {data.label} 
        </th>
        <td>
        {data.value}
        </td>
        
      </table>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </>
  );
}
export default memo (CustomNode);