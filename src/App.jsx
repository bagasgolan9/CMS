import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://qpbbxtgxsvzajmfnryhg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwYmJ4dGd4c3Z6YWptZm5yeWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNjYwMDgsImV4cCI6MjA1MTg0MjAwOH0.euZzImoloGBnafAKGLG9F4rLvMkUJhXxriZjAnqtOLU");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;