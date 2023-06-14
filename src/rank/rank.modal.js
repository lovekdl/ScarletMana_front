import {Modal} from 'antd'
import { useEffect } from 'react'


function RankModal (props) {

  const handleOk = ()=>{
    props.setVisible(false)
  }

  useEffect(()=> {
    console.log('propsvisible is ' + props.visible)
  },[props.visible])
  return (
    <Modal title="排行榜" open={props.visible} onCancel={handleOk} destroyOnClose={true} footer={null}>
      a
    </Modal>
  )
}

export default RankModal
