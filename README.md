**Note: This is only for development mode application not for production uses**

# SetUp

## 1. node_module

* Open your console or prompt and type command to generate node_module\
`npm install` \
It will install all the required packages from package.json file.
## 2. Environment FIle
* firstly make an account in [newsapi](https://newsapi.org/) site.

* create a file name **_.env.local_** in home directory in which src and node_module folder does exist.

* In **_.env.local_** paste the following line--\
`REACT_APP_API_KEY="{your api key}"`

\
After successfully modification you can run
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\