import React, { Component } from 'react';
import TabAList from './tabAList/index';
import ModalContent from './modal/index';
import Pagination from './pagination/index'
export default class TabA extends Component {
    render() {
        return (
            <div>
                <TabAList/>
                <ModalContent/>
                <Pagination/>
            </div>
        )
    }
}
