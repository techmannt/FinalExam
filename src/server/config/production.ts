export default {
  mysql: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SCHEMA
  },
  jwt: {
      secret: process.env.JWT_SECRET
  },
  api: {
      secretkey: process.env.SECRET_KEY
  }
}
