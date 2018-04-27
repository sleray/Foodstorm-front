export interface IIngredient {
    id : number;
    name : string;
    imageUrl : string;
    type : ITypeIngredient;
    groups : IGroupIngredient[];
}
export interface ITypeIngredient {
    id : number;
    name : string;
}
export interface IGroupIngredient {
    id : number;
    name : string;
}
