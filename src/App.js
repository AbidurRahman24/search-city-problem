import "./styles.css";
import { useState, useEffect } from "react";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
const cities = ["Ahmedabad", "Hyderabad", "Bangalore", "Delhi", "Mumbai"];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modal, setModal] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = cities.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const showModal = () => {
    console.log("asf");
    setModal(true);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => {
          return (
            <>
              <li onClick={showModal}>{item}</li>
              <SweetAlert
                title={item}
                show={modal}
                text="SweetAlert in React"
                onConfirm={() => setModal(false)}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
}
