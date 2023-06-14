import React from 'react';
import { Handle } from 'react-flow-renderer';
import {Button}from 'antd'
import './main.css'
function SkillCard(props) {
  function HandleClickSkill(x) {
    console.log(x);
  }
  return (
    <div >
      <h2>名称</h2>
      <p>效果</p>
      <Button onClick={() => HandleClickSkill(console.log(props.id))}>{'学习'}</Button>
    </div>
  )
}

function checkStudy(id) {
  console.log(id)
  return 1
}

export const skillEdges = [
  { id: 'e1-2', source: '1', target: '2'},
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e3-7', source: '3', target: '7' },
  { id: 'e5-8', source: '5', target: '8' },
  { id: 'e5-9', source: '5', target: '9' },
];


export const skillNodes = [
  { id: '1', position: { x: 100, y: 0 }, data: { label: <SkillCard id={1} ></SkillCard>}, type:'input' },
  { id: '2', position: { x: 100, y: 200 }, data: { label: <SkillCard id={2}></SkillCard> } },
  { id: '3', position: { x: -100, y:  400}, data: { label: <SkillCard id={3}></SkillCard> } },
  { id: '4', position: { x: 100, y: 400 }, data: { label: <SkillCard id={4}></SkillCard> } },
  { id: '5', position: { x: 300, y: 400 }, data: { label: <SkillCard id={5}></SkillCard> } },
  { id: '6', position: { x: -200, y: 600 }, data: { label: <SkillCard id={6}></SkillCard> } , type:'output'},
  { id: '7', position: { x: 0, y: 600 }, data: { label: <SkillCard id={7}></SkillCard> } , type:'output'},
  { id: '8', position: { x: 200, y: 600 }, data: { label: <SkillCard id={8}></SkillCard> } , type:'output'},
  { id: '9', position: { x: 400, y: 600 }, data: { label: <SkillCard id={9}></SkillCard> } , type:'output'},
];

