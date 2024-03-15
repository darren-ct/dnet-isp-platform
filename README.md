# D-Net ISP Demo Platform 

<h2>Overview</h2>

💻 TRY OUR DEPLOYED APP HERE : <a href="https://dnet-isp-platform.vercel.app/">https://dnet-isp-platform.vercel.app/</a>

📁 Folder structure inspired by : <a href="https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md"> bulletproof react folder structure </a>

⚙️ Tools & Libraries : React+Vite, Tanstack-router, Tanstack-query + axios, Supabase for backend, etc.

⏱️ Duration : Finished this in around 2-3 days, while working a full-time job!

<h2>Local Setup</h2>

1. ```git clone https://github.com/darren-ct/dnet-isp-platform.git```
2. ```npm install```
3. ```npm run dev```
4. You are up and running!

<h2>REST API Endpoints (supported by Supabase)</h2>

1. REGISTER : ```POST /signup```
2. LOGIN : ```POST /token?grant_type=password```
3. LOGOUT : ```POST /logout```
4. GET USER : ```GET /user```

5. FIND ALL INTERNET PACKAGES : ```GET /internet_packages```

6. FIND MY TRANSACTIONS : ```GET /my_transactions?user_id=[userId]```
7. CREATE NEW MY TRANSACTION : ```POST /my_transactions```

<h2>Application Overview</h2>

<h4> 1. Register & Login Pages </h4>

![Register Page](github-images/register.png)

![Login Page](github-images/login.png)

<h4> 2. Home Page </h4>

![Home Page Part 1](github-images/home-pt.1.png)

![Home Page Part 2](github-images/home-pt.2.png)

![Footer](github-images/footer.png)

<h4> 3. Services Page </h4>

![Services Page](github-images/services.png)

<h4> 4. My Transactions Page </h4>

![My Transactions Page Part 1](github-images/my-transactions.png)

<h5> 5. Some Responsive Proof!</h5>

![Responsive home](github-images/responsive-home.png)

![Sidemenu](github-images/sidemenu.png)
