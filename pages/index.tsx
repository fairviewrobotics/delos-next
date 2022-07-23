import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Link href={"/liverecord"}>
      <a>Click me for LiveRecord!</a>
    </Link>
  )
}

export default Home
