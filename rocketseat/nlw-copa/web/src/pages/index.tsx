interface Props {
  count: number
}

export default function Home(props: Props) {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Count: {props.count}</p>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await (await fetch('http://localhost:3333/pools/count')).json()

  return {
    props: {
      count: response.count
    }
  }
}
