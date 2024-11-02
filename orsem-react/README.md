# orsem-react

This is the main frontend component of the application. This comprises of what the end-user will be able to directly interact with.

## 🔧 Getting Started

This project was made with Create React App. Refer to `create_react_app.md` for additional details.

### First Run

1. Ensure you have [NodeJS LTS 16](https://nodejs.org/es/blog/release/v16.13.0) installed. If you have a later version, ensure that the environment variable `NODE_OPTIONS=--openssl-legacy-provider` is set.

2. Copy `.env.example` to a new file `.env` and set `REACT_APP_API_URL` to the URL where `orsem-django` is running. Ensure that
your domain is added to your Google OAuth Redirect URIs and include `REACT_APP_GOOGLE_OAUTH_CLIENT_ID` in your `.env` file.

3. Run a terminal and `cd` to this directory.

4. Run the command `npm install`. Ignore any deprecation warnings that may appear.

5. Once the above finishes, enter `npm start` to run a development server.

6. Access `<URL>[:3000]` in your browser and the application should load.

## 🌐 Production Deployment

The primary deployment platform for this frontend is Vercel. Refer [here](https://vercel.com/docs/getting-started-with-vercel/import) for a deployment guide.

## 📝 Working Notes

* **Minimize bandwidth usage.** Do not place static assets (e.g. images, videos) unless you have no other options. Prioritize hosting these externally (e.g. Cloudinary)
* **Follow clean code guidelines**. Do not ignore feedback from your dev tools (e.g. ESLint, Prettier)
