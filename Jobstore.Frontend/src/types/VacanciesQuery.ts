export interface VacanciesQuery {
    vacancyType?: number,
    orderBy?: VacancyOrderOptions,
    order?: string

}

export type VacancyOrderOptions = 'Title' | 'CompanyName' | 'SalaryValue' | 'CreatedDate';