# **BookVerse – Concepts Integral to the Project**



1. ##### **Objects**



* User: Represents both customers and authors using the platform.



* Book: The product entity with details like title, author, price, category, and stock.



* Cart: Temporary storage for books selected by a customer.



* Order: Records customer purchases and order status.



* Review: User feedback and ratings for books.



* Admin: Manages overall platform data (users, books, and orders).



##### **2. Context**



* Customer Context: Customers can browse, search, add books to cart, place orders, and write reviews.



* Author Context: Authors can upload books, track sales, and manage their listed titles.



* Admin Context: Admins can manage user accounts, monitor orders, and update inventory.



* System Context: The system integrates the frontend (React) with the backend (Express/Node.js) and database (MongoDB) to process user requests.



##### **3. Information Important as per Context**



###### **For Customer Context:**



* Book details (title, author, price, category, stock, rating)



* Order history and order tracking



* Cart items and total price



###### For Author Context:



* List of uploaded books



* Sales analytics and earnings data



* Book inventory management



###### For Admin Context:



* User records and access levels



* Complete order data for monitoring



* Book database for updates and deletions



###### For System Context:



* API endpoints for data flow



* Database schemas (Users, Books, Orders, Reviews)



* Authentication and session management





