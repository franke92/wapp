export interface IMessage {
    text: string;
    type: "error" | "success" | "warning"
}

export interface IWeatherItem {
    zipcode: string,
    city: string,
    condition: string,
    currentTemp: string,
    tempMax: string,
    tempMin: string
}