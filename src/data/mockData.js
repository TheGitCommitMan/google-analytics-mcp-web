// Authentic Google Analytics 4 (GA4) API Schemas & Production Demo Data
// Based on Google Analytics 4 Demo Account (Google Merchandise Store & Flood-it!)

export const MOCK_ACCOUNTS = [
  {
    name: "accounts/54516992",
    displayName: "Google Merchandise Store (GA4 Demo)",
    createTime: "2020-10-14T18:00:00Z",
    updateTime: "2026-06-01T12:00:00Z",
    properties: [
      {
        name: "properties/213025502",
        displayName: "Google Merchandise Store - GA4",
        propertyType: "PROPERTY_TYPE_ORDINARY",
        createTime: "2020-10-14T18:30:00Z",
        currencyCode: "USD",
        timeZone: "America/Los_Angeles",
        dataStreamsCount: 2,
      },
      {
        name: "properties/213029999",
        displayName: "Google Store Mobile App (Android/iOS)",
        propertyType: "PROPERTY_TYPE_ORDINARY",
        createTime: "2021-02-10T10:15:00Z",
        currencyCode: "USD",
        timeZone: "America/Los_Angeles",
        dataStreamsCount: 2,
      }
    ]
  },
  {
    name: "accounts/98230192",
    displayName: "Flood-it! (Game Demo)",
    createTime: "2021-05-12T09:00:00Z",
    updateTime: "2026-05-20T11:00:00Z",
    properties: [
      {
        name: "properties/245810239",
        displayName: "Flood-it! GA4 Gaming Stream",
        propertyType: "PROPERTY_TYPE_ORDINARY",
        createTime: "2021-05-12T09:30:00Z",
        currencyCode: "USD",
        timeZone: "America/Los_Angeles",
        dataStreamsCount: 1,
      }
    ]
  }
];

export const MOCK_ADS_LINKS = [
  {
    name: "properties/213025502/googleAdsLinks/3910294851",
    googleAdsAccountId: "819-204-9102",
    adsPersonalizationEnabled: true,
    creatorEmailAddress: "analytics-admin@google.com",
    createTime: "2020-11-01T10:00:00Z"
  },
  {
    name: "properties/213025502/googleAdsLinks/4019283741",
    googleAdsAccountId: "402-918-3729",
    adsPersonalizationEnabled: true,
    creatorEmailAddress: "adwords-lead@google.com",
    createTime: "2022-03-15T14:20:00Z"
  }
];

export const MOCK_CUSTOM_DIMENSIONS_METRICS = {
  customDimensions: [
    {
      name: "properties/213025502/customDimensions/user_membership_level",
      parameterName: "user_membership_level",
      displayName: "Membership Level",
      description: "User loyalty program tier (Bronze, Silver, Gold, Platinum)",
      scope: "USER",
      disallowAdsPersonalization: false
    },
    {
      name: "properties/213025502/customDimensions/product_brand_type",
      parameterName: "product_brand_type",
      displayName: "Product Brand Type",
      description: "Apparel, Tech Gear, Office Supplies, Drinkware",
      scope: "EVENT",
      disallowAdsPersonalization: false
    },
    {
      name: "properties/213025502/customDimensions/login_method",
      parameterName: "login_method",
      displayName: "Login Method",
      description: "Authentication provider (Google OAuth, Email/Password, SSO)",
      scope: "EVENT",
      disallowAdsPersonalization: false
    }
  ],
  customMetrics: [
    {
      name: "properties/213025502/customMetrics/shipping_cost_usd",
      parameterName: "shipping_cost_usd",
      displayName: "Shipping Cost ($)",
      description: "Calculated shipping cost for online merchandise orders",
      measurementUnit: "CURRENCY",
      scope: "EVENT"
    },
    {
      name: "properties/213025502/customMetrics/discount_amount_usd",
      parameterName: "discount_amount_usd",
      displayName: "Discount Amount ($)",
      description: "Promotional discount applied at checkout",
      measurementUnit: "CURRENCY",
      scope: "EVENT"
    }
  ]
};

// Authentic GA4 Data API v1beta Response Structure
export const MOCK_REPORT_DATA = {
  kind: "analyticsData#runReport",
  dimensionHeaders: [
    { name: "sessionSourceMedium" },
    { name: "country" },
    { name: "deviceCategory" }
  ],
  metricHeaders: [
    { name: "activeUsers", type: "TYPE_INTEGER" },
    { name: "sessions", type: "TYPE_INTEGER" },
    { name: "screenPageViews", type: "TYPE_INTEGER" },
    { name: "conversions", type: "TYPE_INTEGER" },
    { name: "purchaseRevenue", type: "TYPE_CURRENCY" },
    { name: "bounceRate", type: "TYPE_FLOAT" }
  ],
  rows: [
    {
      dimensionValues: [{ value: "google / organic" }, { value: "United States" }, { value: "desktop" }],
      metricValues: [{ value: "148290" }, { value: "192140" }, { value: "481020" }, { value: "8410" }, { value: "342850.45" }, { value: "0.342" }]
    },
    {
      dimensionValues: [{ value: "(direct) / (none)" }, { value: "United States" }, { value: "mobile" }],
      metricValues: [{ value: "92150" }, { value: "121080" }, { value: "298400" }, { value: "4190" }, { value: "178420.80" }, { value: "0.415" }]
    },
    {
      dimensionValues: [{ value: "google / cpc" }, { value: "United Kingdom" }, { value: "desktop" }],
      metricValues: [{ value: "51800" }, { value: "68450" }, { value: "182900" }, { value: "3940" }, { value: "192100.00" }, { value: "0.298" }]
    },
    {
      dimensionValues: [{ value: "newsletter / email" }, { value: "Germany" }, { value: "desktop" }],
      metricValues: [{ value: "38400" }, { value: "42900" }, { value: "115200" }, { value: "2850" }, { value: "124300.50" }, { value: "0.261" }]
    },
    {
      dimensionValues: [{ value: "youtube.com / referral" }, { value: "Canada" }, { value: "mobile" }],
      metricValues: [{ value: "34100" }, { value: "47600" }, { value: "98400" }, { value: "1980" }, { value: "71500.25" }, { value: "0.389" }]
    },
    {
      dimensionValues: [{ value: "t.co / social" }, { value: "Japan" }, { value: "mobile" }],
      metricValues: [{ value: "21300" }, { value: "35200" }, { value: "74100" }, { value: "1240" }, { value: "48900.00" }, { value: "0.494" }]
    }
  ],
  rowCount: 6,
  metadata: {
    dataLossFromOtherRow: false,
    currencyCode: "USD",
    timeZone: "America/Los_Angeles"
  }
};

// Authentic GA4 Funnel Report API Structure
export const MOCK_FUNNEL_DATA = {
  kind: "analyticsData#runFunnelReport",
  funnelTable: {
    headers: [
      { name: "stepNumber" },
      { name: "stepName" },
      { name: "activeUsers" },
      { name: "completionRate" },
      { name: "dropOffRate" }
    ],
    rows: [
      { stepNumber: 1, stepName: "1. Store Homepage View", activeUsers: 325000, completionRate: "100.0%", dropOffRate: "0.0%" },
      { stepNumber: 2, stepName: "2. View Product Item (view_item)", activeUsers: 214000, completionRate: "65.8%", dropOffRate: "34.2%" },
      { stepNumber: 3, stepName: "3. Add to Cart (add_to_cart)", activeUsers: 81500, completionRate: "38.1%", dropOffRate: "61.9%" },
      { stepNumber: 4, stepName: "4. Begin Checkout (begin_checkout)", activeUsers: 48200, completionRate: "59.1%", dropOffRate: "40.9%" },
      { stepNumber: 5, stepName: "5. Purchase Complete (purchase)", activeUsers: 29850, completionRate: "61.9%", dropOffRate: "38.1%" }
    ]
  },
  overallConversionRate: "9.18%"
};

// Authentic GA4 Realtime Data API Structure
export const MOCK_REALTIME_DATA = {
  kind: "analyticsData#runRealtimeReport",
  activeUsersLast30Min: 842,
  topActivePages: [
    { pagePath: "/google+redesign/apparel/mens/mens+t-shirts", activeUsers: 142, device: "Desktop" },
    { pagePath: "/basket.html", activeUsers: 118, device: "Mobile" },
    { pagePath: "/signin.html", activeUsers: 94, device: "Desktop" },
    { pagePath: "/google+redesign/office/notebooks+journals", activeUsers: 86, device: "Mobile" },
    { pagePath: "/payment.html", activeUsers: 72, device: "Desktop" }
  ],
  topCountries: [
    { country: "United States", activeUsers: 412, flag: "🇺🇸" },
    { country: "United Kingdom", activeUsers: 128, flag: "🇬🇧" },
    { country: "Germany", activeUsers: 96, flag: "🇩🇪" },
    { country: "Japan", activeUsers: 84, flag: "🇯🇵" },
    { country: "Canada", activeUsers: 62, flag: "🇨🇦" }
  ],
  realtimeEvents: [
    { eventName: "page_view", countIn30Min: 4820 },
    { eventName: "user_engagement", countIn30Min: 3910 },
    { eventName: "scroll", countIn30Min: 2840 },
    { eventName: "view_item", countIn30Min: 1920 },
    { eventName: "add_to_cart", countIn30Min: 412 },
    { eventName: "begin_checkout", countIn30Min: 198 },
    { eventName: "purchase", countIn30Min: 84 }
  ]
};

export const MCP_TOOLS_LIST = [
  {
    id: "get_account_summaries",
    category: "Account & Property",
    name: "get_account_summaries",
    description: "Retrieves detailed account summary information including GA4 properties and data streams.",
    apiGroup: "Google Analytics Admin API v1beta",
    params: []
  },
  {
    id: "get_property_details",
    category: "Account & Property",
    name: "get_property_details",
    description: "Returns metadata for a specific Google Analytics 4 property (timezone, currency, property type).",
    apiGroup: "Google Analytics Admin API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "properties/213025502" }
    ]
  },
  {
    id: "list_google_ads_links",
    category: "Account & Property",
    name: "list_google_ads_links",
    description: "Lists all linked Google Ads accounts for a property along with personalization settings.",
    apiGroup: "Google Analytics Admin API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "properties/213025502" }
    ]
  },
  {
    id: "run_report",
    category: "Core Reporting",
    name: "run_report",
    description: "Executes a customizable report against the GA4 Data API with dimensions, metrics, date ranges, and filters.",
    apiGroup: "Google Analytics Data API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "properties/213025502" },
      { name: "date_range", type: "string", required: false, example: "30daysAgo - today" },
      { name: "dimensions", type: "array", required: false, example: '["sessionSourceMedium", "country", "deviceCategory"]' },
      { name: "metrics", type: "array", required: false, example: '["activeUsers", "sessions", "screenPageViews", "purchaseRevenue"]' }
    ]
  },
  {
    id: "run_funnel_report",
    category: "Core Reporting",
    name: "run_funnel_report",
    description: "Generates multi-step conversion funnel reports evaluating step-by-step user retention and drop-off rates.",
    apiGroup: "Google Analytics Data API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "properties/213025502" }
    ]
  },
  {
    id: "get_custom_dimensions_and_metrics",
    category: "Core Reporting",
    name: "get_custom_dimensions_and_metrics",
    description: "Retrieves user-scoped and event-scoped custom dimensions and metrics configured for a given property.",
    apiGroup: "Google Analytics Admin API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "properties/213025502" }
    ]
  },
  {
    id: "run_realtime_report",
    category: "Realtime",
    name: "run_realtime_report",
    description: "Queries real-time streaming activity on your digital properties for the past 30 minutes.",
    apiGroup: "Google Analytics Data API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "properties/213025502" }
    ]
  }
];

export const SAMPLE_PROMPTS = [
  {
    title: "Google Store Overview",
    prompt: "List all my Google Analytics accounts and properties.",
    toolUsed: "get_account_summaries"
  },
  {
    title: "Traffic Source & Revenue",
    prompt: "What are the most popular traffic sources (sessionSourceMedium) and purchase revenue by country?",
    toolUsed: "run_report"
  },
  {
    title: "GA4 Checkout Funnel",
    prompt: "Show me the Google Merchandise Store checkout funnel conversion rate and step drop-offs.",
    toolUsed: "run_funnel_report"
  },
  {
    title: "Realtime Active Users",
    prompt: "How many users are active right now on my GA4 property and what pages are they viewing?",
    toolUsed: "run_realtime_report"
  },
  {
    title: "Custom GA4 Dimensions",
    prompt: "What custom dimensions and metrics are set up on my Google Store property?",
    toolUsed: "get_custom_dimensions_and_metrics"
  }
];
