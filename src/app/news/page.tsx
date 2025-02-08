import { NextPage } from "next";
import { fetchPublishedNews } from "@/actions/getPublishedNews";
import News from "@/components/Molecule/News/News";


interface NewsItem {
  id: number;
  title: string;
  content: string;
  index_image_url: string;
  updated_at: string;
}

export interface NewsPageProps {
  news: NewsItem[];
}


export const revalidate = 60; 

const NewsPage:NextPage<NewsPageProps> = async () => {

  const news = await fetchPublishedNews();

  return (
    <main className="min-h-screen">
        <News initialNews={news} />
    </main>
  )
}

export default NewsPage;