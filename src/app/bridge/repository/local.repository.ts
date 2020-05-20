import {Plugins} from '@capacitor/core';

const { Storage } = Plugins;

export class LocalRepository {

  protected async getUnSecure(key: string): Promise<any> {

    try {

      return await Storage.get({ key });

    } catch (error) {

      return Promise.reject(error);
    }
  }

  protected async setUnSecure(key: string, value: any): Promise<any> {

    try {

      return await Storage.set({
        key,
        value: JSON.stringify(value)
      });

    } catch (error) {

      return Promise.reject(error);
    }
  }

  protected async updateUnSecure(key: string, value: any): Promise<any> {

    return await this.setUnSecure(key, value);
  }

  protected async deleteUnSecure(key?: string): Promise<any> {

    try {

      if (key) {

        return await Storage.remove({
          key
        });
      }

      return await Storage.clear();

    } catch (error) {

      return Promise.reject(error);
    }

  }
}
