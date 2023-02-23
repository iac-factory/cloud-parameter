# `cloud-parameter` #

[![Socket Badge](https://socket.dev/api/badge/npm/package/cloud-parameter)](https://socket.dev/npm/package/cloud-parameter)


Parameters often used during configuration can be a difficult concept to standardize.

`cloud-parameter` aims to strictly define a naming and constructor convention to ease efforts associated
with configuration, while allowing for an easy inheritance pattern to further extend from.

## Usage ##

`npm install cloud-parameter`

### Common-JS ###

```node
const Main = async () => {
   const {Parameter} = await import("cloud-parameter");

const instance = new Parameter({
   organization: "IBM",
   environment: "Development",
   application: "Storage-Store",
   service: "Authorization-Service",
   identifier: "Credentials"
});

/***
 * @example
 * // returns:
 * Parameter {
 *   organization: 'IBM',
 *   environment: 'Development',
 *   application: 'Storage-Store',
 *   service: 'Authorization-Service',
 *   identifier: 'Credentials'
 * };
 *
 * console.log(instance);
 */
console.log(instance);

/***
 * @example
 * // returns IBM/Development/Storage-Store/Authorization-Service/Credentials
 * console.log(instance.string());
 */
console.log(instance.string());

/***
 * @example
 * // returns IBM/Development/Storage-Store/Authorization-Service/Credentials
 * console.log(instance.string("Directory"));
 */
console.log(instance.string("Directory"));

/***
 * @example
 * // returns /IBM/Development/Storage-Store/Authorization-Service/Credentials
 * console.log(instance.string("Directory", true));
 */
console.log(instance.string("Directory", true));

/***
 * @example
 * // returns ibm-development-storage-store-authorization-service-credentials
 * console.log(instance.string("Train-Case"));
 */
console.log(instance.string("Train-Case"));

/***
 * @example
 * // returns Ibm-Development-Storage-Store-Authorization-Service-Credentials
 * console.log(instance.string("Screaming-Train-Case"));
 */
console.log(instance.string("Screaming-Train-Case"));
}

(async () => Main())();
```

### Modules ###

```node
import { Parameter } from "cloud-parameter";

const instance = new Parameter({
   organization: "IBM",
   environment: "Development",
   application: "Storage-Store",
   service: "Authorization-Service",
   identifier: "Credentials"
});

/***
 * @example
 * // returns:
 * Parameter {
 *   organization: 'IBM',
 *   environment: 'Development',
 *   application: 'Storage-Store',
 *   service: 'Authorization-Service',
 *   identifier: 'Credentials'
 * };
 *
 * console.log(instance);
 */
console.log(instance);

/***
 * @example
 * // returns IBM/Development/Storage-Store/Authorization-Service/Credentials
 * console.log(instance.string());
 */
console.log(instance.string());

/***
 * @example
 * // returns IBM/Development/Storage-Store/Authorization-Service/Credentials
 * console.log(instance.string("Directory"));
 */
console.log(instance.string("Directory"));

/***
 * @example
 * // returns /IBM/Development/Storage-Store/Authorization-Service/Credentials
 * console.log(instance.string("Directory", true));
 */
console.log(instance.string("Directory", true));

/***
 * @example
 * // returns ibm-development-storage-store-authorization-service-credentials
 * console.log(instance.string("Train-Case"));
 */
console.log(instance.string("Train-Case"));

/***
 * @example
 * // returns Ibm-Development-Storage-Store-Authorization-Service-Credentials
 * console.log(instance.string("Screaming-Train-Case"));
 */
console.log(instance.string("Screaming-Train-Case"));
```

| Package Script | NPM Command Invocation | Description                                        |
|----------------|------------------------|----------------------------------------------------|
| **test**       | `npm test`             | Unit-Test the Distribution                         |
| **update**     | `npm update`           | Compile + Update Unit-Test Snapshot(s)             |
| **start**      | `npm run start`        | Development & Unit-Test Upon File-System Change(s) |
| **build**      | `npm run build`        | Compile Distribution Upon File-System Change(s)    |
| **compile**    | `npm run compile`      | Compile Distribution                               |
| **upload**     | `npm run upload`       | Deploy Package to NPM Registry                     |

### Development ###

**Recommended** - Testing Mode

Locally developing with `jest` file-watchers helps ensure non-breaking change are introduced.

1. Install Dependencies
    ```bash
    npm install --quiet
    ```
2. Build `*.ts` File(s), Enabling TSC File-Watching
    ```bash
    npm run build
    ```
3. Open an Additional TTY and Run
    ```bash
    npm run start
    ```

Lastly, continue with development.

For alternative build & unit-testing commands, please refer to the [commands list](#usage).

## Documentation ##

Please see [documentation](./documentation) for additional information and reference(s).
