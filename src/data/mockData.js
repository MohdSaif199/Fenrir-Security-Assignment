export const scanMeta = {
  org: "Project X",
  owner: "Nammagiri",
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failedScans: 100,
  lastUpdated: "10 mins ago",
};

export const severityStats = [
  {
    label: "Critical Severity",
    value: 86,
    change: "+2%",
    trend: "up",
    type: "critical",
  },
  {
    label: "High Severity",
    value: 16,
    change: "+0.9%",
    trend: "up",
    type: "high",
  },
  {
    label: "Medium Severity",
    value: 26,
    change: "-0.9%",
    trend: "down",
    type: "medium",
  },
  {
    label: "Low Severity",
    value: 16,
    change: "+0.9%",
    trend: "up",
    type: "low",
  },
];

export const scanProgress = {
  progress: 0,
  status: "In Progress",
  type: "Grey Box",
  targets: "google.com",
  startedAt: "Nov 22, 09:00AM",
  credentials: "2 Active",
  files: "Control.pdf",
  checklists: "40/350",
  activeStep: 0,
};

export const activityLogs = [
  {
    id: 1,
    timestamp: "09:00:00",
    content: [
      {
        type: "text",
        segments: [
          { type: "plain", text: "I'll begin a systematic penetration test on " },
          { type: "link", text: "helpdesk.democorp.com" },
          { type: "plain", text: ". Let me start with reconnaissance and enumeration." },
        ],
      },
    ],
  },
  {
    id: 2,
    timestamp: "09:01:00",
    content: [
      {
        type: "text",
        segments: [
          { type: "plain", text: "Good! target is online. Now let me perform port scanning to identify running services." },
        ],
      },
    ],
  },
  {
    id: 3,
    timestamp: "09:02:00",
    content: [
      {
        type: "text",
        segments: [{ type: "plain", text: "Excellent reconnaissance results:" }],
      },
      {
        type: "codeline",
        text: "- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)",
      },
      {
        type: "text",
        segments: [{ type: "plain", text: "Let me probe the web server on target first to understand its structure." }],
      },
    ],
  },
  {
    id: 4,
    timestamp: "09:03:00",
    content: [
      {
        type: "text",
        segments: [
          { type: "plain", text: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: " },
          { type: "quoted", text: '"TODO: Delete the testing account (test:test)"' },
          { type: "plain", text: ". Let me test this credential. The login redirects to " },
          { type: "code", text: "/password/test" },
          { type: "plain", text: ". Let me follow that path and explore it." },
        ],
      },
    ],
  },
  {
    id: 5,
    timestamp: "09:04:00",
    content: [
      {
        type: "text",
        segments: [
          { type: "plain", text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to " },
          { type: "code", text: "'#'" },
          { type: "plain", text: " which means the current page. Let me try a different approach." },
        ],
      },
    ],
  },
  {
    id: 6,
    timestamp: "09:05:00",
    content: [
      {
        type: "text",
        segments: [
          { type: "plain", text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the " },
          { type: "link", text: "test:test" },
          { type: "plain", text: " password directly on other endpoints." },
        ],
      },
    ],
  },
  {
    id: 7,
    timestamp: "09:06:00",
    content: [
      {
        type: "text",
        segments: [
          { type: "plain", text: "Great! I can access the dashboard using the " },
          { type: "highlight", text: "X-UserId: 10032" },
          { type: "plain", text: ' header. The dashboard shows "Welcome, John Doe". This suggests an ' },
          { type: "bold-danger", text: "**IDOR vulnerability**" },
          { type: "plain", text: " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..." },
        ],
      },
    ],
  },
];

export const findings = [
  {
    id: 1,
    severity: "critical",
    title: "SQL Injection in Authentication Endpoint",
    path: "/api/users/profile",
    time: "10:45:23",
    description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
  },
  {
    id: 2,
    severity: "high",
    title: "Unauthorized Access to User Metadata",
    path: "/api/auth/login",
    time: "10:45:23",
    description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
  },
  {
    id: 3,
    severity: "medium",
    title: "Broken Authentication Rate Limiting",
    path: "/api/search",
    time: "10:45:23",
    description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
  },
];

export const scanStatusData = {
  subAgents: 0,
  parallelExecutions: 2,
  operations: 1,
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
};

export const scans = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 2,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 3,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 4,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 5,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 6,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 7,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vuln: { critical: 5, high: 12, medium: 21, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 8,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vuln: { critical: 5, high: 12, medium: null, low: null },
    lastScan: "4d ago",
  },
  {
    id: 9,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vuln: { critical: 5, high: 12, medium: null, low: null },
    lastScan: "4d ago",
  },
  {
    id: 10,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vuln: { critical: 2, high: 4, medium: 6, low: 1 },
    lastScan: "3d ago",
  },
  {
    id: 11,
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vuln: { critical: 2, high: 4, medium: 6, low: 1 },
    lastScan: "3d ago",
  },
];
