export interface IRespose{

}

export interface IApiResponse{
    message: string;
    code: number;
    data: IRespose | null;
    error: string[];
}