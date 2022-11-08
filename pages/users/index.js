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
    },
    revalidate: 1 
    /*
      ISR (Incremental Static Regeneration)
      revalidate u/ men generate ulang halaman agar mendapatkan data yang terupdate
      dengan valuenya berupa second, 1 pada revalidate adalah jeda 1 detik dalam men-regenerate

      data baru akan terupdate setelah refresh browser 2x, hal ini karena setiap request akan meregenerate
      sehingga saat pertama kali refresh akan generate ulang, dan yang ke 2 baru dapat updatenya
    */
  }
}