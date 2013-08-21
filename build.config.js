/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    /**
     * The `build_dir` folder is where our projects are compiled during
     * development and the `compile_dir` folder is where our app resides once it's
     * completely built.
     */
    build_dir: 'build',
    compile_dir: 'bin',
    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks. `js` is all project javascript, less tests. `ctpl` contains
     * our reusable components' (`src/common`) template HTML files, while
     * `atpl` contains the same, but for our app's code. `html` is just our
     * main HTML file, `less` is our main stylesheet, and `unit` contains our
     * app's unit tests.
     */
    app_files: {
        js: ['src/**/*.js', '!src/**/*.spec.js'],
        jsunit: ['src/**/*.spec.js'],
        //coffee: ['src/**/*.coffee', '!src/**/*.spec.coffee'],
        //coffeeunit: ['src/**/*.spec.coffee'],
        html: ['src/*.html'],
        less: ['src/less/main.less']
    },
    /**
     * This is the same as `app_files`, except it contains patterns that
     * reference vendor code (`vendor/`) that we need to place into the build
     * process somewhere. While the `app_files` property ensures all
     * standardized files are collected for compilation, it is the user's job
     * to ensure non-standardized (i.e. vendor-related) files are handled
     * appropriately in `vendor_files.js`.
     *
     * The `vendor_files.js` property holds files to be automatically
     * concatenated and minified with our project source files.
     *
     * The `vendor_files.css` property holds any CSS files to be automatically
     * included in our app.
     */
    vendor_files: {
        js: [
            'vendor/jquery/jquery.js',
            'vendor/jquery-ui/ui/jquery-ui.js',
            'vendor/jquery-ui/ui/jquery.ui.autocomplete.js',
            'vendor/jquery-ui/ui/jquery.ui.core.js',
            'vendor/jquery-ui/ui/jquery.ui.datepicker.js',
            'vendor/jquery-ui/ui/i18n/jquery-ui-i18n.js',
            'vendor/jquery-ui/ui/i18n/jquery.ui.datepicker-en-GB.js',
            'vendor/bootstrap/js/bootstrap-dropdown.js',
            'vendor/bootstrap/js/bootstrap-transition.js',
            'vendor/bootstrap/js/bootstrap-collapse.js',
            'vendor/bootstrap-timepicker/js/bootstrap-timepicker.js'
        ],
        css: [
            'vendor/jquery-ui/themes/<%= pkg.theme %>/jquery-ui.css',
            'vendor/jquery-ui/themes/<%= pkg.theme %>/jquery.ui.theme.css'
        ],
        less: [
            'vendor/bootstrap/less/variables.less',
            'vendor/bootstrap/less/mixins.less',
            'vendor/bootstrap/less/reset.less',
            'vendor/bootstrap/less/utilities.less',
            'vendor/bootstrap/less/scaffolding.less',
            'vendor/bootstrap/less/type.less',
            'vendor/bootstrap/less/grid.less',
            'vendor/bootstrap/less/layouts.less',
            'vendor/bootstrap/less/navs.less',
            'vendor/bootstrap/less/navbar.less',
            'vendor/bootstrap/less/buttons.less',
            'vendor/bootstrap/less/button-groups.less',
            'vendor/bootstrap/less/dropdowns.less',
            'vendor/bootstrap/less/breadcrumbs.less',
            'vendor/bootstrap/less/alerts.less',
            'vendor/bootstrap/less/close.less',
            'vendor/bootstrap/less/forms.less',
            'vendor/bootstrap/less/hero-unit.less',
            'vendor/bootstrap/less/labels-badges.less',
            'vendor/bootstrap/less/media.less',
            'vendor/bootstrap/less/modals.less',
            'vendor/bootstrap/less/pager.less',
            'vendor/bootstrap/less/pagination.less',
            'vendor/bootstrap/less/tables.less',
            'vendor/bootstrap/less/tooltip.less',
            'vendor/bootstrap/less/accordion.less',
            'vendor/bootstrap/less/thumbnails.less',
            'vendor/bootstrap/less/responsive-utilities.less',
            'vendor/bootstrap/less/responsive-1200px-min.less',
            'vendor/bootstrap/less/responsive-768px-979px.less',
            'vendor/bootstrap/less/responsive-767px-max.less',
            'vendor/bootstrap/less/responsive-navbar.less',
            'vendor/bootstrap/less/sprites.less',
            'vendor/bootstrap-timepicker/less/timepicker.less'
            
        ],
        img: [
            'vendor/jquery-ui/themes/<%= pkg.theme %>/images/*.*',
            'vendor/bootstrap/img/*.png'
        ]
    }
};
