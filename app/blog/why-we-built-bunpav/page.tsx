import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why We Built bunpav.com: A Browser-Based Asset Generator for Indie Game Devs | Yash Thakker',
  description: 'The story behind bunpav.com — why we built a browser-based 3D model, sprite, and game audio generator for indie developers and game jams, and how we optimized it for speed and ship-ability.',
  keywords: ['bunpav', 'bunpav.com', 'game asset generator', 'browser-based 3D models', 'indie game dev tools', 'game jam assets', 'AI 3D model generator', 'procedural game assets', 'text to 3D', 'AISOLO Technologies'],
};

export default function WhyWeBuiltBunpavPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <Link href="/blog" className="text-[#d97757] hover:text-[#c86844] text-sm mb-6 inline-block">← Back to Blog</Link>

        <article className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-[#d97757]/10 text-[#d97757] text-sm font-medium rounded-full">
                Product Build Log
              </span>
              <time className="text-sm text-gray-500">July 21, 2026</time>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">9 min read</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Why We Built bunpav.com: Game Assets, Fresh Out of the Oven
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We just shipped <strong>bunpav.com</strong>, our fourth product under AISOLO Technologies — a browser-based
              generator for 3D models, sprite sheets, game audio, and playable prototypes, built for indie developers
              and game jam teams who&apos;d rather ship than sculpt. Here&apos;s why we built it, and why we built it the way we did.
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">The Problem: Asset Creation Is the Real Bottleneck</h2>
            <p>
              Every game jam has the same story arc. Saturday morning, the theme drops, and the team is fired up with a
              great mechanic. By Saturday night, the mechanic works — and the whole team is stuck making a barrel mesh,
              a footstep sound, or a sprite sheet for the enemy that was supposed to take twenty minutes. Programming
              time gets eaten by asset time, and asset time is the least fun part of making a game solo.
            </p>
            <p>
              I&apos;ve spent the last few years building AI products (<Link href="/" className="text-[#d97757] hover:underline">explainx.ai</Link>,
              olly.social, infloq.com) and teaching over 350,000 students how to use AI tools practically. The pattern
              I kept seeing in the indie dev and game jam communities was almost identical to what I&apos;d seen elsewhere:
              a huge gap between &quot;I have an idea&quot; and &quot;I have the raw material to build it,&quot; and existing
              3D and audio tools assumed you already had Blender, a DAW, and years of practice with both. That gap is
              exactly what bunpav.com is built to close.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">Why the Browser, and Why Not Just Another AI Wrapper</h2>
            <p>
              The obvious shortcut would have been a thin wrapper around a text-to-image or text-to-3D API with a
              generic prompt box. We decided against that for two reasons.
            </p>
            <p>
              First, <strong>generated-and-done doesn&apos;t match how game assets actually get used</strong>. A prop
              needs to fit a triangle budget, a color needs to match a palette the rest of the level already uses, a
              character needs a rig, not just a mesh. So instead of a single black-box generation step, bunpav is built
              around parametric, editable pipelines — Primitive Lab lets you drag sliders for body length, wheel radius,
              or hinge angle and watch the mesh rebuild live in the browser, then flip between material modes and
              curated palettes before you export. It behaves less like &quot;AI image generation&quot; and more like a
              lightweight procedural modeling tool with AI-assisted shortcuts layered on top: Text to 3D and Image to 3D
              for going from an idea or a reference photo to a base mesh, Auto-Rigged Characters for going from mesh to
              pose-ready skeleton in the same pass, and a Low-Poly Generator that respects an actual triangle budget for
              mobile or VR targets.
            </p>
            <p>
              Second, <strong>no install, no plugin, no account wall before you can see if it&apos;s useful</strong>.
              Everything — the 3D viewport, the material previews, the audio waveform, the sprite sheet packer — runs
              directly in the browser. That&apos;s a deliberate performance and distribution decision, not just a
              convenience one. If a tool needs a five-minute install before someone can judge whether it&apos;s worth
              their Saturday, most of the game jam audience will bounce before they ever see the value. Running in-browser
              forces every part of the stack — geometry generation, texture baking, audio synthesis — to be fast enough
              to feel instant, because there&apos;s no loading screen to hide behind.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">Building for Ship-ability, Not Just Generation</h2>
            <p>
              A generated asset is worthless if it doesn&apos;t drop cleanly into the engine someone is already using.
              That&apos;s why export formats were a first-class design constraint from day one, not an afterthought:
              GLB, FBX, OBJ, and USDZ for 3D, so a model exported from Primitive Lab opens as-is in Unity, Unreal, or
              Blender. The same philosophy carries through the rest of the toolkit — Audio Lab exports loop-ready MP3s
              with timing controls already baked in, and the Sprite Sheet Generator packs frames into a padded,
              transparent-PNG atlas with a JSON manifest, because a sprite sheet without an atlas file is just a
              picture, not a usable game asset.
            </p>
            <p>
              We took the same &quot;ship the whole thing, not just the ingredient&quot; approach further with Game Lab
              and Game Forge. Game Lab generates deterministic, playable browser levels from procedural game kits — you
              tune difficulty, world size, enemy density, and seed, then playtest with WASD or arrow keys immediately,
              and export a versioned JSON recipe your teammates can reproduce exactly. Game Forge goes a step further
              and lets you vibe-code an entire bespoke browser game from a chat conversation, with live preview,
              follow-up edits, and a shareable public link. The goal in both cases is the same: get from idea to
              something playable inside a single browser tab, with no separate build step.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">Optimizing for the Actual User: Indie Devs and Jam Teams</h2>
            <p>
              Every product decision got filtered through one question: does this help someone who has a weekend, not
              a quarter, to finish something? That&apos;s why:
            </p>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Design Decisions That Follow From &quot;Weekend, Not Quarter&quot;:</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Free CC0/CC BY asset library:</strong> low-poly animals, trees, and props you can grab without even creating an account, for anyone who just needs to block out a scene right now.</li>
                <li><strong>Credits that roll over:</strong> monthly plans starting at $9 for 100 credits, with unused credits staying on the account instead of evaporating — because game jam usage is bursty, not steady.</li>
                <li><strong>Deterministic seeds everywhere:</strong> Game Lab levels and Primitive Lab exports are reproducible, so a teammate on a different machine gets the same result from the same recipe.</li>
                <li><strong>No modeling career required:</strong> parametric sliders and prompt-driven generation instead of sculpt brushes, so someone whose skill is gameplay code, not topology, can still ship a finished-looking prototype.</li>
              </ul>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">Who bunpav Is Actually For</h2>
            <p>
              We built bunpav with four groups in mind, and we keep testing every new feature against all four: indie
              developers and game jam teams who need to fill out a level with props and enemies fast without waiting on
              a contractor for a barrel mesh; teams building prop and prototype libraries who want to block out a scene
              with real, textured geometry instead of grey boxes before committing art budget; VTuber and avatar
              creators who want to turn a character sketch or reference photo into a base mesh that&apos;s ready for
              rigging and customization; and people who want a clean 3D product mockup from a single photo of a physical
              object, for renders, AR previews, or print-on-demand.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">What &quot;Well Optimized&quot; Means for a Tool Like This</h2>
            <p>
              For a product like bunpav, &quot;optimized&quot; isn&apos;t a single metric — it&apos;s a stack of
              constraints that all have to hold at once. Generation has to be fast enough that a slider drag in
              Primitive Lab feels live, not laggy. Exports have to be lightweight and game-ready, not bloated meshes
              that tank a mobile build&apos;s frame rate — which is exactly why the Low-Poly Generator lets you set a
              triangle budget explicitly rather than hoping the output happens to be reasonable. And the whole product
              has to be discoverable by the people who need it, which is why bunpav ships with an actual game-dev-news
              section, a public feature comparison against other tools, and machine-readable product documentation
              (including an llms.txt file) so both humans and AI assistants can find and cite the right tool for the
              right job.
            </p>
            <p>
              That last point matters more than it used to. A growing share of &quot;which tool should I use for X&quot;
              research now happens through AI assistants rather than search results pages, so we built bunpav&apos;s
              documentation, feature pages, and comparison content to be genuinely useful to read — clear, specific,
              and honest about what&apos;s in beta versus what&apos;s production-ready — rather than optimized purely
              for keyword density. If an AI assistant or a search engine can understand exactly what Primitive Lab,
              Game Lab, and Audio Lab each do and don&apos;t do, it can send the right person to the right tool, which
              is the actual goal.
            </p>

            <div className="bg-[#d97757]/10 p-4 sm:p-6 rounded-lg mt-6 sm:mt-8">
              <h3 className="font-semibold text-gray-800 mb-3">Where This Goes Next</h3>
              <p className="text-sm text-gray-700">
                bunpav is still labeled beta across most of its tools, on purpose — Primitive Lab, Game Lab, Game Forge,
                and Audio Lab are all live and usable today, while bulk 2D asset generation is in development with a
                waitlist open. We&apos;re building in public, shipping the pieces that are ready, and using real usage
                from game jams to decide what gets built next.
              </p>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">Lessons From Building Products in Public Before</h2>
            <p>
              This isn&apos;t the first product AISOLO Technologies has shipped, and the earlier ones shaped how we
              approached bunpav directly. olly.social taught us that a free tier has to be good enough to be genuinely
              useful on its own, not just a teaser — that&apos;s the same reasoning behind bunpav&apos;s no-account-required
              free asset library. explainx.ai taught us that trust in a technical tool comes from being specific about
              limitations, not from marketing copy — which is why bunpav labels tools honestly as beta, free, or
              &quot;soon&quot; instead of presenting everything as equally finished. And infloq.com reinforced that the
              fastest way to find out if a product idea actually works is to get a usable version in front of real
              users quickly, then let their behavior — not our assumptions — decide the roadmap.
            </p>
            <p>
              That last lesson is probably the most important one behind bunpav&apos;s current shape. We didn&apos;t
              start by building every feature on the site today; we started with Primitive Lab, watched how people
              actually used parametric sliders versus prompt-based generation, and let that usage pull Text to 3D,
              Image to 3D, Game Lab, and Audio Lab into existence one at a time. Bulk 2D asset generation is next,
              specifically because enough people asked for batch sprite and icon generation from a single style prompt
              that it became obvious it belonged on the roadmap rather than staying a nice-to-have.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">Try It</h2>
            <p>
              If you&apos;re heading into a game jam, prototyping a level, or just need a prop that doesn&apos;t look
              like a grey box, <a href="https://bunpav.com" target="_blank" rel="noopener noreferrer" className="text-[#d97757] hover:underline font-medium">bunpav.com</a> is
              live now, with free assets available with no account required.
            </p>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-600">
                bunpav.com is built and maintained under AISOLO Technologies Private Limited, alongside olly.social,
                explainx.ai, infloq.com, and bgblur.com.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
