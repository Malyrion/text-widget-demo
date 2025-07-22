import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.widget.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return NextResponse.json({ message: "Widget deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Widget not found" }, { status: 404 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await request.json();
  try {
    const updated = await prisma.widget.update({ where: { id }, data });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Widget not found" }, { status: 404 });
  }
}
