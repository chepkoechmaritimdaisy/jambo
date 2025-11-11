## ADDED Requirements

#### Requirement:
The application must display a list of all available service packages to the user.

##### Scenario: User Views Package List
-   **Given** a user wants to see available services,
-   **When** the user navigates to the `/packages` URL,
-   **Then** the application should render a page listing all available packages.
-   **And** each package in the list must be presented in a card format, showing at least an image, name, and price, consistent with the `tattoo_removal_packages_*` designs.

#### Requirement:
Users must be able to view detailed information about a specific package.

##### Scenario: User Views Package Details
-   **Given** a user is viewing the package list page,
-   **When** the user clicks on a specific package,
-   **Then** the application should navigate to a unique URL for that package (e.g., `/packages/package-name`).
-   **And** the page must display detailed information, including a photo gallery, full description, price, and a "Buy Now" button, consistent with the `package_details_page_*` designs.
