export type UserType = {
    email: string;
    password: string;
    name: string;
    age: number;
};

export type APIUserType = {
    email: string;
    name: string;
    phone: string;
}

export type UserVariationsType = 'local' | 'server';