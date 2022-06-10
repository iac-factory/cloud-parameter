/*
 * BSD 3-Clause License
 *
 * Copyright © 2022, Jacob B. Sanders, IaC-Factory & Affiliates
 *
 * All Rights Reserved
 */

import Utility from "util";

import { Parameter } from "cloud-parameter";

describe( "Module Unit Test", () => {
    it("Module", async () => {
        const Import = await import("cloud-parameter");

        console.log("Module", Utility.inspect(Import, { colors: true }));

        expect(Import).toHaveProperty("Parameter");
    });
} );
