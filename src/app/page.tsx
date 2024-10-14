import LoadScreen from "./components/loadscreen";

export default function Home() {
  return (
    <main className="flex w-full h-full min-h-screen flex-col items-center justify-between p-24">
      <LoadScreen />
    </main>
  );
}
