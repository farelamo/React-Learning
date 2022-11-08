import Link from "next/link"

const index = ({comments}) => {

  return (
    <div>
        Daftar comment
        
        {comments.map((item, index) => (
            <ul>
                <li key={index}>
                    <h4>Id: {item.id}</h4>
                    <h4>comment: {item.comment}</h4>
                    <Link href={`/comments/${item.id}`}>
                        <button>show</button>
                    </Link>
                </li>
            </ul>
        ))}
    </div>
  )
}

export default index

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:5001/comments')
    const data     = await response.json()

    return {
        props: {
            comments: data
        }
    }
}