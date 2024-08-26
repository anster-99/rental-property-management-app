# Rental Property Management App
## Description
The Rental Property Management App is a web application designed to help users manage rental properties, track income and expenses, and generate reports. This app allows property owners or managers to keep an organized record of their rental transactions, including payments, maintenance costs, and other property-related expenses.

**Please Note:** This application was developed for learning purposes while I was completing an Angular course. It is not intended for production use.

## Technologies Used
* Frontend:
  - Angular
  - TypeScript
  - HTML/CSS
* Backend:
  - Java
  - Spring Boot
  - H2 Database
* Build Tools:
  - Maven
* Version Control:
  - Git/GitHub
## Features
* Add and manage multiple properties.
* Track income and expenses for each property.
* Generate reports based on various filters (e.g., date range, category).
* Download transaction data as CSV files.
* Simple and intuitive user interface.
## Screenshots
<img width="975" alt="no-selection" src="https://github.com/user-attachments/assets/fb380163-8575-4523-aea0-14d27be592d1">
<img width="974" alt="property" src="https://github.com/user-attachments/assets/a748baeb-3cb9-4803-b04b-cdc889ed9760">
<img width="974" alt="expenses" src="https://github.com/user-attachments/assets/241fa7a7-fc01-42e5-b79d-18aece20febb">
<img width="974" alt="income" src="https://github.com/user-attachments/assets/71256d15-d4cc-4f56-ad95-7e50f600c35e">
<img width="977" alt="input-form" src="https://github.com/user-attachments/assets/63376e6a-8adf-4b0b-bf13-8325f6cd362b">
<img width="974" alt="transactions list" src="https://github.com/user-attachments/assets/dc287c73-112f-4045-9384-e07169f1a829">
<img width="974" alt="transactions list pagination change" src="https://github.com/user-attachments/assets/90817a47-a085-45d9-8183-94dd9269c5a6">
<img width="974" alt="transactions list modify" src="https://github.com/user-attachments/assets/1a6d4a6f-e50c-43db-a5cd-40ed6b26b324">
<img width="974" alt="transaction list filter" src="https://github.com/user-attachments/assets/7948af86-72a0-4d23-968b-1da7b5b93808">

## Limitations
* This application is not production-ready. It was developed as a learning project during an Angular course.
* The app is missing certain security features that would be required for a production application, such as user authentication, data validation, and security measures.
* Some functionalities, such as adding new properties, are not implemented in the current version. The property list is managed directly in a TypeScript file, which is not ideal for a production environment.
* The app is hosted using local development tools (e.g., H2 database), which are not suitable for production environments.
* The application contains a mix of different approaches in various parts of the code, such as using both reactive and template-driven forms. These inconsistencies are intentional and were done to explore and learn different techniques and approaches during development.
## Getting Started
### Prerequisites
* Node.js and npm installed
* Java JDK installed
* Maven installed
* Git installed
### Installation
1. Clone the repository:
```markdow
git clone https://github.com/yourusername/rental-property-management-app.git
cd rental-property-management-app
```
2. Backend Setup:
* Navigate to the backend directory.
* Build the project using Maven:
```markdow
mvn clean install
```
* Run the Spring Boot application:
```markdow
mvn spring-boot:run
```
3. Frontend Setup:
* Navigate to the Angular frontend directory.
Install dependencies:
```markdown
npm install
```
* Run the Angular development server:
```markdow
ng serve
```
Open your browser and go to http://localhost:4200.
## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
This project was developed as part of a learning experience during this Angular course: https://www.udemy.com/course/the-complete-guide-to-angular-2/.

Thanks to the open-source community for the tools and libraries that made this project possible.
