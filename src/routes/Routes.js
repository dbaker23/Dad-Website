import React from 'react';
import {Route} from 'react-router-dom';

export const Push = path => {
    return <Route path={path} component={PostsIndex} />
}