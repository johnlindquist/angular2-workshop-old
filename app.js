import {Component, View, bootstrap} from "angular2/angular2";


@Component({
    selector: 'vegas-app'
})
@View({
    template: `
        <div>
            <h1>Hello world</h1>
        </div>
    `
})
class VegasApp{

}

bootstrap(VegasApp);