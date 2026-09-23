/**
 * data.js - Dữ liệu nền tảng, các chỉ số gốc và bảng tham chiếu
 */
const SIMULATION_DATA = {
    companyName: "Nexus",
    baseCountry: "Australia (Úc)",
    activeMarkets: ["Australia"],
    potentialMarkets: [
        "Australia (Úc)",
        "Singapore (Singapore)",
        "Japan (Nhật Bản)",
        "South Korea (Hàn Quốc)",
        "China (Trung Quốc)",
        "India (Ấn Độ)",
        "Hong Kong (Hồng Kông)"
    ],
    financialSummary: {
        y2024: {
            revenue: 2542916,
            cogs: 1309042,
            grossMargin: 1162326,
            grossMarginPct: 46.0,
            operatingExpenses: 814644,
            operatingProfit: 347682,
            netProfit: 179424,
            roe: 11.7,
            cash: 8702,
            overdraft: 0,
            longTermLoan: 632264,
            unitsSold: 166060,
            defectCount: 30770,
            nonQualityCost: 43937
        },
        y2025: {
            revenue: 2519418,
            cogs: 1492164,
            grossMargin: 945948,
            grossMarginPct: 38.0,
            operatingExpenses: 800791,
            operatingProfit: 145157,
            netProfit: -8088,
            roe: -0.6,
            cash: 0,
            overdraft: 7740,
            longTermLoan: 462625,
            unitsSold: 165209,
            defectCount: 32509,
            nonQualityCost: 53509
        }
    },
    referencePrices: [
        { market: "Australia (Úc)", ties: 12, shirts: 23, accessories: 32 },
        { market: "Singapore", ties: 10, shirts: 21, accessories: 28 },
        { market: "Japan (Nhật Bản)", ties: 14, shirts: 24, accessories: 35 },
        { market: "South Korea (Hàn Quốc)", ties: 18, shirts: 26, accessories: 34 },
        { market: "China (Trung Quốc)", ties: 13, shirts: 25, accessories: 30 },
        { market: "India (Ấn Độ)", ties: 11, shirts: 21, accessories: 26 },
        { market: "Hong Kong", ties: 9, shirts: 19, accessories: 24 }
    ],
    factoryCosts: [
        { country: "Australia (Úc)", acquisition: "2.240.000 AUD", setup: "3.584.000 AUD", total: "5.824.000 AUD" },
        { country: "China (Trung Quốc)", acquisition: "1.520.000 AUD", setup: "352.000 AUD", total: "1.872.000 AUD" },
        { country: "Vietnam (Việt Nam)", acquisition: "1.184.000 AUD", setup: "304.000 AUD", total: "1.488.000 AUD" },
        { country: "Bangladesh", acquisition: "1.000.000 AUD", setup: "296.000 AUD", total: "1.296.000 AUD" }
    ],
    rawMaterialUnitCosts: {
        highEnd: { ties: 1.3, shirts: 2.1, accessories: 1.9 },
        standard: { ties: 0.9, shirts: 1.5, accessories: 1.4 }
    }
};
