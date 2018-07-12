// L'interface définit les propriétés (typées) d'un objet
export interface Book {
	id: number;
	author: string;
	title: string;
	publicationDate: number;
	available: boolean;
	nbPages: number;
	nbRent: number;
}