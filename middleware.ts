import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/auth/callback",
  "/api/workflows/(.*)*",
  "/api/webhooks/stripe",
  "/api/workflows/nodes/generate-caption",
  "/api/workflow/stop",
]);

export default clerkMiddleware(async (auth, request) => {
  try {
    if (!isPublicRoute(request)) {
      await auth.protect();
    }
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
