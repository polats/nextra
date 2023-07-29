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
  PanelPosition,
  Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import styles from './style.module.css'

const nodeDefaults = {
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
  style: {
    borderRadius: '0%',
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const initialNodes = [
  { id: '1', position: { x: 50, y: 50 }, data: { label: '🪨' }, ...nodeDefaults },
  { id: '2', position: { x: 50, y: 150 }, data: { label: '🪵'}, ...nodeDefaults },
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
        proOptions={proOptions}
      >
        <MiniMap position={"bottom-left"} zoomable pannable/>
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </GameWindow>
  );
}