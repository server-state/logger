/**
 * Returns the default types, patterns, templates and definitions for the logger.
 * @type {{defaultColorPattern: {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null}, defaultOutputOptions: {warn: {template: string}, trace: {template: string}, debug: {template: string}, error: {template: string}, info: {template: string}, fatal: {template: string}}, defaultLogLevels: {warn: {} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {value: number, colorLevel: string}, trace: {} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {value: number, colorLevel: string}, debug: {} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {value: number, colorLevel: string}, error: {} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {value: number, colorLevel: string}, info: {} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {value: number, colorLevel: string}, fatal: {} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {colorName: string, colorTime: string, colorObject: string, colorMessage: null, colorLevel: null} & {value: number, colorLevel: [string, string]}}, defaultOutputTemplate: string}}
 */
module.exports = {
    defaultColorPattern: {
        colorTime: 'gray',
        colorLevel: null,
        colorName: 'white',
        colorMessage: null,
        colorObject: 'gray'
    },
    defaultLogLevels: {
        trace: Object.assign({}, this.defaultColorPattern, {
            value: 0,
            colorLevel: 'magenta'
        }),
        debug: Object.assign({}, this.defaultColorPattern, {
            value: 1,
            colorLevel: 'cyan'
        }),
        info: Object.assign({}, this.defaultColorPattern, {
            value: 2,
            colorLevel: 'green'
        }),
        warn: Object.assign({}, this.defaultColorPattern, {
            value: 3,
            colorLevel: 'yellow'
        }),
        error: Object.assign({}, this.defaultColorPattern, {
            value: 4,
            colorLevel: 'red'
        }),
        fatal: Object.assign({}, this.defaultColorPattern, {
            value: 5,
            colorLevel: ['red', 'bold']
        })
    },
    defaultOutputTemplate: '%l %n: %m %o',
    defaultOutputOptions: {
        trace: {
            template: '%t %l %n: %m %o'
        },
        debug: {
            template: '%t %l %n: %m %o'
        },
        info: {
            template: this.defaultOutputTemplate,
        },
        warn: {
            template: this.defaultOutputTemplate
        },
        error: {
            template: this.defaultOutputTemplate
        },
        fatal: {
            template: this.defaultOutputTemplate
        }
    }
};
