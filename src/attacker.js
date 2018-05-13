const { isInteger } = require('./utils');
const Command = require('./command');

const convertToDuration = (value) => typeof value === 'number' ? `${value}ms` : value;

class Attacker extends Command {
    constructor(priorCommands, priorFlags, globalFlags) {
        super('attack', priorCommands, priorFlags, globalFlags);
    }
    body(file) {
        if (typeof file !== 'string') {
            throw Error('file flag is not a string');
        }
        this.addFlag('body', file);
    }
    cert(value) {
        if (typeof value !== 'string') {
            throw Error('cert flag is not a string');
        }
        this.addFlag('cert', value);
    }
    duration(value) {
        const convertedVal = convertToDuration(value);
        if (typeof convertedVal !== 'string') {
            throw Error('duration flag is not a string or number');
        }
        this.addFlag('duration', convertedVal);
    }
    header(name, value) {
        if (!value) {
            throw Error('header must have both name and value')
        }
        this.addFlag('header', `${name}=${value}`, false);
    }
    http2(value = true) {
        if (typeof value !== 'boolean') {
            throw Error('http2 must be a boolean');
        }
        this.addFlag('http2', value ? null : 'false');
    }
    insecure(value = true) {
        if (typeof value !== 'boolean') {
            throw Error('insecure must be a boolean');
        }
        if (!value) {
            this.removeFlag('insecure');
            return;
        }
        this.addFlag('insecure', null);
    }
    keepalive(value = true) {
        if (typeof value !== 'boolean') {
            throw Error('keepalive must be a boolean');
        }
        this.addFlag('keepalive', value ? null : 'false');
    }
    key(value) {
        if (typeof value !== 'string') {
            throw Error('key must be a string');
        }
        this.addFlag('key', value);
    }
    laddr(value) {
        if (typeof value !== 'string') {
            throw Error('laddr must be a string');
        }
        this.addFlag('laddr', value);
    }
    lazy(value = true) {
        if (typeof value !== 'boolean') {
            throw Error('lazy must be a boolean');
        }
        if (!value) {
            this.removeFlag('lazy');
            return;
        }
        this.addFlag('lazy', null);
    }
    output(value) {
        if (typeof value !== 'string') {
            throw Error('output must be a string');
        }
        this.addFlag('output', value);
    }
    rate(value) {
        if (isInteger(value) && value >= 0) {
            throw Error('rate must be a positive integer');
        }
        this.addFlag('rate', value);
    }
    redirects(value) {
        if (isInteger(value)) {
            throw Error('redirects must be a number');
        }
        this.addFlag('redirects', value);
    }
    rootCerts(value) {
        if (typeof value !== 'string') {
            throw Error('root-certs must be a string');
        }
        this.addFlag('root-certs', value);
    }
    targets(file) {
        if (typeof file !== 'string') {
            throw Error('targets must be a string');
        }
        this.addFlag('targets', file);
    }
    timeout(value) {
        const convertedVal = convertToDuration(value);
        if (typeof convertedVal !== 'string') {
            throw Error('duration flag is not a string or number');
        }
        this.addFlag('timeout', convertedVal);
    }
    workers(value) {
        if (isInteger(value) && value >= 0) {
            throw Error('workers must be a positive integer');
        }
        this.addFlag('workers', value);
    }
}

module.exports = Attacker;