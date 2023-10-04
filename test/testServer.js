const {expect} = require("chai")
const request = require("request")
const faker = require("faker");

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
        url: ${baseUrl}/register,
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
        url: ${baseUrl}/login,
        json: userData
      },
      (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});
  
   
describe("post reply testing", function() {
    it('returns status code of 201', function(done) { 
  const Data = {
      "postReply": "Yes How are you",
     }; 
      request.post(
        {
          url: 'http://localhost:5000/api/posts',
          json: Data
        },
        done()
      );
    });
  });
  

  
  
describe("delete post Test", function() {
    it('returns status code of 200', function(done) {
      const postId = '1'; 
      request.delete(
        {
          url: 'http://localhost:5000/api/posts/${postId}'
        },
        done()
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
  
  describe("follow testing", function() {
    it('returns status code of 201', function(done) {
     
  const Data = {
      "userID": "1",
     }; 
      request.put(
        {
          url: 'http://localhost:5000/:userId/follow',
          json: Data   
        },
        done()
      );
    });
  });

 
  describe("get followers testing", function() {
    it('returns status code of 201', function(done) {
     
  const Data = {
      "userID": "1",
     }; 
      request.get(
        {
          url: 'http://localhost:5000/:userId/followers',
          json: Data
        },
        done()
      );
    });
  });

   
  describe("get following testing", function() {
    it('returns status code of 201', function(done) {
  const Data = {
      "userID": "1",
     }; 
      request.get(
        {
          url: 'http://localhost:5000/:userId/follow',
          json: Data  
        },
        done()
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
  
  
