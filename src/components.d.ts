/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IonButtonType, IonIconSlot, IonIconVariant } from "./components/hakion-button/hakion-button";
import { Color, Expand, Fill, Mode } from "./interface";
export namespace Components {
    interface AppDetail {
    }
    interface AppRoot {
        "_getDefaultEnabled": () => Promise<string>;
        "dark": 'on' | 'off';
        "enabled": boolean;
        "getEnabled": () => Promise<string | boolean>;
        "inputState": INPUT_STATE;
        "legend": string;
        "light": 'on' | 'off';
        "setDarkModeLegend": (str: string) => Promise<void>;
    }
    interface DarkMode {
    }
    interface ExampleScene {
    }
    interface HakionButton {
        /**
          * The color to use from your application's color palette. Default options are: "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark".
         */
        "color": Color;
        /**
          * If true, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download": string | undefined;
        /**
          * This attribute lets you specify how wide the button should be. By default, buttons are inline blocks, but setting this attribute will change the button to a full-width block element.
         */
        "expand": Expand;
        /**
          * Set to "clear" for a transparent button, to "outline" for a transparent button with a border, or to "solid". The default style is "solid" except inside of
         */
        "fill": Fill;
        /**
          * If this property is set, an anchor tag will be rendered.
         */
        "href": string | undefined;
        /**
          * If this property is set, an anchor tag will be rendered. If set to "icon-only," all other content will be ignored.
         */
        "iconName": string | undefined;
        /**
          * Use custom icon by specifying a path. If set, any value set on `ionIcon` will be ignored.
         */
        "iconSize": 'small' | 'large' | undefined;
        /**
          * If this property is set, an anchor tag will be rendered. If set to "icon-only," all other content will be ignored.
         */
        "iconSlot": IonIconSlot;
        /**
          * Use custom icon by specifying a path. If set, any value set on `ionIcon` will be ignored.
         */
        "iconSrc": string | undefined;
        /**
          * If this property is set, an anchor tag will be rendered. If set to "icon-only," all other content will be ignored.
         */
        "iconVariant": IonIconVariant;
        /**
          * The mode determines which platform styles to use.
         */
        "mode": Mode;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of link types.
         */
        "rel": string | undefined;
        "setIconName": (iconName: string) => Promise<void>;
        /**
          * The button shape.
         */
        "shape": string | undefined;
        /**
          * If true, activates a button with a heavier font weight.
         */
        "strong": boolean;
        "text": string | undefined;
        /**
          * The color to use for the text if the attribute `text` is set. Will not affect anything between <slot>
         */
        "textColor": Color;
        /**
          * The type of the button.
         */
        "type": IonButtonType | undefined;
    }
    interface HakionDarkModeToggle {
        "appearance": 'toggle' | 'switch';
        "dark": 'on' | 'off';
        "enabled": boolean;
        "legend": string;
        "light": 'on' | 'off';
        "setAppearance": (str?: 'toggle' | 'switch') => Promise<void>;
        "setDarkModeLegend": (str: string) => Promise<void>;
    }
    interface HakionSearchInput {
        "debounce"?: number;
        "handleInput"?: (ev: any) => void;
        "placeholder"?: string;
        "searchTerm"?: string;
    }
    interface MyAlert {
        /**
          * The first name
         */
        "text": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface ThreeElementExample {
    }
}
declare global {
    interface HTMLAppDetailElement extends Components.AppDetail, HTMLStencilElement {
    }
    var HTMLAppDetailElement: {
        prototype: HTMLAppDetailElement;
        new (): HTMLAppDetailElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLDarkModeElement extends Components.DarkMode, HTMLStencilElement {
    }
    var HTMLDarkModeElement: {
        prototype: HTMLDarkModeElement;
        new (): HTMLDarkModeElement;
    };
    interface HTMLExampleSceneElement extends Components.ExampleScene, HTMLStencilElement {
    }
    var HTMLExampleSceneElement: {
        prototype: HTMLExampleSceneElement;
        new (): HTMLExampleSceneElement;
    };
    interface HTMLHakionButtonElement extends Components.HakionButton, HTMLStencilElement {
    }
    var HTMLHakionButtonElement: {
        prototype: HTMLHakionButtonElement;
        new (): HTMLHakionButtonElement;
    };
    interface HTMLHakionDarkModeToggleElement extends Components.HakionDarkModeToggle, HTMLStencilElement {
    }
    var HTMLHakionDarkModeToggleElement: {
        prototype: HTMLHakionDarkModeToggleElement;
        new (): HTMLHakionDarkModeToggleElement;
    };
    interface HTMLHakionSearchInputElement extends Components.HakionSearchInput, HTMLStencilElement {
    }
    var HTMLHakionSearchInputElement: {
        prototype: HTMLHakionSearchInputElement;
        new (): HTMLHakionSearchInputElement;
    };
    interface HTMLMyAlertElement extends Components.MyAlert, HTMLStencilElement {
    }
    var HTMLMyAlertElement: {
        prototype: HTMLMyAlertElement;
        new (): HTMLMyAlertElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLThreeElementExampleElement extends Components.ThreeElementExample, HTMLStencilElement {
    }
    var HTMLThreeElementExampleElement: {
        prototype: HTMLThreeElementExampleElement;
        new (): HTMLThreeElementExampleElement;
    };
    interface HTMLElementTagNameMap {
        "app-detail": HTMLAppDetailElement;
        "app-root": HTMLAppRootElement;
        "dark-mode": HTMLDarkModeElement;
        "example-scene": HTMLExampleSceneElement;
        "hakion-button": HTMLHakionButtonElement;
        "hakion-dark-mode-toggle": HTMLHakionDarkModeToggleElement;
        "hakion-search-input": HTMLHakionSearchInputElement;
        "my-alert": HTMLMyAlertElement;
        "my-component": HTMLMyComponentElement;
        "three-element-example": HTMLThreeElementExampleElement;
    }
}
declare namespace LocalJSX {
    interface AppDetail {
    }
    interface AppRoot {
        "dark"?: 'on' | 'off';
        "enabled"?: boolean;
        "inputState"?: INPUT_STATE;
        "legend"?: string;
        "light"?: 'on' | 'off';
    }
    interface DarkMode {
    }
    interface ExampleScene {
    }
    interface HakionButton {
        /**
          * The color to use from your application's color palette. Default options are: "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark".
         */
        "color"?: Color;
        /**
          * If true, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download"?: string | undefined;
        /**
          * This attribute lets you specify how wide the button should be. By default, buttons are inline blocks, but setting this attribute will change the button to a full-width block element.
         */
        "expand"?: Expand;
        /**
          * Set to "clear" for a transparent button, to "outline" for a transparent button with a border, or to "solid". The default style is "solid" except inside of
         */
        "fill"?: Fill;
        /**
          * If this property is set, an anchor tag will be rendered.
         */
        "href"?: string | undefined;
        /**
          * If this property is set, an anchor tag will be rendered. If set to "icon-only," all other content will be ignored.
         */
        "iconName"?: string | undefined;
        /**
          * Use custom icon by specifying a path. If set, any value set on `ionIcon` will be ignored.
         */
        "iconSize"?: 'small' | 'large' | undefined;
        /**
          * If this property is set, an anchor tag will be rendered. If set to "icon-only," all other content will be ignored.
         */
        "iconSlot"?: IonIconSlot;
        /**
          * Use custom icon by specifying a path. If set, any value set on `ionIcon` will be ignored.
         */
        "iconSrc"?: string | undefined;
        /**
          * If this property is set, an anchor tag will be rendered. If set to "icon-only," all other content will be ignored.
         */
        "iconVariant"?: IonIconVariant;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: Mode;
        "onAcknowledge"?: (event: CustomEvent<AcknowledgeEvent>) => void;
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of link types.
         */
        "rel"?: string | undefined;
        /**
          * The button shape.
         */
        "shape"?: string | undefined;
        /**
          * If true, activates a button with a heavier font weight.
         */
        "strong"?: boolean;
        "text"?: string | undefined;
        /**
          * The color to use for the text if the attribute `text` is set. Will not affect anything between <slot>
         */
        "textColor"?: Color;
        /**
          * The type of the button.
         */
        "type"?: IonButtonType | undefined;
    }
    interface HakionDarkModeToggle {
        "appearance"?: 'toggle' | 'switch';
        "dark"?: 'on' | 'off';
        "enabled"?: boolean;
        "legend"?: string;
        "light"?: 'on' | 'off';
    }
    interface HakionSearchInput {
        "debounce"?: number;
        "handleInput"?: (ev: any) => void;
        "placeholder"?: string;
        "searchTerm"?: string;
    }
    interface MyAlert {
        /**
          * The first name
         */
        "text"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface ThreeElementExample {
    }
    interface IntrinsicElements {
        "app-detail": AppDetail;
        "app-root": AppRoot;
        "dark-mode": DarkMode;
        "example-scene": ExampleScene;
        "hakion-button": HakionButton;
        "hakion-dark-mode-toggle": HakionDarkModeToggle;
        "hakion-search-input": HakionSearchInput;
        "my-alert": MyAlert;
        "my-component": MyComponent;
        "three-element-example": ThreeElementExample;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-detail": LocalJSX.AppDetail & JSXBase.HTMLAttributes<HTMLAppDetailElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "dark-mode": LocalJSX.DarkMode & JSXBase.HTMLAttributes<HTMLDarkModeElement>;
            "example-scene": LocalJSX.ExampleScene & JSXBase.HTMLAttributes<HTMLExampleSceneElement>;
            "hakion-button": LocalJSX.HakionButton & JSXBase.HTMLAttributes<HTMLHakionButtonElement>;
            "hakion-dark-mode-toggle": LocalJSX.HakionDarkModeToggle & JSXBase.HTMLAttributes<HTMLHakionDarkModeToggleElement>;
            "hakion-search-input": LocalJSX.HakionSearchInput & JSXBase.HTMLAttributes<HTMLHakionSearchInputElement>;
            "my-alert": LocalJSX.MyAlert & JSXBase.HTMLAttributes<HTMLMyAlertElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "three-element-example": LocalJSX.ThreeElementExample & JSXBase.HTMLAttributes<HTMLThreeElementExampleElement>;
        }
    }
}
