export interface Category {
    id: number;
    name: string;
    description: string;
    threshold: number;
}

export interface Equipment {
    serialNumber: string;
    creationDate: Date;
    version: string;
    name: string;
    partNumber: string;
    available: boolean;
    category: Category;
    supplier: Supplier;
}

export interface Movement {
    id: number;
    date: Date;
    direction: MovementDirection;
    equipment: Equipment;
    reason: Reason;
    note: string;
    user: User;
}

export interface Notification {
    id: number;
    time: Date;
    title: string;
    message: string;
    user: User;
    read: boolean;
}

export interface Permission {
    name: string;
}

export interface Reason {
    id: number;
    title: string;
    direction: MovementDirection;
}

export interface Supplier {
    id: number;
    name: string;
    email: string;
    address: string;
    mobile: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    permissions: string[];
}

export type MovementDirection = "IN" | "OUT";

export type Severity = "INFO" | "WARN";
