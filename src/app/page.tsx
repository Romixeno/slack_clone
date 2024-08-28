import { Button } from "@/components/ui/button";
import AuthScreen from "@/features/auth/components/AuthScreen";
import { fetchQuery } from "convex/nextjs";
import Image from "next/image";
import { api } from "../../convex/_generated/api";

export default async function Home() {
  return <AuthScreen />;
}
