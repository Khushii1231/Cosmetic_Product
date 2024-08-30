

# Cosmatic Product Web Application

This React-based web application allows users to view, compare, and analyze products using data fetched from an API. The application features a clean, responsive design with dark mode functionality, and includes fixed navigation elements, dynamic tables, and advanced product comparison capabilities.

## Features

- **Responsive Navbar and Sidebar**: The application features a fixed Navbar at the top and a fixed Sidebar on the left, providing easy access to different sections of the website.
- **Product Details Page**: A dynamic table displaying product information fetched from the DummyJSON API. The table supports pagination, sorting, and has a "Compare" button for each product.
- **Product Comparison**: Compare selected products side by side based on features, brand, price, category, and more. Products can be added or removed from comparison, with a maximum of four products compared at once.
- **Add More Products Modal**: A modal window with a fixed-height table that allows users to add more products to compare. The table supports sorting, pagination, and prevents adding duplicate products.
- **Dark Mode**: Users can toggle between light and dark modes using a switch in the Navbar.
- **Notifications**: Users receive notifications for every product added, removed, or when an action is denied.
- **Infinite Scroll Pagination**: Smooth loading of additional products as users scroll down the Product Details Page.
- **Code Splitting**: Efficient loading of application components to optimize performance.
- **Routing**: Seamless navigation between the Product Details and Compare Product pages using React Router.

## Technologies Used

- **ReactJS**
- **Ant Design**: Used for creating the table and other UI components.
- **React Router**: For routing between different pages.
- **Axios**: For making API calls.
- **Netlify/Heroku**: For deployment of the application.
- **React Context API**: For managing state and implementing dark mode.

## Installation

1. **Clone the repository**:
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. **Install dependencies**:
   npm install

3. **Run the development server**:
   npm start
  

4. **Build the application**:
   npm run build

5. **Deploy the application**: Netlify Website Link - https://cosmatic-product-comparison.netlify.app/

## Usage

### Product Details Page
- Displays a table with the following columns: `Title`, `Description`, `Price`, `Discount Percentage`, `Brand`, `Category`, and `Image (Thumbnail)`.
- Pagination and sorting functionalities are implemented.
- The "Compare" button is disabled if the product is already added to the comparison.
  
### Compare Product Page
- Displays selected products side by side, comparing attributes like `Title`, `Brand`, `Price`, etc.
- "Add More" button opens a modal to select additional products for comparison.
- Users can add up to 4 products at a time for comparison.

### Notifications
- Notifications are displayed for product actions like adding, removing, or denial of action.

## Deployment

This application is deployed on -
Netlify Website Link - https://cosmatic-product-comparison.netlify.app/






