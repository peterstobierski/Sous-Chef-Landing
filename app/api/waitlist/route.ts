import { adminDb } from "@/lib/firebase-admin"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    console.log("[v0] Received email:", email)

    if (!email || !email.includes("@")) {
      console.log("[v0] Invalid email format")
      return Response.json({ error: "Valid email is required" }, { status: 400 })
    }

    console.log("[v0] Attempting to write to Firestore...")

    try {
      await adminDb.collection("waitlist").add({
        email,
        timestamp: new Date().toISOString(),
        createdAt: new Date(),
      })

      console.log("[v0] Successfully added email to Firestore waitlist collection")

      return Response.json({ success: true, message: "Successfully joined waitlist" }, { status: 200 })
    } catch (firestoreError: any) {
      console.log("[v0] Firestore error:", firestoreError.message)
      throw firestoreError
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
