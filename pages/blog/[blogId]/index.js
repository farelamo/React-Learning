import { useRouter } from "next/router";
import Link from "next/link";

const blogId = ({blog}) => {
    console.log(blog)
    return (
        <div>
            <h3>Id : {blog.id}</h3>
            <h3>Judul : {blog.title}</h3>
            <h3>Description : {blog.desc}</h3>
            <Link href={`/blog/${blog.id}/comment`}>
                <button>Comment</button>
            </Link>
        </div>
    )
}

export default blogId

export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:5000/blogs?_limit=2`)
    const data     = await response.json()

    const paths = data.map((blog) => ({
        params: {
            blogId: `${blog.id}`
        }
    }))

    return {
        paths, 
        fallback: false 
        /* 
            set false akan merubah not found karena data yang tdk masuk limit tdk digenerate,
            walaupun di api datanya ada
        */
    }
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