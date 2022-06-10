/*
 * BSD 3-Clause License
 *
 * Copyright © 2022, Jacob B. Sanders, IaC-Factory & Affiliates
 *
 * All Rights Reserved
 */

/***
 * Takes any given prefix, a resource name, and generates a machine-readable, normalized string
 *
 * @param {string} input
 *
 * @returns {string}
 *
 */

export function Normalize(input: string) {
    return input.split( " " ).map( (character: string) => {
        return character.toString()[0]!.toUpperCase() + character.toString().slice( 1 );
    } ).join( "-" ).split( "_" ).map( (character) => {
        return character.toString()[0]!.toUpperCase() + character.toString().slice( 1 );
    } ).join( "-" ).split( "-" ).map( (character) => {
        return character.toString()[0]!.toUpperCase() + character.toString().slice( 1 );
    } ).join( "-" );
}

/***
 * String-Type-Casing
 * ---
 *
 * Similar to a Type-Cast, Cast the String into a Train-Case String.
 *
 * @param input {string}
 * @param options {string}
 *
 * @constructor
 *
 */

export const Train = (input: string, options: { condense: boolean } | null | undefined = { condense: true }) => {
    return input.trim()
        .replace( /_/g, "-" )
        .replace( /([a-z])([A-Z])/g, "$1-$2" )
        .replace( /\W/g, ($) => /[À-ž]/.test( $ ) ? $ : "-" )
        .replace( /^-+|-+$/g, "" )
        .replace( /-{2,}/g, ($) => options && options.condense ? "-" : $ )
        .toLowerCase();
};

export default Train;
