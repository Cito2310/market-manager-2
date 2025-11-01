export interface FormCategory {
    name: string;
    primary: string;
    subcategories: {name: string, brands: string[]}[]
}
