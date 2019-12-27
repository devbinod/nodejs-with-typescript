export class User {

    private firstName: string;
    private lastName: string;
    private address: string;
    private phoneNumber: string;
    private email: string;

    constructor(firstName: string, lastName: string, address: string,
        
        phoneNumber: string, email: string
        ) {

            this.firstName = firstName;
            this.lastName = lastName;
            this.address = address;
            this.phoneNumber = phoneNumber;
            this.email = email;
        }


}