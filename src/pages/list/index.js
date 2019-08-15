import React from 'react'
import { connect } from 'dva';
function List(props){ 
    props.dispatch({
        type:'list/getlist'
    })
    return (
        <div>
            Hi this is umi list;
        </div>
    )
}

const WrapperList = connect()(List)
export default WrapperList;