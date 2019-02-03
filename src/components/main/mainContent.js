import React from 'react';
import {Button} from 'react-bootstrap';

export const MainContent = props => {
    return (
        <div className='main-display'>
            <h2>Video Title</h2>
            <div className='video-frame'>VIDEO GOES HERE!</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros quam, commodo ut posuere ac, laoreet sed quam. Nulla facilisi. Nam convallis, est gravida sagittis gravida, diam dolor lacinia turpis, et semper urna lacus viverra nulla. Donec egestas dolor at est fermentum, in blandit urna condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis purus, et pharetra lectus. Praesent bibendum convallis quam. Fusce quis viverra ligula. Donec blandit libero quis odio blandit tincidunt. Aliquam eleifend consequat enim, vel dapibus ligula pellentesque et. Ut lectus nibh, dignissim sed ipsum vitae, feugiat laoreet risus. Nulla id convallis libero. Aliquam fringilla mi ligula, non condimentum felis sodales at. Curabitur euismod, sapien quis finibus auctor, turpis tortor feugiat sem, sit amet tincidunt enim dolor id ex. Integer diam dui, viverra eget bibendum ut, lobortis non augue. </p>
            <Button bsSize='large' bsStyle='primary'>Sign up for class!</Button>
        </div>
    );
};