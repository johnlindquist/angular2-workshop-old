System.config({
    traceurOptions: {
        annotations: true,
        types: true,
        memberVariables: true
    },
    paths: {
        'traceur':  'libs/traceur.min.js',
        'traceur-runtime':  'libs/traceur.min.js',
        'angular2/*': 'libs/angular2.dev.js',
        '*': '*.js',
    }
});


System.import('app');

