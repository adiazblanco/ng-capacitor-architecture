
export interface BiometricAuthResponse {
  has?: boolean; // true if has biometric auth enabled, false otherwise
  verified?: boolean; // true if biometric auth was succes or false otherwise, 
  status: {
    error: number;
    description: string;
  }; // an object with errors
}

export interface IBiometricAuth {

  init(): Promise<BiometricAuthResponse>;

  scan(
    reason?: string,
    title?: string,
    subtitle?: string,
    description?: string,
    cancel?: string): Promise<BiometricAuthResponse>;

}
