/* Studio Soren service catalog, single source of truth for the services hub,
   the nav dropdown and every service / sub-service detail page. */
(function () {
  var cat = function (o) { return o; };

  var categories = [
    {
      slug: 'service-brand-kickstart', dc: 'Studio Soren Service - Brand Kickstart', file: 'service-brand-kickstart',
      pill: '01', title: 'Brand Kickstart', img: null,
      desc: 'Get a credible brand off the ground quickly, identity, language and the assets you need to go out and sell.',
      points: ['Identity built in days, not quarters', 'Language founders can repeat', 'Assets your team can actually use'],
      subs: [
        { slug: 'service-visual-identity-system', dc: 'Studio Soren Service - Visual Identity System', title: 'Visual identity system',
          tagline: 'A logo is not a brand. This is the system around it.',
          desc: 'Logo suite, type, colour, layout and imagery rules, built as a working system rather than a one-off mark.',
          gets: ['Primary and secondary logo lockups', 'Type and colour system with usage rules', 'Layout grid and imagery direction', 'Working files handed over in Figma'],
          fast: 'Fastest when you already have a name, a rough audience and someone empowered to make decisions.' },
        { slug: 'service-brand-guidelines-toolkit', dc: 'Studio Soren Service - Brand Guidelines Toolkit', title: 'Brand guidelines & toolkit',
          tagline: 'So the brand survives contact with your team.',
          desc: 'The rules, examples and templates that let marketing, sales and product apply the brand without asking us first.',
          gets: ['Guidelines document (web or PDF)', 'Do / do not examples', 'Editable templates for common formats', 'Handover walkthrough with your team'],
          fast: 'Fast if an identity already exists. If it does not, start with the visual identity system.' },
        { slug: 'service-naming-messaging', dc: 'Studio Soren Service - Naming Messaging', title: 'Naming & messaging',
          tagline: 'Say what you do in one line people remember.',
          desc: 'Positioning, proposition and the words underneath it, names, taglines, page copy scaffolding and proof points.',
          gets: ['Positioning statement and proposition', 'Naming or tagline routes', 'Messaging hierarchy by audience', 'Proof points and objection handling'],
          fast: 'Needs a founder in the room. This is the one part we cannot do around you.' },
        { slug: 'service-pitch-deck-design', dc: 'Studio Soren Service - Pitch Deck Design', title: 'Pitch deck design',
          tagline: 'A deck that carries the argument, not just the brand.',
          desc: 'Narrative structure first, then design, investor, sales and partnership decks built on your identity.',
          gets: ['Narrative and slide-by-slide structure', 'Designed master deck', 'Editable template for your team', 'Chart and diagram treatments'],
          fast: 'Fast when the numbers and story are settled. We will not design around missing content.' },
        { slug: 'service-launch-social-kit', dc: 'Studio Soren Service - Launch Social Kit', title: 'Launch & social kit',
          tagline: 'Everything you need the week you go public.',
          desc: 'The applied assets for launch day, social, ads, email, event and profile artwork, all on-system.',
          gets: ['Social and ad templates', 'Email and newsletter headers', 'Profile and banner artwork', 'Launch asset checklist'],
          fast: 'Quick once identity and messaging are locked.' }
      ]
    },
    {
      slug: 'service-ux-ui-upgrade', dc: 'Studio Soren Service - UX and UI Upgrade', file: 'service-ux-ui-upgrade',
      pill: '02', title: 'UX & UI Quality Upgrade', img: null,
      desc: 'Raise the quality bar on a product that already works, clearer flows, sharper interfaces, fewer places users fall over.',
      points: ['Quality audit with a ranked backlog', 'Interface craft, not a repaint', 'Fixes your team can ship'],
      subs: [
        { slug: 'service-ux-ui-audit', dc: 'Studio Soren Service - UX and UI Audit', title: 'UX/UI quality audit',
          tagline: 'Find out exactly where the quality drops.',
          desc: 'A structured review of your flows, screens and patterns, scored and ranked so you know what to fix first.',
          gets: ['Heuristic and flow review', 'Ranked issue backlog with severity', 'Annotated screen walkthrough', 'Prioritised 90-day fix plan'],
          fast: 'The quickest way to start with us, days, not weeks, and it tells us both what comes next.' },
        { slug: 'service-interface-redesign', dc: 'Studio Soren Service - Interface Redesign', title: 'Interface redesign',
          tagline: 'Same product, materially better to use.',
          desc: 'Redesign of the screens that matter most, worked through to build-ready detail rather than pretty concepts.',
          gets: ['Redesigned key flows and screens', 'States, edge cases and empty states', 'Build-ready specs', 'Before / after comparison'],
          fast: 'Faster with a design system in place. Without one, expect groundwork first.' },
        { slug: 'service-design-system-build', dc: 'Studio Soren Service - Design System Build', title: 'Design system build',
          tagline: 'Stop re-deciding the same things every sprint.',
          desc: 'Tokens, components and documentation that let designers and engineers move at the same speed.',
          gets: ['Token set (colour, type, spacing, motion)', 'Core component library in Figma', 'Usage documentation', 'Engineering handoff and naming map'],
          fast: 'Scales your team more than any other single piece of work here.' },
        { slug: 'service-accessibility-uplift', dc: 'Studio Soren Service - Accessibility Uplift', title: 'Accessibility uplift',
          tagline: 'Quality that includes everyone.',
          desc: 'WCAG-aligned review and remediation design, contrast, focus, semantics, keyboard and screen reader flows.',
          gets: ['WCAG 2.2 AA audit', 'Remediation designs and specs', 'Accessible component patterns', 'Team guidance and checklist'],
          fast: 'Often pairs with an interface redesign so fixes ship once, not twice.' },
        { slug: 'service-usability-testing', dc: 'Studio Soren Service - Usability Testing', title: 'Usability testing',
          tagline: 'Evidence instead of opinions in the review.',
          desc: 'Moderated and unmoderated testing on prototypes or live product, with findings mapped to fixes.',
          gets: ['Test plan and recruitment', 'Sessions with real users', 'Findings mapped to severity', 'Recommended design changes'],
          fast: 'Fast to run in parallel with design. Needs access to your users.' },
        { slug: 'service-conversion-optimisation', dc: 'Studio Soren Service - Conversion Optimisation', title: 'Conversion optimisation',
          tagline: 'Design changes tied to a number.',
          desc: 'Funnel analysis, hypothesis design and test-ready variants for the journeys that carry your revenue.',
          gets: ['Funnel and drop-off analysis', 'Prioritised hypothesis list', 'Designed test variants', 'Measurement plan'],
          fast: 'Needs analytics in place. If tracking is broken, that is step one.' }
      ]
    },
    {
      slug: 'service-design-team-scaling', dc: 'Studio Soren Service - Design Team Scaling', file: 'service-design-team-scaling',
      pill: '03', title: 'Scaling Your Design Team', img: null,
      desc: 'Grow in-house design capability without losing pace, people, process, tooling and the standards that hold it together.',
      points: ['Capacity now, capability later', 'Process that survives growth', 'Hiring you do not regret'],
      subs: [
        { slug: 'service-embedded-design-partner', dc: 'Studio Soren Service - Embedded Design Partner', title: 'Embedded design partner',
          tagline: 'Senior design capacity inside your team.',
          desc: 'We work in your stand-ups, your Figma and your backlog, shipping alongside your team rather than around it.',
          gets: ['Named senior designer(s)', 'Working in your tools and rituals', 'Sprint-level delivery', 'Knowledge left behind, not taken away'],
          fast: 'Fastest way to add capacity. Works best where a product owner can make calls.' },
        { slug: 'service-design-ops', dc: 'Studio Soren Service - Design Ops and Workflow', title: 'Design ops & workflow',
          tagline: 'Make the second designer as productive as the first.',
          desc: 'Rituals, file structure, review gates and definition of done, so quality does not depend on one person caring.',
          gets: ['Workflow and ritual design', 'File and library structure', 'Review and QA gates', 'Definition of done for design'],
          fast: 'Highest leverage when you are going from one or two designers to a team.' },
        { slug: 'service-hiring-team-structure', dc: 'Studio Soren Service - Hiring and Team Structure', title: 'Hiring & team structure',
          tagline: 'Hire the right shape of designer.',
          desc: 'Role definition, scorecards, portfolio screening and interview design, plus an honest view of what to outsource.',
          gets: ['Team shape and role definitions', 'Scorecards and interview structure', 'Portfolio and task review support', 'Build vs partner recommendation'],
          fast: 'Cheaper than a mis-hire. We can sit in on final panels.' },
        { slug: 'service-mentoring-upskilling', dc: 'Studio Soren Service - Mentoring and Upskilling', title: 'Mentoring & upskilling',
          tagline: 'Level up the designers you already have.',
          desc: 'One-to-one mentoring and team workshops on craft, critique, research and working with engineers.',
          gets: ['Regular one-to-one mentoring', 'Craft and critique workshops', 'Skills baseline and growth plan', 'Reusable internal playbooks'],
          fast: 'Ongoing by nature. Pairs well with design ops work.' },
        { slug: 'service-design-leadership-on-demand', dc: 'Studio Soren Service - Design Leadership On Demand', title: 'Design leadership on demand',
          tagline: 'A design lead before you can justify hiring one.',
          desc: 'Fractional design leadership, standards, roadmap input, stakeholder management and cover during gaps.',
          gets: ['Fractional design director time', 'Quality standards and review', 'Roadmap and resourcing input', 'Stakeholder and exec support'],
          fast: 'Typically a fixed number of days per month.' },
        { slug: 'service-tooling-handoff-setup', dc: 'Studio Soren Service - Tooling and Handoff Setup', title: 'Tooling & handoff setup',
          tagline: 'Stop losing days at the design, engineering seam.',
          desc: 'Figma structure, libraries, tokens and handoff conventions wired into how your engineers actually build.',
          gets: ['Figma workspace and library setup', 'Token pipeline to code', 'Handoff and annotation conventions', 'Engineer onboarding session'],
          fast: 'Quick win. Usually the cheapest speed increase available to you.' }
      ]
    },
    {
      slug: 'service-product-design', dc: 'Studio Soren Service - Product Design', file: 'service-product-design',
      pill: '04', title: 'Product Design & Delivery', img: 'svcWebapp',
      desc: 'Design and ship the product itself, discovery, interface design and testing, run at sprint pace.',
      points: ['Discovery that ends in decisions', 'Build-ready design', 'Tested before it ships'],
      subs: [
        { slug: 'service-discovery-sprints', dc: 'Studio Soren Service - Discovery Sprints', title: 'Discovery sprints',
          tagline: 'A week to replace a quarter of debate.',
          desc: 'Framed problem, sketched options, tested prototype and a decision at the end, not a research report.',
          gets: ['Problem framing workshop', 'Concept options', 'Testable prototype', 'Decision and next-step plan'],
          fast: 'Needs your decision-makers to clear a few days. That is the price of the speed.' },
        { slug: 'service-web-app-design', dc: 'Studio Soren Service - Web and App Design', title: 'Web & app design',
          tagline: 'Interfaces designed to be built.',
          desc: 'End-to-end design of web and mobile products, from information architecture to production-ready screens.',
          gets: ['Information architecture and flows', 'Production-ready screens and states', 'Responsive and mobile behaviour', 'Specs and developer handoff'],
          fast: 'Pace depends on your design maturity, systems and clear ownership make it quick.' },
        { slug: 'service-prototyping-testing', dc: 'Studio Soren Service - Prototyping and Testing', title: 'Prototyping & user testing',
          tagline: 'Find out before you build it.',
          desc: 'Interactive prototypes, put in front of real users, with findings turned straight into design changes.',
          gets: ['Interactive prototype', 'Test sessions and analysis', 'Prioritised change list', 'Updated designs'],
          fast: 'Runs alongside delivery so it never becomes the bottleneck.' }
      ]
    },
    {
      slug: 'service-digital-storytelling', dc: 'Studio Soren Service - Digital Storytelling', file: 'service-digital-storytelling',
      pill: '05', title: 'Digital Storytelling', img: 'svcStorytelling',
      desc: 'Make the mission land, motion, campaign and data-led storytelling that gets attention and keeps dignity intact.',
      points: ['Motion and video that earns attention', 'Data turned into human stories', 'Dignity-first creative'],
      subs: [
        { slug: 'service-video-motion-design', dc: 'Studio Soren Service - Video and Motion Design', title: 'Video & motion design',
          tagline: 'Movement is the fastest way to be understood.',
          desc: 'Explainers, product demos, brand films and UI motion, scripted, storyboarded and delivered ready to publish.',
          gets: ['Script and storyboard', 'Animation or edit and grade', 'Sound design and captions', 'Cutdowns for each channel'],
          fast: 'Fast once the script is signed off. Script churn is what costs weeks.' },
        { slug: 'service-campaign-content-design', dc: 'Studio Soren Service - Campaign and Content Design', title: 'Campaign & content design',
          tagline: 'One idea, carried properly across channels.',
          desc: 'Campaign concepts and the full asset set behind them, social, paid, print, email and landing pages.',
          gets: ['Campaign concept and key visual', 'Channel asset set', 'Landing page design', 'Rollout schedule and specs'],
          fast: 'Needs an on-system brand. If there is not one, start with Brand Kickstart.' },
        { slug: 'service-data-storytelling', dc: 'Studio Soren Service - Data Storytelling and Impact Reports', title: 'Data storytelling & impact reports',
          tagline: 'Numbers people actually read.',
          desc: 'Annual reports, impact reports and data narratives, complex figures turned into a clear, honest story.',
          gets: ['Narrative structure', 'Data visualisation design', 'Designed report (print and digital)', 'Summary assets for sharing'],
          fast: 'Quickest when your data is already cleaned and signed off.' },
        { slug: 'service-illustration-brand-assets', dc: 'Studio Soren Service - Illustration and Brand Assets', title: 'Illustration & brand assets',
          tagline: 'A visual language of your own.',
          desc: 'Illustration systems, iconography and spot assets that stop your brand looking like everyone else\u2019s template.',
          gets: ['Illustration style and system', 'Icon set', 'Spot assets and patterns', 'Source files and usage rules'],
          fast: 'Style exploration first, then volume production runs quickly.' },
        { slug: 'service-photography-direction', dc: 'Studio Soren Service - Photography Direction', title: 'Photography direction',
          tagline: 'Real pictures beat stock every time.',
          desc: 'Art direction for shoots, briefs, shot lists, on-the-day direction and edit selection, done with consent and care.',
          gets: ['Shoot brief and mood direction', 'Shot list and logistics support', 'On-the-day art direction', 'Edit selection and retouch notes'],
          fast: 'Paced by scheduling, not by us.' }
      ]
    },
    {
      slug: 'service-ai-integration', dc: 'Studio Soren Service - AI Integration', file: 'service-ai-integration',
      pill: '06', title: 'AI & Automation', img: 'svcAi',
      desc: 'Use AI to take work off your team, accelerated workflows, custom agents and the judgement to know when not to.',
      points: ['Speed where it is safe to be fast', 'Custom agentic systems', 'Teams that know how to use it'],
      subs: [
        { slug: 'service-ai-workflow-acceleration', dc: 'Studio Soren Service - AI Workflow Acceleration', title: 'AI workflow acceleration',
          tagline: 'Take the repetitive third out of the week.',
          desc: 'We map where your team loses time and rebuild those workflows with AI in the loop, with a human where it matters.',
          gets: ['Workflow time-and-motion map', 'Prioritised automation candidates', 'Built and tested workflows', 'Guardrails and review points'],
          fast: 'Quick wins in weeks. We will tell you which ideas are not worth automating.' },
        { slug: 'service-custom-agentic-systems', dc: 'Studio Soren Service - Custom Agentic Systems', title: 'Custom agentic systems',
          tagline: 'Agents that do a real job, not a demo.',
          desc: 'Design and build of agentic tools against your own data and processes, with evaluation built in from day one.',
          gets: ['Use case definition and scoping', 'Working agentic system', 'Evaluation and monitoring', 'Documentation and handover'],
          fast: 'Scoped tightly on purpose. Broad briefs are where these fail.' },
        { slug: 'service-ai-enablement-workshops', dc: 'Studio Soren Service - AI Enablement Workshops', title: 'AI enablement workshops',
          tagline: 'Confidence beats another tool licence.',
          desc: 'Practical, role-specific sessions that get your team using AI well, and understanding where it is risky.',
          gets: ['Role-specific workshop sessions', 'Prompt and workflow playbooks', 'Policy and risk guidance', 'Follow-up clinic'],
          fast: 'Runs in days. Usually the right first step.' }
      ]
    },
    {
      slug: 'service-software-engineering', dc: 'Studio Soren Service - Software Engineering', file: 'service-software-engineering',
      pill: '07', title: 'Software Engineering', img: 'svcSoftware',
      desc: 'Build what we design, full-stack delivery, rapid MVPs and the release discipline to keep shipping.',
      points: ['Rapid MVPs in weeks', 'Full-stack delivery', 'QA and release discipline'],
      subs: [
        { slug: 'service-rapid-mvp-build', dc: 'Studio Soren Service - Rapid MVP Build', title: 'Rapid MVP build',
          tagline: 'Something real in front of users, fast.',
          desc: 'A deliberately small, well-built first version, scoped to answer one question rather than cover everything.',
          gets: ['Scope cut to one core journey', 'Working, deployed product', 'Analytics and feedback capture', 'Roadmap for v2'],
          fast: 'Only fast if scope stays cut. We will push back to keep it that way.' },
        { slug: 'service-full-stack-build', dc: 'Studio Soren Service - Full Stack Product Build', title: 'Full-stack product build',
          tagline: 'Design and engineering in one team.',
          desc: 'Front-end, back-end and integrations delivered in agile cycles, with design in the same room.',
          gets: ['Front and back-end delivery', 'Integrations and data layer', 'Agile cycles with demos', 'Deployment and documentation'],
          fast: 'Pace comes from having design decided. Undecided design stalls engineering.' },
        { slug: 'service-qa-release-readiness', dc: 'Studio Soren Service - QA and Release Readiness', title: 'QA & release readiness',
          tagline: 'Ship without holding your breath.',
          desc: 'Test coverage, cross-device QA, performance checks and a release process your team can run weekly.',
          gets: ['Test plan and coverage', 'Cross-device and browser QA', 'Performance and accessibility checks', 'Release runbook'],
          fast: 'Can be added to work we did not design or build.' }
      ]
    },
    {
      slug: 'service-design-strategy', dc: 'Studio Soren Service - Design Strategy', file: 'service-design-strategy',
      pill: '08', title: 'Design Strategy', img: 'svcDesignStrategy',
      desc: 'Decide what is worth designing, the journeys, blueprints and maturity view that tell you where speed pays off.',
      points: ['Journeys mapped end to end', 'Operational blueprints', 'Honest maturity assessment'],
      subs: [
        { slug: 'service-journey-mapping', dc: 'Studio Soren Service - Service and Journey Mapping', title: 'Service & journey mapping',
          tagline: 'See the whole journey, including the invisible parts.',
          desc: 'End-to-end mapping of what customers experience and what your organisation does behind it.',
          gets: ['Current-state journey map', 'Pain points and moments that matter', 'Future-state journey', 'Prioritised opportunity list'],
          fast: 'A few workshops, if the right people attend.' },
        { slug: 'service-operational-blueprints', dc: 'Studio Soren Service - Operational Blueprints', title: 'Operational blueprints',
          tagline: 'Design the back stage, not just the front.',
          desc: 'Service blueprints that connect front-line experience to the teams, tools and handoffs that deliver it.',
          gets: ['Service blueprint', 'Roles, systems and handoffs', 'Failure points and fixes', 'Implementation sequence'],
          fast: 'Best after journey mapping.' },
        { slug: 'service-design-maturity-assessment', dc: 'Studio Soren Service - Design Maturity Assessment', title: 'Design maturity assessment',
          tagline: 'How fast can you actually go?',
          desc: 'An honest read on your design maturity, assets, process, skills and decision-making, and what it unlocks.',
          gets: ['Maturity scoring across five areas', 'What you can do fast today', 'Gaps blocking pace', '12-month capability plan'],
          fast: 'Short, cheap, and the best possible first conversation with us.' }
      ]
    },
    {
      slug: 'service-research-data', dc: 'Studio Soren Service - Research & Data', file: 'service-research-data',
      pill: '09', title: 'Research & Data', img: 'svcResearch',
      desc: 'Know enough to move quickly, focused research and measurement that shortens arguments instead of extending them.',
      points: ['Research sized to the decision', 'Insight, not decks', 'Measurement after launch'],
      subs: [
        { slug: 'service-user-research-programmes', dc: 'Studio Soren Service - User Research Programmes', title: 'User research programmes',
          tagline: 'A steady drip beats an annual flood.',
          desc: 'Ongoing research set up so decisions always have fresh evidence, recruitment, sessions, synthesis and sharing.',
          gets: ['Research plan and cadence', 'Participant recruitment', 'Sessions and synthesis', 'Shared insight repository'],
          fast: 'Set up in weeks, then runs continuously with your team.' },
        { slug: 'service-insight-synthesis', dc: 'Studio Soren Service - Data and Insight Synthesis', title: 'Data & insight synthesis',
          tagline: 'You already have the data. It is not telling you anything.',
          desc: 'We combine analytics, support tickets, sales calls and research into a single, decision-ready picture.',
          gets: ['Source audit and consolidation', 'Themes and segments', 'Decision-ready findings', 'Recommended actions'],
          fast: 'Quick, and often removes the need for new research.' },
        { slug: 'service-measurement-frameworks', dc: 'Studio Soren Service - Measurement Frameworks', title: 'Measurement frameworks',
          tagline: 'Agree what good looks like before you ship.',
          desc: 'Outcome metrics, tracking plans and dashboards so design work is judged on evidence, not taste.',
          gets: ['Outcome and signal metrics', 'Tracking and event plan', 'Dashboard specification', 'Review cadence'],
          fast: 'Set up alongside delivery so baselines exist before launch.' }
      ]
    }
  ].map(cat);

  var maturity = [
    { level: 'Starting out', head: 'No brand kit, no system', body: 'We move fast by making decisions for you and documenting them. Expect a tight scope, strong opinions and a founder in the room.' },
    { level: 'Growing', head: 'Assets exist, nothing is systemised', body: 'The quickest wins are structural, a design system, tooling and handoff. Speed comes from removing repeated decisions.' },
    { level: 'Mature', head: 'System, team and process in place', body: 'We plug in at sprint pace: embedded designers, quality upgrades and specialist work your team has not got capacity for.' }
  ];

  function resolve(entry) {
    var path = typeof location !== 'undefined' ? decodeURIComponent(location.pathname) : '/';
    if (/\.dc\.html($|[?#])/.test(path)) return './' + encodeURI(entry.dc + '.dc.html');
    if (/\.html($|[?#])/.test(path)) return './' + (entry.file || entry.slug) + '.html';
    return '/' + entry.slug;
  }

  var index = {};
  categories.forEach(function (c) {
    index[c.slug] = { kind: 'category', data: c };
    c.subs.forEach(function (s) { s.parent = c; index[s.slug] = { kind: 'sub', data: s }; });
  });

  var pages = {
    home: { slug: '', file: 'index', dc: 'Studio Soren Home' },
    about: { slug: 'about', file: 'about', dc: 'Studio Soren About' },
    services: { slug: 'services', file: 'services', dc: 'Studio Soren Services' },
    caseStudies: { slug: 'case-studies', file: 'case-studies', dc: 'Studio Soren Case Studies' },
    insights: { slug: 'insights', file: 'insights', dc: 'Studio Soren Insights' },
    faqs: { slug: 'faqs', file: 'faqs', dc: 'Studio Soren FAQs' },
    csBt: { slug: 'case-study-bt', file: 'case-study-bt', dc: 'Studio Soren Case Study - BT Digital Checkout' },
    csMind: { slug: 'case-study-mind', file: 'case-study-mind', dc: 'Studio Soren Case Study - Mind Onboarding' },
    csKeys: { slug: 'case-study-keys', file: 'case-study-keys', dc: 'Studio Soren Case Study - KEYS Community' },
    csCarelink: { slug: 'case-study-carelink', file: 'case-study-carelink', dc: 'Studio Soren Case Study - CareLink App' },
    csEe: { slug: 'case-study-ee', file: 'case-study-ee', dc: 'Studio Soren Case Study - EE Retail Kiosk' },
    csKindred: { slug: 'case-study-kindred', file: 'case-study-kindred', dc: 'Studio Soren Case Study - Kindred' },
    privacy: { slug: 'privacy-policy', file: 'privacy-policy', dc: 'Studio Soren Privacy Policy' },
    cookies: { slug: 'cookies-policy', file: 'cookies-policy', dc: 'Studio Soren Cookies Policy' }
  };

  window.SOREN_SERVICES = {
    pages: pages,
    page: function (key) { return pages[key] ? resolve(pages[key]) : '#'; }, categories: categories, maturity: maturity, index: index, resolve: resolve };
})();
