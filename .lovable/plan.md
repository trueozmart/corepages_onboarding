
# Update Pricing to Single Offering

## Summary
Consolidate the two pricing plans (Standard and Pro) into a single offering at **$50/month** or **$600/year** that includes everything from the current Pro plan.

## Changes

### 1. Update Plan Data
- Remove the two-plan array structure
- Create a single plan with:
  - **Price**: $50/month
  - **Yearly**: $600/year (save $100)
  - **Features**: All features combined (from Standard + Pro)
    - Professional single-page website
    - Mobile & desktop friendly
    - Your own custom domain (yourbusiness.com.au)
    - Secure site (HTTPS)
    - 3 content updates per year
    - Local support from Luke
  - **Note**: Domain registration billed separately

### 2. Simplify Layout
- Change from 2-column grid to a single centered card
- Use the highlighted style (forest background) for the single offering
- Remove the "Most Popular" badge since there's only one option
- Set max-width to keep the card nicely sized

### 3. File to Modify
- `src/components/PricingSection.tsx`

## Visual Result
A single, prominent pricing card centered on the page with all features listed, the $50/month price clearly displayed, and the yearly option shown below.
