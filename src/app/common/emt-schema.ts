export interface Category {
    id: number;
    name: string;
    description: string;
    threshold: number;
}

export interface Equipment {
    serialNumber: string;
    version: string;
    name: string;
    partNumber: string;
    active: boolean;
    category: Category;
}

export interface Movement {
    id: number;
    date: Date;
    direction: MovementDirection;
    equipment: Equipment;
    reason: Reason;
    note: string;
}

export interface Notification {
    id: number;
    title: string;
    message: string;
    user: User;
}

export interface Reason {
    id: number;
    title: string;
    direction: MovementDirection;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    mail: string;
    mobile: string;
    password: string;
    role: string;
}

export type MovementDirection = "IN" | "OUT";

export type Severity = "INFO" | "WARN";
