import { Button, Tracker } from "@/components";
import { data } from "@/components/tracker/constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 gap-10">
      <h1 className="text-6xl">ui-team-library</h1>
      <Button>Library Button</Button>
      <Tracker data={data} />
    </main>
  );
}
