import {Plugins} from '@capacitor/core';
import {BiometricAuthResponse, IBiometricAuth} from '../contracts/biometric-auth.interface';

const {BiometricAuth} = Plugins;

interface BiometricAuthOptions {
  reason?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  cancel?: string;
}

export class HardwareBiometricAuth implements IBiometricAuth {

  private options: BiometricAuthOptions = {
    reason: 'Let authenticate you ...'
  };

  public async init(): Promise<BiometricAuthResponse> {

    try {

      const initializationResult: BiometricAuthResponse = await BiometricAuth.isAvailable();

      return Promise.resolve(initializationResult);

    } catch (error) {

      return Promise.reject(error);
    }
  }

  public async scan(
    reason?: string,
    title?: string,
    subtitle?: string,
    description?: string,
    cancel?: string): Promise<BiometricAuthResponse> {

    const scanConfigurations: BiometricAuthOptions = this.overrideBiometricAuthOptions(
      reason,
      title,
      subtitle,
      description,
      cancel
    );

    try {

      const scanResult: BiometricAuthResponse = await BiometricAuth.verify(scanConfigurations);

      return Promise.resolve(scanResult);

    } catch (error) {

      return Promise.reject(error);
    }
  }

  private overrideBiometricAuthOptions(
    reason?: string,
    title?: string,
    subtitle?: string,
    description?: string,
    cancel?: string
  ): BiometricAuthOptions {
    const scanConfigurations: BiometricAuthOptions = {...this.options};

    if (!!reason) {
      scanConfigurations.reason = reason;
    }

    if (!!title) {
      scanConfigurations.title = title;
    }

    if (!!subtitle) {
      scanConfigurations.subtitle = subtitle;
    }

    if (!!description) {
      scanConfigurations.description = description;
    }

    if (!!cancel) {
      scanConfigurations.cancel = cancel;
    }

    return scanConfigurations;
  }

}
