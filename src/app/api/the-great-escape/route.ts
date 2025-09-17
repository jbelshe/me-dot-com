import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("Me-Dot-Com");
  const all_data = await db.collection("the-great-escape").find({}).toArray();
  const post_data = all_data[0].data;
  return Response.json(post_data);
}