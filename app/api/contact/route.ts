import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  organization: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal("")),
  organizationType: z.string().min(1),
  serviceRequired: z.string().min(1),
  projectDescription: z.string().min(20),
  budget: z.string().optional().or(z.literal("")),
  timeline: z.string().optional().or(z.literal("")),
  contactPreference: z.string().optional().or(z.literal("")),
  consent: z.boolean().optional().or(z.literal(true)),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body?.website) {
      return NextResponse.json({ message: "Spam check failed." }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: parsed.error.issues[0]?.message || "Invalid project inquiry." }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "Project inquiry received.",
      inquiry: {
        ...parsed.data,
        receivedAt: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json({ message: "We could not process your inquiry. Please try again." }, { status: 500 });
  }
}
