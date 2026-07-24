export const MOCK_ACCOUNTS = [
  {
    name: "accounts/102938475",
    displayName: "Acme Global E-Commerce",
    createTime: "2022-03-15T08:30:00Z",
    updateTime: "2026-01-10T14:20:00Z",
    properties: [
      {
        name: "properties/310492851",
        displayName: "Acme Web Store (Production)",
        propertyType: "PROPERTY_TYPE_ORDINARY",
        createTime: "2022-03-15T09:00:00Z",
        currencyCode: "USD",
        timeZone: "America/New_York",
        dataStreamsCount: 3,
      },
      {
        name: "properties/310492999",
        displayName: "Acme iOS App",
        propertyType: "PROPERTY_TYPE_ORDINARY",
        createTime: "2023-06-20T11:15:00Z",
        currencyCode: "USD",
        timeZone: "America/New_York",
        dataStreamsCount: 1,
      }
    ]
  },
  {
    name: "accounts/204857391",
    displayName: "SaaS Product Analytics",
    createTime: "2023-01-08T10:00:00Z",
    updateTime: "2026-06-01T09:45:00Z",
    properties: [
      {
        name: "properties/495810239",
        displayName: "Cloud Platform Dashboard",
        propertyType: "PROPERTY_TYPE_ORDINARY",
        createTime: "2023-01-08T10:30:00Z",
        currencyCode: "EUR",
        timeZone: "Europe/Berlin",
        dataStreamsCount: 2,
      }
    ]
  }
];

export const MOCK_ADS_LINKS = [
  {
    name: "properties/310492851/googleAdsLinks/8493021",
    googleAdsAccountId: "918-249-1029",
    adsPersonalizationEnabled: true,
    creatorEmailAddress: "analytics-admin@acme-corp.com",
    createTime: "2022-04-01T12:00:00Z"
  },
  {
    name: "properties/310492851/googleAdsLinks/8493022",
    googleAdsAccountId: "302-194-8572",
    adsPersonalizationEnabled: true,
    creatorEmailAddress: "marketing-lead@acme-corp.com",
    createTime: "2023-09-15T15:30:00Z"
  }
];

export const MOCK_CUSTOM_DIMENSIONS_METRICS = {
  customDimensions: [
    {
      name: "properties/310492851/customDimensions/user_tier",
      parameterName: "user_tier",
      displayName: "User Tier",
      description: "Subscription plan tier (Free, Pro, Enterprise)",
      scope: "USER",
      disallowAdsPersonalization: false
    },
    {
      name: "properties/310492851/customDimensions/article_category",
      parameterName: "article_category",
      displayName: "Article Category",
      description: "Category tag of published blog post",
      scope: "EVENT",
      disallowAdsPersonalization: false
    },
    {
      name: "properties/310492851/customDimensions/logged_in_status",
      parameterName: "logged_in_status",
      displayName: "Logged In Status",
      description: "Boolean whether user was authenticated",
      scope: "EVENT",
      disallowAdsPersonalization: false
    }
  ],
  customMetrics: [
    {
      name: "properties/310492851/customMetrics/video_watch_time",
      parameterName: "video_watch_time",
      displayName: "Video Watch Time (sec)",
      description: "Seconds spent watching demo videos",
      measurementUnit: "SECONDS",
      scope: "EVENT"
    },
    {
      name: "properties/310492851/customMetrics/cart_value_usd",
      parameterName: "cart_value_usd",
      displayName: "Cart Value ($)",
      description: "Total value of items placed in cart",
      measurementUnit: "CURRENCY",
      scope: "EVENT"
    }
  ]
};

export const MOCK_REPORT_DATA = {
  dimensions: ["sessionDefaultChannelGroup", "country", "deviceCategory"],
  metrics: ["activeUsers", "sessions", "conversions", "purchaseRevenue", "bounceRate"],
  rows: [
    {
      dimensionValues: ["Organic Search", "United States", "desktop"],
      metricValues: ["48,290", "62,140", "3,410", "$142,850.00", "34.2%"]
    },
    {
      dimensionValues: ["Direct", "United States", "mobile"],
      metricValues: ["32,150", "41,080", "2,190", "$78,420.00", "41.5%"]
    },
    {
      dimensionValues: ["Paid Search", "United Kingdom", "desktop"],
      metricValues: ["21,800", "28,450", "1,940", "$92,100.00", "29.8%"]
    },
    {
      dimensionValues: ["Email Marketing", "Germany", "desktop"],
      metricValues: ["18,400", "22,900", "1,850", "$64,300.00", "26.1%"]
    },
    {
      dimensionValues: ["Referral", "Canada", "mobile"],
      metricValues: ["14,100", "17,600", "980", "$31,500.00", "38.9%"]
    },
    {
      dimensionValues: ["Social Media", "Australia", "mobile"],
      metricValues: ["11,300", "15,200", "640", "$18,900.00", "49.4%"]
    }
  ]
};

export const MOCK_FUNNEL_DATA = {
  funnelSteps: [
    { stepName: "1. Homepage Visit", users: 125000, dropoff: "0%" },
    { stepName: "2. Product Page View", users: 84000, dropoff: "32.8%" },
    { stepName: "3. Add to Cart", users: 31500, dropoff: "62.5%" },
    { stepName: "4. Begin Checkout", users: 18200, dropoff: "42.2%" },
    { stepName: "5. Purchase Complete", users: 11450, dropoff: "37.1%" }
  ],
  overallConversionRate: "9.16%"
};

export const MOCK_REALTIME_DATA = {
  activeUsersLast30Min: 348,
  topActivePages: [
    { pagePath: "/checkout/payment", activeUsers: 64, device: "Desktop" },
    { pagePath: "/products/wireless-headphones-pro", activeUsers: 52, device: "Mobile" },
    { pagePath: "/", activeUsers: 48, device: "Desktop" },
    { pagePath: "/blog/top-audio-gear-2026", activeUsers: 39, device: "Mobile" },
    { pagePath: "/pricing", activeUsers: 28, device: "Desktop" }
  ],
  topCountries: [
    { country: "United States", activeUsers: 142, flag: "🇺🇸" },
    { country: "United Kingdom", activeUsers: 48, flag: "🇬🇧" },
    { country: "Germany", activeUsers: 36, flag: "🇩🇪" },
    { country: "Japan", activeUsers: 29, flag: "🇯🇵" },
    { country: "Canada", activeUsers: 24, flag: "🇨🇦" }
  ],
  realtimeEvents: [
    { eventName: "page_view", countIn30Min: 1420 },
    { eventName: "user_engagement", countIn30Min: 1180 },
    { eventName: "scroll", countIn30Min: 890 },
    { eventName: "add_to_cart", countIn30Min: 142 },
    { eventName: "purchase", countIn30Min: 38 }
  ]
};

export const MCP_TOOLS_LIST = [
  {
    id: "get_account_summaries",
    category: "Account & Property",
    name: "get_account_summaries",
    description: "Retrieves detailed information about the user's Google Analytics accounts, properties, and associated data streams.",
    apiGroup: "Google Analytics Admin API v1beta",
    params: []
  },
  {
    id: "get_property_details",
    category: "Account & Property",
    name: "get_property_details",
    description: "Returns metadata for a specific Google Analytics 4 property including timezone, currency, and property type.",
    apiGroup: "Google Analytics Admin API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "310492851" }
    ]
  },
  {
    id: "list_google_ads_links",
    category: "Account & Property",
    name: "list_google_ads_links",
    description: "Lists all linked Google Ads accounts for a property along with personalization settings.",
    apiGroup: "Google Analytics Admin API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "310492851" }
    ]
  },
  {
    id: "run_report",
    category: "Core Reporting",
    name: "run_report",
    description: "Executes a customizable report against the Google Analytics Data API with dimensions, metrics, date ranges, and filters.",
    apiGroup: "Google Analytics Data API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "310492851" },
      { name: "date_range", type: "string", required: false, example: "7daysAgo - today" },
      { name: "dimensions", type: "array", required: false, example: '["sessionDefaultChannelGroup", "country"]' },
      { name: "metrics", type: "array", required: false, example: '["activeUsers", "sessions", "conversions"]' }
    ]
  },
  {
    id: "run_funnel_report",
    category: "Core Reporting",
    name: "run_funnel_report",
    description: "Generates multi-step conversion funnel reports evaluating step-by-step user retention and drop-off rates.",
    apiGroup: "Google Analytics Data API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "310492851" }
    ]
  },
  {
    id: "get_custom_dimensions_and_metrics",
    category: "Core Reporting",
    name: "get_custom_dimensions_and_metrics",
    description: "Retrieves user-scoped and event-scoped custom dimensions and metrics configured for a given property.",
    apiGroup: "Google Analytics Admin API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "310492851" }
    ]
  },
  {
    id: "run_realtime_report",
    category: "Realtime",
    name: "run_realtime_report",
    description: "Queries real-time streaming activity on your digital properties for the past 30 minutes.",
    apiGroup: "Google Analytics Data API v1beta",
    params: [
      { name: "property_id", type: "string", required: true, example: "310492851" }
    ]
  }
];

export const SAMPLE_PROMPTS = [
  {
    title: "Account Overview",
    prompt: "List all my Google Analytics accounts and properties.",
    toolUsed: "get_account_summaries"
  },
  {
    title: "Traffic Channels & Revenue",
    prompt: "What are the most popular traffic acquisition channels and revenue by country in the last 180 days?",
    toolUsed: "run_report"
  },
  {
    title: "Conversion Funnel Analysis",
    prompt: "Show me the checkout funnel conversion rate and step drop-offs.",
    toolUsed: "run_funnel_report"
  },
  {
    title: "Realtime Traffic Pulse",
    prompt: "How many users are active right now on my site and what pages are they viewing?",
    toolUsed: "run_realtime_report"
  },
  {
    title: "Custom Dimensions Audit",
    prompt: "What custom dimensions and metrics are set up on my main property?",
    toolUsed: "get_custom_dimensions_and_metrics"
  }
];
