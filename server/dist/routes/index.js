import express from "express";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
export const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
    const app = createSSRApp({
        data: () => ({ count: 1 }),
        template: `
			<h1>Welcome to a static SSR HTML page. No interactivity here.<br>I can access variables like count:{{count}} however</h1>`
    });
    renderToString(app).then((html) => {
        res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
    });
});
