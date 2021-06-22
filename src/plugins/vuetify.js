import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import colors from 'vuetify/lib/util/colors'

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#1B1C1E",
                secondary: "#4B4B4B",
                accent: colors.shades.black,
                error: colors.red.accent3,
                background: "#fff",
            },
            dark: {
                primary: "#fff",
                secondary: "#4B4B4B",
                background: "#1B1C1E",
            },
        },
    },
});