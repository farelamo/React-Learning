import { useRouter } from "next/router"

const userId = ({user}) => {
  const router = useRouter()

  if(router.isFallback){
    return <div>Loading...</div>
  }

  return (
    <div>
        <h3>Id : {user.id}</h3>
        <h3>Name : {user.name}</h3>
        <h3>Gender : {user.gender}</h3>
        <h3>Age : {user.age}</h3>
        <h3>Email : {user.email}</h3>
        <h3>Phone : {user.phone}</h3>
        <h3>Address : {user.address}</h3>
        <h3>Active : {user.active ? 'Aktif' : 'Tidak Aktif'}</h3>
    </div>
  )
}

export default userId

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:5002/users?_limit=2')
    const data     = await response.json()

    const paths = data.map((item) => {
        return {
            params: {
                userId: `${item.id}`
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({params}) => {
    const response = await fetch(`http://localhost:5002/users/${params.userId}`)
    const data     = await response.json()

    if(!data.id){
        return {
            notFound: true
        }
    }

    return {
        props: {
            user: data
        }
    }
}