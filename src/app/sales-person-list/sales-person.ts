export class SalesPerson {
    /**
     * step 5:
     * define the constructor with Parameter Properties.
     * Parameter Properties: Declares properties and assigns properties automatically.
     * Minimizes boilerplate coding!
     * 
     * @param firstName 
     * @param lastName 
     * @param email 
     * @param salesVolume 
     */
    constructor( public firstName: string,
        public lastName: string,
        public email: string,
        public salesVolume: number){

        }
}
