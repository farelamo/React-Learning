const newsId = ({ news }) => {
    return (
        <div>
            <ul>
                <li>Id: {news.id}</li>
                <li>Title: {news.title}</li>
                <li>Desc: {news.desc}</li>
                <li>Creator: {news.creator}</li>
                <li>Active: {news.isActive ? 'Aktif' : 'Tidak Aktif'}</li>
            </ul>
        </div>
    )
}

export default newsId

export const getServerSideProps = async ({ params }) => {
    const response = await fetch(`http://localhost:5003/news/${params.newsId}`)
    const data = await response.json()

    if (!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            news: data
        }
    }
}