import {ExtractedDataType} from "../types/extracted.data.type";

export function extractPriceData(apiResponse): ExtractedDataType {
    return apiResponse.data.map(item => {
        return {
            id: item.id,
            name: item.name,
            symbol: item.symbol,
            rank: Number(item.rank),
            price: Number(item.priceUsd),
        };
    });
}