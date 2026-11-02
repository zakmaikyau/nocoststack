# NoCostStack

A static Astro site listing free and open-source alternatives to paid software.
Costs $0 to host on Cloudflare Pages. The domain is nocoststack.tech.

**The content in `src/data/tools.ts` is SAMPLE content.** Check every entry
against the tool's own website before you publish, and replace it with your own research.

## Run it on your computer

Needs Node 18.20+ (Node 20 or 22 recommended).

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # creates the dist/ folder

## Add a tool

Open `src/data/tools.ts` and add an object to `paidTools`. Pages, search and
the sitemap update automatically. To add a new category, add it to `categories`.

## Add an affiliate link

1. Join the tool's affiliate programme and get your link.
2. Put the link in `url` of the alternative (or `affiliateUrl` of the paid tool).
3. Set `affiliate: true` on that alternative. The page then shows a disclosure
   notice and marks the link `rel="sponsored"`.

## Deploy for free (Cloudflare Pages + your domain)

1. Create a free GitHub account and a new repository. Upload this project
   (without `node_modules` and `dist`; the included `.gitignore` handles that).
2. Create a free Cloudflare account. Go to **Workers & Pages > Create > Pages >
   Connect to Git** and choose the repository.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - If asked for a Node version, add the environment variable `NODE_VERSION` = `22`
4. Click **Save and Deploy**. Your site goes live at `https://<project>.pages.dev`.
5. Connect your domain: in the Pages project open **Custom domains > Set up a
   custom domain** and enter `nocoststack.tech`. Then either:
   - (simplest) add the domain to Cloudflare as a site and change the nameservers
     at your domain provider to the two Cloudflare gives you, or
   - add a CNAME record at your current DNS provider pointing to
     `<project>.pages.dev`.
   Nameserver changes can take from minutes to a day to take effect.
6. Every `git push` to the main branch now redeploys the site automatically.

## After it is live

- Add the site to Google Search Console and submit
  `https://nocoststack.tech/sitemap-index.xml`.
- Put your contact email on the About page so people can send corrections.
- Remember the domain renews at a paid price after the free year. Set a reminder
  about two months ahead. The content is plain files, so you can move to another
  domain by changing `site` in `astro.config.mjs` and the URL in `public/robots.txt`.
