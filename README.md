# dm-visual-regression-test-app
Super simple example of Backstop config for visual regression testing on the Digital Marketplace.  The example also includes how you may want to handle logging in to test stuff within accounts.

## Setup
You'll need the DM running locally with the nginx magic applied so routes join up under http://localhost

You'll also need node installed locally.

Clone this repo and run:
`npm install`

## Running tests
Simply run:
`npm run test`

With the basic setup as supplied, this will run an initial test on your localhost.  Everything will fail because you don't have any reference screenshots.  To get some references, simply approve your test run:

`npm run approve`

Now you can happily change your local apps and run tests (with `npm run test`) to make sure you've not broken things!  Everytime you do a good change, simply `npm run approve` to update your reference screenshots.

## What's next
This setup will help you change stuff on your nice new shiny copy of the DM.  It won't help you compare what you have to preview/staging etc.  The tests can easily be modified to do this if more helpful for your situation.  See the backstopjs docs here: https://github.com/garris/BackstopJS

In the future, it may also be useful to work this into our deployment pipeline... The workflow around this still needs defining.