import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '66c37735003214603150',
    databaseId: '66c37bca002e57ae171a',
    userCollectionId: '66c37c0b002f299bc79b',
    videoCollectionId: '66c37c2700134214709c',
    storageId: '66c37ecb0022d63f80a1',
}
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser =  async (email, username, password) => {
    // Register User
try {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
    )
    if(!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);

    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl,
        }
    )
    return newUser 
}
catch(error){
    console.log(error);
    throw new Error(error);
}
    
}

export const signIn = async (email, password) => {
    try{
        const sessions = await account.createEmailPasswordSession(email, password);
        return sessions;

    }
    catch(error){
        console.log(error);
        throw new Error(error);
    }
}

export const getCurrentUser  = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if(!currentUser) throw Error;

    } catch(error){
        console.log(error);
    }
}

