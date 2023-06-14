import React,{ useCallback,useState } from 'react';
import { observer } from 'mobx-react-lite'
import ResourceComponent from './resourceComponent';
import './main.css'
import MessageBox from './messageBox';
import OperationComponent from './operationComponent';
import 'reactflow/dist/style.css';
import { skillNodes as initialNodes, skillEdges as initialEdges} from './skillElement.js';
import { Carousel, Radio } from 'antd';


import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



function SkillTree () {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
	return (
		<div style={{ width: '50vw', height: '70vh' }} >

      <ReactFlow 
				nodes={initialNodes} 
				edges={initialEdges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect} 
			>
				<Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
			</ReactFlow>
    </div>
	)
}

function MainLayout  ()  {
return (
	<div>
	
	<div className= 'layout'>
		
		<div className = 'right-layout'>
			<MessageBox/>
		</div>
		<div className = 'left-layout'>
			<div className='right-up-layout'>
				<div className='container'>
				<OperationComponent></OperationComponent>
				<ResourceComponent></ResourceComponent>
				</div>
			</div>
			<div style={{ width: '50vw', height: '70vh' }}>
				<Carousel dotPosition='top' effect="fade" >
					<div>
						<SkillTree></SkillTree>
					</div>
					<div>
					<SkillTree></SkillTree>
					</div>
				</Carousel>
			</div>
			
		</div>
		
	</div>
	</div>
)
}

export default observer(MainLayout)