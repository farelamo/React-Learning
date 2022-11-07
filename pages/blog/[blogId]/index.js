import { useRouter } from "next/router";

const blogId = ({blog}) => {
    console.log(blog)
    return (
        <div>
            <h3>Judul : {blog.title}</h3>
            <h3>Description : {blog.desc}</h3>
            <h3>Comments : </h3>
            {blog.comments.map((item) => {
                <ul key={item.id}>
                    <li>{item.comment}</li>
                </ul>
            })}
        </div>
    )
}

export default blogId

export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:5000/blogs`)
    const data     = await response.json()

    const paths = data.map((blog) => ({
        params: {
            blogId: `${blog.id}`
        }
    }))

    return {paths, fallback: false}
}

export const getStaticProps = async ({params}) => {
    const response = await fetch(`http://localhost:5000/blogs/${params.blogId}`)
    const data     = await response.json()

    return {
        props: {
            blog: data
        }
    }
}