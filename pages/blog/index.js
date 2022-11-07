import Link from 'next/link'

const index = ({blogs}) => {
  console.log(blogs)
  return (
    <div>
        Daftar Blog

        {blogs.map((blog) => (
            <ul key={blog.id}>
                <li>Judul  : { blog.title }</li>
                <li>Active : { blog.isActive ? 'Aktif' : 'Tidak Aktif'}</li>
                <li>
                    <Link href={`/blog/${blog.id}`}>
                        <button>show</button>
                    </Link>
                </li>
            </ul>
        ))}


        <Link href={'/blog/add'}>
          <h4>Add Blog</h4>
        </Link>
        <Link href={'/blog/1'}>
          <h4>Detail Blog</h4>
        </Link>
    </div>
  )
}

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:5000/blogs')
    const data     = await response.json()
    console.log(data)

    return {
        props: {
            blogs: data
        }
    }
}

export default index