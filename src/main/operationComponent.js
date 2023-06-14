import { Row,  Space,  Tooltip, Button ,Input, Tag , message} from 'antd';
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite'
import { useStore } from '../store';
import { http } from '../utils';
import './main.css'
import RankModal from '../rank/rank.modal';

const OperationComponent = () => {
  const {ResourceStore, MessageStore} = useStore();
  const [rankVisible, setRankVisible] = useState(false);
  const inputWidth1 = {
    
    width: `${ (''+ResourceStore.miner).length * 8 + 60}px`, // 根据文本长度计算宽度，每个字符占用 8px 的宽度
  };
  const inputWidth2 = {
    
    width: `${(''+ResourceStore.merchant).length * 8 + 60}px`, // 根据文本长度计算宽度，每个字符占用 8px 的宽度
  };
  const inputWidth3 = {
    
    width: `${(''+ResourceStore.soldier).length * 8 + 60}px`, // 根据文本长度计算宽度，每个字符占用 8px 的宽度
  };
  
  const handleHireClick = async () => {
    try {
        const ret = await http.post('/api/employ', {
          
        })
        console.log(ret)
        if(ret.data.state === 'success') {
          MessageStore.addMessage(ret.data.message)

        }
        else {
          message.error(ret.data.error_message);
        }
    }
    catch(e) {
      console.log(e)
    }
  }
  const handleRankClicked = () => {
    setRankVisible(true)
  }

  const handleAddMiner = async ()=> {
    try {
      const ret = await http.post('api/dwarf/addMiner', {})
      console.log(ret)
      if(ret.data.state === 'success') {
        MessageStore.addMessage(ret.data.message)
      }
      else {
        message.error(ret.data.error_message);
      }
    }
    catch(e) {
      console.log(e)
    }
  }
  const handleDecMiner = async ()=> {
    try {
      const ret = await http.post('api/dwarf/subtractMiner', {})
      console.log(ret)
      if(ret.data.state === 'success') {
        MessageStore.addMessage(ret.data.message)
      }
      else {
        message.error(ret.data.error_message);
      }
    }
    catch(e) {
      console.log(e)
    }
  }
  const handleAddMerchant = async ()=> {
    try {
      const ret = await http.post('api/dwarf/addMerchant', {})
      console.log(ret)
      if(ret.data.state === 'success') {
        MessageStore.addMessage(ret.data.message)
      }
      else {
        message.error(ret.data.error_message);
      }
    }
    catch(e) {
      console.log(e)
    }
  }
  const handleDecMerchant = async ()=> {
    try {
      const ret = await http.post('api/dwarf/subtractMerchant', {})
      console.log(ret)
      if(ret.data.state === 'success') {
        MessageStore.addMessage(ret.data.message)
      }
      else {
        message.error(ret.data.error_message);
      }
    }
    catch(e) {
      console.log(e)
    }
  }
  const handleAddSoldier = async ()=> {
    try {
      const ret = await http.post('api/dwarf/addSoldier', {})
      console.log(ret)
      if(ret.data.state === 'success') {
        MessageStore.addMessage(ret.data.message)
      }
      else {
        message.error(ret.data.error_message);
      }
    }
    catch(e) {
      console.log(e)
    }
  }
  const handleDecSoldier = async ()=> {
    try {
      const ret = await http.post('api/dwarf/subtractSoldier', {})
      console.log(ret)
      if(ret.data.state === 'success') {
        MessageStore.addMessage(ret.data.message)
      }
      else {
        message.error(ret.data.error_message);
      }
    }
    catch(e) {
      console.log(e)
    }
  }

  return (
    <div>
      <RankModal visible = {rankVisible} setVisible={setRankVisible}></RankModal>
      <div className = 'operation'>
          <Button className='button' shape = 'round' onClick={handleHireClick}>雇佣</Button>
          <Button className='button' shape = 'round' danger>出征</Button>
          <Button className='button' shape = 'round' link onClick={handleRankClicked}>排行榜</Button>
          <></>
          <div className='button-opration'>
            <div style = {{padding:'10px'}} >
              <Button className='default-font' onClick={handleDecMiner}>-</Button>
              <Input value={'矿工：' + ResourceStore.miner}  style={inputWidth1} className='default-font' />
              <Button className='default-font' onClick={handleAddMiner}>+</Button>
            </div>
            <div style = {{padding:'10px'}}>
              <Button className='default-font' onClick={handleDecMerchant}>-</Button>
              <Input value={'商人：'+ResourceStore.merchant}  style={inputWidth2} className='default-font' />
              <Button className='default-font' onClick={handleAddMerchant}>+</Button>
            </div>
            <div style = {{padding:'10px'}}>
              <Button className='default-font' onClick={handleDecSoldier}>-</Button>
              <Input value={'战士：'+ResourceStore.soldier}  style={inputWidth3} className='default-font' />
              <Button className='default-font' onClick={handleAddSoldier}>+</Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default observer(OperationComponent);