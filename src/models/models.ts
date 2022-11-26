export interface Country {
    id: string;
    name: string;
}

export interface City {
    id: string;
    name: string;
    currency: string;
    language: string;
    countryId: string;
    country?: Country;
}

export interface Company {
    id: string;
    name: string;
    shortName?: string;
}

export interface BusTicketInfo {
    id: string;
    number: string;
}

export interface FlightTicketInfo {
    id: string;
    flightNumber: string;
    classType: string;
}

export interface RailwayTicketInfo {
    id: string;
    trainNumber: string;
    carriageNumber: number;
    classType: string;
    carriageType: string;
}

export interface RegisterUser{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface LoginUser{
    email: string;
    password: string;
}

export interface User{
    role: string
}

export interface Ticket {
    id: string;
    departureTime: Date;
    arrivalTime: Date;
    place: string;
    price: string;
    ticketType: string;
    fromId: string;
    toId: string;
    companyId: string;
    busTicketInfoId?: string;
    flightTicketInfoId: string;
    railwayTicketInfoId?: string;
    company: Company;
    from: City;
    to: City;
    busTicketInfo?: BusTicketInfo;
    flightTicketInfo: FlightTicketInfo;
    railwayTicketInfo?: RailwayTicketInfo;
}

export interface SearchParams {
    fromCity: CityProps
    toCity: CityProps
    dDate?: Date | null
    rDate?: Date | null
    type?: string
}

export interface CityProps {
    id?: string;
    name: string;
}