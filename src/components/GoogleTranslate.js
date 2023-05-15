import React from "react";

class GoogleTranslate extends React.Component {
    componentDidMount() {
        var googleTranslateScript = document.createElement("script");
        googleTranslateScript.type = "text/javascript";
        googleTranslateScript.async = true;
        googleTranslateScript.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        (
            document.getElementsByTagName("head")[0] ||
            document.getElementsByTagName("body")[0]
        ).appendChild(googleTranslateScript);
        window.googleTranslateElementInit = this.googleTranslateElementInit;
    }

    googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "fr",
                includedLanguages: "en,fr",
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                multilanguagePage: false,
                autoDisplay: false,
                disableAutoTranslation: true,
            },
            "google_translate_element"
        );
    };

    render() {
        return <div id="google_translate_element"></div>;
    }
}

export default GoogleTranslate;
