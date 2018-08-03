import { hot } from "react-hot-loader";
import React, { Component } from "react";
import { Provider } from "react-contextual";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./resources/services/i18NextService.js";
import store from "./resources/store/store.js";
import Layout from './Layout/Layout.jsx';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <BrowserRouter>
                        <Layout/>
                    </BrowserRouter>
                </I18nextProvider>
            </Provider>
        );
    }
}

export default App;
