import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const Posts = ({ syncPosts }) => {
   if (!syncPosts.length) {
      return <p className='text-center'>Постов пока нету</p>
   }
   return (
      <div>
         {syncPosts.map(post => <Post post={post} key={post.id} />)}
      </div>
   )
}

const mapStateToProps = state => {
   return {
      syncPosts: state.posts.posts
   }
}
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
