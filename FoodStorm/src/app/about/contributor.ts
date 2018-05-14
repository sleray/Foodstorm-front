export interface IContributor{
    name : string;
    roles : IContributorRole[];
    work : string;
    twitterUrl : string;
    imageUrl : string;
}
export interface IContributorRole{
    label : string;
    type : string;
}