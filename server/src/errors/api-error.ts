

export type Code = keyof typeof ErrorCodes;
const ErrorCodes = {
    "ERR-001": "{#key} is required",
    "ERR-002": "Invalid {#key} format",
    "ERR-003": "Unauthorized access",
} as const;

export const getErrorDescription = (code: Code, key?: string) => {
    const errorDescription = ErrorCodes[code]
    const description = `${code}: ${errorDescription}`
    if (!key) return description;
    return description.replace("{#key}", key);

}
export class ErrorCode extends Error {
    code: Code;
    description: string;

    constructor(code: Code, key?: string) {

        const description = getErrorDescription(code, key);


        super(description);

        this.code = code;
        this.description = description;


        Object.setPrototypeOf(this, new.target.prototype);

        // Set the error name
        this.name = this.constructor.name;
    }
}