function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}
export const Templated = asyncComponent(async () => {
  const secret = process.env.SUPERSECRET
  return (
    <div>
      <p>This component is being rendered on server</p>
      <p>Node server secret env: {secret}</p>
    </div>
  );
})
