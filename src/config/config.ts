export const config = {
  "dev": {
    "username": "Udagramkipkemoi1",
    "password": "Udagramkipkemoi1",
    "database": "Udagramkipkemoi1",
    "host": "udagramkipkemoi1.cod9bakwg0s1.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-kipkemoi-dev1"
  },
  
  "jwt": {
    "secret": " "
  },

  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}

process.env.POSTGRES_USERNAME
process.env.POSTGRES_PASSWORD
process.env.POSTGRES_DATABASE
process.env.POSTGRES_HOST
process.env.aws_region
process.env.aws_media_bucket
process.env.aws_profile