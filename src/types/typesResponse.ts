export interface FullResponse{
    success: boolean,
    error: string,
    result:{
        result:Array<Result>,
        total: number
    }
}

export interface Result{
    __id: string,
    __name:string
    __debug:boolean,
    __index:number,
    __version:number,
    __createdAt:string,
    __createdBy:string,
    __deletedAt:null,
    __directory:null,
    __updatedAt:string,
    __updatedBy:string,
    __externalId:null,
    __subscribers: Array<string>,
    __externalProcessMeta:null
}
