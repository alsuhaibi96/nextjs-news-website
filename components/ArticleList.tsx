
import PropTypes from 'prop-types'
import { ReactNode } from 'react'
import ArticleItem  from './ArticleItem'

type Article ={
    id:number,
    title:string,
    body:string,
}
type ArticleListProps={
    articles:Article[]|null;
}
const ArticleList = ({articles}:ArticleListProps) => {
    if(!articles){
        return (
            <p className='bg-red-300'>No articales available</p>
        )
    }
  return (
    <div className='my-8'>
     <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white text-center">Latest News</h1>
    <div className="grid grid-cols-3 mt-3 gap-4">
{
    articles.map((article)=>
   <ArticleItem article={article} key={article.id} />
    )
}
    </div>
    </div>
  )
}

ArticleList.propTypes = {
    articles: PropTypes.node.isRequired,
};
export default ArticleList