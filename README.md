# Hanzo Insights Node.js SDK

> **Note:** The Node.js SDK code has moved to [hanzoai/insights-js](https://github.com/hanzoai/insights-js/tree/main/packages/node) — use `@hanzo/insights-node` instead.

Fork of [PostHog/posthog-node](https://github.com/PostHog/posthog-node) (now deprecated upstream — code lives in posthog-js monorepo).

## Install

```bash
npm install @hanzo/insights-node
```

## Usage

```typescript
import { Insights } from '@hanzo/insights-node'

const insights = new Insights('YOUR_API_KEY', {
  host: 'https://insights.hanzo.ai'
})

insights.capture({
  distinctId: 'user_123',
  event: 'signed_up',
  properties: { plan: 'pro' }
})

await insights.shutdown()
```

## Upstream

This is a branded fork. Active development is in [hanzoai/insights-js/packages/node](https://github.com/hanzoai/insights-js/tree/main/packages/node).

To sync upstream:
```bash
git remote add upstream https://github.com/PostHog/posthog-node.git
git fetch upstream
git merge upstream/main
```
