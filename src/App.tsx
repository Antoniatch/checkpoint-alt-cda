import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_CONTINENTS = gql`
  query continents {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return <p> Loading ...</p>;
  if (error) return <p> Error: {error.message} </p>;

  return (
    <div className="App">
      {data.continents.map((continent: any) => {
        return <p>{continent.name}</p>;
      })}
    </div>
  );
}

export default App;
