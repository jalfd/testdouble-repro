import * as td from "testdouble";

await td.replaceEsm("fs");
await import("./other.js");
