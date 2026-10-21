"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("prisma/config");
exports.default = (0, config_1.defineConfig)({
    schema: "./src/prisma/schema.prisma",
    datasource: {
        url: (0, config_1.env)('DATABASE_URL') || "postgresql://mock:mock@localhost:5432/mock",
    },
});
//# sourceMappingURL=prisma7.config.js.map