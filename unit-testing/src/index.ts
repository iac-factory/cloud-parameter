
/*
 * BSD 3-Clause License
 *
 * Copyright © 2022, Jacob B. Sanders, IaC-Factory & Affiliates
 *
 * All Rights Reserved
 */

export * from "..";

/***
 * Initialize
 * ---
 *
 * Update Jest Global Timeout(s)
 *
 * <br/>
 *
 * @example
 * initialize() && void closure();
 */
export const initialize = () => {
    jest.setTimeout( 10 * 1000 );

    /*** Required for conditional call(s) */
    return true;
};

export const closure = () => afterEach( () => {
    const state: import("Unit-Testing").State = expect.getState();
    console.debug( "[Debug] [Unit-Testing] [State]", {
        Test: state.currentTestName,
        Path: state.testPath,
        Data: state.data
    } );
} );

export default closure;
