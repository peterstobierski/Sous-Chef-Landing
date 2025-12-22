export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    console.log("[v0] Received email:", email)

    if (!email || !email.includes("@")) {
      console.log("[v0] Invalid email format")
      return Response.json({ error: "Valid email is required" }, { status: 400 })
    }

    const projectId = process.env.FIREBASE_PROJECT_ID

    if (!projectId) {
      console.error("[v0] FIREBASE_PROJECT_ID not configured")
      return Response.json({ error: "Server configuration error" }, { status: 500 })
    }

    console.log("[v0] Using Firebase project:", projectId)

    // Create a document in Firestore using REST API
    const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/waitlist`

    const document = {
      fields: {
        email: { stringValue: email },
        timestamp: { timestampValue: new Date().toISOString() },
        createdAt: { timestampValue: new Date().toISOString() },
      },
    }

    console.log("[v0] Attempting to write to Firestore via REST API...")

    const response = await fetch(firestoreUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(document),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("[v0] Firestore REST API error:", response.status, errorData)
      throw new Error(`Firestore API error: ${response.status}`)
    }

    const result = await response.json()
    console.log("[v0] Successfully added email to Firestore waitlist collection:", result.name)

    return Response.json({ success: true, message: "Successfully joined waitlist" }, { status: 200 })
  } catch (error: any) {
    console.error("[v0] Waitlist error:", error)
    console.error("[v0] Error details:", error.message)
    return Response.json(
      {
        error: "Failed to join waitlist",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
