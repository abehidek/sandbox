module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", {
        "envName": 'APP_ENV',
        "moduleName": "@env",
        "path": '.env',
        "blocklist": null,
        "allowList": null,
        "blackList": null,
        "whiteList": null,
        "safe": true,
        "allowUndefined": false,
        "verbose": true,
      }]
    ]
  };
};
