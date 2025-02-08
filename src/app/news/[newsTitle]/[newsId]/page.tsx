import { NextPage } from "next";
import NewsPost from "@/components/Atom/News/NewsPost/NewsPost";
import { fetchPublishedNewsByTitle } from "@/actions/getNewsByTitle";


type NewsTitleParams = {
  params: { 
    newsTitle: string;
    newsId: string;
  };
};


export const revalidate = 60; 


const newsTitle: NextPage<NewsTitleParams> = async ({ params }) => {

  const news = await fetchPublishedNewsByTitle(params.newsTitle, params.newsId);

  return (
    <main className="min-h-screen">
      <NewsPost
      initialNews={news}
      params={{ newsTitle: params.newsTitle, newsId: params.newsId }}
      />
    </main>
  )
}

export default newsTitle