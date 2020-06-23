import React, { Component } from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../action';
/**
 * @description 
 * @date 2020-06-16 分页组件
 * @class PaginationContent
 * @extends {Component}
 */
class PaginationContent extends Component {
    render() {
        const { total, pageSize, pageIndex, onShowSizeChange, onChange } = this.props
        return (
            <div>
                <Pagination
                    showSizeChanger 
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={pageIndex} 
                    defaultPageSize={pageSize}
                    total={total}
                    onChange={onChange}
                />
            </div>
        )
    }
}

const statetoProps=(state)=>{
    return {
        total: state.todoReducer.total,
        pageSize:state.todoReducer.pageSize,
        pageIndex:state.todoReducer.pageIndex
    }
}

const dispatchtoProps=(dispatch)=>{
    return bindActionCreators(actions,dispatch)   
}

export default connect(statetoProps,dispatchtoProps)(PaginationContent)