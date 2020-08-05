# MERNDO

A todo/task/project management app built with the MERN stack, with user accounts / authentication, teams, projects and deployment to Heroku.

## Requirements

- [MongoDb/Atlas](https://cloud.mongodb.com/)
- [Express](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](http://nodejs.org/)
- [Heroku](https://heroku.com/)
- [Postman](https://postman.com) (Recommended)

## Installation Steps

1. Once cloned, run `npm run setup` from root.
2. Subsequently, `npm run dev` from root for local development.

### Build for Production

```
cd client
npm run build
```

### Test production before deployment

- `NODE_ENV=production node server.js`
- Open browser to http://localhost:5000/

---

### Notes

#### 💥 To connect to Atlas/Cloud.mongodb.com

- Make a copy of `config/default.example.json` to `config/default.json` with your cloud.mongo/atlas values to work locally in test. For production, create a `config/production.json` file respectively and make sure to ignore this file.

#### 🚀 To deploy to Heroku:

- Create a Heroku account.
- Install heroku cli via their installer (link to heroku) or homebrew.
- Log into your heroku account with `heroku login`.
- Create the application on heroku with `heroku create`.
- And subsquently push to heroku with `git push heroku master`.

<!--
- Since we're ignoring the `./config/*.json` files which Heroku requires for a successful build, we should create a local only branch (e.g. production) to deploy from: 	- `git checkout -b production`
- Add the config file into our track: `git add -f config/production.json`
- Commit your changes; `git commit -am 'deploy...'`
- Push up your local production branch for deployment; `git push heroku production:master`
- Don't forget to make sure your production database is not whitelisted in MongoDB Atlas, otherwise the database connection will fail and your app will crash.
- For subsequent changes, work off master and merge those into your local branch when ready to rebuild/deploy.
 -->

#### Todo's

- Add a `./Merndo.postman_collection.json` to rapidly setup the endpoints.
- Add a mailer via Nodemailer or service like mailgun.
- Add testing with mocha/chai for API endpoints.
- Integrate dotenv to replace config/\* values.
- Currently this project encompasses both the api and the frontend, and deploys all of it to heroku; consider abstracting the two into their own housing.

---

## License
