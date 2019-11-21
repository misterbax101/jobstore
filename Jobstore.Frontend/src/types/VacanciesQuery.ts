export interface VacanciesQuery {
    vacancyType?: number,
    orderBy?: VacancyOrderOptions,
    desc?: boolean

}

export type VacancyOrderOptions = 'Title' | 'CompanyName' | 'SalaryValue' | 'CreatedDate';