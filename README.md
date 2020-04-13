# Node.js Blog Hosted On Google Cloud Platform

> Simple Adonis.js blog hosted on Google Cloud Platform

### Setup

Install the adonis cli tool and run `npm install` or `yarn install`.

Once the installation is complete you will need to complete the following steps:

1. Create a MySQL database: This application uses MySQL for data persistence. You will need to create a MySQL database and take note of the database name and other connection parameters.
2. Generate your application key: Run `node ace generate:key`. This key is used internally by the application for encryption purposes.
3. Create a .env file based off ` .env.example ` file and populate its contents accordingly. 
![Environment Variables](https://00e9e64bace7e8647759e191a0df72fb08c7026e9b1a8ae517-apidata.googleusercontent.com/download/storage/v1/b/crudecoding.appspot.com/o/articles%2FDeploy-Adonisjs-5-To-Google-App-Engine%2Fadonis.js%20env%20variables.JPG?qk=AD5uMEvCdlZ4-Zk1Me5R6wsQMLm_v1WrJF7Lm1pmUoEF5F-TxburT_IFgNDB1POrhHg2URyjyHext3sSAXFtx0PGq6ku1-gQL5x4WMFLasw22hmOU6M8g4JL-Rn5Xoi6AjbevX74oPUxyyirRiOh_0cJTZua6qRVH-pYsDV4HTl6P_G2cxaKzlTDZEUG4nCVetUqj1jRsmy-H7uikkKBtuIDOqsj7bgaLg1oGhnb9oNiPYrVRrJOnBf6-Ofer3QIR5MLSjnLAKGT6kZtMBzi7zj59lIVVKqxPvyqH7d9BpDCutKdQOEbjvtCihKypStuAl116lmrak381bmkWiV6wDVKMlMdRy-1GjJ7Z_imImyXyALrux9zoJrSKeY-wTQiuv-9_YpLIiegxlbL7Hcrzfh4dXS2o-rWIpLXJLyZQTkRkgApzM4fnTXVXvhhcKcCmvMeTlrLQsL8O434dl5MrqR25V-v6YM5YYZCFh0pldIOUGzCUbhGcxkNWIOvLb4xukgLj4osXySxB9JUIyQ28Aq_KEIUY3FfkgACmBQ6_8csItim8SVhUbdwDX6CycyNK3zQT4mdow9DuZF6N8Mq0140dpA029-9ul716bFNBoOcWJAo6MMVqTu8iAW5W-rk7tajOpHHaj_t_VKWtDXJdUTsd4dQ1m-pmvIS09K4gGbIM4d1C9F4q0JlFcwEm_tzZlLRty8yHzYz_MS4NLsT9lRXyA8tNjr1bxXs8SkOZEvydfUqTEZ1yWpK92rS6qhtnhEL9m6sG5--c7xjVQRJMEz9p5fWbk8PyfFgiBdXgkuchVQnHPbE95lN25oUBHA7YDAuX_W8N-AH8X1cpTLF7NEQ1wVPYfcqpEQCJCi78CivoWJG48E5OKwJH1K9WbH_C8t4TX3GkGaFvhJs7Tp47d0oShIZ5zWXIw&isca=1)
4. Create your database tables by running migrations: In the terminal run `node ace migration:run --force`

> You can now run `npm run dev` or `yarn dev` to start the local development 
