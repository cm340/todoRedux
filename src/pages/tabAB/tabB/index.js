import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../action';
import { bindActionCreators } from 'redux';

class TabB extends Component {
    render() {
        const { searchHander, search, addItemHander, addItem } =this.props
        return (
            <div>
                <div>
                    <input onChange={searchHander} placeholder='请输入搜索的内容'/>
                    <button onClick={search}>搜索</button>
                </div>
                <div>
                    <input onChange={addItemHander} placeholder='请输入将要做的事'/>
                    <button onClick={addItem}>添加</button>
                </div>
            </div>
        )
    }
};

const dispatchtoProps=(dispatch)=>{
    return bindActionCreators(actions,dispatch)   
}
export default connect(null,dispatchtoProps)(TabB)
