import type { ReactNode } from "react";

export type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: string;
  category_id: string;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

function ProgramForm({ children, defaultValue, onSubmit }: ProgramFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.warn(formData);
        const title = formData.get("title") as string;
        const synopsis = formData.get("synopsis") as string;
        const poster = formData.get("poster") as string;
        const country = formData.get("country") as string;
        const year = formData.get("year") as string;
        const category_id = formData.get("category_id") as string;

        onSubmit({
          title,
          synopsis,
          poster,
          country,
          year,
          category_id,
        });
      }}
    >
      <input type="text" name="title" defaultValue={defaultValue.title} />
      <input type="text" name="synopsis" defaultValue={defaultValue.synopsis} />
      <input type="text" name="poster" defaultValue={defaultValue.poster} />
      <input type="text" name="country" defaultValue={defaultValue.country} />
      <input type="text" name="year" defaultValue={defaultValue.year} />
      <input
        type="text"
        name="category_id"
        defaultValue={defaultValue.category_id}
      />
      <button type="submit">{children}</button>
    </form>
  );
}

export default ProgramForm;
