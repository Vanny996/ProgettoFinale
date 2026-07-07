import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const userStatus = {
    ACTIVE: 'active',
    PENDING: 'pending',
    DELETED: 'deleted',
    ARCHIVED: 'archived'
};

export const privateKey = readFileSync(join(__dirname, '../Jwt.key'), 'utf8');
export const publicKey = readFileSync(join(__dirname, '../Jwt.key.pub'), 'utf8');