
import Header from "@/components/Header";
import ArticleList from "@/components/ArticleList";

type Article ={
  id:number,
  title:string,
  body:string,
}
type MainProps={
  articles:Article[]|null
}
export default function Home({articles}:MainProps) {
  return (
  <main>
    <div >
    <Header/>
      <ArticleList articles={articles}/>
    </div>
  </main>
  );
}

export const getStaticProps =async()=>{
  const res =await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const articles =await res.json()

  return {
    props:{
      articles
    }
  }

}