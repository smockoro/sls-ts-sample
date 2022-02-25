var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/functions/fileChangePropagator/handler.ts
var handler_exports = {};
__export(handler_exports, {
  main: () => main
});
var fileChangePropagator = async (event, callback) => {
  console.log("start s3 file get");
  const s3Record = event.Records[0].s3;
  const srcBucket = s3Record.bucket.name;
  console.log("file get from " + srcBucket);
  const fileExtension = decodeURIComponent(s3Record.object.key.replace(/\+/g, " "));
  const extMatch = fileExtension.match(/\.([^.]*)$/);
  if (!extMatch) {
    callback(new Error("Could not determine file extension."));
    return;
  }
  console.log("end of s3 file get");
};
var main = fileChangePropagator;
module.exports = __toCommonJS(handler_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
//# sourceMappingURL=handler.js.map
