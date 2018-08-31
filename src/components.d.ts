/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';


import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface AppRoot {

    }

    interface TunDataForm {
      'edit': boolean;
    }

    interface TunNavbar {

    }

    interface TunProfileForm {
      'edit': boolean;
    }

    interface FormsPage {
      'match': MatchResults;
    }

    interface HomePage {

    }

    interface LoginPage {
      'history': RouterHistory;
    }

    interface NotFoundPage {
      'history': RouterHistory;
    }
  }


    interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

    var HTMLAppRootElement: {
      prototype: HTMLAppRootElement;
      new (): HTMLAppRootElement;
    };
    

    interface HTMLTunDataFormElement extends StencilComponents.TunDataForm, HTMLStencilElement {}

    var HTMLTunDataFormElement: {
      prototype: HTMLTunDataFormElement;
      new (): HTMLTunDataFormElement;
    };
    

    interface HTMLTunNavbarElement extends StencilComponents.TunNavbar, HTMLStencilElement {}

    var HTMLTunNavbarElement: {
      prototype: HTMLTunNavbarElement;
      new (): HTMLTunNavbarElement;
    };
    

    interface HTMLTunProfileFormElement extends StencilComponents.TunProfileForm, HTMLStencilElement {}

    var HTMLTunProfileFormElement: {
      prototype: HTMLTunProfileFormElement;
      new (): HTMLTunProfileFormElement;
    };
    

    interface HTMLFormsPageElement extends StencilComponents.FormsPage, HTMLStencilElement {}

    var HTMLFormsPageElement: {
      prototype: HTMLFormsPageElement;
      new (): HTMLFormsPageElement;
    };
    

    interface HTMLHomePageElement extends StencilComponents.HomePage, HTMLStencilElement {}

    var HTMLHomePageElement: {
      prototype: HTMLHomePageElement;
      new (): HTMLHomePageElement;
    };
    

    interface HTMLLoginPageElement extends StencilComponents.LoginPage, HTMLStencilElement {}

    var HTMLLoginPageElement: {
      prototype: HTMLLoginPageElement;
      new (): HTMLLoginPageElement;
    };
    

    interface HTMLNotFoundPageElement extends StencilComponents.NotFoundPage, HTMLStencilElement {}

    var HTMLNotFoundPageElement: {
      prototype: HTMLNotFoundPageElement;
      new (): HTMLNotFoundPageElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'app-root': JSXElements.AppRootAttributes;
    'tun-data-form': JSXElements.TunDataFormAttributes;
    'tun-navbar': JSXElements.TunNavbarAttributes;
    'tun-profile-form': JSXElements.TunProfileFormAttributes;
    'forms-page': JSXElements.FormsPageAttributes;
    'home-page': JSXElements.HomePageAttributes;
    'login-page': JSXElements.LoginPageAttributes;
    'not-found-page': JSXElements.NotFoundPageAttributes;
    }
  }

  namespace JSXElements {

    export interface AppRootAttributes extends HTMLAttributes {

    }

    export interface TunDataFormAttributes extends HTMLAttributes {
      'edit'?: boolean;
      'onResetDataForm'?: (event: CustomEvent) => void;
      'onSubmitDataForm'?: (event: CustomEvent) => void;
    }

    export interface TunNavbarAttributes extends HTMLAttributes {

    }

    export interface TunProfileFormAttributes extends HTMLAttributes {
      'edit'?: boolean;
      'onResetTunProfile'?: (event: CustomEvent) => void;
      'onSubmitTunProfile'?: (event: CustomEvent) => void;
    }

    export interface FormsPageAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }

    export interface HomePageAttributes extends HTMLAttributes {

    }

    export interface LoginPageAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
    }

    export interface NotFoundPageAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
    }
  }

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'tun-data-form': HTMLTunDataFormElement
    'tun-navbar': HTMLTunNavbarElement
    'tun-profile-form': HTMLTunProfileFormElement
    'forms-page': HTMLFormsPageElement
    'home-page': HTMLHomePageElement
    'login-page': HTMLLoginPageElement
    'not-found-page': HTMLNotFoundPageElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'tun-data-form': HTMLTunDataFormElement;
    'tun-navbar': HTMLTunNavbarElement;
    'tun-profile-form': HTMLTunProfileFormElement;
    'forms-page': HTMLFormsPageElement;
    'home-page': HTMLHomePageElement;
    'login-page': HTMLLoginPageElement;
    'not-found-page': HTMLNotFoundPageElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;