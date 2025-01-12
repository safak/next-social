import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/user(.*)"]);

export default clerkMiddleware(async (auth, req, res) => {
    const authObj = await auth();
    if (isProtectedRoute(req)) {
        if (!authObj.userId) {
            authObj.redirectToSignIn({ returnBackUrl: req.url });
            return;
        }
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
