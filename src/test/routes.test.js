const request = require('supertest');
const app = require('../index');


// describe('Test the root path', () => {
//     test('It should respond with the GET method', (done) => {
//         request(app).get('/').then((response) => {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });

describe('Test the about path', () => {
    test('It should respond with the GET method', (done) => {
        request(app).get('/about').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

// describe('Test the api/login path', () => {
//     test('It should respond with the POST method', (done) => {
//         request(app).get('/api/login').then((response) => {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });


describe('Test the error path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/error').then((response) => {
            expect(response.statusCode).toBe(404);
            done();
        });
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
//
// describe('Test the api/secret path', () => {
//     test('It should respond with the GET method', (done) => {
//         request(app).get('/api/secret').then((response) => {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });
//
// describe('Test the api/secretdebug path', () => {
//     test('It should respond with the GET method', (done) => {
//         request(app).get('/api/secretdebug').then((response) => {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });
