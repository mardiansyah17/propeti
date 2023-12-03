import './bootstrap';
import '../css/app.css';

import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {ThemeProvider} from "@material-tailwind/react";
import {InertiaProgress} from '@inertiajs/progress'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
        return pages[`./Pages/${name}.jsx`]
    },
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider value={{
                button: {
                    defaultProps: {
                        color: 'blue'
                    }
                }
            }}>
                <App {...props} />
            </ThemeProvider>
        );
    },

});
InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: '#29d',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: false,
})
