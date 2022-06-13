import type { NextPage } from 'next'
import { Key } from 'react';
import { useQuery } from 'react-query';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {isLoading, error, data} = useQuery('hello', () => {
    return fetch("/api/hello/").then(res => res.json());
  });

  const usersQuery = useQuery('users', () => {
    return fetch("/api/users").then(res => res.json());
  })

  if (isLoading || usersQuery.isLoading) return <p>Loading...</p>
  if (error || usersQuery.isError) return <p>error!!</p>

  console.log(usersQuery.data)

  return (
    <div className={styles.container}>
      <p>Hello { data.name }</p>
      <h1>Users</h1>
      { 
        usersQuery.data.map((user: {id: String, name: String, email: String}, index:Key) => (
          <div key={index}>
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
          </div>
        ))
      } 
      
    </div>
  )
}

export default Home
