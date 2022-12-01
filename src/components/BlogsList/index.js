import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

const blogsData = [
  {
    id: 1,
    title: 'Zara Thehro',
    imageUrl:
      'https://i.pinimg.com/564x/57/a3/c1/57a3c1b80350382d9e5646a1cb9d1b53.jpg',
    avatarUrl:
      'https://i.pinimg.com/564x/95/a4/dc/95a4dcc6c748b13df658e3bc53b9bdc8.jpg',
    author: 'Armaan Malik',
    topic: 'Music',
  },
  {
    id: 2,
    title: 'LOVE YOURSELF 結 ‘ANSWER',
    imageUrl:
      'https://i.pinimg.com/564x/a0/72/8b/a0728b6ff146e2c80cc9f721f3fd15ea.jpg',
    avatarUrl:
      'https://i.pinimg.com/564x/bd/ae/4e/bdae4ea2e5d0f8fcbfd76f591545c4cc.jpg',
    author: 'BTS',
    topic: 'Music',
  },
  {
    id: 3,
    title: 'Jab Tak',
    imageUrl:
      'https://i.pinimg.com/564x/31/3c/c3/313cc303934fd7524057fb005d717f3c.jpg',
    avatarUrl:
      'https://i.pinimg.com/564x/95/a4/dc/95a4dcc6c748b13df658e3bc53b9bdc8.jpg',
    author: 'Armaan Malik',
    topic: 'Music',
  },
  {
    id: 4,
    title: 'BUTTER',
    imageUrl:
      'https://i.pinimg.com/564x/50/91/9a/50919aa3b152b2e71283f58a909dcfd9.jpg',
    avatarUrl:
      'https://i.pinimg.com/564x/bd/ae/4e/bdae4ea2e5d0f8fcbfd76f591545c4cc.jpg',
    author: 'BTS',
    topic: 'Music',
  },
  {
    id: 5,
    title: 'Ghar Se Nikalte Hi',
    imageUrl:
      'https://i.pinimg.com/564x/9d/53/4d/9d534da5fe2a9d0e9ab62e6962627314.jpg',
    avatarUrl:
      'https://i.pinimg.com/564x/95/a4/dc/95a4dcc6c748b13df658e3bc53b9bdc8.jpg',
    author: 'Armaan Malik',
    topic: 'Music',
  },
  {
    id: 6,
    title: 'Maps of the Soul: 7',
    imageUrl:
      'https://i.pinimg.com/564x/f7/89/30/f78930498991e37ab43987ce0b7a563e.jpg',
    avatarUrl:
      'https://i.pinimg.com/564x/bd/ae/4e/bdae4ea2e5d0f8fcbfd76f591545c4cc.jpg',
    author: 'BTS',
    topic: 'Music',
  },
]

class BlogsList extends Component {
  render() {
    return (
      <div className="blog-list-container">
        {blogsData.map(item => (
          <BlogItem blogData={item} key={item.id} />
        ))}
      </div>
    )
  }
}

export default BlogsList
