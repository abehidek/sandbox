export default function ReactButton() {
  const handleButton = () => {
    alert("React button clicked");
  };
  return <button onClick={handleButton}>React Button</button>;
}
