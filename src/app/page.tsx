import { Button, Tracker } from "@/components";
import { DataProps, TrackerProps } from "@/components/tracker/Tracker";

export default function Home() {
  const data: DataProps[] = [
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "rose", tooltip: "Downtime" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "gray", tooltip: "Maintenance" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "emerald", tooltip: "Operational" },
    { color: "yellow", tooltip: "Degraded" },
    { color: "emerald", tooltip: "Operational" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-4 gap-10">
      <h1 className="text-6xl">ui-team-library</h1>
      <Button>Library Button</Button>
      <Tracker data={data} />
    </main>
  );
}
