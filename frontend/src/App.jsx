import User from "./components/User";
import State from "./hooks/State";
import Form from "./hooks/Form";

const App = () => {
  return (
    <>
      <User
        name="ayesha"
        age={22}
        skills={["React", "JavaScript", "Node.js"]}
      />

      <hr />

      <State />

      <hr />

      <Form />
    </>
  );
};

export default App;