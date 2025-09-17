Serve-Smart App Documentation
1. Overview

Serve-Smart is a front-end focused restaurant self-service ordering and kitchen management application. It replaces traditional line-based ordering with a modern kiosk/tablet interface and provides staff with a real-time kitchen dashboard to handle incoming orders efficiently.

The application is built with React for UI, CSS for styling, and JSON Server to simulate backend APIs. It follows a modular design to ensure responsiveness, accessibility, and a smooth user experience across kiosk, tablet, and mobile screens.

2. Features
🧑‍🍳 Customer Ordering Kiosk

Browse menu items by categories (e.g., Pizza, Drinks, Desserts).

Add/remove items from the cart with real-time price calculation.

Order Now button opens a payment modal showing selected items and total amount.

On successful payment, items are sent to the Kitchen Dashboard.

Responsive UI with styled item cards, shadows, and colorful backgrounds.

🍴 Kitchen Dashboard

Displays all active orders in a grid layout, centered and neatly styled.

Each order card shows item name, timer (starting at 00:00), and status buttons.

Order workflow: Preparing → Ready → Served.

Served button removes the item from the dashboard.

Styled heading and layout for better staff visibility.

🎨 Landing Page

Displays two large tiles in the center: Customer Kiosk and Kitchen Dashboard.

App name animated with each letter moving up and down.

Clicking a tile redirects to the respective module.

Uses colorful tiles instead of images for a clean minimal design.

3. Technical Stack

Frontend: React (Create React App), CSS

Mock Backend: JSON Server (simulated REST APIs)

HTTP Client: Axios

Data Storage: Local state + JSON Server persistence

Styling: CSS with shadows, animations, and responsive grids

4. API Endpoints (via JSON Server)

GET /menu → Fetch all menu items

GET /orders → Fetch all orders

POST /orders → Add new order

PATCH /orders/:id → Update order status

5. User Flow

Landing Page

User chooses between Customer Kiosk and Kitchen Dashboard.

Customer Ordering (Kiosk)

Browse by category → Add items → View Cart → Pay Now → Send order.

Kitchen Dashboard

Staff sees new orders with timers → Updates status (Preparing → Ready → Served).

Served items disappear from the dashboard.

6. Responsiveness & Accessibility

Works across desktop, tablet, and mobile screens.

Tiles, grids, and buttons adapt dynamically to available space.

Uses proper contrast, shadows, and ARIA-friendly buttons for accessibility.
