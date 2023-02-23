/*
 * BSD 3-Clause License
 *
 * Copyright © 2022, Jacob B. Sanders, IaC-Factory & Affiliates
 *
 * All Rights Reserved
 */

import Utility from "util";

describe( "Unit Test (Extended)", () => {
    const input = "organization/environment/application/service/identifier";

    it("Generator", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);
        
        console.log("Instance", Utility.inspect(instance, { colors: true }));

        expect(instance).toBeTruthy();
    });

    it("Organization", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Organization", Utility.inspect(instance, { colors: true }));

        expect(instance.organization).toEqual("organization");
    });

    it("Environment", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Environment", Utility.inspect(instance, { colors: true }));

        expect(instance.environment).toEqual("environment");
    });

    it("Application", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Application", Utility.inspect(instance, { colors: true }));

        expect(instance.application).toEqual("application");
    });

    it("Service", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("service", Utility.inspect(instance, { colors: true }));

        expect(instance.service).toEqual("service");
    });

    it("Identifier", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Identifier", Utility.inspect(instance, { colors: true }));

        expect(instance.identifier).toEqual("identifier");
    });

    it("Properties", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Properties", Utility.inspect(instance, { colors: true }));

        expect(instance.string().split("/").length).toEqual(5);
    });
} );

describe( "Unit Test (Base)", () => {
    const input = "organization/environment/service/identifier";

    it("Generator", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Instance", Utility.inspect(instance, { colors: true }));

        expect(instance).toBeTruthy();
    });

    it("Organization", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Organization", Utility.inspect(instance, { colors: true }));

        expect(instance.organization).toEqual("organization");
    });

    it("Environment", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Environment", Utility.inspect(instance, { colors: true }));

        expect(instance.environment).toEqual("environment");
    });

    it("Service", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("service", Utility.inspect(instance, { colors: true }));

        expect(instance.service).toEqual("service");
    });

    it("Identifier", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Application", Utility.inspect(instance, { colors: true }));

        expect(instance.identifier).toEqual("identifier");
    });

    it("Properties", async () => {
        const Import = await import("cloud-parameter");

        const instance = Import.Parameter.initialize(input, true);

        console.log("Properties", Utility.inspect(instance, { colors: true }));

        expect(instance.string().split("/").length).toEqual(4);
    });
} );
