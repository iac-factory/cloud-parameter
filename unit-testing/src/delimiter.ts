/*
 * BSD 3-Clause License
 *
 * Copyright © 2022, Jacob B. Sanders, IaC-Factory & Affiliates
 *
 * All Rights Reserved
 */

import Utility from "util";

describe( "Unit Test (Delimiter)", () => {
    const input = "organization/environment/application/service/identifier";

    it("Dashes", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Instance", Utility.inspect(instance.delimiter("-"), { colors: true }));

        expect(instance).toBeTruthy();
    });
} );
