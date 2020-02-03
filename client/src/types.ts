export interface Iuser {
    id: string,
    profileIcon: string,
    headerImg: string,
    messageGroups: string[],
    followers: string[],
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    username: string,
    createdOn: Date
}