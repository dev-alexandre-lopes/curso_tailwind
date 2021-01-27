module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
            '**/*.html' // whatever your template language
            ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
    ]
}