import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import * as actions from '../../action';
import { bindActionCreators } from 'redux';

class TabAList extends Component {
    render() {
        const { currentList, onFinish, updateItem, delItem } =this.props;
        return (
            <div>
                <div>
                    <ul>
                        {
                            currentList.length === 0 ? <div>无需要完成的任务</div> :
                            currentList.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <span className={item.finish === 0 ? '' : 'finish'}>{item.content}</span>
                                        <span>
                                            <button onClick={onFinish.bind(this,item.id)}>完成</button>
                                            <button onClick={updateItem.bind(this,item)} disabled={item.finish === 0? false:true}>编辑</button>
                                            <button onClick={delItem.bind(this,item.id)}>删除</button>
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
const stateToProps=(state)=>{
    return {
        currentList:state.todoReducer.currentList
    }
}

const dispatchToProps=(dispatch)=>{
    return bindActionCreators(actions,dispatch)
}

export default connect(stateToProps,dispatchToProps)(TabAList);