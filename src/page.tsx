import dynamic from "next/dynamic";

const Third = dynamic(() => import("./third"));

export default function Home() {
  return (
    <div>
      <Third />
    </div>
  );
}
