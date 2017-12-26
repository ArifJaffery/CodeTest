import * as express from "express";
import {Application} from "express";
import {PropertyController} from './property-controller';

export class main{
    app:Application;
    port:number=4000;
    constructor(){
        console.log('Starting Server');
        this.app=express();
        new PropertyController(this.app,'/property');
        this.app.listen(this.port);
    }   

}

export default new main();