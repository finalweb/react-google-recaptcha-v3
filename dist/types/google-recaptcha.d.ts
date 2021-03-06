import { FC } from 'react';
export interface IGoogleRecaptchaProps {
    onVerify: (token: string) => void | Promise<void>;
    action?: string;
    runOnlyOnMount?: boolean;
}
export declare const GoogleReCaptcha: FC<IGoogleRecaptchaProps>;
//# sourceMappingURL=google-recaptcha.d.ts.map