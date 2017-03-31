export class User {
    id: string;
    name: string;
    contract: string;
    region: string;
    token: string;
    expires: string;
    catalog: catalog[];
    roles: roles[];
}

export class catalog {
    endpoints: endpoints[];
}

export class endpoints {
    id:string;
    interface: string;
    name: string;
    region: string;
    url: string;
}

export class roles {
    name: string;
    id: string;
}

