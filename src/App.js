import React, { useEffect, useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap/Button";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        const jsonData = await response.json();

        setData(jsonData.data);
      } catch (error) {
        console.error("Not able to fetch", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Calling API</h1>
      <table>
        <thead>
          <tr>
            <th>Nation</th>
            <th>Population</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.Nation}</td>
                <td>{item.Population}</td>
                <td>{item.Year}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
