exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        "../test/e2e/*.js"
    ],

    capabilities: {
        "browserName": "chrome"
    },

    baseUrl: "http://localhost:9000/",

    framework: "jasmine",

    jasmineNodeOpts: {
        defaultTimeoutInterval: 5000
    }
};
