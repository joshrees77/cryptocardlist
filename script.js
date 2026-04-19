const CONTACT_EMAIL = "your-email@cryptocardlist.xyz";

const cardLinks = {
  "Jupiter Card": {
    clickPath: "go/jupiter-card.html",
    sourceUrl: "https://jup.ag/rewards"
  },
  "Kast Card": {
    clickPath: "go/kast-card.html",
    sourceUrl: "https://www.kast.xyz/crypto-cards"
  },
  "Plasma One": {
    clickPath: "go/plasma-one.html",
    sourceUrl: "https://www.plasma.to/one"
  },
  "Ether.fi Card": {
    clickPath: "go/etherfi-card.html",
    sourceUrl: "https://www.ether.fi/cash"
  },
  "Nexo Card": {
    clickPath: "go/nexo-card.html",
    sourceUrl: "https://nexo.com/card"
  },
  "Coinbase Card": {
    clickPath: "go/coinbase-card.html",
    sourceUrl: "https://www.coinbase.com/card"
  },
  RedotPay: {
    clickPath: "go/redotpay.html",
    sourceUrl: "https://www.redotpay.com/"
  },
  "Crypto.com Card": {
    clickPath: "go/crypto-com-card.html",
    sourceUrl:
      "https://help.crypto.com/en/articles/1345769-how-to-apply-for-a-crypto-com-prepaid-debit-card"
  },
  "Bitget Wallet Card": {
    clickPath: "go/bitget-wallet-card.html",
    sourceUrl: "https://web3.bitget.com/en/card"
  },
  "1inch Card": {
    clickPath: "go/1inch-card.html",
    sourceUrl: "https://1inch.io/card/"
  },
  "Wirex Card": {
    clickPath: "go/wirex-card.html",
    sourceUrl: "https://wirexapp.com/help/article/benefits-of-the-wirex-card-explained-1301"
  },
  "Gemini Credit Card": {
    clickPath: "go/gemini-credit-card.html",
    sourceUrl: "https://www.gemini.com/credit-card"
  },
  "Ready Card": {
    clickPath: "go/ready-card.html",
    sourceUrl: "https://ready.cards/"
  },
  "MetaMask Card": {
    clickPath: "go/metamask-card.html",
    sourceUrl: "https://metamask.io/card"
  },
  "Uphold Card": {
    clickPath: "go/uphold-card.html",
    sourceUrl: "https://uphold.com/en-us/products/debit-card"
  },
  "Fold Card": {
    clickPath: "go/fold-card.html",
    sourceUrl: "https://foldapp.com/card"
  }
};

const cards = [
  {
    name: "Jupiter Card",
    logo: "https://www.google.com/s2/favicons?domain=jup.ag&sz=128",
    custody: "Self-custody",
    rewards: "4% base cashback (cap varies by tier), referral tiers up to 10%",
    cashbackCapLow: "NA",
    cashbackCapLowValue: Number.POSITIVE_INFINITY,
    cashbackCapHigh: "NA",
    cashbackCapHighValue: Number.POSITIVE_INFINITY,
    monthlyFee: "$0 (virtual card)",
    monthlyFeeValue: 0,
    fxFee: "1–1.8% on non-USD spend",
    fxFeeValue: 1.8,
    availability: "Global",
    regionTags: ["Global"],
    regions: "Global rollout with country-by-country eligibility and KYC checks.",
    network: "Visa",
    cardForm: "Virtual",
    extras: "USDC-funded card inside Jupiter Global. 1:1 USDC to USD funding and 150M+ merchant acceptance claim."
  },
  {
    name: "Kast Card",
    logo: "https://www.google.com/s2/favicons?domain=kast.xyz&sz=128",
    custody: "Custodial",
    rewards: "2–10%+ KAST Points + 4% $MOVE tokens on all spend (tier-dependent; K Card: 2%, X/Solana: 5%, Gold: 8%, Solid: 10%+)",
    cashbackCapLow: "$80/mo ($MOVE cap, all tiers); KAST Points uncapped",
    cashbackCapLowValue: 80,
    cashbackCapHigh: "$80/mo ($MOVE cap, all tiers); KAST Points uncapped",
    cashbackCapHighValue: 80,
    monthlyFee: "K Card: $20/year; X/Solana Illuma: $1,000/year; Gold: $10,000/year",
    monthlyFeeValue: 1.67,
    fxFee: "0.5–1.75% (region-dependent; 0% promo Apr–Jun 2026)",
    fxFeeValue: 1.75,
    availability: "Global",
    regionTags: ["Global"],
    regions: "170+ countries via Visa. Primary markets: Europe, LATAM, Canada, UAE, APAC. Check signup for your country.",
    network: "Visa",
    cardForm: "Both",
    extras: "0% stablecoin conversion fees. Physical cards free (+ $40 shipping). SOL staking 3.5–21% APY by tier. $MOVE capped at $2,000/mo spend."
  },
  {
    name: "Plasma One",
    logo: "https://www.google.com/s2/favicons?domain=plasma.to&sz=128",
    custody: "Self-custody",
    rewards: "Up to 3–4% cashback in XPL tokens (tiered; exact structure not published)",
    cashbackCapLow: "No cap",
    cashbackCapLowValue: Number.POSITIVE_INFINITY,
    cashbackCapHigh: "No cap",
    cashbackCapHighValue: Number.POSITIVE_INFINITY,
    monthlyFee: "$0",
    monthlyFeeValue: 0,
    fxFee: "No Plasma FX markup; standard Visa network rates apply",
    fxFeeValue: 1.5,
    availability: "Global",
    regionTags: ["Global"],
    regions: "150+ countries via Visa. Priority launch: Middle East, LATAM, Southeast Asia. Staged rollout.",
    network: "Visa",
    cardForm: "Both",
    extras: "USDT-funded on Plasma L1 (EVM-compatible, Bitcoin-anchored). Up to 10%+ APY on holdings. Launched Sep 2025. KYC required."
  },
  {
    name: "Ether.fi Card",
    logo: "https://www.google.com/s2/favicons?domain=ether.fi&sz=128",
    custody: "Self-custody",
    rewards: "Up to 3% cashback (with promo categories sometimes higher)",
    cashbackCapLow: "No cap",
    cashbackCapLowValue: Number.POSITIVE_INFINITY,
    cashbackCapHigh: "No cap",
    cashbackCapHighValue: Number.POSITIVE_INFINITY,
    monthlyFee: "$0",
    monthlyFeeValue: 0,
    fxFee: "~1% (0% on EUR purchases)",
    fxFeeValue: 1,
    availability: "Global",
    regionTags: ["Global"],
    regions: "Broad global support with prohibited-country and restricted U.S.-state lists.",
    network: "Visa",
    cardForm: "Both",
    extras: "Cash card onboarding is restricted in named jurisdictions; physical shipping list is explicitly published."
  },
  {
    name: "Nexo Card",
    logo: "https://www.google.com/s2/favicons?domain=nexo.com&sz=128",
    custody: "Hybrid",
    rewards: "Up to ~2% (NEXO payout dependent)",
    cashbackCapLow: "$50/mo (Base)",
    cashbackCapLowValue: 50,
    cashbackCapHigh: "$200/mo (Platinum)",
    cashbackCapHighValue: 200,
    monthlyFee: "$0",
    monthlyFeeValue: 0,
    fxFee: "0.2% weekday / 0.7% weekend (EEA/UK/CH); higher outside",
    fxFeeValue: 2.5,
    availability: "Global",
    regionTags: ["Global"],
    regions: "Global card usage at Mastercard merchants; issuing eligibility depends on jurisdiction.",
    network: "Mastercard",
    cardForm: "Both",
    extras: "Dual Credit/Debit mode with no monthly, annual, or inactivity card fee listed."
  },
  {
    name: "Coinbase Card",
    logo: "https://www.google.com/s2/favicons?domain=coinbase.com&sz=128",
    custody: "Custodial",
    rewards: "Up to 4% back in Bitcoin (Coinbase One cardholders); rates vary by region and period",
    cashbackCapLow: "No monthly cap",
    cashbackCapLowValue: Number.POSITIVE_INFINITY,
    cashbackCapHigh: "No monthly cap",
    cashbackCapHighValue: Number.POSITIVE_INFINITY,
    monthlyFee: "$0",
    monthlyFeeValue: 0,
    fxFee: "No card FX fee for local/USDC spend; crypto conversion spread may apply",
    fxFeeValue: 2.49,
    availability: "US",
    regionTags: ["US", "EU/UK"],
    regions: "United States plus eligible UK/EU countries listed in Coinbase Card FAQ.",
    network: "Visa",
    cardForm: "Both",
    extras: "Daily spend limit $2,500. Region-specific availability; check the market-specific Coinbase Card help page."
  },
  {
    name: "RedotPay",
    logo: "https://www.google.com/s2/favicons?domain=redotpay.com&sz=128",
    custody: "Custodial",
    rewards: "No cashback program ($5 sign-up bonus)",
    cashbackCapLow: "N/A",
    cashbackCapLowValue: 0,
    cashbackCapHigh: "N/A",
    cashbackCapHighValue: 0,
    monthlyFee: "$0",
    monthlyFeeValue: 0,
    fxFee: "1.2%",
    fxFeeValue: 1.2,
    availability: "Global",
    regionTags: ["Global"],
    regions: "Global usage, with unsupported jurisdictions for registration and card issuance.",
    network: "Visa",
    cardForm: "Both",
    extras: "Virtual card ~$10, physical card ~$100 per help-center documentation. Focuses on high spend limits over rewards."
  },
  {
    name: "Crypto.com Card",
    logo: "https://www.google.com/s2/favicons?domain=crypto.com&sz=128",
    custody: "Custodial",
    rewards: "Level Up program: 1.5% (Basic) to 6% (Private); legacy CRO staking tiers up to 8% being phased out (Nov 2025)",
    cashbackCapLow: "$0 (Midnight Blue, no rewards)",
    cashbackCapLowValue: 0,
    cashbackCapHigh: "No cap published (tier-dependent)",
    cashbackCapHighValue: Number.POSITIVE_INFINITY,
    monthlyFee: "$0 to tier/plan-dependent",
    monthlyFeeValue: 29.99,
    fxFee: "0–2% (tier/limits dependent)",
    fxFeeValue: 2,
    availability: "Global",
    regionTags: ["Global"],
    regions: "100+ markets including US, EU/UK, Canada, Australia, Singapore, Brazil, and LATAM rollout.",
    network: "Visa",
    cardForm: "Both",
    extras: "New Level Up plan tiers: Basic 1.5%, Plus 3.5%, Pro 4.5%, Private 6%. Legacy CRO staking rewards phased out Nov 2025."
  },
  {
    name: "Bitget Wallet Card",
    logo: "https://www.google.com/s2/favicons?domain=bitget.com&sz=128",
    custody: "Self-custody",
    rewards: "Campaign and issuer dependent",
    cashbackCapLow: "NA",
    cashbackCapLowValue: Number.POSITIVE_INFINITY,
    cashbackCapHigh: "NA",
    cashbackCapHighValue: Number.POSITIVE_INFINITY,
    monthlyFee: "$10 one-time activation fee",
    monthlyFeeValue: 0,
    fxFee: "1.7% non-USD/SGD; 0% USD/SGD",
    fxFeeValue: 1.7,
    availability: "APAC",
    regionTags: ["EU/UK", "APAC", "LATAM"],
    regions: "EEA/UK, selected LATAM, selected APAC, and China (issuer-dependent availability).",
    network: "Visa",
    cardForm: "Both",
    extras: "Physical card launched Apr 2026. $10 one-time activation fee. Up to 8% APY on idle USDC. Coverage determined dynamically in-app."
  },
  {
    name: "1inch Card",
    logo: "https://www.google.com/s2/favicons?domain=1inch.io&sz=128",
    custody: "Hybrid",
    rewards: "1% in BTC/USDT or 2% in BXX tokens per spend",
    cashbackCapLow: "~€400/mo (est., single tier)",
    cashbackCapLowValue: 430,
    cashbackCapHigh: "~€400/mo (est., single tier)",
    cashbackCapHighValue: 430,
    monthlyFee: "$0",
    monthlyFeeValue: 0,
    fxFee: "2% card spend + 1.75% conversion (~3.75% total); 0% FX markup",
    fxFeeValue: 3.75,
    availability: "EU/UK",
    regionTags: ["EU/UK"],
    regions: "UK and EEA only (Crypto Life/Baanx). Spend where Mastercard is accepted once active.",
    network: "Mastercard",
    cardForm: "Both",
    extras: "Self-custody until point of spend; fiat balance is custodial. €5,000/mo spend limit. $8,000/day limit. 2% ATM fee."
  },
  {
    name: "Wirex Card",
    logo: "https://www.google.com/s2/favicons?domain=wirexapp.com&sz=128",
    custody: "Custodial",
    rewards: "Plan-dependent Cryptoback and rewards",
    cashbackCapLow: "WXT token cap (varies)",
    cashbackCapLowValue: Number.POSITIVE_INFINITY,
    cashbackCapHigh: "WXT token cap (varies)",
    cashbackCapHighValue: Number.POSITIVE_INFINITY,
    monthlyFee: "$0 to ~$29.99",
    monthlyFeeValue: 29.99,
    fxFee: "0–2%",
    fxFeeValue: 2,
    availability: "Global",
    regionTags: ["Global"],
    regions: "Wirex platform supports 130+ countries; card availability varies by country feature table.",
    network: "Visa",
    cardForm: "Both",
    extras: "Country-level support matrix should be checked before applying due to regional service differences."
  },
  {
    name: "Gemini Credit Card",
    logo: "https://www.google.com/s2/favicons?domain=gemini.com&sz=128",
    custody: "Custodial",
    rewards: "4% gas/transit, 3% dining, 2% groceries, 1% all other (paid in crypto)",
    cashbackCapLow: "~$300/mo (gas/transit 4% cat.)",
    cashbackCapLowValue: 300,
    cashbackCapHigh: "~$300/mo (gas/transit 4% cat.)",
    cashbackCapHighValue: 300,
    monthlyFee: "$0 annual fee",
    monthlyFeeValue: 0,
    fxFee: "0%",
    fxFeeValue: 0,
    availability: "US",
    regionTags: ["US"],
    regions: "United States only (residents in all 50 U.S. states eligible to apply).",
    network: "Mastercard",
    cardForm: "Physical",
    extras: "Issued by WebBank. Crypto rewards paid into Gemini account. 4% gas/transit cap applies to ~$7,500/mo spend."
  },
  {
    name: "Ready Card",
    logo: "https://www.google.com/s2/favicons?domain=ready.cards&sz=128",
    custody: "Self-custody",
    rewards: "Metal: 3% (up to $150/mo), Lite: 0.5% (up to $150/mo)",
    cashbackCapLow: "$150/mo (Lite)",
    cashbackCapLowValue: 150,
    cashbackCapHigh: "$150/mo (Metal)",
    cashbackCapHighValue: 150,
    monthlyFee: "Metal: $120/year, Lite: $0 (+ shipping)",
    monthlyFeeValue: 10,
    fxFee: "Metal: 0%, Lite: 1%",
    fxFeeValue: 1,
    availability: "Global",
    regionTags: ["Global"],
    regions: "Global use where Mastercard is accepted; cashback exclusions apply in specific countries.",
    network: "Mastercard",
    cardForm: "Both",
    extras: "USDC spending model, self-custody posture, tiered structure (Metal vs Lite). ATM: Metal $800/mo free, Lite $200/mo free; 2% above limits."
  },
  {
    name: "MetaMask Card",
    logo: "https://www.google.com/s2/favicons?domain=metamask.io&sz=128",
    custody: "Self-custody",
    rewards: "Virtual: 1% in mUSD; Metal: 3% in mUSD on first $10k/year then 1% after",
    cashbackCapLow: "~$25/mo (Virtual 1% on ~$2.5k/mo spend)",
    cashbackCapLowValue: 25,
    cashbackCapHigh: "$300/year at 3% (~$25/mo equiv.); 1% uncapped above $10k",
    cashbackCapHighValue: 25,
    monthlyFee: "$0 (virtual); $199/year Metal (~$16.58/mo)",
    monthlyFeeValue: 0,
    fxFee: "0% — Mastercard standard conversion only",
    fxFeeValue: 0,
    availability: "US",
    regionTags: ["US", "EU", "Canada", "LATAM"],
    regions: "51 countries: US (excl. Vermont), EU, Canada, and select LATAM countries.",
    network: "Mastercard",
    cardForm: "Both",
    extras: "Rewards paid in mUSD (MetaMask stablecoin). $199/year for Metal tier. Region list in MetaMask support docs."
  },
  {
    name: "Uphold Card",
    logo: "https://www.google.com/s2/favicons?domain=uphold.com&sz=128",
    custody: "Custodial",
    rewards: "US: up to 4–6% XRP (plan-based). UK: GBP rewards on GBP-funded spend",
    cashbackCapLow: "$120/mo (Essential)",
    cashbackCapLowValue: 120,
    cashbackCapHigh: "$300/mo (Elite)",
    cashbackCapHighValue: 300,
    monthlyFee: "Essential: $0; Elite: $99.99/year",
    monthlyFeeValue: 8.33,
    fxFee: "Essential: 1.5%; Elite: 0%",
    fxFeeValue: 1.5,
    availability: "US",
    regionTags: ["US", "UK"],
    regions: "US (49 states; excl. New York and Louisiana) and UK.",
    network: "Visa",
    cardForm: "Both",
    extras: "Issued by Cross River Bank. Plan-based XRP rewards. Essential and Elite tiers with different reward caps and FX fees."
  },
  {
    name: "Fold Card",
    logo: "https://www.google.com/s2/favicons?domain=foldapp.com&sz=128",
    custody: "Custodial",
    rewards: "Debit: variable Bitcoin rewards by category. Credit card (launched Feb 2025): 1.5% (Fold) or 2% (Fold+) unlimited Bitcoin",
    cashbackCapLow: "No cap (debit); no cap (credit 1.5%)",
    cashbackCapLowValue: Number.POSITIVE_INFINITY,
    cashbackCapHigh: "Up to 4% total (credit: 2% base + stacking bonuses)",
    cashbackCapHighValue: Number.POSITIVE_INFINITY,
    monthlyFee: "$0; Fold+ membership optional (paid)",
    monthlyFeeValue: 0,
    fxFee: "Plan-dependent (see fee schedule)",
    fxFeeValue: Number.POSITIVE_INFINITY,
    availability: "US",
    regionTags: ["US"],
    regions: "United States only (50 states + DC), with international-use restrictions list.",
    network: "Visa",
    cardForm: "Both",
    extras: "Bitcoin Rewards Credit Card launched Feb 2025 alongside existing debit card. BitGo-insured BTC custody. US-only issuance."
  }
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");
const resultSummary = document.getElementById("resultsSummary");
const lastUpdated = document.getElementById("lastUpdated");
const headers = document.querySelectorAll("th[data-sort-key]");
const tabButtons = document.querySelectorAll(".tab-btn[data-custody]");

const correctionForm = document.getElementById("correctionForm");
const correctionHelp = document.getElementById("formHelp");
const cardSubmissionForm = document.getElementById("cardSubmissionForm");
const cardSubmissionHelp = document.getElementById("cardSubmissionHelp");

let sortState = { key: "name", direction: "asc" };
let activeCustody = "all";

function badgeClassForCustody(custody) {
  if (custody === "Custodial") return "badge badge-custodial";
  if (custody === "Hybrid") return "badge badge-hybrid";
  return "badge badge-self";
}

function regionTagClass(region) {
  const r = region.toLowerCase();
  if (r === "global") return "tag-pill tag-region-global";
  if (r === "us") return "tag-pill tag-region-us";
  if (r.startsWith("eu")) return "tag-pill tag-region-eu";
  if (r === "apac") return "tag-pill tag-region-apac";
  if (r === "latam") return "tag-pill tag-region-latam";
  if (r === "uk" || r === "canada") return "tag-pill tag-region-uk";
  return "tag-pill tag-region";
}

function fxFeeTagClass(fxFeeValue) {
  if (fxFeeValue === 0) return "tag-pill tag-fee-free";
  if (fxFeeValue <= 1) return "tag-pill tag-fee-low";
  if (fxFeeValue <= 2) return "tag-pill tag-fee-med";
  if (fxFeeValue === Number.POSITIVE_INFINITY) return "tag-pill tag-fee-na";
  return "tag-pill tag-fee-high";
}

function fxFeeTagLabel(fxFeeValue) {
  if (fxFeeValue === 0) return "0% FX";
  if (fxFeeValue <= 1) return "Low FX";
  if (fxFeeValue <= 2) return "Med FX";
  if (fxFeeValue === Number.POSITIVE_INFINITY) return "FX varies";
  return "High FX";
}

function makeCardLink(cardName) {
  const linkDetails = cardLinks[cardName];
  if (!linkDetails) return document.createTextNode(cardName);
  const link = document.createElement("a");
  link.className = "card-link";
  link.href = linkDetails.clickPath;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = cardName;
  link.title = `Official card page: ${linkDetails.sourceUrl}`;
  return link;
}

function makePill(text, className) {
  const span = document.createElement("span");
  span.className = className;
  span.textContent = text;
  return span;
}

function makeTagList(items, classResolver) {
  const div = document.createElement("div");
  div.className = "tag-list";
  items.forEach((item) => div.appendChild(makePill(item, classResolver(item))));
  return div;
}

function getSortableValue(item, key) {
  switch (key) {
    case "cashbackCapLow":  return item.cashbackCapLowValue  ?? Number.POSITIVE_INFINITY;
    case "cashbackCapHigh": return item.cashbackCapHighValue ?? Number.POSITIVE_INFINITY;
    case "monthlyFee":      return item.monthlyFeeValue      ?? Number.POSITIVE_INFINITY;
    case "fxFee":           return item.fxFeeValue           ?? Number.POSITIVE_INFINITY;
    default: return item[key] == null ? "" : String(item[key]).toLowerCase();
  }
}

function getFilteredCards() {
  const query = searchInput.value.trim().toLowerCase();
  const regionChoice = regionFilter.value;

  return cards.filter((card) => {
    const searchableText = [
      card.name, card.custody, card.rewards, card.cashbackCapLow, card.cashbackCapHigh,
      card.monthlyFee, card.fxFee, card.availability, card.regions, card.extras,
      card.network, card.cardForm, ...(card.regionTags || [])
    ].join(" ").toLowerCase();

    const matchesQuery = query.length === 0 || searchableText.includes(query);
    const matchesCustody = activeCustody === "all" || card.custody === activeCustody;
    const regionText = `${card.availability} ${card.regions} ${(card.regionTags || []).join(" ")}`.toLowerCase();
    const matchesRegion = regionChoice === "all" || regionText.includes(regionChoice.toLowerCase());

    return matchesQuery && matchesCustody && matchesRegion;
  });
}

function compareValues(a, b) {
  if (a === b) return 0;
  if (typeof a === "number" && typeof b === "number") {
    if (isNaN(a)) return 1;
    if (isNaN(b)) return -1;
    return a < b ? -1 : 1;
  }
  return a < b ? -1 : 1;
}

function sortCards(list) {
  const sorted = [...list];
  sorted.sort((a, b) => {
    const cmp = compareValues(getSortableValue(a, sortState.key), getSortableValue(b, sortState.key));
    return sortState.direction === "asc" ? cmp : -cmp;
  });
  return sorted;
}

function setSummary(count, total) {
  resultSummary.textContent = `Showing ${count} of ${total} cards. Data shown is estimated and may change.`;
}

function renderRows(rows) {
  tableBody.innerHTML = "";

  if (rows.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 9;
    td.textContent = "No cards match your filters yet.";
    tr.appendChild(td);
    tableBody.appendChild(tr);
    return;
  }

  rows.forEach((card) => {
    const tr = document.createElement("tr");

    // Name cell: logo + link + network + cardForm tags
    const nameTd = document.createElement("td");
    nameTd.className = "card-name-cell";

    const nameWrapper = document.createElement("div");
    nameWrapper.className = "card-name-wrapper";

    if (card.logo) {
      const img = document.createElement("img");
      img.src = card.logo;
      img.className = "card-logo";
      img.alt = "";
      img.width = 30;
      img.height = 30;
      img.onerror = () => { img.style.display = "none"; };
      nameWrapper.appendChild(img);
    }

    const nameContent = document.createElement("div");
    nameContent.className = "card-name-content";
    nameContent.appendChild(makeCardLink(card.name));
    const metaTags = document.createElement("div");
    metaTags.className = "tag-list";
    const networkClass = card.network === "Visa" ? "tag-pill tag-network-visa" : "tag-pill tag-network-mc";
    metaTags.appendChild(makePill(card.network, networkClass));
    const formClass = card.cardForm === "Virtual" ? "tag-pill tag-virtual" : "tag-pill tag-physical";
    metaTags.appendChild(makePill(card.cardForm, formClass));
    nameContent.appendChild(metaTags);
    nameWrapper.appendChild(nameContent);
    nameTd.appendChild(nameWrapper);

    // Custody cell
    const custodyTd = document.createElement("td");
    custodyTd.appendChild(makePill(card.custody, badgeClassForCustody(card.custody)));

    // Rewards cell
    const rewardsTd = document.createElement("td");
    rewardsTd.textContent = card.rewards;

    // Cashback cap cells
    const cashbackCapLowTd = document.createElement("td");
    cashbackCapLowTd.textContent = card.cashbackCapLow;
    const cashbackCapHighTd = document.createElement("td");
    cashbackCapHighTd.textContent = card.cashbackCapHigh;

    // Monthly fee cell
    const monthlyFeeTd = document.createElement("td");
    monthlyFeeTd.textContent = card.monthlyFee;

    // FX fee cell: text + indicator tag
    const fxFeeTd = document.createElement("td");
    fxFeeTd.textContent = card.fxFee;
    const fxTag = document.createElement("div");
    fxTag.className = "tag-list";
    fxTag.style.marginTop = "0.3rem";
    fxTag.appendChild(makePill(fxFeeTagLabel(card.fxFeeValue), fxFeeTagClass(card.fxFeeValue)));
    fxFeeTd.appendChild(fxTag);

    // Regions cell: tag pills
    const availabilityTd = document.createElement("td");
    const regionTags = card.regionTags || [card.availability];
    availabilityTd.appendChild(makeTagList(regionTags, regionTagClass));

    // Extras cell
    const extrasTd = document.createElement("td");
    extrasTd.textContent = card.extras;

    tr.appendChild(nameTd);
    tr.appendChild(custodyTd);
    tr.appendChild(rewardsTd);
    tr.appendChild(cashbackCapLowTd);
    tr.appendChild(cashbackCapHighTd);
    tr.appendChild(monthlyFeeTd);
    tr.appendChild(fxFeeTd);
    tr.appendChild(availabilityTd);
    tr.appendChild(extrasTd);

    tableBody.appendChild(tr);
  });
}

function updateTable() {
  const filtered = getFilteredCards();
  const sorted = sortCards(filtered);
  renderRows(sorted);
  setSummary(filtered.length, cards.length);
}

function setSortIndicators() {
  headers.forEach((header) => {
    const key = header.dataset.sortKey;
    const isActive = key === sortState.key;
    const indicator = isActive ? (sortState.direction === "asc" ? " \u2191" : " \u2193") : "";
    const plainText = header.textContent.replace(/[\u2191\u2193]/g, "").trim();
    header.textContent = `${plainText}${indicator}`;
    header.setAttribute("aria-sort", isActive ? (sortState.direction === "asc" ? "ascending" : "descending") : "none");
  });
}

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const key = header.dataset.sortKey;
    if (sortState.key === key) {
      sortState.direction = sortState.direction === "asc" ? "desc" : "asc";
    } else {
      sortState.key = key;
      sortState.direction = "asc";
    }
    setSortIndicators();
    updateTable();
  });
});

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeCustody = btn.dataset.custody;
    tabButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
    updateTable();
  });
});

[searchInput, regionFilter].forEach((el) => {
  el.addEventListener("input", updateTable);
  el.addEventListener("change", updateTable);
});

correctionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!correctionForm.checkValidity()) {
    correctionHelp.classList.add("error");
    correctionHelp.textContent = "Please fill all required fields before sending.";
    correctionForm.reportValidity();
    return;
  }

  const nameValue = document.getElementById("name").value.trim() || "Not provided";
  const emailValue = document.getElementById("email").value.trim();
  const cardValue = document.getElementById("card").value.trim();
  const detailsValue = document.getElementById("details").value.trim();

  const subject = encodeURIComponent(`Correction for ${cardValue} on Cryptocardlist`);
  const body = encodeURIComponent(
    [
      "Hi, I found a card data update:",
      "",
      `Name: ${nameValue}`,
      `Email: ${emailValue}`,
      `Card: ${cardValue}`,
      "",
      "Details:",
      detailsValue,
      "",
      "Source links:",
      "- "
    ].join("\n")
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  correctionHelp.classList.remove("error");
  correctionHelp.textContent = "Thanks. Your email app should open with the correction draft.";
});

cardSubmissionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!cardSubmissionForm.checkValidity()) {
    cardSubmissionHelp.classList.add("error");
    cardSubmissionHelp.textContent = "Please fill all required fields before sending.";
    cardSubmissionForm.reportValidity();
    return;
  }

  const submitterName = document.getElementById("submitterName").value.trim() || "Not provided";
  const submitterEmail = document.getElementById("submitterEmail").value.trim();
  const submitCardName = document.getElementById("submitCardName").value.trim();
  const submitProvider = document.getElementById("submitProvider").value.trim();
  const submitRegion = document.getElementById("submitRegion").value.trim();
  const submitCustody = document.getElementById("submitCustody").value;
  const submitRewards = document.getElementById("submitRewards").value.trim();
  const submitMonthlyCap = document.getElementById("submitMonthlyCap").value.trim() || "Not provided";
  const submitFees = document.getElementById("submitFees").value.trim();
  const submitSources = document.getElementById("submitSources").value.trim() || "Not provided";
  const submitNotes = document.getElementById("submitNotes").value.trim();

  const subject = encodeURIComponent(`New card submission: ${submitCardName}`);
  const body = encodeURIComponent(
    [
      "Hi, I want to submit a crypto card for review:",
      "",
      `Name: ${submitterName}`,
      `Email: ${submitterEmail}`,
      "",
      `Card: ${submitCardName}`,
      `Provider: ${submitProvider}`,
      `Region(s): ${submitRegion}`,
      `Custody model: ${submitCustody}`,
      `Rewards summary: ${submitRewards}`,
      `Monthly cashback cap: ${submitMonthlyCap}`,
      `Fees summary: ${submitFees}`,
      `Source links: ${submitSources}`,
      "",
      "Notes:",
      submitNotes
    ].join("\n")
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  cardSubmissionHelp.classList.remove("error");
  cardSubmissionHelp.textContent = "Thanks. Your email app should open with the new-card draft.";
});

lastUpdated.textContent = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric"
});

setSortIndicators();
updateTable();
