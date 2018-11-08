import I18n from 'react-native-i18n';
import en from '../en/en.js';
import zh from '../zh/zh.js';

I18n.fallbacks = true;

I18n.translations = {
    zh,
    en
}

export default I18n;