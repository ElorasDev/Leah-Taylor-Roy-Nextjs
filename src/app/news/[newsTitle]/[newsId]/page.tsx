import NewsPost from "@/components/Atom/News/NewsPost/NewsPost";
import { fetchPublishedNewsByTitle } from "@/actions/getNewsByTitle";

interface NewsTitleParams {
  params: {
    newsTitle: string;
    newsId: string;
  };
}

export const revalidate = 60;

export default async function NewsTitle({ params }: NewsTitleParams) {
  const news = await fetchPublishedNewsByTitle(params.newsTitle, params.newsId);

  return (
    <main className="min-h-screen">
      <NewsPost
        initialNews={news}
        params={{ newsTitle: params.newsTitle }}
      />
    </main>
  );
}
