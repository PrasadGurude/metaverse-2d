const { default: axios } = require("axios");

function sum(a, b) {
    return a + b
}

const BACKEND_URL = 'http://localhost:3000';

describe('sum', (a, b) => {
    test('adds 1 + 2 to equal 3', () => {
        let ans = sum(1, 2);
        expect(ans).toBe(3);
    });

    test('adds -1 + 2 to equal 3', () => {
        let ans = sum(-1, 2);
        expect(ans).not.toBe(3);
    });
});

describe('Authentication', () => {
    test('user is able to sign up only once', async () => {
        const username = 'prasad' + Math.random();  // prasad.127453
        const password = '123456';
        const response = await axios.post(`${BACKEND_URL}api/v1/user/signup`, {
            username,
            password,
            type: "admin"
        })

        const updatedResponse = await axios.post(`${BACKEND_URL}api/v1/user/signup`, {
            username,
            password,
            type: "admin"
        })

        expect(response.statusCode).toBe(400)
    })

    test('Signup request fails if the username is empty', async () => {
        const username = `prasad${Math.random()}`
        const password = '123456'

        const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            password
        })

        expect(response.statusCode).toBe(400)

    })

    test('Signin succeeds if the username and password are correct', async () => {
        const username = `prasad${Math.random()}`
        const password = '123456'

        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password,

        })

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password
        })

        expect(response.statusCode).toBe(200)
        expect(response.data.token).toBeDefined()

    })

    test('signin fails if the username and password are incorrect', async () => {
        const username = 'prasad' + Math.random()
        const password = '123456'

        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password
        })

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username: "wrong username",
            password
        })

        expect(response.statusCode).toBe(400)

    })

})

describe('User Infromation Endpoint', () => {
    let token = ''
    beforeAll(async () => {
        const username = `prasad${Math.random()}`
        const password = '123456'

        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            username,
            password
        })

        const response = axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password
        })

        token = response.data.token

        const avatarResponse = await axios.post(`${BACKEND_URL}/api/v1/avatar`)
    })

    test("User can't update their metadata with a wrong avatar id", async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/metadata`, {
            avatarId: '123123123'
        })
        expect(response.statusCode).toBe(400)
    })

    test("user can update their metadata with the right avarar id", async () => {

    })

})

