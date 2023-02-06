import "assert";
import * as supertest from "supertest";
import { server } from "./../src/server";

describe("API", () => {
  const api = supertest.agent(server);

  it("should return CSV with dates", async () => {
    const response = await api.get("/dates?from=2023-01-01").expect(200);

    expect(response.type).toEqual("text/csv");

    const body = response.text;
    const dates = body.split("\r\n");

    const expectedDates = [
      "2023-01-18,premium",
      "2023-01-31,basic",
      "2023-02-15,premium",
      "2023-02-28,basic",
      "2023-03-15,premium",
      "2023-03-31,basic",
      "2023-04-15,premiu",
      "2023-04-28,basic",
    ];

    for (const index in dates) {
      expect(dates[index]).toEqual(expectedDates[index]);
    }
  });
});
