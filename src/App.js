import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Bertram" isCoach={false} />
      <Greeting name="Waldemar" isCoach={false} />
      <Greeting name="Feline" isCoach={true} />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return (
    <div>
      <h1>`Hello, {isCoach ? "Coach" : name}!`</h1>
    </div>
  );
}
