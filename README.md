In your existing project

initialize npm into your repo:
 npm init -> package.json is created

install parcel:
npm install -D parcel -> package-lock.json and node_modules is created

You can recreate node modules using command:
npm install

ignite your app with parcel:
npx parcel index.html => dist and .parcel-cache folder is created and gives a, Server running at http://localhost:1234

install react and react-dom:
npm install react
npm install react-dom

remove CDN links of react:

add script for start and build with parcel commands:
"scripts": {
  "start": "parcel ./index.html",
  "build": "parcel build ./index.html"
},

add .gitignore file:
.gitignore
/node_modules
.parcel-cache
/dist

add browserlists:
"browserslist": {
  "last 2 version"
}

Development build:
npm run start (or) npm start

build a production version of your code using parcel build:
npm run build

npm - manages packages, it does not have a full form, it is not node package manager, standard repository for all packages

package.json file -> configuration for npm 
package-lock.json -> keeps a track of exact version that is being used

Inside package.json -> parcel -> "integrity":sha-512 (Hashing)
It ensures whatever is there in my machine is the same version which is deployed in the production

packages are also called as dependencies

There are 2 types of dependencies:

- dev - like parcel
- normal

Bundlers - packages your app properly, so that it can be shift to production
eg: webpack,parcel,etc...

node modules -> database which contains all the code that we fetch from npm 
                collection of dependencies

Transitive dependency -> parcel has its own dependencies (babel,browserslist,etc..)

All libraries have their own package.json and its own dependencies

we should not push node modules,dist and .parcel-cache to git or production
Reason: We can recreate them 

we should push package.json,package-lock.json to git

.gitignore: it contains all the untracked files that git should ignore.

npx parcel index.html => dist and .parcel-cache folder is created and gives a, Server running at http://localhost:1234
Parcel creates a server for us and hosted our app on that server

npm commands - installing a package
npx commands - executing a package

CDN links is not a preferred way to bring react into our project.
Y? -> costly operations and for each change of version,u have to change the URL.

we have installed the package, but for code to understand react, use:
import React from "react"; -> this react is present inside node modules
import ReactDOM from "react-dom/client";

After adding this in console we get err: Browsers scripts cannot have imports (or) exports

change script type="module" in html file

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement - when you modify your code and save it, your server gets automatically updated to the modified content. It does the job of automatic refreshing.
- File Watching Algorithm - written in C++
- Caching - Faster Builds 

  parcel-cache:
   It contains some binary files. Caches everything that you do, supports HMR, and ensures that next builds are developed faster

- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics – If there is an error in the code, Parcel provides beautiful diagnostics in the browser and terminal by pointing it to the exact error location
- Error Handling
- HTTPs
- Tree Shaking - remove unused code Parcel. Also called as Dead code Elimination

- Different dev and prod bundles

dist folder:
  - when u execute parcel (npx parcel index.html) it generates a dev build of your     project and puts it up inside dist folder
  - inside dist folfer we have the minifed, compressed code
  - It can have both developement and production ready code
  - Command for development code: npx parcel index.html
  - Command for production code: npx parcel build index.html (before executing this command remove the line main:App.js under package.json file)

  browserslist:It specifies which browser versions are supported to use the developed App. under the package.json we can specify them