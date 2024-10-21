import {config} from 'https://deno.land/x/dotenv@v3.2.2/mod.ts';

const {MONGODB_STRING} = config();

export {MONGODB_STRING}