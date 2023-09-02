**What is NPM?**
•	Manages packages 
•	It does not have a full form
•	It is definitely not node package manager
•	Standard repository for all packages

**What is ‘Parcel\Webpack’? Why do we need it?**
•	Parcel\Webpack are all basically bundlers that make our life easier by minimizing your code and also package your app properly so that it can be pushed onto production.

**What is ‘.parcel-cache’?**
•	It contains some binary files. Caches everything that you do, supports HMR, and ensures that next builds are developed faster

**What is ‘npx’?**
•	Node package executes a package without even installing them

**What is the difference between ‘dependencies’ vs ‘dev-dependencies’**
•	**Dependencies** – Packages that are required by your application in production
•	**Dev-dependencies** – Packages that are required in the development and testing phase Eg: Parcel

**What is Tree Shaking?**
•	Parcel removes the unused code for you. Also called as Dead code Elimination

**What is Hot Module Replacement?**
•	when you modify your code and save it, your server gets automatically updated to the modified content. It does the job of automatic refreshing.

**List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words**.
•	**Local server** – Provides a local server and hosts your app on that server 
•	**Diagnostics** – If there is an error in the code, Parcel provides beautiful diagnostics in the browser and terminal by pointing it to the exact error location
•	**Differential Bundling** – Supports older browser versions too. You have to just edit the package.json file. eg: “browserslist”:[“last 2 versions”]
•	**Hot Module Replacement**
•	**Tree shaking**

**What is '.gitignore'?What should we add and not add to it?**
- As the name suggests it contains all the untracked files that git should ignore.
- We should push all those files into git which cannot be regenerated/recreated like HTML, css,js,package.json, and package-lock.json files
- We should not put node modules dist and .parcel-cache files into git because when you have package.json and package-lock.json files we can regenerate/recreate them using the command: npm install 

**What is the difference between 'package.json' and 'package-lock.json'?**
- **package.json** -> It is installed once u install npm using the command npm init. It is basically a configuration for npm.
- **package-lock.json** -> It is installed once u install the parcel using the command npm install -D parcel. It keeps track of the exact version that is being used

**Why should I not modify 'package-lock.json'?**
- package-lock.json file contains information about the dependencies and their versions used in the project. Deleting it would cause dependency issues in the production environment. So don't modify it, It's being handled automatically by NPM.

  **What is 'node_modules'?Is it a good idea to push that on Git?**
  - Node modules are a collection of dependencies that contains all the code that we fetch from npm
  - No, we should not push node modules into git because when we have package.json and package-lock.json files we can regenerate/recreate node modules using the command: npm install

  **What is the 'dist' folder?**
  - when u execute parcel (npx parcel index.html) it generates a dev build of your project and puts it up inside dist folder
  - inside dist folfer we have the minifed, compressed code
  - It can have both developement and production ready code
  - Command for development code: npx parcel index.html
  - Command for production code: npx parcel build index.html (before executing this command remove the line main:App.js under package.json file)

  **What is 'browserslist'?**
  - It specifies which browser versions are supported to use the developed App. under the package.json we can specify them
  - eg:  “browserslist”:[“last 2 versions”]
