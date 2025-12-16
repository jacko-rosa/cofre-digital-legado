class Log {
    static startInfo(className: string, methodName: string, obj?: any): void {
        console.log(`[START][${className}][${methodName}][REQUEST: ${Log.handleObj(obj)} ]`);
    }

    static endInfo(className: string, methodName: string, obj?: any): void {
        console.log(`[END][${className}][${methodName}][RESPONSE: ${Log.handleObj(obj)} ]`);
    }

    static error(className: string, methodName: string, msg: string, error?: any): void {

        console.log(`[ERROR][${className}][${methodName}][MESSAGE: ${msg}], [ERROR: ${Log.handleObj(error)}]`);
    }

    private static handleObj(obj: any): string {
        return obj ? JSON.stringify(obj) : '{}';
    }

    //todo: sanitaze cpf/cnpj/password from logs
}

export default Log;