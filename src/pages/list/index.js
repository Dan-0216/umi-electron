import React from 'react'
import { Button } from 'antd'
import { connect } from 'dva';
import { ipcRenderer }  from 'electron'
function List(props){ 
    // props.dispatch({
    //     type:'list/getlist'
    // })
    ipcRenderer.on('reply', function(event, msg) {
        console.log('监听收到主进程消息为===>>>>',msg); // prints "pong"
    });
    const send = ()=>{
        ipcRenderer.send('msg',{name:'张三'}); 
    }
  
    return (
        <div>
          
            Hi this is umi list;
            <div>  
                <Button onClick={send} type="primary"> 发送主进程消息</Button>
            </div>
          
        </div>
    )
}

const WrapperList = connect()(List)
export default WrapperList;