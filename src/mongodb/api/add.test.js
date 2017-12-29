const request = require('supertest');
const app = require('../../index');

describe('Test the api/add path', () => {
    test('It should respond with the POST method', (done) => {
        request(app).post('/api/add').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
