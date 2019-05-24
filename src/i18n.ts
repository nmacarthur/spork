import { Localization } from "expo";
import i18n from "i18n-js";
import en from "./locals/en.json";

i18n.fallbacks = true;
i18n.translations = {
  en
};
i18n.locale = Localization.locale;

export default i18n;
