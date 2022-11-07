import { useRouter } from "next/router";

const commentId = () => {
    const { commentId } = useRouter().query

    return (
        <div>Ini Comment ke: {commentId}</div>
    )
}

export default commentId