import { IFamily } from "./family";
import { IRole } from "./role";

export interface IMember {
    id : number
    login : string
    passwd : string
    mail : string
    family : IFamily
    roles : Array<IRole>
    token : string
}