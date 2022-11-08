import Link from "next/link"

const index = ({ users }) => {
  return (
    <div>
      {users.map((item, index) => (
          <ul key={index}>
            <li>id: {item.id}</li>
            <li>name: {item.name}</li>
            <li>age: {item.age}</li>
            <li>
              <Link href={`/users/${item.id}`}>
                <button>Detail</button>
              </Link>
            </li>
          </ul>
        ))
      }
    </div>
  )
}

export default index

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:5002/users')
  const data = await response.json()

  return {
    props: {
      users: data
    }
  }
}