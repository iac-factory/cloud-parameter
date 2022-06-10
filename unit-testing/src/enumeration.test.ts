/*
 * BSD 3-Clause License
 *
 * Copyright © 2022, Jacob B. Sanders, IaC-Factory & Affiliates
 *
 * All Rights Reserved
 */

import { Properties } from "cloud-parameter";

describe( "String Unit Test", () => {
    const $ = Properties;

    it( "Default", async () => {
        expect( $.Base ).toEqual(4)
    } );

    it( "Identifier", async () => {
        expect( $.Extended ).toEqual(5)
    } );
} );
