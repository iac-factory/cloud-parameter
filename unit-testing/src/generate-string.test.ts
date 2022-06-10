/*
 * BSD 3-Clause License
 *
 * Copyright © 2022, Jacob B. Sanders, IaC-Factory & Affiliates
 *
 * All Rights Reserved
 */

import Utility from "util";

import { Parameter } from "cloud-parameter";

describe( "Unit Test", () => {
    const input = "organization/environment/application/service/identifier";

    it("Generator", async () => {
        const instance = Parameter.initialize(input);

        console.log("Instance", Utility.inspect(instance, { colors: true }));

        expect(instance).toBeTruthy();
    });

    it("Organization", async () => {
        const instance = Parameter.initialize(input);

        console.log("Organization", Utility.inspect(instance, { colors: true }));

        expect(instance.organization).toEqual("organization");
    });

    it("Environment", async () => {
        const instance = Parameter.initialize(input);

        console.log("Environment", Utility.inspect(instance, { colors: true }));

        expect(instance.environment).toEqual("environment");
    });

    it("Application", async () => {
        const instance = Parameter.initialize(input);

        console.log("Application", Utility.inspect(instance, { colors: true }));

        expect(instance.application).toEqual("application");
    });

    it("Service", async () => {
        const instance = Parameter.initialize(input);

        console.log("service", Utility.inspect(instance, { colors: true }));

        expect(instance.service).toEqual("service");
    });

    it("Identifier", async () => {
        const instance = Parameter.initialize(input);

        console.log("Identifier", Utility.inspect(instance, { colors: true }));

        expect(instance.identifier).toEqual("identifier");
    });

    it("Properties", async () => {
        const instance = Parameter.initialize(input);

        console.log("Properties", Utility.inspect(instance, { colors: true }));

        expect(instance.string().split("/").length).toEqual(5);
    });
} );
