module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/shouts.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};

//postgres://bvranjsgbjbwpf:7ad1678f4a20acbf78309810566cf202e1e70436ca0d552333d7c8f1b27dcbdf@ec2-107-20-167-241.compute-1.amazonaws.com:5432/d7jhj0rhmsgrru

// use dotenv to change process.env.NODE_ENV to read development
