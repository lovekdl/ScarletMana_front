import { Row,  Space,  Tooltip, Button  } from 'antd';
import { useStore } from '../store';
import './main.css'
import { observer } from 'mobx-react-lite'

import RankModal from '../rank/rank.modal';

const ResourceComponent = () => {
  const {ResourceStore} = useStore()
  var ok = 1
  return (
    
      <div  className='vertical-container'>
        {ResourceStore.mineral >= 10 ?
          <Space wrap>
            <Tooltip title="prompt textasdawdawfawsf" color='pink' key='pink' className='card-inner'>
              法力：{ResourceStore.mana}
            </Tooltip>
          </Space>
         : null}
        <Space wrap>
          <Tooltip title="prompt textasdawdawfawsfwasfae" color='pink' key='pink' className='card-inner'>
            金币：{ResourceStore.coin}
          </Tooltip>
        </Space>
        {(ResourceStore.dwarf >= 1) ?
        <Space wrap>
          <Tooltip title="prompt textasdawdawfawsfw" color='pink' key='pink' className='card-inner'>
            矿物：{ResourceStore.mineral}
          </Tooltip>
        </Space>
        : null}
        <Space wrap>
          <Tooltip title="prompt textasdawdawfaws" color='pink' key='pink' className='card-inner'>
            矮人：{ResourceStore.dwarf}
          </Tooltip>
        </Space>
      </div>
  );
};

export default observer(ResourceComponent);