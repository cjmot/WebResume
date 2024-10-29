import {MongoClient, ServerApiVersion} from 'mongodb';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import {User} from './types'
import dotenv from 'dotenv';
import config from './dbConfig.json'

const env = dotenv.config({ path: '../../.env' })

const url = `mongodb+srv://${config.userName || env.parsed?.VITE_MONGODB_USERNAME}:${config.password || env.parsed?.VITE_MONGODB_PASSWORD}@${config.hostname || env.parsed?.VITE_MONGODB_HOSTNAME}/?retryWrites=true&w=majority&appName=StartupCluster`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const productCollection = db.collection('product');
const cartCollection = db.collection('cart');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
})

function getUser(userName: string){
    return userCollection.findOne({ userName: userName });
}

function getUserByToken(token: string) {
    return userCollection.findOne({ token: token });
}

async function createUser(userName: string, password: string): Promise<User> {
    const existingUser = await getUser(userName);
    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        userName: userName,
        password: passwordHash,
        userId: uuidv4(),
    };
    await userCollection.insertOne(user)

    return user
}

function addProduct(product: any) {
    productCollection.insertOne((product));
}

function getProducts() {
    const cursor = productCollection.find();
    return cursor.toArray();
}

async function addCartItem(cartItem: any) {
    await cartCollection.insertOne((cartItem));
}

async function getCartItems(email: any) {
    const cursor = cartCollection.find({ email: email });
    return cursor.toArray();
}

async function updateCartItems(email: any, id: any) {
    const filter = { email: email, id: id };
    await cartCollection.deleteOne(filter);
}

const DB = {
    getUser,
    getUserByToken,
    createUser,
    addProduct,
    getProducts,
    addCartItem,
    getCartItems,
    updateCartItems,
};
export default DB;
