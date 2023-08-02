import { beforeEach, describe, expect, it, vi } from "vitest";
import { ClockServices } from "../../src/services/clock-services";
import { ResultRepository } from "../../src/infra/repositories/result-repository";
import { client } from "../../src/config/client/client";
import { resultMock } from "../mocks/mocks";

describe("ClockServices", () => {

  let clockServices: ClockServices
  let resultRepository: ResultRepository
  let resultRepositorySpy: any;

  beforeEach(() => {
    resultRepository = new ResultRepository(client)
    resultRepositorySpy = vi.spyOn(resultRepository, 'find').mockResolvedValueOnce(resultMock)
    clockServices = new ClockServices(resultRepository)
  })
  describe("CalculateDegress", () => {

    it("should not call calculation if result were already found", async () => {
      const calculateAngularDistanceMock = vi.spyOn(clockServices as any, 'claculateAngularDistance')
      await clockServices.calculateDegress(12)

      expect(calculateAngularDistanceMock).not.toHaveBeenCalled()
    })

    it("should call calculate if result was not found", async () => {
      resultRepositorySpy.mockResolvedValueOnce(null)
      const calculateAngularDistanceMock = vi.spyOn(clockServices as any, 'claculateAngularDistance')
      await clockServices.calculateDegress(12)

      expect(calculateAngularDistanceMock).not.toHaveBeenCalled()
    })

    it("should call update if result was found", async () => {
      const updateResultSpy = vi.spyOn(resultRepository, 'update').mockResolvedValueOnce(null as any)
      const calculateAngularDistanceMock = vi.spyOn(clockServices as any, 'claculateAngularDistance')
      await clockServices.calculateDegress(12)


      expect(calculateAngularDistanceMock).not.toHaveBeenCalled()
      expect(updateResultSpy).toHaveBeenCalled()
    })
  })

  describe("claculateAngularDistance", () => {

    it("should return angle 0 if it was 12 o'clock", async () => {

      vi.spyOn(resultRepository, 'create').mockResolvedValueOnce(null as any)
      const result = await clockServices['claculateAngularDistance'](12, 0)

      expect(result).toStrictEqual({ angle: 0 })
    })

    it("should return angle 180 if it was 6:00, 12:30 and  9:15", async () => {

      vi.spyOn(resultRepository, 'create').mockResolvedValueOnce(null as any)
      const result1 = await clockServices['claculateAngularDistance'](12, 30)
      const result2 = await clockServices['claculateAngularDistance'](6, 0)
      const result3 = await clockServices['claculateAngularDistance'](9, 15)

      expect(result1).toStrictEqual({ angle: 180 })
      expect(result2).toStrictEqual({ angle: 180 })
      expect(result3).toStrictEqual({ angle: 180 })
    })

    it("should return angle 90 if it was 9:00, 3:00 and 6:15", async () => {

      vi.spyOn(resultRepository, 'create').mockResolvedValueOnce(null as any)
      const result1 = await clockServices['claculateAngularDistance'](9, 0)
      const result2 = await clockServices['claculateAngularDistance'](3, 0)
      const result3 = await clockServices['claculateAngularDistance'](6, 15)

      expect(result1).toStrictEqual({ angle: 90 })
      expect(result2).toStrictEqual({ angle: 90 })
      expect(result3).toStrictEqual({ angle: 90 })
    })

    it("should return angle 90 if it was 9:00, 3:00 and 6:15", async () => {

      vi.spyOn(resultRepository, 'create').mockResolvedValueOnce(null as any)
      const result1 = await clockServices['claculateAngularDistance'](9, 0)
      const result2 = await clockServices['claculateAngularDistance'](3, 0)
      const result3 = await clockServices['claculateAngularDistance'](6, 15)

      expect(result1).toStrictEqual({ angle: 90 })
      expect(result2).toStrictEqual({ angle: 90 })
      expect(result3).toStrictEqual({ angle: 90 })
    })

    it("should call create with correct params", async () => {

      const createResultSpy = vi.spyOn(resultRepository, 'create').mockResolvedValueOnce(null as any)
      await clockServices['claculateAngularDistance'](9, 0)

      expect(createResultSpy).toHaveBeenCalledWith({ hour: 9, minute: 0, angle: 90 })
    })
  })
})
