const isDev = process.env.APP_ENV === "development";

console.log(`Running in ${isDev ? "development" : "production"} env`);

export default {
  name: isDev ? "MyApp (Dev)" : "MyApp",
  slug: isDev ? "myapp-dev" : "myapp",
  version: "0.0.1",
  ios: {
    bundleIdentifier: isDev ? "com.myapp.dev" : "com.myapp",
  },
  extra: {
    env: isDev ? "development" : "production",
  },
};
