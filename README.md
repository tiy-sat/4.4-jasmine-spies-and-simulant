# FEE Boilerplate Browserify

## Development
  1. Install global dependencies
    1. `npm install -g browserify`
    1. `npm install -g watchify`
  1. Install local dependencies
    1. `npm install`
  1. Before development
    1. `npm run watch-dev`
  1. To test...
    * Please note that the use of `npm run test` is not allowed...
    1. `npm test`

## Words
  - CLI - Command Line Interface - Allows us to write commands in Terminal to execute functions (this is why we use `npm install -g`)
  - Spec - is another word for a file with tests...
  - Spec Helpers - reusable code (functions) for specs...

## Watchify yourself before you reckify yourself
  1. If you start `npm run watch-dev` before you create new `.js` files... it will not see the changes and will error out!
    - Kill the process in command line `cntrl + c` and restart `npm run watch-dev`
