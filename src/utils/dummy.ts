 
import moment from "moment";

const p = "/images/indexPage";
const u = "/indexPage";
const pc = "/payment";
const c = "/images/categories";
const pr = "/product";
const t = Date.now();
export const navLinks = [
  {
    url: "/categories/mobile-top-up",
    name: "Mobile Top Up",
  },
  // {
  //     url:'/categories?type=Prepaid Phone',
  //     name:'Blog'
  // },
  {
    url: "/categories/giftcard",
    name: "Gift Cards",
  },

  {
    url: "/categories/bill-payment",
    name: "Pay Bills",
  },
];
export const navLinks2 = [
  {
    imageLink: null,
    name: null,
    width: 20,
    height: 20,
  },
  {
    imageLink: `${p}/globe.svg`,
    name: "English",
    width: 27,
    height: 30,
  },
  {
    imageLink: `${p}/help.svg`,
    name: "Help",
    width: 23,
    height: 35,
  },
];

export const popularProducts = [
  {
    imageLink: `indexPage/debitCard.svg`,
  },
  {
    imageLink: `indexPage/eneba.svg`,
  },
  {
    imageLink: `indexPage/freefire.svg`,
  },
  {
    imageLink: `indexPage/hotelgift.svg`,
  },
  {
    imageLink: `indexPage/freefire.svg`,
  },
  {
    imageLink: `indexPage/bobZoom.png`,
  },
  {
    imageLink: `indexPage/xBox.svg`,
  },
  {
    imageLink: `indexPage/cvs.svg`,
  },
  {
    imageLink: `indexPage/hotelgift.svg`,
  },
  {
    imageLink: `indexPage/freefire.svg`,
  },
  {
    imageLink: `indexPage/debitCard.svg`,
  },
];
export const newProducts = [
  {
    imageLink: `indexPage/bobZoom.png`,
  },
  {
    imageLink: `indexPage/xBox.svg`,
  },
  {
    imageLink: `indexPage/cvs.svg`,
  },
  {
    imageLink: `indexPage/hotelgift.svg`,
  },
  {
    imageLink: `indexPage/freefire.svg`,
  },
  {
    imageLink: `indexPage/debitCard.svg`,
  },
  {
    imageLink: `indexPage/eneba.svg`,
  },
  {
    imageLink: `indexPage/freefire.svg`,
  },
  {
    imageLink: `indexPage/hotelgift.svg`,
  },
  {
    imageLink: `indexPage/freefire.svg`,
  },
];

export const giftCard = [
  {
    name: `USD GIFT CARD`,
    currency: "United States Dollar",
    imageLink: `${u}/NGN.svg`,
  },
  {
    name: `GBP GIFT CARD`,
    currency: "British Pound Sterling",
    imageLink: `${u}/USD.svg`,
  },
  {
    name: `CAD GIFT CARD`,
    currency: "Canadian Dollar",
    imageLink: `${u}/GBP.svg`,
  },
  {
    name: `NGN GIFT CARD`,
    currency: "Nigerian Naira",
    imageLink: `${u}/NGN.svg`,
  },

  {
    name: `GBP GIFT CARD`,
    currency: "British Pound Sterling",
    imageLink: `${u}/USD.svg`,
  },
  {
    name: `CAD GIFT CARD`,
    currency: "Canadian Dollar",
    imageLink: `${u}/GBP.svg`,
  },
  {
    name: `NGN GIFT CARD`,
    currency: "Nigerian Naira",
    imageLink: `${u}/NGN.svg`,
  },
];
export const promotionsDetails = [
  // {
  //     imageLink:`${p}/100pTop-up.svg`,
  //     title:`New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange`,
  //    description:'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
  //    author:"Jennia Peris",
  //     date:moment(t).format('dd/mm/yyyy'),
  //     time:moment(t).startOf('hour').fromNow(),
  // },

  {
    imageLink: `${u}/01.svg`,
  },
  {
    imageLink: `${u}/02.svg`,
  },
  {
    imageLink: `${u}/03.svg`,
  },
  {
    imageLink: `${u}/04.svg`,
  },
  {
    imageLink: `${u}/03.svg`,
  },
  {
    imageLink: `${u}/02.svg`,
  },
  {
    imageLink: `${u}/04.svg`,
  },
];

export const categoryCards = [
  {
    imageLink: `${u}/fashion.svg`,
    name: "Fashion",
  },
  {
    imageLink: `${u}/gaming.svg`,
    name: "Gaming",
  },
  {
    imageLink: `${u}/stayConnected.svg`,
    name: "Stay Connected",
  },
  {
    imageLink: `${u}/food.svg`,
    name: "Food",
  },
  {
    imageLink: `${u}/travel.svg`,
    name: "Travel",
  },
  {
    imageLink: `${u}/entertainment.svg`,
    name: "Entertainment",
  },
  {
    imageLink: `${u}/retails.svg`,
    name: "Retails",
  },
  {
    imageLink: `${u}/globalConnectivity.svg`,
    name: "Global Connectivity",
  },
];

export const blockChainList = [
  {
    imageLink: `${u}/doge.svg`,
  },
  {
    imageLink: `${u}/tron.svg`,
  },
  {
    imageLink: `${u}/tether.svg`,
  },
  {
    imageLink: `${u}/liteCoin.svg`,
  },
  {
    imageLink: `${u}/solana.svg`,
  },
  {
    imageLink: `${u}/bitcoin.svg`,
  },
  {
    imageLink: `${u}/ethereum.svg`,
  },
  {
    imageLink: `${u}/polygon.svg`,
  },

  {
    imageLink: `${u}/tether.svg`,
  },
  {
    imageLink: `${u}/liteCoin.svg`,
  },
  {
    imageLink: `${u}/solana.svg`,
  },
  {
    imageLink: `${u}/bitcoin.svg`,
  },
];

export const blogCard = [
  {
    imageLink: `${u}/blog1.svg`,
    title: "New Switchive",
  },
  {
    imageLink: `${u}/blog2.svg`,
    title: "Block",
  },
  {
    imageLink: `${u}/blog3.svg`,
    title: "Cypto Space ",
  },
  {
    imageLink: `${u}/blog2.svg`,
    title: "Etherum Evolution",
  },
  {
    imageLink: `${u}/blog1.svg`,
    title: "P2P Market Chain",
  },
];

export const companyFooter = [
  "About Us",
  "Terms of Use",
  "Privacy Policy",
  "Disclaimer",
];
export const businessFooter = ["Prime", "Custody", "Asset Hub", "Commerce"];
export const exchangeFooter = [
  "Exchange Home",
  "Margin Trading",
  "Derivatives Trading",
  "Trading Arena",
];
export const resourceFooter = [
  "Prices",
  "Site Widgets",
  "Tax",
  "Blog",
  "Research",
];

export const categories = [
  "Top Products",
  "Food",
  "Sports",
  "Travel",
  "Bitcoin",
  "Gaming",
  "Groceries",
  "Clothing",
  "Streaming",
  "Electronics",
  "Restaurants",
  "Mobile Phone",
  "Home Goods",
  "Entertainment",
  "Gift Card Deals",
  "Prepaid Phone",
];

export const topProduct = [
  {
    imageLink: `${c}/c1.svg`,
    title: "CoinGate",
    id: 1,
  },
  {
    imageLink: `${c}/c2.svg`,
    title: "Skype",
    id: 2,
  },
  {
    imageLink: `${c}/c3.svg`,
    title: "Sony PlayStation",
    id: 3,
  },
  {
    imageLink: `${c}/c4.svg`,
    title: "App Store",
    id: 4,
  },
  {
    imageLink: `${c}/c25.svg`,
    title: "Eneba",
    id: 5,
  },
  {
    imageLink: `${c}/c28.svg`,
    title: "Diccord Nitro",
    id: 6,
  },
  {
    imageLink: `${c}/c26.svg`,
    title: "NetFlix",
    id: 7,
  },
  {
    imageLink: `${c}/c27.svg`,
    title: "Blizzard",
    id: 8,
  },
  {
    imageLink: `${c}/c06.svg`,
    title: "Macy’s",
    id: 9,
  },
  {
    imageLink: `${c}/c14.svg`,
    title: "Primark",
    id: 10,
  },
  {
    imageLink: `${c}/c20.svg`,
    title: "Zappos",
    id: 11,
  },
  {
    imageLink: `${c}/c22.svg`,
    title: "River Island",
    id: 12,
  },
  {
    imageLink: `${c}/c1.svg`,
    title: "CoinGate",
    id: 13,
  },
  {
    imageLink: `${c}/c2.svg`,
    title: "Skype",
    id: 14,
  },
  {
    imageLink: `${c}/c3.svg`,
    title: "Sony PlayStation",
    id: 15,
  },
  {
    imageLink: `${c}/c4.svg`,
    title: "App Store",
    id: 16,
  },
  {
    imageLink: `${c}/c25.svg`,
    title: "Eneba",
    id: 17,
  },
  {
    imageLink: `${c}/c28.svg`,
    title: "Diccord Nitro",
    id: 18,
  },
  {
    imageLink: `${c}/c26.svg`,
    title: "NetFlix",
    id: 19,
  },
  {
    imageLink: `${c}/c27.svg`,
    title: "Blizzard",
    id: 20,
  },
  {
    imageLink: `${c}/c06.svg`,
    title: "Macy’s",
    id: 21,
  },
  {
    imageLink: `${c}/c14.svg`,
    title: "Primark",
    id: 22,
  },
  {
    imageLink: `${c}/c20.svg`,
    title: "Zappos",
    id: 23,
  },
  {
    imageLink: `${c}/c22.svg`,
    title: "River Island",
    id: 24,
  },
  {
    imageLink: `${c}/c1.svg`,
    title: "CoinGate",
    id: 25,
  },
  {
    imageLink: `${c}/c2.svg`,
    title: "Skype",
    id: 26,
  },
  {
    imageLink: `${c}/c3.svg`,
    title: "Sony PlayStation",
    id: 27,
  },
  {
    imageLink: `${c}/c4.svg`,
    title: "App Store",
    id: 28,
  },
  {
    imageLink: `${c}/c25.svg`,
    title: "Eneba",
    id: 29,
  },
  {
    imageLink: `${c}/c28.svg`,
    title: "Diccord Nitro",
    id: 30,
  },
  {
    imageLink: `${c}/c26.svg`,
    title: "NetFlix",
    id: 31,
  },
  {
    imageLink: `${c}/c27.svg`,
    title: "Blizzard",
    id: 32,
  },
  {
    imageLink: `${c}/c06.svg`,
    title: "Macy’s",
    id: 33,
  },
  {
    imageLink: `${c}/c14.svg`,
    title: "Primark",
    id: 34,
  },
  {
    imageLink: `${c}/c20.svg`,
    title: "Zappos",
    id: 35,
  },
  {
    imageLink: `${c}/c22.svg`,
    title: "River Island",
    id: 36,
  },
];

export const faq = [
  {
    title: "FAQ",
    url: "/#faq",
    imageLink: `${c}/faq.svg`,
  },
  {
    title: "How it works",
    url: "/#faq",
    imageLink: `${c}/question-mark.svg`,
  },
  {
    title: "Blog",
    url: "/#faq",
    imageLink: `${c}/blog.svg`,
  },
];

export const reviewsListdummy = [
  {
    imageLink: `${pr}/user2.svg`,
    name: "John Smith",
    review: 5,
    description: "I absolutely love it!",
    date: moment().format("DD/MM/yyyy"),
  },
  {
    imageLink: `${pr}/user1.svg`,
    name: "Jenny Macroom",
    review: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    date: moment().format("DD/MM/yyyy"),
  },

  {
    imageLink: `${pr}/user1.svg`,
    name: "Jane Smith",
    review: 3,
    description:
      "I had problem with puchasing it before buh i thing they have fixed it ",
    date: moment().format("DD/MM/yyyy"),
  },
  {
    imageLink: `${pr}/user1.svg`,
    name: "Jane Smith",
    review: 5,
    description: "I absolutely love it!",
    date: moment().format("DD/MM/yyyy"),
  },
];

export const desText = {
  text1: {
    title: "Description",
    body1: `Description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    body2: `Description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    body3: `Description is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  text2: {
    title: "How To Redeem",
    body1: `How To Redeem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    body2: `How To Redeem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    body3: `How To Redeem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  text3: {
    title: "T&C",
    body1: `T&C is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    body2: `T&C is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    body3: `T&C is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
};

export const cryptoPayment = [
  {
    imageLink: `${pc}/BINANCE PAY.svg`,
    name: "BINANCE PAY",
  },
  {
    imageLink: `${pc}/LTC.svg`,
    name: "LTC",
  },
  {
    imageLink: `${pc}/BTC.svg`,
    name: "BTC",
  },
  {
    imageLink: `${pc}/XRP.svg`,
    name: "XRP",
  },
  {
    imageLink: `${pc}/DOGE.svg`,
    name: "DOGE",
  },
  {
    imageLink: `${pc}/TRX.svg`,
    name: "TRX",
  },
  {
    imageLink: `${pc}/ETH.svg`,
    name: "ETH",
  },
  {
    imageLink: `${pc}/MATIC.svg`,
    name: "MATIC",
  },
  {
    imageLink: `${pc}/BSC.svg`,
    name: "BSC",
  },
  {
    imageLink: `${pc}/SOL.svg`,
    name: "SOL",
  },
  {
    imageLink: `${pc}/FTM.svg`,
    name: "FTM",
  },
  {
    imageLink: `${pc}/GNO.svg`,
    name: "GNO",
  },
  {
    imageLink: `${pc}/AVAX.svg`,
    name: "AVAX",
  },
  {
    imageLink: `${pc}/ARB.svg`,
    name: "ARB",
  },
  {
    imageLink: `${pc}/OP.svg`,
    name: "OP",
  },
  {
    imageLink: `${pc}/BASE.svg`,
    name: "BASE",
  },
];

export const list = [
  500, 1000, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 7000, 10000, 15000,
  20000, 50000,
];
