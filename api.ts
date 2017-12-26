import {Request,Response,Application} from "express";


export interface error{
    error:string;
}

export const requesterror:error={
    error:"Could not decode request: JSON parsing failed"
}

export interface icrud{
    create:(req:Request,resp:Response)=>void,
    read:(req:Request,resp:Response)=>void,
    update:(req:Request,resp:Response)=>void,
    delete:(req:Request,resp:Response)=>void
}

export interface iaddress{
    buildingNumber: string;
    lat?: number;
    lon?: number;
    postcode: string;
    state: string;
    street: string;
    suburb: string;
    unitNumber?:string;
}
export interface iproperty{
    address:iaddress;    
    propertyTypeId: number;
    readyState: string;
    reference: string;
    shortId: string;
    status: number;
    type: string;
    workflow: string;
    valfirm?:any;    
}

export interface iresponse {
    concataddress: string;
    type: string;
    workflow: string;
}

export interface irequest {
    payload:iproperty[];
}

export const concatedaddress=function(address:iaddress):string{
    let lat:string='';
    let lon:string='';

    if (address.lat!=undefined)
        lat=address.lat.toString();

    if (address.lon!=undefined)
        lon=address.lon.toString();

    return address.buildingNumber + ' ' + lat + ' ' + lon + ' ' + address.postcode + ' ' + address.state + ' ' + address.street + ' ' + address.suburb + ' ' + address.unitNumber;  

}

export const response=function(request:irequest):iresponse[]{
    const response:iresponse[]=request.payload.map(requestItem=>{
        const resp:iresponse={
            concataddress: concatedaddress(requestItem.address),
            type: requestItem.type,
            workflow: requestItem.workflow     
        }
        return resp;
    })
    return response;
}


