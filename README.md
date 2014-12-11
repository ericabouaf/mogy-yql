# mogy-yql

MySQL query activity for [mogy](https://github.com/neyric/mogy).

## Installation

In your mogy project, install the dependency using npm :

$ npm install mogy-yql --save

To register the `yql` activity to Amazon Simple Workflow :

$ mogy register

## Config

No config required for this module !

## Sample Decider Usage

````javascript
activity({
    name: 'myQuery',
    activity: 'yql',
    input: {
        yqlquery: "SELECT * FROM slideshare.slideshows WHERE user='jcleblanc' LIMIT 1",
        diagnostics: "true",
        envURL: "http://datatables.org/alltables.env"
    }
})
````
