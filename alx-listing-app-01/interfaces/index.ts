// interfaces/index.ts

export interface ButtonProps {
    title: string;
    styles: string;
}

export interface CardProps {
    image: string;
    name: string;
    price: number;
    rating: number;
}

export interface PropertyProps {
    id: number;
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    description: string;
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string;
    };
    reviews: {
        name: string;
        rating: number;
        comment: string;
        avatar: string;
    }[];
    image: string;
    discount: string;
}