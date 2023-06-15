import React,{ useCallback,useState,useEffect ,useRef} from 'react';
import { skillNodes0 , skillEdges0,skillNodes1 , skillEdges1 } from './skillElement.js';
import { Carousel, Radio } from 'antd';
import { observer } from 'mobx-react-lite';
import  { FitViewParams } from 'react-flow-renderer';
import { useStore } from '../store';

import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';


function SwitchFlow (){
  const [nodes, setNodes, onNodesChange] = useNodesState(skillNodes1);
  const [edges, setEdges, onEdgesChange] = useEdgesState(skillEdges1);
  const [fit,setFit] = useState(true)
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const {SkillStore} = useStore()
  let content = null
  var skillNodes = skillNodes0
  var skillEdges = skillEdges0
  if(SkillStore.now_page === 0) {
    skillNodes = skillNodes0
    skillEdges = skillEdges0
  }
  if(SkillStore.now_page === 1) {
    
  }
  content = 
      <ReactFlow 
      nodes={skillNodes} 
      edges={skillEdges}
      onConnect={onConnect}
      nodesDraggable = {false}
      nodesFocusable = {false}
      zoomOnScroll = {false}
      zoomOnPinch = {false}
      zoomOnDoubleClick = {false}
      panOnDrag = {false}
      
      >
      </ReactFlow>
      
  return <div style = {{width:'50vw',height:'70vh'}}>{content}</div>
}

function SkillTree () {
  const [nodes, setNodes, onNodesChange] = useNodesState(skillNodes1);
  const [edges, setEdges, onEdgesChange] = useEdgesState(skillEdges1);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

	return (
    
		<SwitchFlow></SwitchFlow>
    
  )
  
}

export default observer(SkillTree)