import type { NextPage } from 'next'
import { useQuery } from 'react-query';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {isLoading, error, data} = useQuery('hello', () => {
    return fetch("/api/hello/").then(res => res.json());
  });

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>error!!</p>

  console.log(data)

  return (
    <div className={styles.container}>
      <p>Hello { data.name }</p>
    </div>
  )
}

export default Home
