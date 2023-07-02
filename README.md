### GraphQL demo server

This is a demo graphql server that you can use for querying in client applications. It should be used mainly for education pourposes.

It represents an organisation like Amazon, where an user can

- Register/Login
- View a list of products
- Review a product
- Add products to favorites
- Add products to cart
- etc.
  Also, another persona is a company that puts creates an account and lists products on the platform.

### How to run

1. The application runs on a mariaDB database instance. You can either have one mariaDB instance locally or run one in a docker container
  - Local instance:
      Go to the mariaDB website, download and install the appropiate files. Make sure that the instance accepts root connections and the root password is "root" (user: root, password: root)
      After that create a database with the name `jsdb` **!!! This is important**
  - Docker container:
      To run as a docker container make sure the port 3306 is open on you host machine and run > docker run -p 3306:3306 --detach --name some-mariadb --env MARIADB_USER=mariausr --env MARIADB_PASSWORD=mariapass --env MARIADB_ROOT_PASSWORD=root --env MARIADB_DATABASE=jsdb mariadb:latest

2. After creating a database instance on port 3306, you must ensure you have ```make```, ```node``` and ```yarn``` installed globally on your machine.
    1. Run make setup or alternatively the operations definde in package.json in the following order: yarn install, yarn migrate, yarn seed
    2. Run the application in production: ```yarn prod``` or development ```yarn dev``` mode
    3. Open up a browser and go to ```http://localhost:<port>/graphql```. By default the port is ```5050```. If you want to change it you can modify the ```.env``` file.
    4. Run graphql queries e.g.
        ```graphql
        query{
          getAllUsers{
            user_id,
            user_name,
            user_reviews {
              user_id
              product_id
              rating
              review_summary
              content
            }
          }
        }
        ```