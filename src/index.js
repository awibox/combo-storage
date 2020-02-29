import CookieComponent from './components/Cookie';
import StorageComponent from './components/Storage';

export const Cookie = new CookieComponent(document.cookie);
export const LocalStorage = new StorageComponent(localStorage);
export const SessionStorage = new StorageComponent(sessionStorage);
