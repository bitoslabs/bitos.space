const translations = {
    en: {
        skip_link: "Skip to content",
        nav_home: "Home",
        nav_features: "Features",
        nav_eco: "Ecosystem",
        nav_how: "How it works",
        nav_about: "About",
        nav_faq: "FAQ",
        nav_community: "Community",
        nav_profiles: "Profiles",
        nav_data: "Data Standard",
        btn_github: "GitHub",
        hero_badge: "Decentralized Enterprise",
        hero_protocol: "Built on Nostr",
        hero_title_1: "The Future of",
        hero_title_2: "Work on Nostr",
        hero_subtitle: "A decentralized enterprise platform combining private messaging, ERP, CRM, AI agents, and DAO tools — all under your own infrastructure.",
        hero_cta: "Explore Platform",
        hero_source: "Source Code",
        hero_demo: "Get Started",
        stat_open: "Open Source",
        stat_e2e: "Encrypted",
        stat_servers: "Central Servers",
        stat_nostr: "Nostr Native",
        chip_nostr: "Nostr Protocol",
        chip_e2e: "E2E Encrypted",
        chip_self: "Self-hosted",
        chip_lightning: "Lightning",
        chip_erp: "ERP & CRM",
        chip_ai: "AI Agents",
        features_kicker: "Features",
        features_title: "The complete enterprise suite",
        features_desc: "Everything you need to run a decentralized organization.",
        feat_1_title: "Nostr Protocol",
        feat_1_desc: "Censorship-resistant, no central servers, and end-to-end encrypted messaging.",
        feat_2_title: "AI Agents",
        feat_2_desc: "Automated workflows, team assistants, and finance insights powered by AI.",
        feat_3_title: "DAO Governance",
        feat_3_desc: "Built-in voting reform, treasury management, and multi-sig wallet coordination.",
        feat_4_title: "ERP & CRM",
        feat_4_desc: "Manage inventory, HR, leads, and customer pipelines in a decentralized way.",
        feat_5_title: "Finance & Wallet",
        feat_5_desc: "Track income, expenses, and integrate with Lightning Network and Nostr Zaps.",
        feat_6_title: "Privacy First",
        feat_6_desc: "Self-hostable and open-source. Your data belongs to you.",
        eco_kicker: "The network",
        eco_title: "Explore the BitOS ecosystem",
        eco_desc: "A flagship workspace plus five focused apps — all running on the same open protocol. No account, no sign-up wall.",
        eco_app_tag: "Flagship",
        eco_app_desc: "The full workspace: point of sale, commerce, ERP, CRM, chat, and AI agents — your daily driver on Nostr.",
        eco_app_open: "Open the app",
        eco_social_tag: "Social",
        eco_social_desc: "A local-first Nostr social client — feed, chat, and relays without a central server.",
        eco_pocket_tag: "Private",
        eco_pocket_desc: "A private journal that pays you back — write, lock your notes, and earn sats while your keys stay on device.",
        eco_learn_tag: "Education",
        eco_learn_desc: "An offline-first learning platform for teams and classrooms, built on the same open protocol.",
        eco_vatta_tag: "Game",
        eco_vatta_desc: "A 2D story game about life, death, and rebirth — a calm way to learn Lao wisdom through play.",
        eco_vault_tag: "Security",
        eco_vault_desc: "A local-first password generator and encrypted vault — strong secrets sealed on device, with optional Nostr relay sync.",
        eco_vault_open: "View on GitHub",
        eco_open: "Open app",
        about_kicker: "Why bitos.space",
        about_title: "Software your organization actually owns",
        about_body_1: "Most enterprise tools keep your people, your money, and your data locked inside someone else's cloud. bitos.space flips that: it is a local-first enterprise social network built on Nostr, where your relay, your keys, and your records stay yours.",
        about_body_2: "Run it for a single shop or a federation of branches — the same open protocol connects them without a central gatekeeper.",
        about_p1: "Local-first: works offline, syncs when connected",
        about_p2: "Your own keys and relay — zero vendor lock-in",
        about_p3: "Federated: connect shops, branches, and partners",
        how_kicker: "How it works",
        how_title: "Live in three steps",
        how_desc: "No migration project, no vendor onboarding. Bring your keys and your team — the rest is open protocol.",
        how_1_title: "Create your identity",
        how_1_desc: "Generate a keypair on your device. You own it — no email, no password, no account to lose.",
        how_2_title: "Connect a relay",
        how_2_desc: "Use relay.bitos.space or run your own. Your workspace lives on infrastructure you control.",
        how_3_title: "Invite your team",
        how_3_desc: "Add shops, branches, and partners. Data syncs peer-to-peer and stays private end to end.",
        aud_kicker: "Who it's for",
        aud_title: "Built for how real teams work",
        aud_desc: "From a single shop counter to a federation of branches and partners.",
        aud_1_title: "Local businesses",
        aud_1_desc: "Point of sale, inventory, and payments that keep working even when the internet doesn't.",
        aud_2_title: "Teams & cooperatives",
        aud_2_desc: "Chat, tasks, and approvals in one workspace your members actually co-own.",
        aud_3_title: "Developers",
        aud_3_desc: "An open event standard and reference apps you can extend without asking permission.",
        faq_kicker: "FAQ",
        faq_title: "Questions, answered",
        faq_desc: "The short version. Ask anything on GitHub for the long one.",
        faq_1_q: "What exactly is bitos.space?",
        faq_1_a: "A local-first enterprise social network built on Nostr. It brings chat, ERP, CRM, finance, and AI agents together and runs on infrastructure you own instead of a vendor's cloud.",
        faq_2_q: "Do I need to run a server?",
        faq_2_a: "No. Start on the hosted relay and demo app in seconds. When you are ready, self-host your own relay and point the same app at it — nothing else changes.",
        faq_3_q: "Is my data private?",
        faq_3_a: "Keys are generated and kept on your device, and messages are end-to-end encrypted. You choose which relay stores your data, so there is no central server reading it.",
        faq_4_q: "Does it work offline?",
        faq_4_a: "Yes. bitos.space is local-first: you keep working offline and everything syncs automatically when you reconnect.",
        faq_5_q: "What does it cost?",
        faq_5_a: "The software is open source and free to self-host, with no per-seat fees. You only pay for the infrastructure you choose to run.",
        proto_kicker: "Nostr native",
        proto_title: "Open protocol, real portability",
        proto_desc: "Everything is built on public Nostr NIPs, so your data stays readable by any client — and keeps working even if this app disappears.",
        nip_01: "Base protocol: events, relays, and subscriptions.",
        nip_19: "Portable identities: npub and nprofile.",
        nip_17: "Encrypted direct messages — legacy and private DMs.",
        nip_57: "Lightning zaps, straight to your wallet.",
        nip_25: "Reactions and lightweight social signals.",
        nip_09: "Owner-controlled event deletion requests.",
        proto_relay: "Your relay",
        proto_copy: "Copy",
        proto_copied: "Copied",
        proto_clients: "Portable to any client",
        stream_title: "relay stream",
        stream_preview: "illustrative preview",
        cmdk_live: "Open App",
        cmdk_source: "View source on GitHub",
        cmdk_theme: "Toggle theme",
        cmdk_lang: "Switch language",
        cmdk_placeholder: "Search sections and actions…",
        cmdk_empty: "No matches.",
        ledger_cap: "Specification",
        repos_kicker: "Source",
        repos_title: "Built in the open",
        repos_desc: "Real code, real commits. Pick the piece you need.",
        repo_org: "Org",
        repo_app: "App",
        repo_spec: "Spec",
        repo_nostr_desc: "Nostr protocol layer — relays, events, and the enterprise data standard that powers everything else.",
        repo_app_desc: "The client application for teams: chat, ERP, CRM, finance, and AI agents in one workspace.",
        repo_std_title: "Data Standard",
        repo_std_desc: "Open Nostr event conventions for POS, ERP, CRM, inventory, payments, and business federation.",
        repo_std_link: "Read the specification",
        community_title: "Join the build",
        community_desc: "bitos.space is shaped by the people who use it — shop owners, developers, and decentralized-tech folks.",
        community_star: "Star on GitHub",
        community_try: "Try the Demo",
        footer_product: "Product",
        footer_ecosystem: "Ecosystem",
        footer_developers: "Developers",
        footer_community: "Community",
        footer_desc: "Open source project for local bit spaces.",
        footer_rights: "All rights reserved."
    },
    lo: {
        skip_link: "ຂ້າມໄປເນື້ອຫາ",
        nav_home: "ໜ້າຫຼັກ",
        nav_features: "ຄຸນສົມບັດ",
        nav_eco: "ລະບົບນິເວດ",
        nav_how: "ວິທີໃຊ້ງານ",
        nav_about: "ກ່ຽວກັບ",
        nav_faq: "ຄຳຖາມທີ່ພົບເລື້ອຍ",
        nav_community: "ຊຸມຊົນ",
        nav_profiles: "ໂປຣໄຟລ໌",
        nav_data: "ມາດຕະຖານຂໍ້ມູນ",
        btn_github: "GitHub",
        hero_badge: "ວິສາຫະກິດແບບກະຈາຍສູນ",
        hero_protocol: "ສ້າງເທິງ Nostr",
        hero_title_1: "ອະນາຄົດຂອງ",
        hero_title_2: "ການເຮັດວຽກເທິງ Nostr",
        hero_subtitle: "ແພລັດຟອມແບບກະຈາຍສູນທີ່ລວມເອົາ ການສົ່ງຂໍ້ຄວາມສ່ວນຕົວ, ERP, CRM, AI agents, ແລະ ເຄື່ອງມື DAO — ທັງໝົດຢູ່ພາຍໃຕ້ໂຄງລ່າງພື້ນຖານຂອງທ່ານເອງ.",
        hero_cta: "ສຳຫຼວດແພລັດຟອມ",
        hero_source: "ລະຫັດຕົ້ນສະບັບ",
        hero_demo: "ທົດລອງໃຊ້",
        stat_open: "ໂອເພນຊອດ",
        stat_e2e: "ເຂົ້າລະຫັດ",
        stat_servers: "ເຊີບເວີກາງ",
        stat_nostr: "Nostr ໂດຍກຳເນີດ",
        chip_nostr: "Nostr Protocol",
        chip_e2e: "ເຂົ້າລະຫັດ E2E",
        chip_self: "ຕິດຕັ້ງເອງ",
        chip_lightning: "Lightning",
        chip_erp: "ERP & CRM",
        chip_ai: "AI Agents",
        features_kicker: "ຄຸນສົມບັດ",
        features_title: "ຊຸດວິສາຫະກິດຄົບວົງຈອນ",
        features_desc: "ທຸກຢ່າງທີ່ທ່ານຕ້ອງການເພື່ອດຳເນີນການອົງກອນແບບກະຈາຍສູນ.",
        feat_1_title: "Nostr Protocol",
        feat_1_desc: "ຕ້ານການເຊັນເຊ, ບໍ່ມີເຊີບເວີກາງ, ແລະ ການສົ່ງຂໍ້ຄວາມທີ່ເຂົ້ລະຫັດແບບ End-to-end.",
        feat_2_title: "AI Agents",
        feat_2_desc: "ຂັ້ນຕອນການເຮັດວຽກອັດຕະໂນມັດ, ຜູ້ຊ່ວຍທີມ, ແລະ ຂໍ້ມູນເຊິງເລິກດ້ານການເງິນທີ່ຂັບເຄື່ອນດ້ວຍ AI.",
        feat_3_title: "DAO Governance",
        feat_3_desc: "ລະບົບການລົງຄະແນນສຽງໃນຕົວ, ການຄຸ້ມຄອງຄັງເງິນ, ແລະ ການປະສານງານກະເປົາເງິນ Multi-sig.",
        feat_4_title: "ERP & CRM",
        feat_4_desc: "ຈັດການສາງ, HR, ລູກຄ້າທີ່ສົນໃຈ, ແລະ ຂະບວນການຂາຍໃນຮູບແບບກະຈາຍສູນ.",
        feat_5_title: "Finance & Wallet",
        feat_5_desc: "ຕິດຕາມລາຍຮັບ, ລາຍຈ່າຍ, ແລະ ເຊື່ອມຕໍ່ກັບ Lightning Network ແລະ Nostr Zaps.",
        feat_6_title: "ຄວາມເປັນສ່ວນຕົວມາກ່ອນ",
        feat_6_desc: "ຕິດຕັ້ງເອງໄດ້ ແລະ ເປັນໂອເພນຊອດ. ຂໍ້ມູນຂອງທ່ານເປັນຂອງທ່ານ.",
        eco_kicker: "ເຄືອຂ່າຍ",
        eco_title: "ສຳຫຼວດລະບົບນິເວດ BitOS",
        eco_desc: "ແອັບຫຼັກໜຶ່ງ ພ້ອມກັບຫ້າແອັບສະເພາະທາງ — ທັງໝົດເຮັດວຽກເທິງໂປຣໂຕຄໍເປີດອັນດຽວກັນ. ບໍ່ມີບັນຊີ, ບໍ່ມີກຳແພງສະໝັກ.",
        eco_app_tag: "ແອັບຫຼັກ",
        eco_app_desc: "ພື້ນທີ່ເຮັດວຽກຄົບວົງຈອນ: ຂາຍໜ້າຮ້ານ, ການຄ້າ, ERP, CRM, ແຊັດ, ແລະ AI agents — ແອັບປະຈຳວັນຂອງທ່ານເທິງ Nostr.",
        eco_app_open: "ເປີດແອັບ",
        eco_social_tag: "ສັງຄົມ",
        eco_social_desc: "ແອັບສັງຄົມ Nostr ແບບ local-first — ຟີດ, ແຊັດ, ແລະ relay ໂດຍບໍ່ມີເຊີບເວີກາງ.",
        eco_pocket_tag: "ສ່ວນຕົວ",
        eco_pocket_desc: "ບັນທຶກສ່ວນຕົວທີ່ໃຫ້ຜົນຕອບແທນ — ຂຽນ, ລັອກບັນທຶກ, ແລະ ຮັບ sats ໂດຍ key ຢູ່ໃນເຄື່ອງຂອງທ່ານ.",
        eco_learn_tag: "ການສຶກສາ",
        eco_learn_desc: "ແພລັດຟອມການຮຽນຮູ້ແບບ offline-first ສຳລັບທີມ ແລະ ຫ້ອງຮຽນ, ສ້າງເທິງໂປຣໂຕຄໍເປີດອັນດຽວກັນ.",
        eco_vatta_tag: "ເກມ",
        eco_vatta_desc: "ເກມເລື່ອງແບບ 2D ກ່ຽວກັບຊີວິດ, ຄວາມຕາຍ, ແລະ ການເກີດໃໝ່ — ວິທີຮຽນຮູ້ປັນຍາແບບລາວຜ່ານການຫຼິ້ນ.",
        eco_vault_tag: "ຄວາມປອດໄພ",
        eco_vault_desc: "ບ່ອນເກັບລະຫັດຜ່ານ ແລະ ເຄື່ອງສ້າງລະຫັດຜ່ານແບບ local-first — ເຂົ້າລະຫັດໃນເຄື່ອງ, ຊິງຄ໌ຜ່ານ Nostr relay ໄດ້.",
        eco_vault_open: "ເບິ່ງໃນ GitHub",
        eco_open: "ເປີດແອັບ",
        about_kicker: "ເປັນຫຍັງ bitos.space",
        about_title: "ຊອບແວທີ່ອົງກອນຂອງທ່ານເປັນເຈົ້າຂອງແທ້",
        about_body_1: "ເຄື່ອງມືວິສາຫະກິດສ່ວນໃຫຍ່ ມັກລັອກຄົນ, ເງິນ, ແລະ ຂໍ້ມູນຂອງທ່ານໄວ້ໃນ cloud ຂອງຄົນອື່ນ. bitos.space ປ່ຽນແປງສິ່ງນັ້ນ: ມັນເປັນເຄືອຂ່າຍສັງຄົມວິສາຫະກິດແບບ local-first ທີ່ສ້າງເທິງ Nostr, ບ່ອນທີ່ relay, key, ແລະ ບັນທຶກຂອງທ່ານຍັງເປັນຂອງທ່ານ.",
        about_body_2: "ໃຊ້ສຳລັບຮ້ານດຽວ ຫຼື ສະຫະພັນຂອງສາຂາ — ໂປຣໂຕຄໍເປີດອັນດຽວກັນເຊື່ອມຕໍ່ພວກມັນໂດຍບໍ່ມີຜູ້ເຝົ້າກາງ.",
        about_p1: "Local-first: ໃຊ້ງານໄດ້ແບບ offline, ຊິງຄ໌ເມື່ອເຊື່ອມຕໍ່",
        about_p2: "key ແລະ relay ຂອງທ່ານເອງ — ບໍ່ມີການຜູກມັດກັບຜູ້ຂາຍ",
        about_p3: "ແບບ Federated: ເຊື່ອມຕໍ່ຮ້ານ, ສາຂາ, ແລະ ຄູ່ຮ່ວມງານ",
        how_kicker: "ວິທີໃຊ້ງານ",
        how_title: "ເລີ່ມໃຊ້ໃນສາມຂັ້ນຕອນ",
        how_desc: "ບໍ່ຕ້ອງຍ້າຍລະບົບ, ບໍ່ຕ້ອງລົງທະບຽນກັບຜູ້ຂາຍ. ນຳ key ແລະ ທີມຂອງທ່ານມາ — ສ່ວນທີ່ເຫຼືອແມ່ນໂປຣໂຕຄໍເປີດ.",
        how_1_title: "ສ້າງຕົວຕົນຂອງທ່ານ",
        how_1_desc: "ສ້າງ keypair ໃນເຄື່ອງຂອງທ່ານ. ທ່ານເປັນເຈົ້າຂອງມັນ — ບໍ່ມີອີເມວ, ບໍ່ມີລະຫັດຜ່ານ, ບໍ່ມີບັນຊີທີ່ຈະສູນຫາຍ.",
        how_2_title: "ເຊື່ອມຕໍ່ relay",
        how_2_desc: "ໃຊ້ relay.bitos.space ຫຼື ຕັ້ງຂອງທ່ານເອງ. ພື້ນທີ່ເຮັດວຽກຂອງທ່ານຢູ່ເທິງໂຄງລ່າງທີ່ທ່ານຄວບຄຸມ.",
        how_3_title: "ເຊີນທີມຂອງທ່ານ",
        how_3_desc: "ເພີ່ມຮ້ານ, ສາຂາ, ແລະ ຄູ່ຮ່ວມງານ. ຂໍ້ມູນຊິງຄ໌ແບບ peer-to-peer ແລະ ຮັກສາຄວາມເປັນສ່ວນຕົວແບບ end to end.",
        aud_kicker: "ເໝາະກັບໃຜ",
        aud_title: "ສ້າງມາເພື່ອການເຮັດວຽກຂອງທີມຈິງ",
        aud_desc: "ຈາກເຄົາເຕີຮ້ານດຽວ ຈົນເຖິງສະຫະພັນຂອງສາຂາ ແລະ ຄູ່ຮ່ວມງານ.",
        aud_1_title: "ທຸລະກິດທ້ອງຖິ່ນ",
        aud_1_desc: "ຂາຍໜ້າຮ້ານ, ສາງ, ແລະ ການຈ່າຍເງິນທີ່ຍັງໃຊ້ໄດ້ ເຖິງແມ່ນອິນເຕີເນັດຂາດ.",
        aud_2_title: "ທີມ ແລະ ສະຫະກອນ",
        aud_2_desc: "ແຊັດ, ວຽກ, ແລະ ການອະນຸມັດໃນພື້ນທີ່ດຽວ ທີ່ສະມາຊິກຂອງທ່ານເປັນເຈົ້າຂອງຮ່ວມກັນແທ້.",
        aud_3_title: "ນັກພັດທະນາ",
        aud_3_desc: "ມາດຕະຖານ event ແບບເປີດ ແລະ ແອັບຕົວຢ່າງ ທີ່ທ່ານສາມາດຂະຫຍາຍໄດ້ໂດຍບໍ່ຕ້ອງຂໍອະນຸຍາດ.",
        faq_kicker: "ຄຳຖາມທີ່ພົບເລື້ອຍ",
        faq_title: "ຄຳຖາມ ພ້ອມຄຳຕອບ",
        faq_desc: "ແບບສັ້ນ. ຖາມໄດ້ທຸກຢ່າງໃນ GitHub ສຳລັບແບບລະອຽດ.",
        faq_1_q: "bitos.space ແມ່ນຫຍັງແທ້?",
        faq_1_a: "ເຄືອຂ່າຍສັງຄົມວິສາຫະກິດແບບ local-first ທີ່ສ້າງເທິງ Nostr. ລວມເອົາ ແຊັດ, ERP, CRM, ການເງິນ, ແລະ AI agents ໄວ້ນຳກັນ ແລະ ເຮັດວຽກເທິງໂຄງລ່າງທີ່ທ່ານເປັນເຈົ້າຂອງ ບໍ່ແມ່ນ cloud ຂອງຜູ້ຂາຍ.",
        faq_2_q: "ຕ້ອງຕັ້ງເຊີບເວີບໍ່?",
        faq_2_a: "ບໍ່ຕ້ອງ. ເລີ່ມໃຊ້ relay ທີ່ໃຫ້ບໍລິການ ແລະ ແອັບ demo ໄດ້ໃນບໍ່ເທົ່າໃດວິນາທີ. ເມື່ອພ້ອມ, ຕັ້ງ relay ຂອງທ່ານເອງ ແລະ ຊີ້ແອັບດຽວກັນໄປຫາມັນ — ບໍ່ມີຫຍັງປ່ຽນ.",
        faq_3_q: "ຂໍ້ມູນຂອງຂ້ອຍເປັນສ່ວນຕົວບໍ່?",
        faq_3_a: "key ຖືກສ້າງ ແລະ ເກັບໄວ້ໃນເຄື່ອງຂອງທ່ານ, ແລະ ຂໍ້ຄວາມຖືກເຂົ້າລະຫັດແບບ end-to-end. ທ່ານເລືອກ relay ທີ່ເກັບຂໍ້ມູນ, ດັ່ງນັ້ນຈຶ່ງບໍ່ມີເຊີບເວີກາງທີ່ອ່ານມັນ.",
        faq_4_q: "ໃຊ້ໄດ້ແບບ offline ບໍ່?",
        faq_4_a: "ໄດ້. bitos.space ເປັນ local-first: ທ່ານເຮັດວຽກຕໍ່ໄດ້ແບບ offline ແລະ ທຸກຢ່າງຈະຊິງຄ໌ອັດຕະໂນມັດເມື່ອເຊື່ອມຕໍ່ຄືນ.",
        faq_5_q: "ມີຄ່າໃຊ້ຈ່າຍບໍ່?",
        faq_5_a: "ຊອບແວເປັນໂອເພນຊອດ ແລະ ຕິດຕັ້ງເອງໄດ້ຟຣີ, ບໍ່ມີຄ່າຕໍ່ຜູ້ໃຊ້. ທ່ານຈ່າຍສະເພາະໂຄງລ່າງທີ່ທ່ານເລືອກໃຊ້.",
        proto_kicker: "Nostr ໂດຍກຳເນີດ",
        proto_title: "ໂປຣໂຕຄໍເປີດ ຍ້າຍຂໍ້ມູນໄດ້ແທ້",
        proto_desc: "ທຸກຢ່າງສ້າງເທິງ NIP ຂອງ Nostr ທີ່ເປີດເຜີຍ, ດັ່ງນັ້ນຂໍ້ມູນຂອງທ່ານຍັງອ່ານໄດ້ໂດຍແອັບໃດກໍ່ໄດ້ — ແລະ ຍັງໃຊ້ໄດ້ ເຖິງແມ່ນແອັບນີ້ຫາຍໄປ.",
        nip_01: "ໂປຣໂຕຄໍພື້ນຖານ: event, relay, ແລະ subscription.",
        nip_19: "ຕົວຕົນທີ່ຍ້າຍໄດ້: npub ແລະ nprofile.",
        nip_17: "ຂໍ້ຄວາມສ່ວນຕົວທີ່ເຂົ້າລະຫັດ — DM ແບບເກົ່າ ແລະ ແບບສ່ວນຕົວ.",
        nip_57: "Zap ຜ່ານ Lightning ເຂົ້າກະເປົາເງິນຂອງທ່ານໂດຍກົງ.",
        nip_25: "Reaction ແລະ ສັນຍານສັງຄົມແບບເບົາ.",
        nip_09: "ການຂໍລຶບ event ທີ່ເຈົ້າຂອງຄວບຄຸມ.",
        proto_relay: "relay ຂອງທ່ານ",
        proto_copy: "ສຳເນົາ",
        proto_copied: "ສຳເນົາແລ້ວ",
        proto_clients: "ຍ້າຍໄປແອັບໃດກໍ່ໄດ້",
        stream_title: "ກະແສ relay",
        stream_preview: "ຕົວຢ່າງປະກອບ",
        cmdk_live: "ເປີດແອັບ",
        cmdk_source: "ເບິ່ງລະຫັດເທິງ GitHub",
        cmdk_theme: "ປ່ຽນຮູບແບບສີ",
        cmdk_lang: "ປ່ຽນພາສາ",
        cmdk_placeholder: "ຄົ້ນຫາພາກ ແລະ ຄຳສັ່ງ…",
        cmdk_empty: "ບໍ່ພົບຜົນ.",
        ledger_cap: "ຂໍ້ກຳນົດທາງເທັກນິກ",
        repos_kicker: "ແຫຼ່ງລະຫັດ",
        repos_title: "ສ້າງຢ່າງເປີດເຜີຍ",
        repos_desc: "ໂຄ້ດຈິງ, commit ຈິງ. ເລືອກສ່ວນທີ່ທ່ານຕ້ອງການ.",
        repo_org: "Org",
        repo_app: "App",
        repo_spec: "Spec",
        repo_nostr_desc: "ຊັ້ນໂປຣໂຕຄໍ Nostr — relay, event, ແລະ ມາດຕະຖານຂໍ້ມູນວິສາຫະກິດທີ່ຂັບເຄື່ອນທຸກຢ່າງ.",
        repo_app_desc: "ແອັບລູກຄ້າສຳລັບທີມ: ແຊັດ, ERP, CRM, ການເງິນ, ແລະ AI agents ໃນພື້ນທີ່ເຮັດວຽກດຽວ.",
        repo_std_title: "ມາດຕະຖານຂໍ້ມູນ",
        repo_std_desc: "ຂໍ້ກຳນົດ Nostr event ແບບເປີດສຳລັບ POS, ERP, CRM, ສາງ, ການຈ່າຍເງິນ, ແລະ ການເຊື່ອມຕໍ່ທຸລະກິດ.",
        repo_std_link: "ອ່ານຂໍ້ກຳນົດ",
        community_title: "ຮ່ວມສ້າງ",
        community_desc: "bitos.space ຖືກສ້າງໂດຍຄົນທີ່ໃຊ້ມັນ — ເຈົ້າຂອງຮ້ານ, ນັກພັດທະນາ, ແລະ ຄົນໃນວົງການເທັກໂນໂລຢີກະຈາຍສູນ.",
        community_star: "Star ເທິງ GitHub",
        community_try: "ລອງ Demo",
        footer_product: "ຜະລິດຕະພັນ",
        footer_ecosystem: "ລະບົບນິເວດ",
        footer_developers: "ນັກພັດທະນາ",
        footer_community: "ຊຸມຊົນ",
        footer_desc: "ໂຄງການໂອເພນຊອດສຳລັບພື້ນທີ່ bitos.",
        footer_rights: "ສະຫງວນລິຂະສິດ."
    }
};

const ICON_SPRITE = 'assets/icons/lucide-sprite.svg';

document.addEventListener('DOMContentLoaded', () => {
    // Language setup
    const supportedLangs = ['en', 'lo'];
    const savedLang = localStorage.getItem('lang');
    let currentLang = supportedLangs.includes(savedLang) ? savedLang : 'en';
    const langToggleBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('current-lang');

    // Saved preference is restored above; default falls back to English.

    function updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                // If it's an input placeholder, update that, otherwise textContent
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[currentLang][key];
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const value = translations[currentLang][el.getAttribute('data-i18n-placeholder')];
            if (value) el.placeholder = value;
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const value = translations[currentLang][el.getAttribute('data-i18n-title')];
            if (value) el.title = value;
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const value = translations[currentLang][el.getAttribute('data-i18n-aria-label')];
            if (value) el.setAttribute('aria-label', value);
        });

        langLabel.textContent = currentLang.toUpperCase();
        document.documentElement.lang = currentLang;

        if (currentLang === 'lo') {
            document.body.classList.add('lo');
        } else {
            document.body.classList.remove('lo');
        }

        if (typeof refreshPalette === 'function') refreshPalette();
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'lo' : 'en';
        localStorage.setItem('lang', currentLang);
        updateContent();
    });

    // Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileMenuIcon = mobileMenuBtn.querySelector('use');

    function setMobileMenu(open) {
        mobileNav.classList.toggle('active', open);
        mobileMenuBtn.setAttribute('aria-expanded', String(open));
        mobileMenuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        mobileMenuIcon.setAttribute('href', ICON_SPRITE + (open ? '#x' : '#menu'));
    }

    mobileMenuBtn.addEventListener('click', () => {
        setMobileMenu(!mobileNav.classList.contains('active'));
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => setMobileMenu(false));
    });

    // Close mobile menu on Escape or when resizing up to desktop
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            setMobileMenu(false);
            mobileMenuBtn.focus();
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1080) setMobileMenu(false);
    });

    // Command palette (⌘K / Ctrl+K)
    const cmdk = document.getElementById('cmdk');
    const cmdkInput = document.getElementById('cmdk-input');
    const cmdkList = document.getElementById('cmdk-list');
    const cmdkOpenBtn = document.getElementById('cmdk-open');
    let cmdkItems = [];
    let cmdkActive = 0;

    function buildPaletteItems() {
        const t = key => (translations[currentLang] && translations[currentLang][key]) || '';
        return [
            { label: t('nav_home'), icon: 'house', href: '#home' },
            { label: t('nav_features'), icon: 'layers', href: '#features' },
            { label: t('nav_eco'), icon: 'network', href: '#ecosystem' },
            { label: t('nav_how'), icon: 'list-checks', href: '#how' },
            { label: t('nav_about'), icon: 'info', href: '#about' },
            { label: t('proto_kicker'), icon: 'shield', href: '#protocol' },
            { label: t('aud_kicker'), icon: 'users', href: '#audience' },
            { label: t('nav_faq'), icon: 'circle-question-mark', href: '#faq' },
            { label: t('nav_community'), icon: 'message-circle', href: '#community' },
            { label: t('nav_profiles'), icon: 'users', href: 'p/' },
            { label: t('nav_data'), icon: 'book', href: 'data-standard.html' },
            { label: t('cmdk_live'), icon: 'rocket', action: 'demo' },
            { label: t('cmdk_source'), icon: 'github', action: 'github' },
            { label: t('cmdk_theme'), icon: 'moon', action: 'theme' },
            { label: t('cmdk_lang'), icon: 'globe', action: 'lang' }
        ];
    }

    function refreshPalette() {
        if (!cmdkList) return;
        const query = cmdkInput ? cmdkInput.value.trim().toLowerCase() : '';
        cmdkItems = buildPaletteItems().filter(it => it.label.toLowerCase().includes(query));
        cmdkActive = 0;
        cmdkList.innerHTML = '';

        if (!cmdkItems.length) {
            const empty = document.createElement('li');
            empty.className = 'cmdk__empty';
            empty.textContent = translations[currentLang].cmdk_empty || '';
            cmdkList.appendChild(empty);
            return;
        }

        cmdkItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'cmdk__item' + (index === 0 ? ' is-active' : '');
            li.setAttribute('role', 'option');
            const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            icon.setAttribute('class', 'icon');
            icon.setAttribute('aria-hidden', 'true');
            const iconUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            iconUse.setAttribute('href', ICON_SPRITE + '#' + item.icon);
            icon.appendChild(iconUse);
            const span = document.createElement('span');
            span.textContent = item.label;
            li.append(icon, span);
            li.addEventListener('mouseenter', () => setPaletteActive(index));
            li.addEventListener('click', () => runPaletteItem(item));
            cmdkList.appendChild(li);
        });
    }

    function setPaletteActive(index) {
        cmdkActive = index;
        cmdkList.querySelectorAll('.cmdk__item').forEach((el, idx) => {
            el.classList.toggle('is-active', idx === index);
        });
    }

    function openPalette() {
        if (!cmdk) return;
        cmdk.hidden = false;
        if (cmdkInput) cmdkInput.value = '';
        refreshPalette();
        if (cmdkInput) cmdkInput.focus();
    }

    function closePalette() {
        if (cmdk) cmdk.hidden = true;
    }

    function runPaletteItem(item) {
        closePalette();
        if (item.href) {
            const target = item.href.startsWith('#') ? document.querySelector(item.href) : null;
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.location.href = item.href;
            }
            return;
        }
        switch (item.action) {
            case 'demo':
                window.open('https://app.bitos.space', '_blank', 'noopener');
                break;
            case 'github':
                window.open('https://github.com/bitoslabs/bitos-nostr', '_blank', 'noopener');
                break;
            case 'theme':
                themeToggleBtn.click();
                break;
            case 'lang':
                langToggleBtn.click();
                break;
        }
    }

    if (cmdk && cmdkInput && cmdkList && cmdkOpenBtn) {
        cmdkOpenBtn.addEventListener('click', openPalette);
        cmdk.addEventListener('click', e => {
            if (e.target.hasAttribute('data-cmdk-close')) closePalette();
        });
        cmdkInput.addEventListener('input', refreshPalette);
        cmdkInput.addEventListener('keydown', e => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (cmdkItems.length) setPaletteActive((cmdkActive + 1) % cmdkItems.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (cmdkItems.length) {
                    setPaletteActive((cmdkActive - 1 + cmdkItems.length) % cmdkItems.length);
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (cmdkItems[cmdkActive]) runPaletteItem(cmdkItems[cmdkActive]);
            }
        });
        document.addEventListener('keydown', e => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                cmdk.hidden ? openPalette() : closePalette();
            } else if (e.key === 'Escape' && !cmdk.hidden) {
                closePalette();
            }
        });
    }

    // Copy-to-clipboard buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const text = btn.getAttribute('data-copy') || '';
            try {
                await navigator.clipboard.writeText(text);
            } catch (err) {
                const ta = document.createElement('textarea');
                ta.value = text;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                ta.remove();
            }
            btn.classList.add('copied');
            const label = btn.querySelector('span');
            if (label) label.textContent = translations[currentLang].proto_copied || 'Copied';
            window.setTimeout(() => {
                btn.classList.remove('copied');
                if (label) label.textContent = translations[currentLang].proto_copy || 'Copy';
            }, 1600);
        });
    });

    // Interactive network-mesh background in the hero
    const heroCanvas = document.querySelector('.hero-grid');
    if (heroCanvas && heroCanvas.getContext) {
        const heroSection = document.querySelector('.hero-section');
        const ctx = heroCanvas.getContext('2d');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const GAP = 26;
        const pointer = { x: -9999, y: -9999 };
        let dots = [];
        let width = 0;
        let height = 0;
        let rafId = null;
        let running = false;

        function buildDots() {
            const rect = heroSection.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            heroCanvas.width = Math.floor(width * dpr);
            heroCanvas.height = Math.floor(height * dpr);
            heroCanvas.style.width = width + 'px';
            heroCanvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const cols = Math.ceil(width / GAP) + 1;
            const rows = Math.ceil(height / GAP) + 1;
            dots = [];
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push({ x: i * GAP, y: j * GAP });
                }
            }
            draw(performance.now());
        }

        function draw(time) {
            ctx.clearRect(0, 0, width, height);
            const isLight = document.documentElement.classList.contains('light-mode');
            for (let k = 0; k < dots.length; k++) {
                const d = dots[k];
                const ox = d.x + Math.sin(time * 0.0005 + d.y * 0.015) * 2.5;
                const oy = d.y + Math.cos(time * 0.0005 + d.x * 0.015) * 2.5;
                const dx = ox - pointer.x;
                const dy = oy - pointer.y;
                const influence = Math.max(0, 1 - Math.hypot(dx, dy) / 150);
                const radius = 1 + influence * 1.8;
                ctx.beginPath();
                ctx.arc(ox, oy, radius, 0, Math.PI * 2);
                if (influence > 0.05) {
                    ctx.fillStyle = 'rgba(247, 147, 26, ' + (0.15 + influence * 0.7) + ')';
                } else {
                    ctx.fillStyle = isLight ? 'rgba(11, 11, 11, 0.1)' : 'rgba(248, 249, 250, 0.1)';
                }
                ctx.fill();
            }
        }

        function loop(time) {
            draw(time);
            rafId = window.requestAnimationFrame(loop);
        }

        function startLoop() {
            if (!running) {
                running = true;
                rafId = window.requestAnimationFrame(loop);
            }
        }

        function stopLoop() {
            running = false;
            if (rafId) window.cancelAnimationFrame(rafId);
        }

        heroSection.addEventListener('pointermove', e => {
            const rect = heroSection.getBoundingClientRect();
            pointer.x = e.clientX - rect.left;
            pointer.y = e.clientY - rect.top;
            if (reduceMotion) draw(performance.now());
        });
        heroSection.addEventListener('pointerleave', () => {
            pointer.x = -9999;
            pointer.y = -9999;
            if (reduceMotion) draw(performance.now());
        });

        buildDots();
        window.addEventListener('resize', buildDots);

        if (reduceMotion) {
            draw(performance.now());
        } else if ('IntersectionObserver' in window) {
            const meshObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    entry.isIntersecting ? startLoop() : stopLoop();
                });
            }, { threshold: 0 });
            meshObserver.observe(heroSection);
        } else {
            startLoop();
        }
    }

    // Illustrative relay stream console
    const streamLines = document.getElementById('stream-lines');
    if (streamLines) {
        const reduceStream = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const sample = [
            { kind: '1', type: 'note', who: 'npub1q3x', tail: '7f' },
            { kind: '7', type: 'reaction', who: 'npub1a8f', tail: '2c' },
            { kind: '9735', type: 'zap', who: 'npub1k2m', tail: '9d', meta: '+21 sats' },
            { kind: '0', type: 'profile', who: 'npub1z9p', tail: '4h' },
            { kind: '30023', type: 'article', who: 'npub1m4c', tail: '8s' },
            { kind: '30078', type: 'app-data', who: 'npub1r7t', tail: '1k' }
        ];
        function randomHex() {
            return Math.random().toString(16).slice(2, 6);
        }
        function addStreamLine() {
            const s = sample[Math.floor(Math.random() * sample.length)];
            const li = document.createElement('li');
            li.className = 'stream__line';
            const kind = document.createElement('span');
            kind.className = 'stream__kind';
            kind.textContent = s.kind;
            const type = document.createElement('span');
            type.className = 'stream__type';
            type.textContent = s.type;
            const who = document.createElement('span');
            who.className = 'stream__who';
            who.textContent = s.who + randomHex() + '…' + s.tail;
            const meta = document.createElement('span');
            meta.className = 'stream__meta';
            meta.textContent = s.meta || (Math.random() * 2 + 0.2).toFixed(1) + 's';
            li.append(kind, type, who, meta);
            streamLines.prepend(li);
            while (streamLines.children.length > 5) streamLines.lastChild.remove();
        }
        for (let i = 0; i < 4; i++) addStreamLine();
        if (!reduceStream) window.setInterval(addStreamLine, 1700);
    }

    // Stagger reveals inside grids
    document
        .querySelectorAll('.features-grid, .nip-grid, .app-grid, .audience-grid, .how-grid, .repo-grid')
        .forEach(grid => {
            Array.from(grid.children).forEach((child, index) => {
                if (child.classList.contains('reveal')) {
                    child.style.transitionDelay = index * 60 + 'ms';
                }
            });
        });

    // Initial render
    updateContent();

    // Theme Setup
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('use');
    const themeColorMeta = document.getElementById('theme-color');
    const themeMedia = window.matchMedia('(prefers-color-scheme: light)');

    function storedTheme() {
        try {
            const saved = localStorage.getItem('theme');
            return saved === 'light' || saved === 'dark' ? saved : null;
        } catch {
            return null;
        }
    }

    function currentTheme() {
        return document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
    }

    function setTheme(theme, persist = true) {
        const isLight = theme === 'light';
        document.documentElement.classList.toggle('light-mode', isLight);
        themeIcon.setAttribute('href', ICON_SPRITE + (isLight ? '#sun' : '#moon'));
        themeToggleBtn.setAttribute(
            'aria-label',
            isLight ? 'Switch to dark theme' : 'Switch to light theme'
        );
        if (themeColorMeta) {
            themeColorMeta.setAttribute('content', isLight ? '#f8f9fa' : '#0b0b0b');
        }
        if (persist) {
            try {
                localStorage.setItem('theme', isLight ? 'light' : 'dark');
            } catch {
                /* storage unavailable */
            }
        }
    }

    setTheme(storedTheme() || (themeMedia.matches ? 'light' : 'dark'), false);

    themeToggleBtn.addEventListener('click', () => {
        setTheme(currentTheme() === 'light' ? 'dark' : 'light');
    });

    themeMedia.addEventListener('change', (event) => {
        if (!storedTheme()) setTheme(event.matches ? 'light' : 'dark', false);
    });

    window.addEventListener('storage', (event) => {
        if (event.key === 'theme') {
            setTheme(storedTheme() || (themeMedia.matches ? 'light' : 'dark'), false);
        }
    });

    // Feature Card Spotlight Effect
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Scroll Reveal
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => revealObserver.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    if ('IntersectionObserver' in window && navLinks.length) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        const isActive = link.getAttribute('href') === `#${id}`;
                        link.classList.toggle('active', isActive);
                        if (isActive) {
                            link.setAttribute('aria-current', 'true');
                        } else {
                            link.removeAttribute('aria-current');
                        }
                    });
                }
            });
        }, { threshold: 0.4 });
        sections.forEach(section => spy.observe(section));
    }

    // Navbar shrink on scroll
    const navbar = document.querySelector('.navbar');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // FAQ: keep a single panel open at a time
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                faqItems.forEach(other => {
                    if (other !== item) other.open = false;
                });
            }
        });
    });

    // Back to top
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        const toggleBackToTop = () => {
            backToTop.classList.toggle('visible', window.scrollY > 600);
        };
        toggleBackToTop();
        window.addEventListener('scroll', toggleBackToTop, { passive: true });
        backToTop.addEventListener('click', () => {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
        });
    }
});
