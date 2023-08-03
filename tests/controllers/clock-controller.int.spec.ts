import supertest from "supertest";
import { app } from "../../src/app";
import { describe, test, expect, vi, beforeAll, SpyInstance, } from "vitest";
import { client } from "../../src/config/client/client";

describe("ClockController", () => {

  let findResultSpy: SpyInstance;
  let createResultSpy: SpyInstance;
  let updateResultSpy: SpyInstance;

  beforeAll(() => {
    findResultSpy = vi.spyOn(client.result, 'findFirst')
    createResultSpy = vi.spyOn(client.result, 'create')
    updateResultSpy = vi.spyOn(client.result, 'update')
  })


  describe(`getDegrees`, () => {
    test(`
    should return error if hour or minute was greater than 12
    status: 400
    POST route:/v1/rest/clock/:hour
    `, async () => {
      const { body, statusCode } = await supertest(app).get("/v1/rest/clock/13").send();

      expect({ body, statusCode }).toStrictEqual({
        body: {
          error: 'Invalid hour or minute param! the allowed pattern is: min 1, max 12 to hours and min 0, max 59 to minutes'
        }, statusCode: 400
      })
    });

    test(`
    should return error if hour or minute was not an integer number
    status: 400
    POST route:/v1/rest/clock/:hour/:minute
    `, async () => {
      const { body, statusCode } = await supertest(app).get("/v1/rest/clock/10.5/4.00").send();

      expect({ body, statusCode }).toStrictEqual({
        body: {
          error: 'Only intiger numbers are allowed'
        }, statusCode: 400
      })
    });


    test(`
    should return error if hour or minute was neither a number
    status: 400
    POST route:/v1/rest/clock/:hour/:minute
    `, async () => {
      const { body, statusCode } = await supertest(app).get("/v1/rest/clock/aaaa/bbbbb").send();

      expect({ body, statusCode }).toStrictEqual({
        body: {
          error: 'Only intiger numbers are allowed'
        }, statusCode: 400
      })
    });

    test(`
    sould return the angle 0 if the hour was 12
    status: 200
    POST route:/v1/rest/clock/:hour
    `, async () => {
      const { body, statusCode } = await supertest(app).get("/v1/rest/clock/12/").send();

      findResultSpy.mockResolvedValueOnce(null)
      createResultSpy.mockResolvedValueOnce(null)

      expect({ body, statusCode }).toStrictEqual({
        body: {
          angle: 0
        }, statusCode: 200
      })
    });

    test(`
    sould return the angle 180 if the hour was 12:30
    status: 200
    POST route:/v1/rest/clock/:hour/:minute
    `, async () => {
      const { body, statusCode } = await supertest(app).get("/v1/rest/clock/12/30").send();

      findResultSpy.mockResolvedValueOnce(null)
      createResultSpy.mockResolvedValueOnce(null)

      expect({ body, statusCode }).toStrictEqual({
        body: {
          angle: 180
        }, statusCode: 200
      })
    });

    test(`
    sould return the angle 180 if the hour was 6
    status: 200
    POST route:/v1/rest/clock/:hour
    `, async () => {
      const { body, statusCode } = await supertest(app).get("/v1/rest/clock/6").send();

      findResultSpy.mockResolvedValueOnce(null)
      createResultSpy.mockResolvedValueOnce(null)

      expect({ body, statusCode }).toStrictEqual({
        body: {
          angle: 180
        }, statusCode: 200
      })
    });

    test(`
    sould return the angle 90 if the hour was 3
    status: 200
    POST route:/v1/rest/clock/:hour
    `, async () => {
      const { body, statusCode } = await supertest(app).get("/v1/rest/clock/3").send();

      findResultSpy.mockResolvedValueOnce(null)
      createResultSpy.mockResolvedValueOnce(null)

      expect({ body, statusCode }).toStrictEqual({
        body: {
          angle: 90
        }, statusCode: 200
      })
    });

    test(`
    sould return the angle 90 if the hour was 9
    status: 200
    POST route:/v1/rest/clock/:hour
    `, async () => {
      const { body, statusCode } = await supertest(app).get("/v1/rest/clock/9").send();

      findResultSpy.mockResolvedValueOnce(null)
      createResultSpy.mockResolvedValueOnce(null)

      expect({ body, statusCode }).toStrictEqual({
        body: {
          angle: 90
        }, statusCode: 200
      })
    });
  });
});
