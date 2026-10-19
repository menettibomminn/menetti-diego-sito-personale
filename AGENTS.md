<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site content (contacts, services, portfolio) lives in src/config/site.ts — single place for the owner to edit.
- The contact page opens the Google Forms URL from site configuration; the legacy contact server function is not used by this page.
- External builds use Nitro's node_server preset and run .output/server/index.mjs; the managed Lovable target remains unchanged to preserve preview compatibility.
- VPS deployment uses a multi-stage Docker image and an optional Caddy reverse proxy; credentials and local environment files must never enter the image.
- VPS builds materialize asset pointers into generated public files before Vite compiles; this keeps preview imports unchanged and serves images locally after deployment.
