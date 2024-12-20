import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: string;
  category_id: string;
};

function ProgramIndex() {
  const [programs, setPrograms] = useState([] as Program[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data: Program[]) => {
        setPrograms(data);
      });
  }, []);

  return (
    <>
      <Link to={"/programs/new"}>Ajouter</Link>
      <ul>
        {programs.map((program) => (
          <li key={program.title}>
            <Link to={`/programs/${program.id}`}>{program.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProgramIndex;
