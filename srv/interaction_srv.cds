using app.interactions from '../db/interactions';
service CatalogService {

 entity Interactions_Header
    as projection on interactions.Interactions_Header;

 entity Interactions_Items
    as projection on  interactions.Interactions_Items;


 entity Sales
    as projection on  interactions.Sales;

entity SalesYear
    as projection on  interactions.SalesYear;


}