import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes
const protectedRoutes = [
  "/dashboard",
  "/resume",
  "/ai-cover-letter",
  "/interview",
  "/onboarding",
];

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const pathname = req.nextUrl.pathname;

  // Check if the current pathname starts with any protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If the user is not signed in and is trying to access a protected route, redirect
  if (!userId && isProtectedRoute) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  // Otherwise, allow the request through
  return NextResponse.next();
});

// Tell Next.js which routes should go through the middleware
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
