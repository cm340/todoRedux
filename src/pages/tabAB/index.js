import { Tabs } from 'antd';
import React, { Component } from 'react';
import { getTodoList } from './action';
import { connect } from 'react-redux';
import TabA from './tabA/index';
import TabB from './tabB/index';
const { TabPane } = Tabs;

class TabAB extends Component {
    componentDidMount(){
        this.props.getTodoList();
    }
    render() {
        return (
            <div>
                 <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Tab 1" key="1">
                        <TabA></TabA>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <TabB></TabB>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
const dispatchToProps=(dispatch)=>{
    return {
        getTodoList: getTodoList(dispatch),
    }
  }
export default connect(null,dispatchToProps)(TabAB);