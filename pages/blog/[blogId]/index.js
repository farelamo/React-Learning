import { useRouter } from "next/router";

const blogId = () => {
    const router = useRouter()
    const { blogId } = useRouter().query

    return (
        <div>Ini Blog ke: {blogId}</div>
    )
}

export default blogId