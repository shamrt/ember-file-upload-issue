import Service from '@ember/service';
import File from 'ember-file-upload/file';

export default class TestService extends Service {
  resolveUpload(queue, queueItem, url) {
    const fileBlob = queueItem.file;
    const params = {
      description: queueItem.description,
      locale_code: queueItem.localeCode,
      name: queueItem.name,
    };
    const file = File.fromBlob(fileBlob);
    return { file, url, params };
  }
}
