import { describe, expect, it } from "vitest";
import { news, temple } from "@/content/temple";

describe("Unverified temple information", () => {
  it("does not fabricate contact information", () => {
    expect(temple.address).toBeNull();
    expect(temple.phone).toBeNull();
    expect(temple.email).toBeNull();
    expect(temple.mapsQuery).toBeNull();
  });
  it("does not fabricate confirmed darshan times", () => {
    expect(temple.timings).toHaveLength(3);
    expect(temple.timings.map((t) => t.value)).toEqual([null, null, null]);
  });
  it("does not claim official social accounts", () => {
    expect(temple.social).toEqual([]);
  });
  it("does not invent confirmed publication dates", () => {
    expect(news.map((n) => n.date)).toEqual([null, null, null]);
  });
  it("provides unique article identifiers", () => {
    expect(new Set(news.map((n) => n.slug)).size).toBe(3);
  });
});
