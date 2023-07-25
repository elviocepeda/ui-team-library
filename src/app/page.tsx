import { Button } from "@/components";
import { faPaperPlane } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-6xl py-4">ui-team-library</h1>
      <FontAwesomeIcon icon={faPaperPlane} style={{ height: '32px' }}/>
      <div className="mt-2">
        <Button>Library Button</Button>
      </div>
    </main>
  );
}
