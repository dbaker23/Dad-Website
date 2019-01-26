import React from 'react';
import {FrameHeader} from './frameHeader';
import {FrameSidebar} from './frameSidebar';

const Frame = () => {
    return (
        <div>
            <FrameHeader/>
            <div className='main-content'>
                <FrameSidebar/>
                <ContentArea/>
            </div>
        </div>
    );
}

return 