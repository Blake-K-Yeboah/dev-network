export interface Iuser {
    _id: string,
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
    _id: string,
    title: string,
    description: string,
    tags: string[],
    img: string, // Path to image
    likes: string[],
    dislikes: string[],
    preview: string | null,
    github: string | null,
    userId: string,
    postedOn: Date
}

export interface IPost {
    title: string,
    postedBy: string,
    content: string,
    emoji: string,
    postedOn: Date,
    _id: string
}

export interface IMessage {
    _id: string,
    text: string,
    sentOn: Date,
    from: string,
    to: string,
    seen: boolean
}

export interface ILoginErrorProps {
    error: string
}

export interface IAuthStore {
    token: string | null,
    isAuthenticated: boolean,
    user: any, // jwt_decode returns type unknown
    error: string | null,
    setError: (err: string) => void,
    setCurrentUser: (user: Iuser | null) => void,
    setToken: (token: string | null) => void
}

export interface IProjectStore {
    fetchProjects: () => void,
    projects: IProject[] | null,
    activeProjectIndex: number,
    nextProject: () => void,
    prevProject: () => void,
    modalStatus: boolean,
    toggleStatus: () => void,
    error: string | null,
    setError: (err: string) => void
}

export interface IUsersStore {
    fetchUsers: () => void,
    users: Iuser[] | null,
    activeUserIndex: number,
    nextUser: () => void,
    prevUser: () => void,
    searchModalStatus: boolean,
    toggleSearchModalStatus: () => void,
    searchQuery: string,
    setSearchQuery: (newQuery: string) => void,
    activeTab: string,
    setActiveTab: (newTab: string) => void
}

export interface ICommunityStore {
    fetchPosts: () => void,
    posts: IPost[] | null,
    activePostIndex: number,
    nextPost: () => void,
    prevPost: () => void,
    modalStatus: boolean,
    toggleStatus: () => void,
    error: string | null,
    setError: (err: string) => void
}

export interface IMessageStore {
    fetchMessages: () => void,
    messages: IMessage[] | null,
    modalStatus: boolean,
    toggleStatus: () => void,
    error: string | null,
    setError: (err: string) => void,
    activeFollower: string | null,
    setActiveFollower: (follower: string) => void,
    pushMessage: (message: IMessage) => void
}

// For Components with Stores as props
export interface IStoreProps {
    [storeName: string]: any
}