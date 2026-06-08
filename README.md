# Code Camp Tamil Website

Static GitHub Pages website for sharing downloadable source code ZIP files from Code Camp Tamil YouTube videos.

## Edit Downloads

1. Add project ZIP files to the `downloads` folder.
2. Open `script.js`.
3. Add or update an object in the `projects` array with the project title, technologies, ZIP path, and YouTube video link.
4. Set `available: true` when the ZIP file is ready to download.

Example ZIP path:

```js
zip: "downloads/full-stack-todo-app.zip",
available: true,
```

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. In the GitHub repository, open `Settings > Pages`.
3. Under `Build and deployment`, select `Deploy from a branch`.
4. Choose the `main` or `master` branch and `/ (root)` folder.
5. Save. GitHub will publish the website after the first Pages build completes.

## Files

- `index.html` - page content and layout
- `styles.css` - custom design styles
- `script.js` - project data, search, and filtering
- `assets/code-camp-tamil-hero.png` - generated website hero image
- `downloads/` - place downloadable project ZIP files here
