module.exports = {
  name: "Facemash",
  slug: "facemash",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "dark",
  scheme: "facemash",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#1a1a2e"
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.facemash.app",
    infoPlist: {
      NSPhotoLibraryUsageDescription: "Facemash needs photo library access to compare faces"
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1a1a2e"
    },
    package: "com.facemash.app",
    permissions: ["READ_EXTERNAL_STORAGE", "WRITE_EXTERNAL_STORAGE"]
  },
  plugins: [
    "expo-router",
    [
      "expo-image-picker",
      {
        photosPermission: "Allow Facemash to access your photos."
      }
    ]
  ],
  extra: {
    revenuecat_api_key: "rcap_key_placeholder"
  }
};
