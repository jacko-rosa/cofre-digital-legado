class ConversionnException extends Error {
    constructor(fromType: string, toType: string) {
        super(`Error to try mapping fron ${fromType} to ${toType}.`);
        this.name = "ConversionnException";
    }
}

export { ConversionnException };