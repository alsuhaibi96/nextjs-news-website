import Link from "next/link";

type Article = {
id:number,
title:string,
body:string,

}

type ArticleItemProps={
    article:Article
}
const ArticleItem = ({ article }:ArticleItemProps) => {
    return (
        <Link href='/article/[id]' as={`article/${article.id}`} >
            <div  className="border border-gray-200 shadow rounded-lg p-2">
                <h3 className="font-bold mb-2">{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </div>
        </Link>
)
}

export default ArticleItem 