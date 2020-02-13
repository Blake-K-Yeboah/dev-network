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

export interface IProject {
    id: string,
    title: string,
    descirption: string,
    tags: string,
    img: string, // Path to image
    likes: string[],
    dislikes: string[],
    preview: string,
    github: string,
    postedBy: Iuser,
    postedOn: Date
}

export interface ILoginErrorProps {
    error: string
}