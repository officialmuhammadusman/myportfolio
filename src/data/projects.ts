import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "mejora-tu-dolor",
    slug: "mejora-tu-dolor",
    title: "Mejora Tu Dolor — Telemedicine Platform",
    shortDescription:
      "Telemedicine platform for chronic pain specialists — video booking, Webpay payments, async medical reviews, and specialist dashboards live in Chile.",
    longDescription:
      "Mejora Tu Dolor connects patients with certified chronic-pain specialists through secure teleconsultations. The platform covers the full care journey: time-slot booking, Webpay payment, automated email confirmation with secure video links, asynchronous multi-file medical review (labs, imaging, diagnostic charts), specialist dashboards consolidating patient history, and cross-regional physician referral flows.",
    category: ["full-stack", "frontend", "backend"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "/images/projects/live/mejora-tu-dolor.png",
    screenshots: ["/images/projects/live/mejora-tu-dolor.png"],
    liveUrl: "https://mejoratudolor.cl",
    techStack: [
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "React", color: "#FFFFFF", bgColor: "#61DAFB" },
      { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
      { name: "PostgreSQL", color: "#FFFFFF", bgColor: "#336791" },
      { name: "Tailwind CSS", color: "#FFFFFF", bgColor: "#0F172A" },
      { name: "Webpay", color: "#FFFFFF", bgColor: "#FF6A00" },
    ],
    badges: [
      { label: "Live in Chile", icon: "Globe" },
      { label: "Webpay Payments", icon: "CreditCard" },
      { label: "Video Consults", icon: "Video" },
      { label: "Async Reviews", icon: "FileText" },
    ],
    features: [
      {
        icon: "Calendar",
        title: "Video Consultation Booking",
        description:
          "End-to-end booking flow with time-slot selection, confirmation, and secure video access links delivered by email after payment.",
      },
      {
        icon: "CreditCard",
        title: "Webpay Payment Integration",
        description:
          "Secure Chilean Webpay checkout wired into the appointment flow with transparent pricing and automated confirmation.",
      },
      {
        icon: "FileUp",
        title: "Async Medical Review Module",
        description:
          "Patients upload diagnostic charts, lab reports, and imaging for specialist review on a structured ~7-day turnaround.",
      },
      {
        icon: "LayoutDashboard",
        title: "Specialist Dashboard",
        description:
          "Consolidates a patient's full document and consultation history into a single view ahead of each call.",
      },
      {
        icon: "GitBranch",
        title: "Cross-Regional Referrals",
        description:
          "Physicians can route complex cases to specialists across the platform without leaving the care workflow.",
      },
      {
        icon: "Stethoscope",
        title: "Patient Care Journey",
        description:
          "Public site supports specialist search, visit types, reminders, e-prescriptions, FAQ, and health content for chronic conditions.",
      },
    ],
    technicalDecisions: [
      {
        title: "Booking + payment as one transactional journey",
        content:
          "Appointment availability, Webpay confirmation, and video-link issuance are treated as a single care journey so patients never land in a paid-but-unconfirmed state.",
      },
      {
        title: "Async review for specialist throughput",
        content:
          "Heavy clinical document review is separated from live video slots so specialists can triage cases asynchronously before consultations.",
      },
    ],
    challenges: [
      {
        problem: "Patients needed both live video care and document-heavy specialist review.",
        solution:
          "Built dual paths — instant teleconsult booking and a multi-file async review module with specialist routing.",
      },
      {
        problem: "Complex cases required specialists outside the patient's local region.",
        solution:
          "Implemented cross-regional referral flow so physicians can hand off cases inside the same platform.",
      },
    ],
    performanceMetrics: [
      { label: "Care paths", value: "2", unit: "live + async" },
      { label: "Payment", value: "Webpay", unit: "Chile" },
      { label: "Status", value: "Live" },
    ],
    testCount: "Production QA",
    testCoverage: "Live product",
  },
  {
    id: "cliender",
    slug: "cliender",
    title: "Cliender — Business Management SaaS",
    shortDescription:
      "Cloud business management for local operators — POS, appointments, billing, leads, live dashboards, and geolocation marketing.",
    longDescription:
      "Cliender is a business management SaaS for local businesses. Core delivery includes point-of-sale and cloud operations modules, unified appointment scheduling with billing and lead tracking, a real-time performance cockpit (employees, clients, social engagement), and geolocation-based targeting for local marketing tools — helping operators run day-to-day work from one platform.",
    category: ["full-stack", "frontend", "backend"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "/images/projects/live/cliender.png",
    screenshots: ["/images/projects/live/cliender.png"],
    liveUrl: "https://cliender.com",
    techStack: [
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "React", color: "#FFFFFF", bgColor: "#61DAFB" },
      { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
      { name: "PostgreSQL", color: "#FFFFFF", bgColor: "#336791" },
      { name: "Cloud", color: "#FFFFFF", bgColor: "#FF6A00" },
    ],
    badges: [
      { label: "Live SaaS", icon: "Globe" },
      { label: "POS + CRM", icon: "Store" },
      { label: "Geo Marketing", icon: "MapPin" },
      { label: "Live Cockpit", icon: "BarChart2" },
    ],
    features: [
      {
        icon: "Store",
        title: "POS & Cloud Operations",
        description:
          "Core dashboard modules for point-of-sale and cloud-based day-to-day business management.",
      },
      {
        icon: "Calendar",
        title: "Appointments + Billing + Leads",
        description:
          "Unified system combining scheduling, billing, and lead tracking so operators stop juggling tools.",
      },
      {
        icon: "BarChart2",
        title: "Real-Time Performance Cockpit",
        description:
          "Live views consolidating employee output, client metrics, and social engagement data.",
      },
      {
        icon: "MapPin",
        title: "Geolocation Marketing",
        description:
          "Local targeting tools that help businesses run location-aware campaigns from the same platform.",
      },
      {
        icon: "MessageSquare",
        title: "Omnichannel Business Ops",
        description:
          "Product surface supports CRM-style follow-up, inventory-aware ops, and marketing channels around the local business workflow.",
      },
      {
        icon: "Layers",
        title: "Modular Vertical Delivery",
        description:
          "Built to serve local service businesses with modules that can expand across sales, ops, and media workflows.",
      },
    ],
    technicalDecisions: [
      {
        title: "One cockpit instead of tool sprawl",
        content:
          "Appointments, billing, leads, and performance metrics share one operational model so local teams get a single source of truth.",
      },
      {
        title: "Geo as a first-class marketing signal",
        content:
          "Location targeting is wired into marketing tools rather than bolted on as a separate campaign spreadsheet.",
      },
    ],
    challenges: [
      {
        problem: "Local businesses were losing leads and time across disconnected POS, calendar, and marketing tools.",
        solution:
          "Unified core modules into one cloud cockpit with live operational metrics.",
      },
    ],
    performanceMetrics: [
      { label: "Modules", value: "POS + CRM + Geo" },
      { label: "Status", value: "Live" },
    ],
    testCount: "Production QA",
    testCoverage: "Live product",
  },
  {
    id: "hrms-portal",
    slug: "hrms-portal",
    title: "HRMS Portal — Enterprise People Platform",
    shortDescription:
      "Enterprise HR platform with admin-configurable RBAC, employees, attendance, hiring, and project modules.",
    longDescription:
      "BXTrack HRMS is an enterprise people platform with a dynamic, admin-configurable role-based permission system (permissions assigned per role from the admin panel, not hardcoded). It covers employee onboarding and department hierarchy, attendance and leave with multi-step approvals, hiring/recruitment pipelines, and project/task tracking for teams.",
    category: ["full-stack", "backend", "frontend"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "/images/projects/live/hrms-portal.png",
    screenshots: ["/images/projects/live/hrms-portal.png"],
    liveUrl: "https://hrms-portal-beta.vercel.app",
    techStack: [
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "React", color: "#FFFFFF", bgColor: "#61DAFB" },
      { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
      { name: "PostgreSQL", color: "#FFFFFF", bgColor: "#336791" },
      { name: "RBAC", color: "#FFFFFF", bgColor: "#FF6A00" },
    ],
    badges: [
      { label: "Dynamic RBAC", icon: "Shield" },
      { label: "Approvals", icon: "CheckCircle2" },
      { label: "Hiring Pipeline", icon: "Users" },
      { label: "Live Beta", icon: "Globe" },
    ],
    features: [
      {
        icon: "Shield",
        title: "Dynamic Role-Based Permissions",
        description:
          "Admins assign permissions per role from the panel — access rules are configurable, not hardcoded into the app.",
      },
      {
        icon: "Users",
        title: "Employee Management",
        description:
          "Onboarding flows, department hierarchy, and profile records for the full employee lifecycle.",
      },
      {
        icon: "CalendarCheck",
        title: "Attendance & Leave Approvals",
        description:
          "Attendance tracking and leave requests with multi-step approval workflows.",
      },
      {
        icon: "UserPlus",
        title: "Hiring & Recruitment",
        description:
          "Candidate pipeline module for tracking applicants through hiring stages.",
      },
      {
        icon: "Kanban",
        title: "Project & Task Tracking",
        description:
          "Project management module for task assignment and team progress tracking.",
      },
      {
        icon: "Lock",
        title: "Secure Portal Access",
        description:
          "Authenticated employee portal with login and password recovery for workforce access.",
      },
    ],
    technicalDecisions: [
      {
        title: "Permissions as data, not code",
        content:
          "RBAC is admin-configurable so organizations can evolve roles without shipping a new release for every permission change.",
      },
      {
        title: "Approval workflows as first-class state machines",
        content:
          "Leave and attendance approvals use explicit multi-step states so auditability and accountability stay clear.",
      },
    ],
    challenges: [
      {
        problem: "Hardcoded permissions blocked different client org structures.",
        solution:
          "Built a dynamic RBAC matrix configurable from the admin panel.",
      },
    ],
    performanceMetrics: [
      { label: "Core modules", value: "5+" },
      { label: "Access model", value: "Dynamic RBAC" },
      { label: "Status", value: "Live beta" },
    ],
    testCount: "Production QA",
    testCoverage: "Live product",
  },
  {
    id: "padel-connect",
    slug: "padel-connect",
    title: "Padel Connect — Club & Matchmaking Platform",
    shortDescription:
      "Smart padel platform with club-owner dashboard, skill-based matchmaking, player app flows, and subscription landing.",
    longDescription:
      "Padel Connect is a dual-sided sports platform: a club-owner web dashboard for managing matches, player-level upgrades, and club operations; skill-level matchmaking for fair pairing; player-facing mobile flows to view/join matches, approve or decline requests, and track availability; plus a marketing landing with feature sections, pricing tiers, store CTAs, and subscription-based access.",
    category: ["full-stack", "frontend", "real-time"],
    status: "completed",
    year: "2025",
    isFeatured: true,
    heroImage: "/images/projects/live/padel-connect.png",
    screenshots: ["/images/projects/live/padel-connect.png"],
    liveUrl: "https://padel-fe.vercel.app",
    techStack: [
      { name: "Next.js", color: "#FFFFFF", bgColor: "#000000" },
      { name: "React", color: "#FFFFFF", bgColor: "#61DAFB" },
      { name: "React Native", color: "#FFFFFF", bgColor: "#0A0A0A" },
      { name: "Node.js", color: "#FFFFFF", bgColor: "#539E43" },
      { name: "Tailwind CSS", color: "#FFFFFF", bgColor: "#0F172A" },
    ],
    badges: [
      { label: "Club Dashboard", icon: "LayoutDashboard" },
      { label: "Matchmaking", icon: "Users" },
      { label: "Mobile App", icon: "Smartphone" },
      { label: "Subscriptions", icon: "CreditCard" },
    ],
    features: [
      {
        icon: "LayoutDashboard",
        title: "Club-Owner Dashboard",
        description:
          "Web dashboard for managing matches, approving player-level upgrade requests, and overseeing club operations.",
      },
      {
        icon: "Users",
        title: "Skill-Based Matchmaking",
        description:
          "Matchmaking logic pairs players by skill level so games stay competitive and fair.",
      },
      {
        icon: "Smartphone",
        title: "Player Mobile Flows",
        description:
          "Core screens for viewing/joining matches, approving or declining requests, and tracking availability.",
      },
      {
        icon: "Megaphone",
        title: "Marketing Landing",
        description:
          "Growth landing with feature sections, pricing tiers, and App Store / Play Store integration points.",
      },
      {
        icon: "CreditCard",
        title: "Subscription Access Model",
        description:
          "Tiered plans control platform access for clubs and players.",
      },
      {
        icon: "Trophy",
        title: "Dual Product Surface",
        description:
          "One system serving club operators and players with synchronized match and availability workflows.",
      },
    ],
    technicalDecisions: [
      {
        title: "Skill as the matchmaking primitive",
        content:
          "Pairing is driven by skill level so club quality and player retention stay higher than random open matches.",
      },
      {
        title: "Club ops + player app as one product",
        content:
          "Approvals, upgrades, and availability are shared across dashboard and mobile so operations stay consistent.",
      },
    ],
    challenges: [
      {
        problem: "Clubs needed operations control while players needed a fast mobile match experience.",
        solution:
          "Split surfaces — web dashboard for clubs, mobile flows for players — on shared matchmaking rules.",
      },
    ],
    performanceMetrics: [
      { label: "Surfaces", value: "Web + Mobile" },
      { label: "Model", value: "Subscriptions" },
      { label: "Status", value: "Live" },
    ],
    testCount: "Production QA",
    testCoverage: "Live product",
  },

  {
    id: "1",
    slug: "vendorhub-multi-vendor-ecommerce",
    title: "VendorHub — Multi-Vendor E-Commerce Platform",
    shortDescription: "Production-ready multi-vendor marketplace with Stripe payments, Cloudinary image management, role-based access for three user types, and a fully documented REST API.",
    longDescription: "VendorHub is a production-grade multi-vendor marketplace platform where vendors register stores, list products and sell to customers through a single platform — with full admin oversight. Features real Stripe payment processing, automatic refunds on cancellation, vendor earnings analytics, smart coupon system and a complete admin panel for platform management.",
    category: ["full-stack", "performance"],
    status: "completed",
    year: "2025",
    isFeatured: false,
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
