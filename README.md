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
<img width="1907" alt="no-selection" src="https://github.com/user-attachments/assets/f2e1f282-6fe6-48f3-9d66-75fb640bcb72">
<img width="1906" alt="property" src="https://github.com/user-attachments/assets/8a4faa88-4b08-4984-8c47-7385b771f70c">
<img width="1907" alt="expenses" src="https://github.com/user-attachments/assets/ab1399c3-2ab6-4a9a-a651-867f4832e641">
<img width="1908" alt="income" src="https://github.com/user-attachments/assets/643c0d6e-c749-4254-9010-4053cfff6b65">
<img width="1907" alt="input-form" src="https://github.com/user-attachments/assets/4957594d-27d8-4389-afd3-80acbad36204">
<img width="1907" alt="transactions-list" src="https://github.com/user-attachments/assets/23ef8c26-6067-4fae-9bb8-e86b52559995">
<img width="1907" alt="transaction-modify" src="https://github.com/user-attachments/assets/77001edb-132e-49a0-8872-78f5ea6f2291">
<img width="1907" alt="transactions-list-filter" src="https://github.com/user-attachments/assets/b79d1d8f-68a3-40c2-8c92-c5826c2199c4">

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
