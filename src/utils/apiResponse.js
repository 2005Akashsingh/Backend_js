class ApiResponse{
    constructor(stausCode ,data, message = "success"  ){
        this.stausCode = stausCode
        this.data = data
        this.maessage = message
    }
}

export {ApiResponse}