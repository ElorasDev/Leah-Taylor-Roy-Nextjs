import { fetchPublishedNews } from "@/actions/getPublishedNews";
import News from "@/components/Molecule/News/News";


export const revalidate = 60; 

const NewsPage = async () => {

  const news = await fetchPublishedNews();

  return (
    <main className="min-h-screen">
        <News initialNews={news} />
    </main>
  )
}

export default NewsPage;