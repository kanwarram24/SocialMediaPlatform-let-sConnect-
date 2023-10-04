const {expect} = require("chai")
const request = require("request")
const faker = require("faker");


const baseUrl = 'http://localhost:5000';

describe("User Registration", function () {
  it('should return status code 201', function (done) {
    const userData = {
      "firstname": faker.name.firstName(),
      "lastname": faker.name.lastName(),
      "email": faker.internet.email(),
      "username": faker.internet.userName(),
      "password": faker.internet.password(),
    };
    request.post(
      {
        url: `${baseUrl}`,
        json: userData
      },
      (error, response) => {
        expect(response.statusCode).to.equal(201);
        done();
      }
    );
  });
});

describe("User Login", function () {
  it('should return status code 200', function (done) {
    const userData = {
      "email": faker.internet.email(),
      "password": faker.internet.password(),
    };
    request.post(
      {
        url: `${baseUrl}/login`,
        json: userData
      },
      (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});
  
   
describe("retweet post testing", function() {
    it('returns status code of 201', function(done) {
  const Data = {
      "postID": "1",
     }; 
      request.post(
        {
          url: 'http://localhost:5000/api/posts/${postId}/retweet',
          json: Data
        },
        done()
      );
    });
  });
  
  describe("Delete post Test", function () {
    it('should return status code 200', function (done) {
      const postId = faker.random.number(); 
      request.delete(
        {
          url: `${baseUrl}/api/posts/${postId}`,
        },
        (error, response) => {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    });
  });
  
  describe("Retweet post testing", function () {
    it('should return status code 201', function (done) {
      const postID = faker.random.number(); 
      const Data = {
        "postID": postID,
      };
      request.post(
        {
          url: `${baseUrl}/api/posts/${postID}/retweet`,
          json: Data,
        },
        (error, response) => {
          expect(response.statusCode).to.equal(201);
          done();
        }
      );
    });
  });
  

  describe("Follow testing", function () {
    it('should return status code 201', function (done) {
      const userId = faker.random.number(); 
      const Data = {
        "userID": userId,
      };
      request.put(
        {
          url: `${baseUrl}/api/users/${userId}/follow`,
          json: Data,
        },
        (error, response) => {
          expect(response.statusCode).to.equal(201);
          done();
        }
      );
    });
  });
  
  describe("Get followers testing", function () {
    it('should return status code 201', function (done) {
      const userId = faker.random.number(); 
      const Data = {
        "userID": userId,
      };
      request.get(
        {
          url: `${baseUrl}/api/users/${userId}/followers`,
          json: Data,
        },
        (error, response) => {
          expect(response.statusCode).to.equal(201);
          done();
        }
      );
    });
  });
  
  describe("Get following testing", function () {
    it('should return status code 201', function (done) {
      const userId = faker.random.number(); 
      const Data = {
        "userID": userId,
      };
      request.get(
        {
          url: `${baseUrl}/api/users/${userId}/following`,
          json: Data,
        },
        (error, response) => {
          expect(response.statusCode).to.equal(201);
          done();
        }
      );
    });
  });
  

  
  describe("Like post testing", function () {
    it('should return status code 201', function (done) {
      const postId = faker.random.number(); 
      request.get(
        {
          url: `${baseUrl}/api/posts/${postId}/like`,
        },
        (error, response) => {
          expect(response.statusCode).to.equal(201);
          done();
        }
      );
    });
  });

  describe("Upload profile pic testing", function () {
    it('should return status code 201', function (done) {
      const profilePicture = faker.image.avatar(); 
      request.post(
        {
          url: `${baseUrl}/api/users/profilePicture`,
          json: { "profilePicture": profilePicture },
        },
        (error, response) => {
          expect(response.statusCode).to.equal(201);
          done();
        }
      );
    });
  });
  
  describe("Upload cover photo", function () {
    it('should return status code 201', function (done) {
      const userId = faker.random.number(); 
      const Data = {
        "coverPhoto": "/images/coverPic.jpeg",
      };
      request.post(
        {
          url: `${baseUrl}/api/users/${userId}/coverPhoto`,
          json: Data,
        },
        (error, response) => {
          expect(response.statusCode).to.equal(201);
          done();
        }
      );
    });
  });
  
