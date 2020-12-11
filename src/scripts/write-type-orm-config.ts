import { typeormConfig } from '../config/typeorm.config';
import fs = require('fs');
fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(typeormConfig.getTypeOrmConfig(), null, 2),
);
