export default interface CreateVacancyModel {
    id: number
    title: string,
    description: string,
    companyName: string,
    salaryValue: number,
    salaryCurrency: string,
    typeId: number
}