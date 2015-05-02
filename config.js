System.config({
    traceurOptions: {
        annotations: true,
        types: true,
        memberVariables: true
    },
    paths: {
        '*': '*.js',
        'angular2/*': 'angular2/*',
    }
});

System.import('app');