Hey, this is a starter project for react. Starting from scratch, currently following http://andrewhfarmer.com/build-your-own-starter/#2-npm

BABEL:
Converting the ES6 javascript written by us into ES5 using polyfills.
Why babel?
	- Because JSX is at the crux of react.
How to setup babel?
	npm install --save babel-core
	npm install --save babel-preset-es2015
	npm install --save babel-preset-react
Add a file: .babelrc

WEBPACK:
Bundles all of the javascript into a single file.
Why?
	- Single js is easier to deploy and downloads faster than multiple files.
	- It can also minify the js.
	- Will work with babel to transpile the code when bundling.
How to setup webpack?
	- Add file: webpack.config.js
	- npm install --save webpack babel-loader //any npm package ending with -loader is used by webpack to load modules. 
											 // The babel-loader is used for running babel from webpack.
	- git add .
	- git commit -m "add webpack"
Adding compile script to package.json:
	- So that we can call webpack manually.
Setting up a server to run the app using react
- Server environment: Express
	- Setting up
		Add file: server.js
		This file will run an express server which will run webpack. Webpack will re-run everytime one of the files is changed.
		server.js is server side javascript. It can be run with the node server.js command.
		- Add a start script to start the server.
		

PS: install lodash now. Why? It's the defacto library for javascript based utility helpers. Don't stop there. Look into their code to see how they do it. Maybe try to do it better?