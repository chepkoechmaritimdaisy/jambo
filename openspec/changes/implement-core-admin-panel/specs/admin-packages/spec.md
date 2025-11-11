## ADDED Requirements

#### Requirement:
The application must provide a secure admin panel for managing website content and operations.

##### Scenario: Admin Accesses the Panel
-   **Given** an authenticated user with an "admin" role,
-   **When** the user navigates to any URL under `/admin`,
-   **Then** the application should render the admin panel layout, which includes a persistent sidebar for navigation and a header.
-   **And** non-admin users should be denied access (this spec focuses on the UI; auth logic is separate).

#### Requirement:
Administrators must be able to perform full CRUD (Create, Read, Update, Delete) operations on service packages.

##### Scenario: Admin Manages Packages
-   **Given** an admin is in the admin panel,
-   **When** the admin navigates to the "Packages" section (`/admin/packages`),
-   **Then** a list of all current packages must be displayed.
-   **And** the admin must have options to create a new package, edit an existing one, or delete a package.
-   **And** the forms for creating and editing must include fields for name, description, price, and photo uploads, consistent with the `admin_panel_-_dashboard_*` designs.
