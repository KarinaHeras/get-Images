import React from 'react';
import supertest from 'supertest';
import '@testing-library/jest-dom/extend-expect'
import Photos from '../../Components/Photos/Photos'
import Albums from '../../Components/Albums/Albums'
 
const rq = supertest('https://jsonplaceholder.typicode.com')
describe("Testing if we get the images", () =>{
    it("GET images", (done) =>{
      rq
      .get('/photos')
      .expect(200)
      .expect('Content-Type',/json/)
      .end((err, res) =>{
        if(err) return done(err)
        return done()
        })
    })
    
})
describe("Testing if we get the albums", () =>{
    it("GET album", (done) =>{
      rq
      .get('/photos')
      .expect('Content-Type',/json/)
      .expect(200)
      .end((err, res) =>{
        if(err) return done(err)
        return done()
        })
    })
    
})
