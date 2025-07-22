import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const widgets = await prisma.widget.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(widgets);
}

export async function POST(request: Request) {
  const data = await request.json();
  const widget = await prisma.widget.create({ data });
  return NextResponse.json(widget, { status: 201 });
}
