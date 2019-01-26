import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import {PageHeader} from 'react-bootstrap';

class SplashPage extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map( this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.id} >
                    <Link to={`/posts/${post.id}`} >
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <PageHeader>
                    Joe's Website
                </PageHeader>            
                <div style={{display:'flex', flexDirection:'row', height:'100vh'}}>
                    <div style={{float:'left', width:'150px'}}>
                        side shit
                        <ul>
                            <li>video </li>
                            <li>video</li>
                            <li>video </li>
                        </ul>
                    </div>
                    <div style={{width:'100%'}}>
                        <h3>Page header (video name)</h3>
                        <ul className='list-group'>
                            {this.renderPosts()}
                        </ul>    
                        <p title={'on hover'}>Video description</p>
                        <button>Schedule a class?</button>
                        Where am I getting the dates from?<br/>
                        calendar on hover? or page stretch?
                    </div>
                </div>      
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { posts: state.posts };
}
export default connect( mapStateToProps, {fetchPosts} )( SplashPage );