import path from 'path'
import fs from 'fs/promises'

function HomePages(props) {
  const { products } = props

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  // cwd를 사용하게 되면, 현재 위치 pages 폴더 안이 아닌,
  // build가 된 이후, root폴더에 있는 것처럼 취급되게 된다.
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
    props: {
      products: data.products,
    },
  }
}

export default HomePages
