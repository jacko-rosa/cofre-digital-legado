class DataBaseConnectionException extends Error {
    constructor() {
        super("Erro ao conectar com banco de dados.");
        this.name = "DataBaseConnectionException";
    }
}

export { DataBaseConnectionException };