export interface BookResponse {
  data: Book[];
  meta: Meta;
}

export interface Book {
  id: number;
  attributes: Attributes;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Attributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: string;
  genre: string;
}
