export interface User {
    userId?: string;
    permissions?: string;
    userName?: string;
    firstName?: string;
    lastName?: string;
    userEmail?: string;
    address?: Address;
    billingAddress?: Address;
}
interface Address {
    street?: string;
    apartment?: string;
    city?: string;
    state?: string;
    zip?: string;
}