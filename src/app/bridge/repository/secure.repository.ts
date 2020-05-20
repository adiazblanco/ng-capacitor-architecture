import {Plugins} from '@capacitor/core';
import 'capacitor-secure-storage-plugin';
import {IRepository} from '../contracts/repository.interface';
import {LocalRepository} from './local.repository';

const { SecureStoragePlugin } = Plugins;

export class SecureRepository extends LocalRepository implements IRepository {

  async get(key: string): Promise<any> {

    try {

      return await SecureStoragePlugin.get({ key });

    } catch (error) {

      return this.getUnSecure(key);
    }
  }

  async set(key: string, value: any): Promise<any> {

    try {

      return await SecureStoragePlugin.set({
        key,
        value: JSON.stringify(value)
      });

    } catch (error) {

      return this.setUnSecure(key, value);
    }
  }

  async update(key: string, value: any): Promise<any> {

    return await this.set(key, value);
  }

  async delete(key?: string): Promise<any> {

    try {

      if (key) {

        return await SecureStoragePlugin.remove({
          key
        });
      }

      return await SecureStoragePlugin.clear();

    } catch (error) {

      return this.deleteUnSecure(key);
    }

  }
}
