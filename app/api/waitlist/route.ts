export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    console.log("[v0] Received email:", email)

    if (!email || !email.includes("@")) {
      console.log("[v0] Invalid email format")
      return Response.json({ error: "Valid email is required" }, { status: 400 })
    }

    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL || process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL

    console.log("[v0] Webhook URL exists:", !!zapierWebhookUrl)
    if (zapierWebhookUrl) {
      console.log(
        "[v0] Webhook URL preview:",
        zapierWebhookUrl.substring(0, 20) + "..." + zapierWebhookUrl.substring(zapierWebhookUrl.length - 10),
      )
    }

    if (!zapierWebhookUrl) {
      console.log("[v0] ERROR: Webhook URL is missing from environment variables")
      return Response.json({ error: "Webhook configuration missing" }, { status: 500 })
    }

    console.log("[v0] Attempting to send to Zapier...")

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    try {
      const response = await fetch(zapierWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      console.log("[v0] Zapier response status:", response.status)
      console.log("[v0] Zapier response ok:", response.ok)

      if (!response.ok) {
        const errorText = await response.text()
        console.log("[v0] Zapier error response:", errorText)
        return Response.json(
          {
            error: "Failed to submit. Please try again.",
            details: `Zapier returned status ${response.status}`,
          },
          { status: 500 },
        )
      }

      const responseData = await response.text()
      console.log("[v0] Zapier success response:", responseData)
      console.log("[v0] Successfully submitted to Zapier")

      return Response.json({ success: true, message: "Successfully joined waitlist" }, { status: 200 })
    } catch (fetchError: any) {
      clearTimeout(timeoutId)

      if (fetchError.name === "AbortError") {
        console.log("[v0] Zapier request timed out after 10 seconds")
        return Response.json({ error: "Request timed out. Please try again." }, { status: 504 })
      }

      console.log("[v0] Fetch error:", fetchError.message)
      throw fetchError
    }
  } catch (error: any) {
    console.error("[v0] Waitlist error:", error)
    console.error("[v0] Error details:", error.message, error.stack)
    return Response.json(
      {
        error: "Failed to join waitlist",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
