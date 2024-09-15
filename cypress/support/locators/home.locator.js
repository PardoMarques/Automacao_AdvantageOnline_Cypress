export class HomeLocator {

    constructor() {

        this.linkLogo = `[class="logo"]`;
        this.iconSearch = `#menuSearch`;
        this.iconLogin = `#menuUser`;
        this.iconCart = `#menuCart`;
        this.iconHelp = `#menuHelp`;
        this.inptSearch = `#autoComplete`;
        this.linkUnique = `#output > div > div.top6Products > a:nth-child(3)`;
        
        this.btnSpeakers = "#speakersTxt";
        this.btnTablets = "#tabletsTxt";
        this.btnLaptops = "#laptopsTxt";
        this.btnMice = "#miceTxt";
        this.btnHeadphones = "#headphonesTxt";
        this.lblCategoryTitle = "h3.categoryTitle";

    }

}

export const elhome = new HomeLocator();