## AXA-BACKEND

This API is designed for retrieving data from clients and policies. Implemented RoleMiddleware.
{url} is supposed to be your domain, in our case it is localhost:3000.

## Tecnologies used

-Express
-TypeScrypt
-JWT auth
-Mongoose 

##### -Pre Requisites-

YOU MUST HAVE mongo installed on your system.
POSTMAN is highly recommended for testing the functionality. 

##### Set Up The Project:

1. Clone Repository.
2. Install All Dependencies. Command: npm i
3. Run the project. Command: npm run-dev start.ts
4. Voilà, the project is set up.

##### Error Codes

Status 401 Unauthorized: Admin Role is needed to access some routes & you need a valid auth credentials.

##### Auth Route, some routes require it.

![Alt text](img/auth.PNG?raw=true "Title")

##### GET Routes

##### Filter Route
![Alt text](img/getByFilter.PNG?raw=true "Title")

##### Client data by ID
![Alt text](img/getClientById.PNG?raw=true "Title")

#### AUTH Required

##### Client by Policy Number
![Alt text](img/getClientByPolicyNumber.PNG?raw=true "Title")

##### List of Policies by Client Name
![Alt text](img/getPoliciesByClientName.PNG?raw=true "Title")


## Full API DOCUMENTATION can be found here:

https://documenter.getpostman.com/view/5920029/SWE6aJBx


