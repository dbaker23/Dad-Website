import React, {Component} from 'react';
import FrameHeader from './frameHeader';
import FrameSidebar from './frameSidebar';
import {MainContent} from '../main/mainContent';

export default class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className='page-frame'>
                <FrameHeader/>
                <div className='main-content-frame'>
                    <FrameSidebar/>
                    <MainContent />
                </div>
            </div>
        );
    }
}