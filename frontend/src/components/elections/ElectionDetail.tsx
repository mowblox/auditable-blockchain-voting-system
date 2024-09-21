'use client';
import { useParams } from "next/navigation";
import ElectionTitle from "./ElectionTitle";
import ElectionDescription from "./ElectionDescription";

export default function ElectionDetail() {
  const { id }: { id: `0x${string}` } = useParams();

  return (
    <div>
      <p><ElectionTitle address={id} /></p>
      <p><ElectionDescription address={id} /></p>
    </div>
  );
}