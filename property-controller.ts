import {Application,Request,Response} from "express";
import {irequest,iresponse,icrud,response,requesterror} from './api';
import {json} from "body-parser";


export class PropertyController implements icrud{

    constructor(private app:Application,private endpoint:string){
        app.get(this.endpoint,this.read);
        app.post(this.endpoint,json(),this.create);
        app.put(this.endpoint,json(),this.update);
        app.delete(this.endpoint,json(),this.delete);        
        
    }
    create=(req:Request,resp:Response):void=>{
        try {
            const requestjson:irequest=req.body as irequest;
            resp.send(response(req.body as irequest));
        }catch(error){
            resp.send(requesterror);
        }
    }

    read=(req:Request,resp:Response):void=>{
        resp.send('Welcome to HomeTrack');
    }

    update=(req:Request,resp:Response):void=>{
        resp.sendStatus(200);
    }

    delete=(req:Request,resp:Response):void=>{
        resp.sendStatus(404);
    }
        

}