# Bhai ki Duhkan: Your One-Stop E-Commerce Haven!

Welcome to Bhai ki Duhkan, where shopping for anything you desire is a breeze! Say goodbye to the hassle of visiting physical stores and negotiating prices. Our platform offers a seamless experience, from browsing to purchasing, right at your fingertips.

!! You're Comfort is Our Goal

## What We Offer:

1. Extensive Product Range: Explore a wide variety of products, from furniture to home decor and beyond.
2. Convenient Filtering: Easily find what you need with filters for ratings, prices, categories, and more.
3. Simple Checkout: Sign up for free, add items to your cart, and enjoy doorstep delivery.

## Why Choose Bhai ki Duhkan?

1. Affordable Prices: Say goodbye to bargaining headaches with reasonable prices.
2. User-Friendly Interface: Navigate effortlessly and find your perfect product in just a few clicks.
3. Prompt Service: Your comfort is our priority, ensuring timely delivery and excellent customer support.

[Experience the Magic of Bhai ki Duhkan Live!](https://drive.google.com/file/d/14Z_Zlac8gy297t7QulyC5fn_l2oou1yC/view)

### Explore Bhai ki Duhkan with Our Test User!

Discover the world of Bhai ki Duhkan with our test user account, designed to showcase the platform's features and ease of use.

Test User Credentials:
Email: testman@gmail.com
Password: testMan

### Local Setup

## Pre-requirements

1. Node should be installed in you're Machine
2. Expo cli should be installed in you're Machine

Setting Bhai ki Duhkan locally is easy follow the below steps:

1.  **Clone Project** <br>
    `git clone https://github.com/MeganusWesker/Bhai ki Duhkan.git` <br> Just Open Vs Code or any other Ide in any location and paste the above git clone command in terminal it will
    download the whole Project for you
2.  **Install Dependency**<br>
    Open two terminals at the root location of the project then in In Order two install modules of both backend and frontend do cd backend in one terminal and cd frontend in second terminal, both terminal should look like in following:

    ![alt text](image.png)

    do npm i --force or npm i in both terminals

3.  **Add Config Variables**<br>
    Create a config.env file in the backend/config location. writing you're on env variables just to run this project is,feels Boring for you!. I got you just paste the following variables of mine in the config.env you just have created,
    <br>

    ```
        PORT=4000
    MONGO_URI=mongodb+srv://ecommerce:ORhCIIqXTdpHUL3g@ecommerce.g86ki.mongodb.net/?retryWrites=true&w=majority
    NODE_ENV=Development
    JWT_SECRET=thisleonrequestingbackup
    JWT_EXPIRE=5d
    COOKIE_EXPRIE=7
    SMTP_USER=meganuswesker@gmail.com
    SMTP_PASS=suecxtwxeddlouf
    SMTP_SERVICE=gmail
    SMTP_HOST=smtp.gmail.com
    SMTP_PORT=465
    CLOUDINARY_CLOUD_NAME=dtpzknjst
    CLOUDINARY_API_KEY=114288683792366
    CLOUDINARY_API_SECRET=R8jXjjSmTEMV77IvkAfMz4p4K94
    FRONTEND_URL1=https://bhai-ki-dukan-backned.vercel.app
    STRIPE_API_KEY=pk_test_51KAByRSDov8uqpNWO2cu6eEDeKiX62rG00inqv86KLxua7VRpK7p738ZEP5jjIQz572Gn520Bb30kgiurHuVKDB800jryFLMLR
    STRIPE_SECRET_KEY=sk_test_51KAByRSDov8uqpNWE4GKUwr7bcQkYLwnMX2knwGRY29lofktwPilJT4f2hM0AbFMjNXYkaV98SS9SlKbOF77Svqj002FgrHvJH
    ISDOCKER=true
    OTP_EXPIRE=5
    ```

4.  **Run the Project** <br>
    Just run these scripts in the both terminals

          ```
          For Backend:
          npm run dev
          For Frontend:
          expo start

          ```

    Make sure to run the script in the desired terminal

5.  **Use The Project** <br>
    Scan the qr code with expo go app
