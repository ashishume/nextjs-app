import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=20"
  );
  const repo: any = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
}) satisfies GetServerSideProps<{ repo: any }>;


export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
        {repo.map((value: any) => (
          <div>{value.title}</div>
        ))}
    </main>
  );
}
