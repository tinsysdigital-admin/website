import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic Validation
    const { name, email, service, description } = data;
    if (!name || !email || !service || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In a real application, you'd integrate with SendGrid, Resend, or a database here.
    // E.g., sanitize data and store in DB, and log the request.
    console.log("New Lead Received:", {
      name,
      email,
      company: data.company,
      service,
      description,
      budget: data.budget,
      deadline: data.deadline,
      contactMethod: data.contactMethod,
      timestamp: new Date().toISOString()
    });

    // Simulate network delay for anti-spam/rate-limiting mockup
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({ success: true, message: "Request received successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
