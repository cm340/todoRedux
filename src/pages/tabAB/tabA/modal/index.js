import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../action';
import { bindActionCreators } from 'redux';

class ModalContent extends Component {
    render() {
        const { visible, item, updateItemHander, handleOk, handleCancel  } = this.props
        return (
            <div>
                <Modal
                    title="修改待办事项"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <input value={item.content} placeholder="请输入内容" onChange={updateItemHander}/>
                </Modal>
            </div>
        )
    }
}
const stateToProps=(state)=>{
    return {
        visible:state.todoReducer.visible,
        item:state.todoReducer.item,
    }
}

const dispatchToProps=(dispatch)=>{
    return bindActionCreators(actions,dispatch)
}

export default connect(stateToProps,dispatchToProps)(ModalContent)
