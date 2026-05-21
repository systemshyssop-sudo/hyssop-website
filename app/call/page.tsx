import { redirect } from "next/navigation";

type CallPageProps = {
  searchParams: Promise<{
    phone?: string;
  }>;
};

export default async function CallPage({ searchParams }: CallPageProps) {
  const params = await searchParams;

  const phone = String(params.phone || "")
    .replace(/[^\d+]/g, "")
    .trim();

  if (!phone) {
    redirect("/");
  }

  redirect(`tel:${phone}`);
}