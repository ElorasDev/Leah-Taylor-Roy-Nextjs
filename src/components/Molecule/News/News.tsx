import { NextPage } from "next";
import CardNewsList from "@/components/Atom/News/CardNewsList";

interface INewsProps {
    initialNews:
    {
        id: number;
        title: string;
        content: string;
        index_image_url: string;
        updated_at: string;
    }[]
}


const News: NextPage<INewsProps> = ({ initialNews }) => {
    return (
        <section>
            <div className="px-8 py-28">
                <CardNewsList
                    initialNews={initialNews}
                />
            </div>
        </section>
    )
}

export default News;