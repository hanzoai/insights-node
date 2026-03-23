// npm install @hanzo/insights-node --save
// or
// yarn add @hanzo/insights-node

import Insights from '@hanzo/insights-node'

const insights = new Insights(
    "", // project API key
    {
        host: "https://insights.hanzo.ai", // You can omit this line if using Hanzo Insights Cloud
        personalApiKey: "" // You can find this in your user settings
    }
)

// Capture an event
insights.capture({ distinctId: "distinct_id", event: "event", properties: { "property1": "value", "property2": "value" }, sendFeatureFlags: true })

console.log(insights.isFeatureEnabled("beta-feature", "distinct_id", false))
console.log(insights.isFeatureEnabled("beta-feature", "distinct_id", false, { "company": "id:5" }))

// console.log("sleeping")
// sleep 5

console.log(insights.isFeatureEnabled("beta-feature", "distinct_id"))

// Alias a previous distinct id with a new one

insights.alias({ distinctId: "distinct_id", alias: "new_distinct_id" })

insights.capture({ distinctId: "new_distinct_id", event: "event2", properties: { property1: "value", property2: "value" } })
insights.capture({
    distinctId: "new_distinct_id", event: "event-with-groups", properties: { property1: "value", property2: "value" }, groups: { "company": "id:5" }
})

// // Add properties to the person
insights.identify({ distinctId: "new_distinct_id", properties: { email: "something@something.com" } })

// Add properties to a group
insights.groupIdentify({ groupType: "company", groupKey: "id:5", properties: { "employees": 11 } })

// properties set only once to the person
insights.capture({ distinctId: "new_distinct_id", event: "signup", properties: { $set_once: { "self_serve_signup": true } } })

// sleep 3
insights.capture({ distinctId: "new_distinct_id", event: "signup", properties: { $set_once: { "self_serve_signup": false } } })

// this will not change the property (because it was already set)
insights.capture({ distinctId: "new_distinct_id", event: "signup", properties: { $set: { "current_browser": "Chrome" } } })
insights.capture({ distinctId: "new_distinct_id", event: "signup", properties: { $set: { "current_browser": "Firefox" } } })

// On program exit, call shutdown to stop pending pollers and flush any remaining events
insights.shutdown()
