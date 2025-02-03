import { NextPage } from "next";
import NewsPost from "@/components/Atom/News/NewsPost/NewsPost";


type NewsTitleParams = {
  params: { 
    newsTitle: string;
    newsId: string;
  };
};


const newsTitle: NextPage<NewsTitleParams> = ({ params }) => {

  return (
    <main className="min-h-screen">
      <NewsPost
      params={{ newsTitle: params.newsTitle, newsId: params.newsId }}
      />
    </main>
  )
}

export default newsTitle