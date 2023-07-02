install-deps: node_modules
	- $(info    Done)

node_modules:
	- yarn install

migrate: node_modules
	- node dbSync.js

seed: node_modules migrate
	- npx sequelize db:seed:all

setup: seed
	- $(info    Done)
	