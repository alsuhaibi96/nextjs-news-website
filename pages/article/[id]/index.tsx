import { useRouter } from "next/router";
import Link from 'next/link'
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

type Article= {
    id:number,
    title:string,
    body:string,
}

type ArticleProps={
    article:Article
}
const Article =({article}:ArticleProps)=>{
    // const router =useRouter()
    // const {id} =router.query
    return (
<div className="h-96 my-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{article.body}</p>
        <Link href='/' className="text-blue-500 hover:text-blue-700 transition duration-300">
            Go Back
        </Link>
      </div>
    )
}

export const getServerSideProps:GetServerSideProps=async(context:GetServerSidePropsContext)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)
    const article=await res.json()
    return{
        props:{
            article
        }
    } 
}

export default Article