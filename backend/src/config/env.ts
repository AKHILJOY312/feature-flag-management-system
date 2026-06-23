export const ENV = {
  PORT: process.env.PORT || "5000",
  MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/feature-flags",
  JWT_SECRET: process.env.JWT_SECRET || "super-secret-key",
  SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL || "admin@test.com",
  SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD || "123456",
  NODE_ENV: process.env.NODE_ENV || "development",
};
