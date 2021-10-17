import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsActionCreator } from '../redux/actions'
import Loader from './Loader'
import Post from './Post'

const FetchedPosts = () => {
   const dispatch = useDispatch()
   const posts = useSelector(state => state.posts.fetchedPosts)
   const loading = useSelector(state => state.app.loading)

   if (loading) {
      return (
         <Loader />
      )
   }
   if (!posts.length) {
      return <button
         className='btn btn-primary'
         onClick={() => dispatch(fetchPostsActionCreator())}
      >Загрузить</button>
   }
   return (
      <div>
         {posts.map(post => <Post post={post} key={post.id} />)}
      </div>
   )
}

export default FetchedPosts
