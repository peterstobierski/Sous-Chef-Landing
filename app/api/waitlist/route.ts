export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Valid email is required" }, { status: 400 })
    }

    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL || process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL

    console.log("[v0] Webhook URL exists:", !!zapierWebhookUrl)
    console.log("[v0] Attempting to send to Zapier...")

    if (!zapierWebhookUrl) {
      console.log("[v0] ERROR: Webhook URL is missing from environment variables")
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

    console.log("[v0] Zapier response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.log("[v0] Zapier error:", errorText)
      throw new Error(`Zapier returned ${response.status}`)
    }

    console.log("[v0] Successfully submitted to Zapier")
    return Response.json({ success: true, message: "Successfully joined waitlist" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Waitlist error:", error)
    return Response.json({ error: "Failed to join waitlist" }, { status: 500 })
  }
}
