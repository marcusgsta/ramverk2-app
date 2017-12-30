const request = require('supertest');
const app = require('../index');


// describe('Test the root path', () => {
//     test('It should respond with a 404, not logged in', () => {
//         return request(app).get('/').expect(404);
//     });
// });

describe('Test the about path', () => {
    test('It should respond with the GET method', () => {
        return request(app).get('/about').expect(200);
    });
});

// describe('Test the api/login path', () => {
//     test('It should respond with the POST method', (done) => {
//         request(app).post('/api/login').then((response) => {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });


// describe('Test the api/login path', () => {
//     test('It should response the POST method', async () => {
//         const response = await request(app).post('/api/login');
//
//         expect(response.statusCode).toBe(200);
//     });
// });

describe('Test the error path', () => {
    test('It should respond with the GET method', () => {
        return request(app).get('/error').expect(404);
    });
});

// CRUD routes

describe('Test the api/read path', () => {
    test('It should respond with the GET method', (done) => {
        request(app).get('/api/read').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the api/add path', () => {
    test('It should respond with the POST method', (done) => {
        request(app).post('/api/add').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the api/update path', () => {
    test('It should response the PUT method', (done) => {
        request(app).put('/api/update').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the api/remove path', () => {
    test('It should response the DELETE method', (done) => {
        request(app).delete('/api/remove').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});



// describe('Login test', function () {
//       it('should redirect to /', function (done) {
//         agent
//         .post('/login')
//         .field('email', 'user@user.com')
//         .field('password', 'pass11')
//         .expect('Location','/')
//         .end(done)
//       })
