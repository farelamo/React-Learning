import { useRouter } from "next/router"

const add = () => {
    const router = useRouter()
    const publish = () => {
        router.push('/blog')
    }

    return (
        <div>
            <h1>Add New Blog</h1>
            <button onClick={publish}>Add</button>
        </div>
    )
}

export default add