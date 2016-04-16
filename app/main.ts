// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {ParallaxPage } from "./app.component";
// the compliler complains when trying to import nativescript-parallax directly, below commented out g.
// import {ParallaxViewCommon as ParallaxView, Header, Content, Anchored} from 'nativescript-parallax/nativescript-parallax.common';
import {ParallaxView, Header, Content, Anchored} from 'nativescript-parallax';
import { registerElement } from 'nativescript-angular/element-registry';

registerElement('Content', () => Content);
registerElement('Header', () => Header);
registerElement('Anchored', () => Anchored);
registerElement('Parallax', () => ParallaxView);


nativeScriptBootstrap(ParallaxPage);


