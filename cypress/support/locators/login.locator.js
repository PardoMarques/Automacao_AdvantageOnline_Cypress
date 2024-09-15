import UserRequest from '../../requests/user.request';
import { HomeLocator } from './home.locator';

class LoginLocator extends HomeLocator {

    constructor() {
        super();
        
        this.inptUser = `[name="username"]`;
        this.inptPassword = `[name="password"]`;
        this.btnLogin = `#sign_in_btn`;
        this.lblUserMenu = `nav a#menuUserLink span`;

    }

}

export const ellogin = new LoginLocator();