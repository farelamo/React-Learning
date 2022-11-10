import React from 'react'

const index = ({comment}) => {
  return (
    <div>
        <h3>Id : {comment.id}</h3>
        <h3>comment : {comment.comment}</h3>
    </div>
  )
}

export default index

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:5000/comments?_limit=2')
    const data     = await response.json()

    const paths = data.map((item) => {
        return {
            params: {
                commentId: `${item.id}`
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
        /* 
            set blocking akan mengenerate ketika data nya tdk termasuk yang di limit,
            namun, akan ada delay ketika generate nya.
        */
    }
}

export const getStaticProps = async ({params}) => {
    const response = await fetch(`http://localhost:5000/comments/${params.commentId}`)
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
            comment: data
        }
    }
}