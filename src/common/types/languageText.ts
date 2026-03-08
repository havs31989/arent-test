import { AnyType } from 'one-frontend-framework';
//#region Ext language
export interface LanguageText {
    [key: string]: string | AnyType;
}
export interface Menu {
    [key: string]: string | AnyType;
}
//#endregion
export interface LanguageText {
    appName: string;
    label: Label;
    normalMessage: NormalMessage;
    errorMessage: ErrorMessage;
    auth: Auth;
    layout: Layout;
    home: Home;
}
export interface LanguageText {
    appName: string;
    label: Label;
    normalMessage: NormalMessage;
    errorMessage: ErrorMessage;
    auth: Auth;
    layout: Layout;
    home: Home;
}

export interface Auth {
    username: string;
    password: string;
    rememberMe: string;
    forgotPassword: string;
    confirmPassword: string;
    register: string;
    login: string;
    error001: string;
    error002: string;
    error003: string;
    error004: string;
}

export interface ErrorMessage {
    internalServerError: string;
    requiredField: string;
}

export interface Home {
}

export interface Label {
    hi: string;
    error: string;
    warning: string;
    success: string;
    create: string;
    edit: string;
    delete: string;
    list: string;
    first: string;
    last: string;
    next: string;
    previous: string;
    show: string;
    records: string;
    pageOf: string;
    status: string;
    search: string;
    save: string;
    information: string;
    active: string;
    inactive: string;
    select: string;
}

export interface Layout {
    menuItem01: string;
    menuItem02: string;
    menuItem03: string;
    footerItem01: string;
    footerItem02: string;
    footerItem03: string;
    footerItem04: string;
    footerItem05: string;
    footerItem06: string;
}

export interface NormalMessage {
    saveSuccess: string;
}
