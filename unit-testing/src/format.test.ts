/*
 * BSD 3-Clause License
 *
 * Copyright © 2022, Jacob B. Sanders, IaC-Factory & Affiliates
 *
 * All Rights Reserved
 */

import Utility from "util";

import { Parameter } from "cloud-parameter";

describe( "String Unit Test", () => {
    const parameter = new Parameter( {
        organization: "organization",
        environment: "environment",
        application: "application",
        service: "service",
        identifier: "identifier"
    } );

    it( "Truth", async () => {
        const $ = parameter.format();
        console.log( "Format" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Organization", async () => {
        const $ = parameter.format();
        console.log( "Format ($.organization)" + ":", Utility.inspect( $.organization, { colors: true } ) );
        expect( $.organization ).toEqual("organization");
    } );

    it( "Environment", async () => {
        const $ = parameter.format();
        console.log( "Format ($.environment)" + ":", Utility.inspect( $.environment, { colors: true } ) );
        expect( $.environment ).toEqual("environment");
    } );

    it( "Application", async () => {
        const $ = parameter.format();
        console.log( "Format ($.application)" + ":", Utility.inspect( $.application, { colors: true } ) );
        expect( $.application ).toEqual("application");
    } );

    it( "Service", async () => {
        const $ = parameter.format();
        console.log( "Format ($.service)" + ":", Utility.inspect( $.service, { colors: true } ) );
        expect( $.service ).toEqual("service");
    } );

    it( "Identifier", async () => {
        const $ = parameter.format();
        console.log( "Format ($.identifier)" + ":", Utility.inspect( $.identifier, { colors: true } ) );
        expect( $.identifier ).toEqual("identifier");
    } );
} );
