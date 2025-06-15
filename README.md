# Namaste React

--> Package.json : is file for cofiguration for NPM.

--> Dev Dependency: is generally required in Development phase.
: npm install -D parcel
--> Normal Dependency: used in Production.

- ^ caret sign in dependency is for the future update including minor/patch versions of package.
  Ex: ^1.2.3 >=1.2.3 <2.0.0 Allows minor & patch -- directly install major version so not safe
- ~ tilde sign in dependency is for it will update only patch, Allows patch updates only, not minor or major
  Ex: ~ ~1.2.3 >=1.2.3 <1.3.0 Allows patch only

---> package-lock.json : locks the version of package and keeps the track record of all the versions.

---> Transitive Dependencies: package has its own dependencies and that dependencies has its own dependency so this is called transitive dependency.

---> we should put package & package-lock on Git, Since it has the track of the version of the dependencies. It also helps in re-installing the dependencies.

=================================================================
-------------- Episode: 2 -----------------------------------
=================================================================

# BUNDLERS: Vite, Parcel and Webpack(React by default uses webpack- bundler is #create-react-app and it uses bable)

--> Bundler - Bundler is used to minify, bundle and optimize the code. Also remove console.logs.
--> Webpack(React by default uses webpack- bundler is #create-react-app and it uses bable)

# We use PARCEL-Bundler in this course

--> Parcel is easy to setup and build

# Steps:

1. npm install -D or --save-dev parcel // for developer dependencies in our local machine
   - when we install using -D or --save-dev, So it is installed as devDependencies
   - it have
     {
     (^ -carat) : auto-upgrade minor version ex 2.8.2 --> 2.8.3 automatically upgrade
     (~ - tilde) : major upgrade ex. 2.8.2 -- 3.4.1
     }
2. package-lock.json :- is used to know what exact version we use on production. Also will exactly tell what version of library we are using. It locks the version for production. Basically, it takes the snapshot of currently using package and stores it on package-lock.json file.
   ~ (FUN-Fact: "it is working on local but not working on production", caused by package-lock.json missing file)
   ~ it is very important file.
   ~ It locks the pckg. version.
   ~ Never keep it(package-lock.json) file in gitignore, if you keep it in gitignore then it causes issues on production.
   ~ it helps to regenerate node_modules on server.
3. package.json :- is a configuration file which npm uses for managing dependencies.

4. npm install react : We will remove react-cdn links because if version changes link will crash so we need permanent solution.We are doing (npm install react) because we want react in both "development and production"

5. npm i react-dom
6. npx parcel index.html : By this cmd we'll ignite our App. (index.html is entry point & npx - is execute using npm).When we run this it creates fastest development version of our project and serves it on server.
7. import react and react-dom on App.js file.
8. WE WILL GET ERROR : # Browser scripts cannot have imports or exports(<script src="./App.js"></script>) because in our index.html file has <script></script> tag App.js and it contains import. When our browser runs App.js file, it gets import and browser doesn't understand import.
   ~ So we need to tell, this is not a normal .js file. This is "module" in js file.
   ~ We have to write, <script type=module src=./App.js></script> type is module, we need to add is attribute, so that browser can understand this is module file.
9. Need to change on import react-dom as "react-dom/client", because of upgrade in react.

# Parcel:

- Dev Build
- Local Server
- HMR: Hot Module Replacement - file watching algorithm written in C++
- Image Optimization
- Faster Builds : Caching
- Minification
- Bundle
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling : it supports older versions of Browsers.
- Diagnostics
- Error Handling
- HTTPS
- Treeshaking - it is an algorithm works inside Garbage collector it basically removes unused code.

10. HMR (Hot Module Replacement) :- It means that parcel will keeps the track of which file is updating and It automatically refreshes and reloads the pages with new changes.
    ~ How HMR works : Because Parcel uses "file wathcher" algorithm in HMR which is buid using C++.
11. (.parcel-cache) folder ?? : When parcel doing all above things, watching file and HMR reloading, ##then it needed some space. For HMR, minifying, bundling, PARCEL uses all file from .parcel-cache.
12. dist folder : It basically, keeps the files minified for us.

----PROD Buid---- 13. npx parcel build index.html- it is command for production build.(it will give error, So remove {main: "App.js"} from pckg.json file) 14. Transitive dependencies: Dependency that uses the dependency (D->D->D hierarchical way ) 15. Browser-list : is the thing which will make our code compatible for all the browsers.

- To check and add compatibility to browsers https://browsersl.ist/
- BrowserList to support the older and latest versions of the browser

16. node_module : contains library from npm pckg manager. It works on localhost.

Episode : 5

- foodApp, hooks and working of virtual DOM react fiber

Episode : 6

# Monolithic and Microservices architecture :

# There are two ways to call the api:

- Page Loads > API > Render the API Data
- Page Load > Render UI > API Call > Render the API data // this approach is better and better User experience

# To bypass CORS install CORS plugin in Browser

// While loading the if delay is there Showing the #Spinner is not the good way.

# Instead use Shimmer ui - it is basically skeleton or fake ui

# useState : whenever the state state changes it refreshes the component and it trigger the reconciliation cycle

# filterData from API

Episode : 7

# Routing : Two types of Routing in web apps.

- Client Side Routing : is all the components are already loaded into our app. So we don't make any network calls while moving/changing the page.
- Server Side Routing : is you make a network call and that about.html page is coming from server.

# useRouteError : to render error message it is react-router provided Hook.

Episode: 8

# Class based components

# LifeCycle Methods in Class-Based components

# Order of Lifecycle method

- parent constructor -> parent render (if there is any child component ) -> child constructor -> child render -> child ComponentDidMount -> parent ComponentDidMount

# Why we call API inside useEffect or componentDidMount : because we want to quickly render the component then make API call otherwise component wil not render.

# If Parent component has multiple children, then lifcycle will be:

# Why react is doing that:(For Optimization) react is batching render phase for multiple childrens because when the commit phase starts reacts tries to update the dom. Since DOM-updation is the most expensive for updating a Component

source: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
{

- Parent Constructor
- Parent render

  - fisrtChild Constructor
  - firstChild Render

  - secondChild Constructor
  - secondChild Render
    <DOM Updated - In Single batch>
    -firstChild ComponentDidMount
    -secondChild ComponentDidMount

- Parent ComponentDidMount

  }

\*

async componentDidMount for API call

- ---------Mounting-------------
- Constructor
- Render(dummyData)
  - <HTML(Dummy)>
- ComponentDidMount

  - <APICall>
  - <this.setState -- state variable is updated>

- ------Updating -------------
- render(Api Data)
- <HTML(new API data)>
- ComponentDidUpdate

- ------Unmounting ------------
- ComponentWillUnmount - it will unmount when we move to other page
- \*

Episode: 9

# Optimization of App

- # use Custom hooks -- it makes the code cleaner, more readable and reusable, modular
- # Chunking or Code Splitting : is basically when we do module bundling if there is 1000+ components then the size of bundleJS file will increase alot and it will slow down the performance of the application.
  - `So we need to break-down the bundledJS-file into smaller chunks or pieces or bundle  ie. simply Code Splitting or Chunking or Lazy loading or Dynamic Bundling `.
  - So basically it logically split the website into smaller bundles and don't put all the load on Single bundle.
- # Lazy Loading or On Demand loading

Episode: 10

# Stying:

- CSS
- SCSS or Sass
- styled-components
- Material UI or Ant Design or Chakra UI or Bootstrap
- Tailwind-CSS

Episode: 11

# HOC :

# UI/Data layer: UI layer is powered by Data Layer. Data layer is state,props and local variables. UI layer is JSX.

# Accordion for Restaurant menu categories

# Lifting the state up

# Controlled and Uncontrolled Component

# useContext :

- createContext
- If functionComponent : use hooks --> useContext()
- if ClassComponent : use <UserContext.Consumer>{(data)=> }</UserContext.Consumer>
- if want to change the value of context : <UserContext.Provider value={}></UserContext.Provider>

Episode : 12

- Redux works in data layer

# Redux Toolkit:

- Slices: are there because the Store data should not become big. We can create multiple Slice inside store :- >user slice >cart slice

- To write data: `add btn --> dispatch() --> action --> call a reducer function --> modifies the (cart)slice of redux store --> slice will be updated`
- To Read data: `selector is used to read the data from the store and Selector will modify the ReactComponent and this phenomenon is known as "Subscribing to the Store" basically Components are subscribed to the store using a selector`

- Install @reduxjs/toolkit and react-redux
- Build our Store --- configureStore() from "@reduxjs/toolkit"
- Connect Store to the App --- Provider from "react-redux"
- Create the Slice (cartSlice) --- cartSlice.js -- createSlice() from "@reduxjs/toolkit"
- dispatch(action)

⭐ `Always subscribe to the right or specific portion of the store ===>  const cartItems = useSelector((store) => store.cart.items);`

⭐ In appStore there is only one big "reducer" and in cartSlice there is small "reducers" and export cartSlice.reducer mind it - singular: reducer /plural : reducers !!!

⭐ In Vanilla-Redux(Older react-redux) ==> DON'T MUTATE STATE (state mutation was prohibited) and returning the newState was mandatory.
⭐ But in RTK we're directly mutating the STATE and also WE HAVE TO MUTATE THE STATE DIRECTLY and returning is not Mandatory.
⭐ Redux-Toolkit internally uses ImmerJS-library which helps with immutable state based on copy-on-write mechanism.

Episode : 13

# Types of testing - (Developer) :

# Unit Testing : Test your React Component in Isolation.

- `Integration Testing : Testing the integration of the Components, When there is integration of so many components and talk to each other, Ex: click event input changing`
- End to End Testing : E2E Testing is as soon as the user lands on the website, to the user leaves the website. Here we test all the flows. It requires different type of tools, like : Cypress, Puppteer and Selenium

For testing : We're using `React Testing Library` and it uses JEST library
-- Library:

- npm install --save-dev @testing-library/react @testing-library/dom
- npm install --save-dev jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- Rest configuration from jest --> babel.config.mjs --> https://jestjs.io/docs/getting-started#using-babel
- npm run test : to run our all test cases
- npx jest --init
- npm install --save-dev jest-environment-jsdom

SO, basically

- Install react testing library
- Install Jest
- Install babel dependencies
- Configure Babel from jest documentaton : (https://jestjs.io/docs/getting-started)
- Since default babel will cause issue with new configuration we need to disable parcel's default babel
- Configure Parcel config file to disable default babel transpilation : https://parceljs.org/languages/javascript/#babel
- npm run test : to run our all test cases
- Jest configuration
- npx jest --init
- Install JS-DOM libray : npm install --save-dev jest-environment-jsdom
- Install to make JSX works in test cases : "npm i -D @babel/preset-react"
- Also add configuration to babel.config.mjs: `["@babel/preset-react", { runtime: "automatic" }],`
- Install: npm i -D @testing-library/jest-dom
  => JS-DOM: When you running test cases there is no sever running or there's no browser, So they need Environment to run where testing code will be executed. So for that JS-Dom is used and it is like a browser.y

: Header.test.js
: Header.test.ts
: Header.spec.ts
: Header.spect.ts
also we can have folder `__test__/ sum.test.js (__ double under score is known as dunder method)`

`For testing test("", () =>{}), test is the function and it takes 2 argument first is string for description and second for testing function`

1. For react testing : Component loading testing we need `import {render, screen } from @testing-library/react`
   -- `test()` and we can name as `it()` as well
   -- screen.getByRole("heading") ==> any button role inside rendered component
   -- screen.getByText("Submit") ==> any Submit text inside rendered component
   -- screen.getAllByRole("textbox") ==> This will select all input fields, for input "textbox" is the role

2. Group of Test cases:
   -- describe() ==> is used to group multiple test cases into single block
3. Jest doesn't understand Redux: So we need to provide the store to Jest also. Because JS-DOM understands React, JSX, JavaScript code, but it doesn't understand Redux code.
4. For click event = use `fireEvent.click(loginButton)`;

# Integration Testing

- global.fetch() for mock data for the fetch call and asynchronous operations
- Whenever we use fetch or do any state updates wrap the render method inside `act()`
- act() comes from -- import {act} from "react-dom/test-utils"
- also we need to await the act() function and make test case call back async :
- `Inside describe() we can add these below methods:`
  describe(
  beforeAll(() => {
  console.log("Before All the test function this will get called");
  });

beforeEach(() => {
console.log("Before each test it will run");
});

afterAll(() => {
console.log("it will run afterAll");
});

afterEach(() => {
console.log("it will run after each");
});
)
