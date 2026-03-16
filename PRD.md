

---

# PRD

## Rapchai Landing Page

Version 1.0

Product: **Rapchai**
Community Platform: **MyThirdPlace**

---

# 1. Objective

Create a landing page for **rapchai.com** that:

1. Explains the **Rapchai brand**
2. Routes users to two primary experiences

   * **Food ordering**
   * **Communities & events**
3. Maintains **visual consistency with mythirdplace.rapchai.com**
4. Drives two core conversions:

   * Food orders
   * Community/event participation

This page functions as the **top-level entry point for the Rapchai ecosystem**.

---

# 2. Strategic Context

Rapchai operates across two related but independent ecosystems.

### 1. Food

Revenue generating café product.

Includes:

* Food menu
* Ordering
* Café experience

Lives under:

```
rapchai.com/food
```

---

### 2. Communities

Built under **MyThirdPlace**.

Includes:

* Events
* Gatherings
* Cultural programming
* Community discovery

Lives under:

```
mythirdplace.rapchai.com
```

---

### Brand relationship

```
Rapchai
│
├ Food (Cafe experience)
│   └ rapchai.com/food
│
└ Communities (MyThirdPlace)
    └ mythirdplace.rapchai.com
```

Users should be able to **move between both ecosystems seamlessly**.

---

# 3. Jobs To Be Done

Primary JTBD:

> Understand what Rapchai is and choose an experience.

Secondary JTBD:

1. Discover events or communities
2. Order food
3. Explore Rapchai culture

---

# 4. Target Users

## User Type 1 — Event Seeker

Discovery source:

* Instagram
* Event listings
* Friends

Goal:
Find interesting events or communities.

Primary action:

```
Explore Communities
```

---

## User Type 2 — Cafe Visitor

Discovery source:

* Word of mouth
* Location search
* Instagram

Goal:
Order food or check the café.

Primary action:

```
Order Food
```

---

## User Type 3 — Curious Explorer

Goal:
Understand what Rapchai is.

Action:

```
Explore brand story
```

---

# 5. Landing Page Strategy

Homepage should use a **culture-first framing**.

Theme:

```
Food. Music. Conversations.
```

Rapchai is positioned as a **cultural space**, not just a café.

---

# 6. Page Structure

Landing page architecture:

```
Hero
↓
Experience Split (Food vs Community)
↓
Featured Events
↓
About Rapchai
↓
Host Your Event CTA
↓
Footer
```

---

# 7. Page Sections

---

# 7.1 Hero Section

Purpose:
Immediate brand framing.

Content:

Headline

```
Rapchai
Food. Music. Conversations.
```

Subtext

```
A café and community space in Bangalore
where people gather over food, culture,
and ideas.
```

Primary CTAs:

```
Explore Communities
Order Food
```

Actions:

Explore Communities →

```
mythirdplace.rapchai.com
```

Order Food →

```
rapchai.com/food
```

---

# 7.2 Experience Split

Purpose:
Clarify the two ecosystems.

Layout:
Two large cards.

---

### Card 1

Title:

```
Food
```

Description:

```
Fresh food, coffee, and conversations.
Experience the Rapchai café.
```

CTA

```
View Menu
```

Destination:

```
rapchai.com/food
```

---

### Card 2

Title

```
Communities
```

Description

```
Events, music, discussions, and creative gatherings.
Discover your third place.
```

CTA

```
Explore Events
```

Destination

```
mythirdplace.rapchai.com
```

---

# 7.3 Featured Events

Purpose:
Surface activity from MyThirdPlace.

Content fetched via API.

Example layout:

```
Upcoming at Rapchai
```

Event cards:

```
Rapchai Ragas
Jazz Jam
Creative Writing Circle
Open Mic Night
```

Each event links to:

```
mythirdplace.rapchai.com/event/[slug]
```

---

# 7.4 About Rapchai

Purpose:
Brand narrative.

Copy example:

```
Rapchai began as a café but quickly became
a gathering space for people who wanted
more than just a place to eat.

Today it hosts music, conversations,
creative communities, and events that
bring people together.
```

---

# 7.5 Host Your Event

Future expansion section.

CTA

```
Host an Event at Rapchai
```

Destination

```
mythirdplace.rapchai.com/host
```

(Placeholder if feature not live)

---

# 7.6 Footer

Content:

Links

```
Food
Communities
Events
Host an Event
Instagram
Location
```

Location

```
Bangalore
```

---

# 8. Cross Platform Integration

Rapchai homepage should integrate with MyThirdPlace via API.

### Events API

Fetch:

```
GET /events?featured=true
```

Fields required:

```
title
date
cover_image
location
slug
```

---

# 9. SEO Strategy

Homepage keywords:

```
cafe communities bangalore
cultural cafe bangalore
events cafe bangalore
creative communities bangalore
```

Event SEO handled on:

```
mythirdplace.rapchai.com
```

---

# 10. Design Requirements

Visual design must align with:

```
mythirdplace.rapchai.com
```

Agent will receive a **design system markdown file** containing:

* color palette
* typography
* spacing tokens
* UI components

Landing page must reuse those tokens.

---

# 11. Navigation

Top nav:

```
Rapchai
Food
Communities
Events
Host an Event
```

Actions:

Food → rapchai.com/food
Communities → mythirdplace.rapchai.com

---

# 12. Performance Requirements

Page load target:

```
< 2 seconds
```

Guidelines:

* Static rendering preferred
* Lazy load event images
* Minimal JS

---

# 13. Analytics

Track:

### Events

```
CTA_FOOD_CLICK
CTA_COMMUNITY_CLICK
EVENT_CARD_CLICK
HOST_EVENT_CLICK
```

Metrics:

Primary:

* Food orders
* Community signups

Secondary:

* Event page visits
* Time on page

---

# 14. Future Enhancements

Planned expansions:

### 1. Host your event

Self-serve community hosting.

### 2. Community memberships

### 3. Food + event bundles

### 4. Unified account system

Currently postponed.

---

# 15. Success Metrics

Landing page success defined as:

### Food

```
Food CTA → Orders
```

### Communities

```
Community CTA → Event discovery
```

---

# 16. Technical Notes

Architecture assumption:

```
NextJS frontend
Static homepage
API fetch for events
```

No shared auth required.

Food and community systems remain **independent codebases**.

---

