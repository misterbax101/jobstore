export interface CreateVacancyModel {
    title: string,
    description: string,
    companyName: string,
    salaryValue?: number,
    salaryCurrency: string,
    typeId: number
}