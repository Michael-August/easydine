export interface IResturant {
    id: number,
    name: string,
    rating: number,
    available_times: Array<string>,
    no_of_book: number,
    rest_image: string,
    price_range: string
    location: {
        state: string,
        city: string,
        address: string
    }
}
