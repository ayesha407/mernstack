import User from "./components/User";
import State from "./State";
import Form from "./Form";

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