---
name: shopify-headless-hydrogen-wallet-liquid
description: Shopify Hydrogen headless storefronts, wallet/digital-wallet payment integration (Shop Pay, Apple Pay, Google Pay, and third-party wallets such as "Bay Wallet"), and Liquid theme/app-block integration. Use when planning, building, or debugging Shopify Hydrogen + wallet + Liquid integrations.
---

# Shopify headless Hydrogen, wallets, and Liquid

## Scope

Use this when work involves Shopify headless storefronts, Hydrogen, wallet or digital-wallet payments, Liquid themes, theme app extensions, or bridging a Liquid theme to a custom storefront.

## Core model (2026)

- **Liquid theme** = default Online Store channel. Shopify renders and hosts it; merchants edit sections in the theme editor; apps integrate via theme app extensions (app blocks, app embeds).
- **Hydrogen** = Shopify's headless commerce library. As of the 2026-10 release it is framework-agnostic: React Router and Next.js starters, hostable on Oxygen, Vercel, Cloudflare Workers, or Node.
- **Data layer** = Storefront API (products, collections, carts, search, pages, metaobjects) plus Customer Account API for accounts. Checkout always stays on Shopify via the cart `checkoutUrl`.
- **API versions** = `@shopify/hydrogen@2026.10.x` pins Storefront API and Customer Account API to `2026-10`. Use `@inContext(channelId: ...)` for channel-specific pricing/availability on the Headless channel.
- **App/agent parity** = `ShopifyScripts` (replaces legacy script tags), `handleShopifyRoutes`, UCP profile at `/.well-known/ucp`, and WebMCP cart actions. Theme app extensions do **not** render in Hydrogen automatically.

## Decision guide

| Need | Prefer |
| --- | --- |
| Marketers edit pages daily, rely on many app blocks | Liquid theme |
| Highly custom UX, multiple frontends, CMS-led content, React team | Hydrogen headless |
| Backend logic (discounts, validation, fulfillment) | Shopify Function / app, not either frontend |
| Wallet/payment method support | Shopify Payments or a payment app, configured in admin |

## Wallet / payment integration

### Both stacks

1. Enable **Shopify Payments** to get Apple Pay, Google Pay, Shop Pay, and PayPal without custom checkout code.
2. Third-party wallets ("Bay Wallet" or similar) must be a Shopify payment app/gateway. Install it in admin, then:
   - **Liquid:** add its app block/embed or use `{{ form | payment_button }}` for dynamic wallet buttons.
   - **Hydrogen:** require explicit custom-storefront support. Theme app extensions do not exist headless; wire the provider's SDK/API into your cart/checkout flow, or use the provider's Storefront API integration.
3. Never try to replace Shopify checkout. Redirect to `cart.checkoutUrl` so Shopify handles wallet authorization, PCI, and orders.

### Hydrogen cart + wallet redirect

```ts
import {gql} from '@shopify/hydrogen';

const CART_CREATE = gql`
  mutation CartCreate($input: CartInput) {
    cartCreate(input: $input) {
      cart { id checkoutUrl totalQuantity }
      userErrors { field message }
    }
  }
`;

export async function action({request, context}: ActionFunctionArgs) {
  const {merchandiseId} = await request.formData();
  const {data} = await context.storefront.mutate(CART_CREATE, {
    variables: {input: {lines: [{merchandiseId, quantity: 1}]}},
  });
  const result = data?.cartCreate;
  if (result?.userErrors?.length) throw new Error(result.userErrors[0].message);
  return redirect(result.cart.checkoutUrl);
}
```

```tsx
import {ShopPayButton} from '@shopify/hydrogen';

<ShopPayButton variantIds={[variant.id]} />
```

### Liquid dynamic wallet button

```liquid
{% form 'product', product %}
  <select name="id">...</select>
  <button type="submit">Add to cart</button>
  {{ form | payment_button }}
{% endform %}
```

App blocks are placed in sections via the theme editor; app embeds are enabled under **Theme editor → App embeds**. Neither transfers to Hydrogen automatically.

## Liquid → Hydrogen bridge

- Do not render Liquid in Hydrogen. Re-fetch content through the Storefront API: `page`, `blog`, `metaobjects`, `navigation`, and metafields.
- Rebuild each app block as a React component or replace it with an app exposing a custom storefront integration.
- Keep merchandising fields in metaobjects/metafields so both frontends read the same data.
- Use `ShopifyScripts` for analytics events (`shopify:page:view` on client navigation) and verify `window.Shopify.analytics` exists.
- Rotate Headless channel public/private keys in Shopify admin; scope Storefront API permissions minimally.

## Verification checklist

- `curl -s https://<storefront>/.well-known/ucp` returns the managed business profile.
- HTML contains `rel="ucp"` link tag.
- Wallet buttons appear in Liquid via `payment_button` and in Hydrogen via `ShopPayButton` or provider SDK.
- Cart mutation returns a Shopify `checkoutUrl`; test wallet payment in Shopify checkout.
- Channel-specific pricing checked with `@inContext(channelId: "<id>")`.
- Analytics page views fire on initial load and client-side navigation.

## Caveats

- "Bay Wallet" is not a standard Shopify primitive; treat it as a third-party wallet provider and verify its Shopify app + custom storefront support before committing to an integration path.
- Headless adds build and maintenance cost; prefer Liquid unless the custom UX or multi-surface requirement is real.
