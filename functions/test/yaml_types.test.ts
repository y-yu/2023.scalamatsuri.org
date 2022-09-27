import {assert} from "chai";
import {selectYamlType, YamlType} from "../src/yaml_types";

describe("#selectYamlType", () => {
  describe("proposalが選ばれる", () => {
    const name1 = "proposals/src/hoge.yaml";
    it(name1, () => {
      assert.strictEqual(
          selectYamlType(name1),
          YamlType.Proposal);
    });
  });

  describe("day1が選ばれる", () => {
    it("pending");
  });
  describe("day2が選ばれる", () => {
    it("pending");
  });
  describe("day3が選ばれる", () => {
    it("pending");
  });
  describe("除外されるパターン", () => {
    it("yamlじゃない", () => {
      const name = "proposals/src/hoge.json";
      assert.strictEqual(
          selectYamlType(name),
          YamlType.Unknown
      );
    });
    it("srcディレクトリじゃない", () => {
      const name = "proposals/dist/hoge.yaml";
      assert.strictEqual(
          selectYamlType(name),
          YamlType.Unknown
      );
    });
  });
});
