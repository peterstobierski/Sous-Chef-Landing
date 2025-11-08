export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Send to Zapier webhook
    const zapierWebhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL

    if (!zapierWebhookUrl) {
      return Response.json({ error: "Webhook configuration missing" }, { status: 500 })
    }

    const response = await fetch(zapierWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit to Zapier")
    }

    return Response.json({ success: true, message: "Successfully joined waitlist" }, { status: 200 })
  } catch (error) {
    console.error("Waitlist error:", error)
    return Response.json({ error: "Failed to join waitlist" }, { status: 500 })
  }
}
