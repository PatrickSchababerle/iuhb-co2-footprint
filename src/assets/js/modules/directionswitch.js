import directions from "./../../locales/directions.json";
import { getLocale } from "./languageswitch";

export function setDirection() {
    const locale = getLocale();
    document.body.style.direction = directions[locale];
}