export default class SubSite {
    public static lang: 'en' | 'zhcn' = 'en'
    public static isValidLang(lang: string | null | undefined): boolean {
        return lang === 'en' || lang === 'zhcn'
    }

    public static engine: 'unity' | 'unreal' = 'unity'
    public static isValidEngine(engine: string | null | undefined): boolean {
        return engine === 'unity' || engine === 'unreal'
    }

    public static changeEngine(engine: string) {
        engine = engine.toLowerCase();
        if (!this.isValidEngine(engine)) {
            throw new Error('invalid engine: ' + engine);
        }
        SubSite.engine = engine as typeof SubSite.engine;
        this.handle();
    }
    public static changeLang(lang: string) {
        if (!this.isValidLang(lang)) {
            throw new Error('invalid engine: ' + lang);
        }
        SubSite.lang = lang as typeof SubSite.lang;
        this.handle();
    }
    private static handle() {
        localStorage.setItem('puerts_doc_last_lang', SubSite.lang);
        localStorage.setItem('puerts_doc_last_engine', SubSite.engine);
        this.siteChangeCallback && this.siteChangeCallback();
    }
    private static siteChangeCallback: () => void;
    public static inited = false;
    public static init(siteChangeCallback: () => void) {
        this.siteChangeCallback = siteChangeCallback;
        SubSite.inited = true;
    }

    public static getPrefix(): string {
        return `/${SubSite.engine}/${SubSite.lang}`;
    }
}