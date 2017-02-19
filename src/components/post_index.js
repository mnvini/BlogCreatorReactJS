import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index'
import { Link } from 'react-router'
class PostIndex extends Component {

  componentWillMount() {
    this.props.fetchPost();
  }

  renderPost() {
    return this.props.posts.map((p) =>
      <li className="list-group-item" key={p.id}>
        <Link to={"posts/" + p.id}>
          <span className="pull-xs-right" > {p.categories} </span>
          <strong>{p.title}</strong>
        </Link>
      </li>
    )

  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3> Posts </h3>
        <ul className="list-group">
          {this.renderPost()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPost })(PostIndex)