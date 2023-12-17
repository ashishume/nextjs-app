import { getData } from "@/api/fetchData";
import ShowData from "@/components/show-data";

export default async function Page() {
  const data = await getData();
  return (
    <main>
      Hello home page
      <ShowData serverData={data} />
    </main>
  );
}
