const request = require('supertest');
const app = require('../index');

// describe('Test the about path', () => {
//     test('It should response the GET method', (done) => {
//         request(app).get('/about').then((response) => {
//             expect(response.statusCode).toBe(200);
//             done();
//         });
//     });
// });


describe('Test the api/read path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/api/read').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the api/add path', () => {
    test('It should response the POST method', (done) => {
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
