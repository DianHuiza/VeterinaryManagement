import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';
import { v4 as uuidv4 } from 'uuid';
import Handlebars from 'handlebars';

@Injectable()
export class TemplatesService {
  constructor() {}
  generateMedicalRecordFile(values) {
    const templateFile = fs.readFileSync(
      'src/modules/templates/template_files/medicalRecord.hbs',
      'utf8',
    );
    const template = Handlebars.compile(templateFile);
    const fileContent = template(values);

    const filename = `${values.name}-${uuidv4()}.md`;
    return {
      fieldname: 'medicalRecord',
      originalname: filename,
      encoding: '7bit',
      mimetype: 'text/markdown',
      buffer: Buffer.from(fileContent, 'utf8'),
      stream: undefined,
      destination: '',
      filename: filename,
      path: '',
      size: 0,
    };
  }
}
