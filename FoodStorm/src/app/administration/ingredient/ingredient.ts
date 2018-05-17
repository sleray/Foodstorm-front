export interface IIngredient {
    id : number;
    name : string;
    imageUrl : string;
    type : TypeIngredient;
    groups : GroupeIngredient[];
}
export class TypeIngredient {
    id : number;
    name : string;
}
export class GroupeIngredient {
    id : number;
    name : string;
}
