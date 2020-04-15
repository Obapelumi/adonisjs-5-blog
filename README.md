# Node.js Blog Hosted On Google Cloud Platform


### Setup

Install the adonis cli tool and run `npm install` or `yarn install`.

Once the installation is complete you will need to complete the following steps:

1. Create a tmp folder: This sample application uses `sqlite` for data persistence. The database file lives inside the tmp path. So, do make sure to create the tmp directory inside the project root.
2. Generate your application key: Run `node ace generate:key`. This key is used internally by the application for encryption purposes.
3. Create a .env file based off `.env.example` file and populate its contents accordingly.
   ![Environment Variables](https://storage.googleapis.com/crude-coding-articles/Deploy-Adonisjs-5-To-Google-App-Engine/adonis.js%20env%20variables.JPG)
4. Create your database tables by running migrations: In the terminal run `node ace migration:run --force`

You can now run `npm run dev` or `yarn dev` to start the local development server and test the application
