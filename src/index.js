const definitions = require('./definitions');
const generateOutput = require('./generate-output');

const fallbackLogLevel = definitions.defaultLogLevels.info;
const fallbackExitCode = 1;

// hold all registered loggers and is searchable
const registeredLoggers = {};

/**
 * Generates and new logger which inherits all current settings from the root logger.
 * @param name of the logger
 * @param newLogLevel? alternative level of logging
 * @param logLevels? alternative log level definition
 * @param outputOptions? alternative output definition for different log levels
 * @param exitCode? alternative exit code of fatal call
 * @constructor
 */
function Logger(name, newLogLevel, logLevels, outputOptions, exitCode) {
    if (typeof name !== 'string')
        throw new Error('Given logger name is not of type \'string\'.');
    if (newLogLevel && typeof newLogLevel !== 'number')
        throw new Error('Given log-level is not of type \'number\'.');
    if (exitCode && typeof exitCode !== 'number')
        throw new Error('Given exit-code is not of type \'number\'.');

    this.name = name;
    this.currentLogLevel = newLogLevel || registeredLoggers['root'].currentLogLevel;
    this.logLevels = logLevels || registeredLoggers['root'].logLevels;
    this.outputDefinition = outputOptions || registeredLoggers['root'].outputDefinition;
    this.exitCode = exitCode || registeredLoggers['root'].exitCode;

    // generate logger functions based on given log levels
    for (const logLevel of Object.keys(this.logLevels)) {
        this[logLevel] = (message, object) => {
            if (this.logLevels[logLevel] <= this.currentLogLevel)
                console.log(generateOutput(this.name, logLevel, this.outputDefinition, message, object));
        };
    }

    // register currently created logger
    registeredLoggers[this.name] = this;
}

/**
 * Search for an already registered logger via the logger name.
 * @param name of the logger to search
 * @returns {*} the logger with the given name or <code>null</code>
 */
function getLogger(name) {
    return registeredLoggers[name];
}

// initially create the "root" logger
const root = new Logger('root', fallbackLogLevel, definitions.defaultLogLevels, definitions.defaultOutputOptions, fallbackExitCode);

// Append the root logger for default usage to the main module
// noinspection JSUnusedGlobalSymbols
module.exports = Object.assign({}, root, { Logger, getLogger });
