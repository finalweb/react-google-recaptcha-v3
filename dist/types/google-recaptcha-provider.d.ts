import * as React from 'react';
interface IGoogleReCaptchaProviderProps {
    reCaptchaKey?: string;
    language?: string;
    useRecaptchaNet?: boolean;
    useEnterprise?: boolean;
    scriptProps?: {
        nonce?: string;
        defer?: boolean;
        async?: boolean;
        appendTo?: 'head' | 'body';
    };
}
export interface IGoogleReCaptchaConsumerProps {
    executeRecaptcha: (action?: string) => Promise<string>;
}
declare const GoogleReCaptchaContext: React.Context<IGoogleReCaptchaConsumerProps>;
declare const GoogleReCaptchaConsumer: React.Consumer<IGoogleReCaptchaConsumerProps>;
export { GoogleReCaptchaConsumer, GoogleReCaptchaContext };
export declare class GoogleReCaptchaProvider extends React.Component<IGoogleReCaptchaProviderProps> {
    scriptId: string;
    resolver: any;
    rejecter: any;
    loadTimeout: any;
    grecaptcha: Promise<any>;
    get googleRecaptchaSrc(): string;
    get googleReCaptchaContextValue(): {
        executeRecaptcha: (action?: string | undefined) => Promise<any>;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: IGoogleReCaptchaProviderProps): void;
    componentWillUnmount(): void;
    executeRecaptcha: (action?: string | undefined) => Promise<any>;
    handleOnLoad: () => void;
    injectGoogleReCaptchaScript: () => void;
    generateGoogleReCaptchaScript: () => HTMLScriptElement;
    render(): JSX.Element;
}
//# sourceMappingURL=google-recaptcha-provider.d.ts.map