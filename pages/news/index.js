import Link from "next/link"

const index = ({news}) => {
  return (
    <div>
        {news.map((item) => (
            <ul>
                <li>Id: {item.id}</li>
                <li>Title: {item.title}</li>
                <li>Desc: {item.desc}</li>
                <li>Active: {item.isActive ? 'Aktif' : 'Tidak Aktif'}</li>
                <li>
                    <Link href={`news/${item.id}`}>
                        <button>Detail</button>
                    </Link>
                </li>
            </ul>
        ))}
    </div>
  )
}
export default index

export const getServerSideProps = async () => {
    const response = await fetch('http://localhost:5000/news')
    const data     = await response.json()

    return {
        props: {
            news: data
        }
    }
}