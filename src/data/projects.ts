import type { Project } from "@/types";

export const projects: Project[] = [
  


  {
    id: "1",
    slug: "vendorhub-multi-vendor-ecommerce",
    title: "VendorHub — Multi-Vendor E-Commerce Platform",
    shortDescription: "Production-ready multi-vendor marketplace with Stripe payments, Cloudinary image management, role-based access for 3 user types and 50+ documented API endpoints.",
    longDescription: "VendorHub is a production-grade multi-vendor marketplace platform where vendors register stores, list products and sell to customers through a single platform — with full admin oversight. Features real Stripe payment processing, automatic refunds on cancellation, vendor earnings analytics, smart coupon system and a complete admin panel for platform management.",
    category: ["full-stack", "performance"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "/images/projects/vendorhub-hero.jpg",
    screenshots: [
      "/images/projects/vendorhub-1.jpg",
      "/images/projects/vendorhub-2.jpg",
      "/images/projects/vendorhub-3.jpg",
      "/images/projects/vendorhub-4.jpg",
    ],
    liveUrl: "https://vendorhub-frontend.vercel.app",
   githubUrlFrontend: "https://github.com/officialmuhammadusman/vendorhub-frontend",
githubUrlBackend: "https://github.com/officialmuhammadusman/vendorhub-backend",
swaggerUrl: "https://vendorhub-backend.vercel.app/api/docs",
    techStack: [
      { name: "Next.js 15",      color: "#FFFFFF", bgColor: "#000000" },
      { name: "TypeScript",      color: "#FFFFFF", bgColor: "#3178C6" },
      { name: "Node.js",         color: "#FFFFFF", bgColor: "#539E43" },
      { name: "MongoDB",         color: "#FFFFFF", bgColor: "#13AA52" },
      { name: "Redux Toolkit",   color: "#FFFFFF", bgColor: "#764ABC" },
      { name: "Stripe",          color: "#FFFFFF", bgColor: "#635BFF" },
      { name: "Cloudinary",      color: "#FFFFFF", bgColor: "#3448C5" },
      { name: "Tailwind CSS",    color: "#FFFFFF", bgColor: "#0F172A" },
    ],
    badges: [
      { label: "50+ API Endpoints", icon: "Server"    },
      { label: "Swagger Docs",      icon: "FileText"  },
      { label: "Live on Vercel",    icon: "Globe"     },
      { label: "Stripe Payments",   icon: "CreditCard"},
      { label: "3 User Roles",      icon: "Shield"    },
    ],
    features: [
      {
        icon: "Store",
        title: "Vendor Store Management",
        description: "Vendors register a store with name, logo, banner and bank details. Admin approves the store before products can be listed. Suspending a vendor automatically deactivates all their products platform-wide in a single database operation.",
      },
      {
        icon: "ShoppingBag",
        title: "Product Catalog with Multi-Image Upload",
        description: "Vendors upload up to 5 images per product via Cloudinary. MongoDB text indexes on title, description and tags enable full-text search with category, price range and sort filters. Individual images can be deleted without removing the product.",
      },
      {
        icon: "CreditCard",
        title: "Stripe Payment Integration",
        description: "Complete Stripe Payment Intent flow — frontend confirms payment with Stripe.js, backend verifies intent status before placing order. Webhook handlers for payment_intent.succeeded, payment_intent.payment_failed and charge.refunded. Automatic refund triggered on order cancellation.",
      },
      {
        icon: "Users",
        title: "Role-Based Access Control",
        description: "Three distinct roles — Customer, Vendor and Admin — with fine-grained permissions enforced via verifyJWT and verifyRole middleware on every protected API endpoint. Role stored in JWT payload and validated server-side on every request.",
      },
      {
        icon: "BarChart2",
        title: "Vendor Earnings Analytics",
        description: "Real-time vendor dashboard with total earnings, order count, product count and low stock alerts. Monthly earnings chart built with Recharts from MongoDB aggregation pipeline grouping orders by month. Earnings update automatically on every successful order.",
      },
      {
        icon: "Tag",
        title: "Smart Coupon System",
        description: "Admin creates percentage or fixed discount coupons with minimum order amounts, maximum discount caps, per-user usage limits and expiry dates. Six server-side validation checks on apply including expiry, usage limit, minimum order and per-user restriction.",
      },
      {
        icon: "Shield",
        title: "JWT Authentication with Silent Refresh",
        description: "Access tokens expire in 15 minutes, refresh tokens stored in httpOnly cookies for 7 days. Axios interceptor catches 401 responses and queues all pending requests while a single refresh call runs — all queued requests retry automatically with the new token.",
      },
      {
        icon: "Truck",
        title: "Order Lifecycle Management",
        description: "Orders transition through explicit states: Pending → Confirmed → Shipped → Delivered or Cancelled. Vendor marks orders shipped and delivered. Customer cancels pending or confirmed orders triggering automatic Stripe refund and stock restoration.",
      },
    ],
    technicalDecisions: [
      {
        title: "MongoDB for Flexible Product Catalog",
        content: "Products across categories have different attributes — electronics have specs, clothing has sizes and colours, food has expiry. In a relational database this requires EAV pattern or multiple join tables which destroys query performance. MongoDB's flexible document model allows each product category to store its own attributes without schema migrations. Text indexes on title, description and tags enable full-text search across all products in a single query. The trade-off is enforcing consistency at the application layer with validators and middleware rather than database constraints.",
      },
      {
        title: "Stripe Payment Intents over Direct Charges",
        content: "I used Stripe Payment Intents rather than legacy Charges because it supports 3D Secure authentication required by banks in many regions. The flow creates a Payment Intent on the backend for the cart total, returns a clientSecret to the frontend, Stripe.js confirms the payment client-side without sensitive card data touching the server. The backend then verifies the intent status via Stripe API before placing the order — preventing any tampered requests from placing unpaid orders.",
      },
      {
        title: "JWT with Axios Request Queue for Silent Refresh",
        content: "JWT is stateless — the backend verifies the signature with no session lookup, reducing latency on every request. The challenge is token expiry during active sessions. When multiple requests fail with 401 simultaneously, a naive implementation would make multiple refresh calls causing race conditions. I implemented a request queue — the first 401 sets a refreshing flag, all subsequent 401s join the queue. One refresh call runs, then all queued requests retry with the new token. This is transparent to the user.",
      },
      {
        title: "Cloudinary for Image Storage over Local Disk",
        content: "Vercel serverless functions have no persistent file system — files written to disk are lost between invocations. Storing images locally was never an option for production. Cloudinary handles upload, CDN delivery, automatic format optimisation and storage. Multer saves files temporarily to public/temp on the server, uploads to Cloudinary, then immediately deletes the temp file. Each image stores both url and publicId in MongoDB for targeted deletion without fetching all images.",
      },
    ],
    challenges: [
      {
        problem: "Token persistence across page reloads broke for admin role — login redirected correctly but the dashboard immediately redirected back to login because Redux state was empty on the new page load.",
        solution: "The root cause was Next.js App Router initialising the Redux store on the server where localStorage is undefined, so getInitialState returned empty values. Client-side navigation reused the already-empty store. Fixed by moving to window.location.href for post-login navigation instead of router.replace — this triggers a full page reload, the module re-executes on the client, getInitialState reads localStorage correctly and the store initialises with the correct token and role before any component renders.",
      },
      {
        problem: "Cloudinary upload failed in production with 'Must supply api_key' despite credentials being set in environment variables.",
        solution: "The fileUpload.js utility imported cloudinary directly from the package without importing the config module that called cloudinary.config(). In local development the config module was always imported first through the module chain. On Vercel, ES Module import order is not guaranteed. Fixed by moving cloudinary.config() directly into fileUpload.js so credentials are always set regardless of which module loads first. Also added automatic creation of the public/temp directory on module load since Vercel's filesystem does not persist between cold starts.",
      },
      {
        problem: "Vendor orders page showed zero orders despite orders existing in the database and appearing correctly in the vendor dashboard stats.",
        solution: "The vendor orders page was calling getMyOrders which filters by user._id — returning orders placed by that user as a customer. Vendor orders need to filter by items.vendor matching the vendor's profile _id. Added a dedicated GET /orders/vendor-orders endpoint that first finds the vendor profile for the authenticated user, then queries orders where items.vendor matches that vendor's _id using MongoDB's nested document query.",
      },
    ],
    performanceMetrics: [
      { label: "API Endpoints Documented", value: "50+",    unit: "via Swagger" },
      { label: "Product Categories",       value: "11",     unit: "with full-text search" },
      { label: "Database Models",          value: "7",      unit: "with indexes" },
      { label: "Coupon Validation Checks", value: "6",      unit: "server-side" },
      { label: "Access Token Expiry",      value: "15 min", unit: "refresh: 7 days" },
    ],
    testCount: "—",
    testCoverage: "—",
    codeSnippets: [
      {
        filename: "src/lib/axios.ts",
        language: "typescript",
        description: "Axios request queue for silent JWT refresh — prevents multiple simultaneous refresh calls",
        code: `let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject:  (err: unknown)  => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((p) =>
    error ? p.reject(error) : p.resolve(token!)
  );
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const original = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !original._retry) {
      if (isRefreshing) {
        // Queue this request until token is refreshed
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          original.headers.Authorization = \`Bearer \${token}\`;
          return axiosInstance(original);
        });
      }

      original._retry = true;
      isRefreshing    = true;

      try {
        const refreshToken = localStorage.getItem("vh_refresh_token");
        const { data }     = await axios.post("/auth/refresh-token", {
          refreshToken,
        });

        const newToken = data.data.accessToken;
        localStorage.setItem("vh_access_token", newToken);

        processQueue(null, newToken);
        original.headers.Authorization = \`Bearer \${newToken}\`;
        return axiosInstance(original);
      } catch (refreshError) {
        processQueue(refreshError, null);
        store.dispatch(logout());
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);`,
      },
      {
        filename: "src/controllers/order.controller.js",
        language: "javascript",
        description: "Atomic order placement — deducts stock, updates vendor earnings, marks coupon used and clears cart in one request",
        code: `export const placeOrder = asyncHandler(async (req, res) => {
  const { paymentIntentId, shippingAddress } = req.body;

  // Verify payment actually succeeded with Stripe
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  if (paymentIntent.status !== "succeeded") {
    throw new ApiError(400, "Payment has not been completed");
  }

  const cart = await Cart.findOne({ user: req.user._id })
    .populate("items.product")
    .populate("coupon");

  if (!cart || cart.items.length === 0)
    throw new ApiError(400, "Cart is empty");

  const orderItems  = [];
  const vendorEarnings = {};

  for (const item of cart.items) {
    if (item.product.stock < item.quantity)
      throw new ApiError(400, \`\${item.product.title} is out of stock\`);

    // Deduct stock atomically
    await Product.findByIdAndUpdate(item.product._id, {
      $inc: { stock: -item.quantity, sold: item.quantity },
    });

    // Accumulate vendor earnings
    const vid = item.product.vendor.toString();
    vendorEarnings[vid] = (vendorEarnings[vid] || 0)
      + item.price * item.quantity;

    orderItems.push({
      product:  item.product._id,
      vendor:   item.product.vendor,
      title:    item.product.title,
      image:    item.product.images[0]?.url || "",
      price:    item.price,
      quantity: item.quantity,
    });
  }

  // Update each vendor's earnings and order count
  for (const [vendorId, earnings] of Object.entries(vendorEarnings)) {
    await Vendor.findByIdAndUpdate(vendorId, {
      $inc: { totalEarnings: earnings, totalOrders: 1 },
    });
  }

  const subtotal = cart.items.reduce(
    (sum, i) => sum + i.price * i.quantity, 0
  );
  const discount = cart.discount || 0;

  const order = await Order.create({
    user: req.user._id,
    items: orderItems,
    shippingAddress,
    subtotal,
    discount,
    total:          subtotal - discount,
    coupon:         cart.coupon?._id || null,
    status:         "confirmed",
    paymentStatus:  "paid",
    paymentIntentId,
    paidAt:         new Date(),
  });

  // Mark coupon as used by this customer
  if (cart.coupon) {
    await Coupon.findByIdAndUpdate(cart.coupon._id, {
      $inc:  { usedCount: 1 },
      $push: { usedBy: req.user._id },
    });
  }

  // Clear the cart
  await Cart.findByIdAndDelete(cart._id);

  return res.status(201).json(
    new ApiResponse(201, order, "Order placed successfully")
  );
});`,
      },
    ],
  },





















  // {
  //   id: "2",
  //   slug: "project-management-saas",
  //   title: "Project Management SaaS",
  //   shortDescription: "Real-time kanban with Socket.io, Reddit-style nested comments via MongoDB $graphLookup, and sprint analytics with Gantt charts.",
  //   longDescription: "A SaaS project management platform with real-time kanban boards, nested comment threads, and comprehensive sprint analytics designed for development teams.",
  //   category: ["full-stack", "real-time"],
  //   status: "in-progress",
  //   year: "2024",
  //   isFeatured: true,
  //   heroImage: "/images/projects/pm-hero.jpg",
  //   screenshots: [
  //     "/images/projects/pm-1.jpg",
  //     "/images/projects/pm-2.jpg",
  //     "/images/projects/pm-3.jpg",
  //   ],
  //   liveUrl: "https://pm-saas-demo.vercel.app",
  //   githubUrl: "https://github.com/alexjohnson/project-management-saas",
  //   techStack: [
  //     { name: "Next.js 15", color: "#FFFFFF", bgColor: "#000000" },
  //     { name: "TypeScript", color: "#FFFFFF", bgColor: "#3178C6" },
  //     { name: "MongoDB", color: "#FFFFFF", bgColor: "#13AA52" },
  //     { name: "Socket.io", color: "#FFFFFF", bgColor: "#010101" },
  //     { name: "Redis", color: "#FFFFFF", bgColor: "#DC382D" },
  //     { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
  //   ],
  //   badges: [
  //     { label: "30+ Tests", icon: "TestTube2" },
  //     { label: "Real-Time Sync", icon: "Zap" },
  //     { label: "Deployed", icon: "Globe" },
  //     { label: "Swagger Docs", icon: "FileText" },
  //   ],
  //   features: [
  //     {
  //       icon: "MessageSquare",
  //       title: "Recursive Comment System",
  //       description: "Nested comments (unlimited depth) using MongoDB $graphLookup aggregation. Full comment tree returned in a single database call with sub-100ms performance at 1000+ comments.",
  //     },
  //     {
  //       icon: "Kanban",
  //       title: "Real-Time Kanban Board",
  //       description: "Drag-and-drop task management with Socket.io. When a user moves a task, all connected users see the update in under 100ms. Optimistic UI updates for zero perceived latency.",
  //     },
  //     {
  //       icon: "Calendar",
  //       title: "Sprint Planning & Gantt Charts",
  //       description: "Create 1-4 week sprints, assign tasks, visualize dependencies with Gantt charts, and track progress with burn-down charts and retrospective templates.",
  //     },
  //     {
  //       icon: "BarChart2",
  //       title: "Sprint Analytics",
  //       description: "Completion rate vs plan, velocity in story points per sprint, cycle time from created to done, and team productivity trends over time.",
  //     },
  //     {
  //       icon: "Bell",
  //       title: "Real-Time Notifications",
  //       description: "Browser notifications and email for task assignment, comment mentions, and approaching due dates. Powered by Socket.io with email fallback.",
  //     },
  //     {
  //       icon: "Users",
  //       title: "Role-Based Access Control",
  //       description: "Owner, Manager, Developer, Viewer roles with cascading permissions. Middleware validates role and resource ownership on every API call.",
  //     },
  //   ],
  //   technicalDecisions: [
  //     {
  //       title: "MongoDB for Recursive Data",
  //       content: "Project management data is heavily nested: Projects → Sprints → Tasks → Comments. SQL would require 5 JOIN statements to fetch a task with all comments. MongoDB $graphLookup aggregation handles this in a single query regardless of depth — not efficiently possible in SQL without recursive CTEs which are slow. Trade-off: loss of ACID guarantees for distributed transactions. Since this is a collaboration tool where eventual consistency is acceptable, this is a reasonable trade-off.",
  //     },
  //     {
  //       title: "Socket.io for Real-Time Kanban",
  //       content: "Kanban drag-and-drop requires sub-100ms latency. HTTP polling every 500ms would create unacceptable lag. Socket.io uses persistent WebSocket connections to push updates to all connected clients. When a user moves a task, the server broadcasts to all clients in that project room. Chosen over alternatives because it works in production without complex setup, has polling fallback if WebSocket is unavailable, has a built-in room concept, and TypeScript types are available.",
  //     },
  //   ],
  //   challenges: [
  //     {
  //       problem: "Real-time sync conflicts when two users simultaneously edited the same task — traditional last-write-wins loses data.",
  //       solution: "Implemented Operational Transformation (OT) using the Yjs CRDT library for collaborative text editing. This ensures all clients converge to the same state even with concurrent edits. Non-text fields (status, assignee) use timestamp-based conflict resolution with a deterministic winner.",
  //     },
  //     {
  //       problem: "Real-time update storm — bulk operations broadcast 50 updates simultaneously, causing UI lag for all connected clients.",
  //       solution: "Implemented batch socket.io emissions that collect all changes in a 100ms window then send a single batch update. Reduces network traffic 50x. UI updates once with all changes instead of 50 rapid successive updates.",
  //     },
  //   ],
  //   performanceMetrics: [
  //     { label: "Real-Time Update Latency", value: "<100ms", unit: "WebSocket" },
  //     { label: "Task + Comments Query", value: "<150ms" },
  //     { label: "Page Load (LCP)", value: "1.2s" },
  //     { label: "Bundle Size", value: "55KB", unit: "gzipped" },
  //   ],
  //   testCount: "30+",
  //   testCoverage: "80%",
  // },

  // {
  //   id: "3",
  //   slug: "scoutiq-cricket-saas",
  //   title: "ScoutIQ — Cricket Team SaaS",
  //   shortDescription: "Enterprise cricket management SaaS with live ball-by-ball scoring, player analytics, multi-tenant architecture, and Stripe subscription billing.",
  //   longDescription: "ScoutIQ is a comprehensive cricket team management SaaS platform enabling academy and club admins to manage players, schedule matches, record live scores, and generate advanced performance analytics.",
  //   category: ["full-stack", "real-time", "performance"],
  //   status: "in-progress",
  //   year: "2024",
  //   isFeatured: true,
  //   heroImage: "/images/projects/scoutiq-hero.jpg",
  //   screenshots: [
  //     "/images/projects/scoutiq-1.jpg",
  //     "/images/projects/scoutiq-2.jpg",
  //     "/images/projects/scoutiq-3.jpg",
  //     "/images/projects/scoutiq-4.jpg",
  //   ],
  //   liveUrl: "https://scoutiq-demo.vercel.app",
  //   githubUrl: "https://github.com/alexjohnson/scoutiq",
  //   techStack: [
  //     { name: "Next.js 15", color: "#FFFFFF", bgColor: "#000000" },
  //     { name: "PostgreSQL", color: "#FFFFFF", bgColor: "#336791" },
  //     { name: "Redis", color: "#FFFFFF", bgColor: "#DC382D" },
  //     { name: "Socket.io", color: "#FFFFFF", bgColor: "#010101" },
  //     { name: "Stripe", color: "#FFFFFF", bgColor: "#635BFF" },
  //     { name: "Prisma", color: "#FFFFFF", bgColor: "#2D3748" },
  //   ],
  //   badges: [
  //     { label: "35+ Tests", icon: "TestTube2" },
  //     { label: "Multi-Tenant", icon: "Building2" },
  //     { label: "Live Scoring", icon: "Activity" },
  //     { label: "Stripe Billing", icon: "CreditCard" },
  //     { label: "Redis Cache", icon: "Zap" },
  //   ],
  //   features: [
  //     {
  //       icon: "Building2",
  //       title: "Multi-Tenant Architecture",
  //       description: "Each academy gets an isolated workspace. OrganizationId enforced on every query. One user can own multiple organizations with separate subscriptions. Soft delete for 30-day data recovery.",
  //     },
  //     {
  //       icon: "User",
  //       title: "Player Profiling & Career Stats",
  //       description: "Full player profiles with batting average, strike rate, bowling economy, and form rating. Stats auto-update after every match. Form visualization with last-10-innings charts.",
  //     },
  //     {
  //       icon: "Activity",
  //       title: "Live Ball-by-Ball Scoring",
  //       description: "Real-time match scorecard entry with runs, extras, wickets, and over summaries. Socket.io broadcasts updates to all viewers in under 100ms. Shareable public scorecard link.",
  //     },
  //     {
  //       icon: "BarChart2",
  //       title: "Advanced Analytics",
  //       description: "Team win/loss ratio, player radar charts (Batting/Bowling/Fielding/Consistency/Form), head-to-head comparison, season analytics, and Redis-cached leaderboards.",
  //     },
  //     {
  //       icon: "Calendar",
  //       title: "Fixture & Availability Management",
  //       description: "Calendar view of all matches and training sessions. Availability poll before matches with auto-squad suggestion based on availability plus form rating.",
  //     },
  //     {
  //       icon: "CreditCard",
  //       title: "Subscription Billing (3 Tiers)",
  //       description: "Free, Pro ($19/mo), Elite ($49/mo) tiers with feature gating. Stripe handles recurring billing, proration, invoicing, and tax calculation across regions.",
  //     },
  //   ],
  //   technicalDecisions: [
  //     {
  //       title: "PostgreSQL for Structured Data",
  //       content: "Cricket team management has highly structured data: Teams → Players → Matches → Scores. Relationships are fixed and benefit from ACID guarantees — a player must belong to a valid team, a match must have valid players. PostgreSQL foreign key constraints enforce this at the database level. Advanced window functions enable complex analytics like running averages and career rankings that would require application-layer code in MongoDB.",
  //     },
  //     {
  //       title: "Redis Sorted Sets for Leaderboards",
  //       content: "Leaderboards require sorting 1000+ players by various stats. Database query would take 100-200ms. But leaderboards are read-heavy (displayed on many pages) and update only when match stats change. Redis sorted sets — ZADD/ZRANGE — are O(log N) and sub-1ms. Leaderboard updated after every match. This reduces database load 95% for leaderboard queries. Trade-off: one more infrastructure component, justified by the performance gain.",
  //     },
  //     {
  //       title: "Multi-Tenant with organizationId",
  //       content: "Every table has an organizationId column. Every query is filtered by organizationId. This ensures complete data isolation between teams, easy onboarding of new teams, and clean cascade deletion. Mitigated the risk of missing the filter by implementing Prisma middleware that automatically appends organizationId to every query based on the authenticated user's context.",
  //     },
  //   ],
  //   challenges: [
  //     {
  //       problem: "Live match scoring concurrency — when coach enters score, 100+ viewers need instant consistent updates without race conditions or duplicate runs.",
  //       solution: "Optimistic locking at the database level: each score update increments a version number. If update fails on version mismatch (conflict), retry with fresh data. Socket.io broadcasts confirmed state to all viewers. Coach UI shows immediate local update but awaits server confirmation before allowing next ball entry.",
  //     },
  //     {
  //       problem: "Analytics calculation performance — sorting 1000+ players across a season required 500ms+ database queries that blocked UI rendering.",
  //       solution: "Pre-compute and cache results in Redis after every match. Leaderboard queries serve from Redis cache (1ms) instead of database (500ms+). Background job runs nightly to recompute all season analytics. Cache invalidated immediately after any match result is finalized.",
  //     },
  //   ],
  //   performanceMetrics: [
  //     { label: "API Response Time", value: "80-120ms", unit: "p95: 200ms" },
  //     { label: "Live Score Latency", value: "<100ms", unit: "Socket.io" },
  //     { label: "Leaderboard Query", value: "<10ms", unit: "from Redis" },
  //     { label: "Lighthouse Score", value: "95+/100" },
  //   ],
  //   testCount: "35+",
  //   testCoverage: "82%",
  // },
];

export const getFeaturedProjects = () => projects.filter((p) => p.isFeatured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getRelatedProjects = (currentSlug: string) =>
  projects.filter((p) => p.slug !== currentSlug).slice(0, 2);
