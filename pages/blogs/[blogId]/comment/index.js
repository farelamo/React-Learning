const index = ({blog}) => {
    return (
        <div>
            <h3>Id : {blog.id} </h3>
            <h3>Judul : {blog.title}</h3>
            <h3>Description : </h3>
            {blog.desc}
            <h3>Comment : </h3>
            {blog.comments.map((item, index) => {
                return  ( 
                    <div>
                        <ul key={index}>
                            <li>{item.comment}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
        
    )
}

export default index

export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:5000/blogs?_limit=2`)
    const data     = await response.json()

    const paths = data.map((item) => ({
        params: {
            blogId: `${item.id}`
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const response = await fetch(`http://localhost:5000/blogs/${params.blogId}`)
    const data     = await response.json()

    if(!data.id){
        return {
            notFound: true 
            /*
                set true akan menampilkan page not found ketika 
                ada data yang tidak ada di api.
            */
        }
    }

    return {
        props: {
            blog: data,
        }
    }
}