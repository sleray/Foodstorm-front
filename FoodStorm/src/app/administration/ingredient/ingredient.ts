export class IIngredient {
    id : number;
    name : string;
    imageUrl : string;
    type : TypeIngredient;
    groups : IGroupIngredient[];
}
export class TypeIngredient {
    id : number;
    name : string;
}
export class IGroupIngredient {
    id : number;
    name : string;
}
