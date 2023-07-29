import cn from 'clsx';
import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Position
} from 'reactflow';
import StackNode from './StackNode';
import 'reactflow/dist/style.css';
import styles from './style.module.css'

const nodeTypes = {
  stack: StackNode
}

const nodeDefaults = {
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
  style: {
    borderRadius: '0%',
    backgroundColor: '#fff',
    fontSize: 20,
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const initialNodes = [
  { id: '1', type: 'stack', position: { x: 50, y: 50 }, data: { label: "Rock", emoji: '🪨' } },
  { id: '2', type: 'stack', position: { x: 50, y: 150 }, data: { label: "Wood", emoji: '🪵'} },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export function GameWindow({
  children, ...props}) {
  return (
    <div 
        className={cn(
          styles.gamewindow,
        )}
        {...props}
    >
        {children}
    </div>
  )
}

export function Gameboard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const proOptions = { hideAttribution: true };

  return (
    <GameWindow
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
      >
        <MiniMap position={"bottom-left"} zoomable pannable/>
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </GameWindow>
  );
}