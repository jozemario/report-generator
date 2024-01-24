# Report Generator 
Generate reports that we can export on the client side, in Splunk Dashboards.
* This configures Webpack to bundle TypeScript files, targeting AMD modules (compatible with RequireJS).
* Functionality for generating a PowerPoint report using PptxGenJS into TypeScript. 
* This file will serve as the entry point for your application and will be compiled and bundled by Webpack.
* Once this TypeScript file is compiled and bundled using Webpack, you can use the generated bundle in an HTML file with RequireJS. The reportGenerator.generateReport() method can be called from other parts of your application to generate the report.
### Setup environment
```shell
#deps
nvm use 18
yarn

#build
yarn build
#assets live in dist/bundle.js

#how to use it 
open test/index.html in browser
```