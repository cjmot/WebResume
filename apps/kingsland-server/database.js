const { MongoClient } = require('mongodb')
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
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

function getUser(userName){
    return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(userName, password) {
    const existingUser = await getUser(userName);
    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        userName: userName,
        password: passwordHash,
        userId: uuid.v4(),
    };
    await userCollection.insertOne(user).then(() => {
        return user;
    });
}

function addProduct(product) {
    productCollection.insertOne((product));
}

function getProducts() {
    const cursor = productCollection.find();
    return cursor.toArray();
}

async function addCartItem(cartItem) {
    await cartCollection.insertOne((cartItem));
}

async function getCartItems(email) {
    const cursor = await cartCollection.find({ email: email });
    return cursor.toArray();
}

async function updateCartItems(email, id) {
    const filter = { email: email, id: id };
    await cartCollection.deleteOne(filter);
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addProduct,
    getProducts,
    addCartItem,
    getCartItems,
    updateCartItems,
};
